Bootstrap.ItemPaneView = Ember.View.extend(
    templateName: 'views/item-pane'

    corrItem: (->
        if @get('parentView').get('corrItemsView')?
            for view in @get('parentView').get('corrItemsView')._childViews
                return view if view.content is @get('content')
    ).property('parentView.corrItemsView')

    isVisible: (->
        @get('corrItem')?.get('isActive')
    ).property('corrItem.isActive')

    controller: (->
        controller = @get('parentView.controller')
        if @get('content.controller')
            itemController = @get('container').lookup("controller:#{@get('content.controller')}")
            controller = itemController if itemController
        return controller
    ).property('content')
)