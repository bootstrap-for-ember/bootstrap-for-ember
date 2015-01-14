Showcase.ShowComponentsModalController = Ember.Controller.extend(
    message: 'Welcome to Bootstrap for Ember..!'
    loadingState: null
    modalInstance: null

    #Footer buttons meta data
    myModalButtons: [
        Ember.Object.create({title: 'Submit', clicked:"submit"})
        Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'})
    ]

    manualButtons: [
        Ember.Object.create({title: 'Submit', clicked:"submitManual"})
        Ember.Object.create({title: 'Cancel', dismiss: 'modal'})
    ]

    loadingManualButtons: [
        Ember.Object.create({title: 'Submit', clicked:"submitLoadingManual", loadingText:"Saving..."})
        Ember.Object.create({title: 'Cancel', dismiss: 'modal'})
    ] 

    actions:
        #Submit the modal
        submit: ->
            #Send a notification upon success submission
            Bootstrap.NM.push('Successfully submitted modal', 'success')
            #Hide the modal programatically
            Bootstrap.ModalManager.hide('myModal')

        #Cancel the modal, we don't need to hide the model manually because we set {..., dismiss: 'modal'} on the button meta data
        cancel: ->
            Bootstrap.NM.push('Modal was cancelled', 'info')

        #Show the modal
        show: ->
            Bootstrap.ModalManager.show('myModal')

        #Close (destroys) a programatically created modal
        submitManual: ->
            Bootstrap.NM.push('Modal destroyed!', 'success')
            Bootstrap.ModalManager.close('manualModal')

        submitLoadingManual: ->
            Ember.set(@modalInstance, 'loadingState', 'loading')
            Ember.run.later(() =>
                Ember.set(@modalInstance, 'loadingState', 'success')
                Ember.run.later(() =>
                    Ember.set(@modalInstance, 'loadingState', null)                
                , 2000)
            , 2000)

        createModalProgramatically: ->
            body = Ember.View.extend(
                template: Ember.Handlebars.compile('This is a programatic ')
            )

            Bootstrap.ModalManager.open('manualModal', 'Hello', 'demo-template', @manualButtons, @)

        createLoadingModalProgramatically: ->
            body = Ember.View.extend(
                template: Ember.Handlebars.compile('This is a programatic ')
            )

            @set 'modalInstance', Bootstrap.ModalManager.open('manualModal', 'Hello', 'demo-template', @loadingManualButtons, @)

        confirm: ->
            Bootstrap.ModalManager.confirm(@);

        modalConfirmed: ->
            Bootstrap.NM.push('Confirmed!', 'success')

        modalCanceled: ->
            Bootstrap.NM.push('Cancelled!', 'info')

)