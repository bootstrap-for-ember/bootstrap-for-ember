/*
Modal component.
*/


(function() {
  var cl, modalComponent, options, template;

  Bootstrap.adjustModalMaxHeightAndPosition = function() {
    console.log("adju");
    return Ember.$(".modal").each(function() {
      var contentHeight, footerHeight, headerHeight;
      if (Ember.$(this).hasClass("in") === false) {
        Ember.$(this).show();
      }
      contentHeight = Ember.$(window).height() - 60;
      headerHeight = Ember.$(this).find(".modal-header").outerHeight() || 2;
      footerHeight = Ember.$(this).find(".modal-footer").outerHeight() || 2;
      Ember.$(this).find(".modal-content").css({
        "max-height": function() {
          return contentHeight;
        }
      });
      Ember.$(this).find(".modal-body").css({
        "max-height": function() {
          return contentHeight - (headerHeight + footerHeight);
        }
      });
      Ember.$(this).find(".modal-dialog").addClass("modal-dialog-center").css({
        "margin-top": function() {
          return -(Ember.$(this).outerHeight() / 2);
        },
        "margin-left": function() {
          return -(Ember.$(this).outerWidth() / 2);
        }
      });
      if (Ember.$(this).hasClass("in") === false) {
        return Ember.$(this).hide();
      }
    });
  };

  Bootstrap.BsModalComponent = Ember.Component.extend(Ember.Evented, {
    layoutName: 'components/bs-modal',
    classNames: ['modal'],
    classNameBindings: ['fade', 'isVis:in'],
    attributeBindings: ['role', 'aria-labelledby', 'isAriaHidden:aria-hidden', "ariaLabelledBy:aria-labelledby"],
    isAriaHidden: (function() {
      return "" + (this.get('isVisible'));
    }).property('isVisible'),
    modalBackdrop: '<div class="modal-backdrop fade in"></div>',
    role: 'dialog',
    footerViews: [],
    backdrop: true,
    title: null,
    isVisible: false,
    manual: false,
    isVis: false,
    fullSizeButtons: false,
    fade: true,
    didInsertElement: function() {
      var name;
      this._super();
      this.setupBinders();
      name = this.get('name');
      Ember.assert("Modal name is required for modal view " + (this.get('elementId')), this.get('name'));
      if (name == null) {
        name = this.get('elementId');
      }
      Bootstrap.ModalManager.add(name, this);
      if (this.manual) {
        return this.show();
      }
    },
    becameVisible: function() {
      Em.$('body').addClass('modal-open');
      if (this.get("backdrop")) {
        return this.appendBackdrop();
      }
    },
    becameHidden: function() {
      Em.$('body').removeClass('modal-open');
      if (this._backdrop) {
        return this._backdrop.remove();
      }
    },
    appendBackdrop: function() {
      var parentElement;
      parentElement = this.$().parent();
      return this._backdrop = Em.$(this.modalBackdrop).appendTo(parentElement);
    },
    show: function() {
      var current;
      this.set('isVisible', true);
      current = this;
      setTimeout((function() {
        current.set('isVis', true);
      }), 15);
    },
    hide: function() {
      var current;
      this.set('isVis', false);
      current = this;
      this.$().one('webkitTransitionEnd', function(e) {
        current.set('isVisible', false);
      });
      return false;
    },
    toggle: function() {
      return this.toggleProperty('isVisible');
    },
    click: function(event) {
      var target, targetDismiss;
      target = event.target;
      targetDismiss = target.getAttribute("data-dismiss");
      if (targetDismiss === 'modal') {
        return this.close();
      }
    },
    keyPressed: function(event) {
      if (event.keyCode === 27) {
        return this.close(event);
      }
    },
    close: function(event) {
      var current;
      this.set('isVis', false);
      current = this;
      this.$().one('webkitTransitionEnd', function(e) {
        if (current.get('manual')) {
          current.destroy();
        } else {
          current.hide();
        }
      });
      return this.trigger('closed');
    },
    willDestroyElement: function() {
      var name;
      Em.$('body').removeClass('modal-open');
      this.removeHandlers();
      name = this.get('name');
      if (name == null) {
        name = this.get('elementId');
      }
      Bootstrap.ModalManager.remove(name, this);
      if (this._backdrop) {
        return this._backdrop.remove();
      }
    },
    removeHandlers: function() {
      return jQuery(window.document).unbind("keyup", this._keyUpHandler);
    },
    setupBinders: function() {
      var handler,
        _this = this;
      handler = function(event) {
        return _this.keyPressed(event);
      };
      jQuery(window.document).bind("keyup", handler);
      return this._keyUpHandler = handler;
    }
  });

  /*
  Bootstrap.BsModalComponent = Bootstrap.BsModalComponent.reopenClass(
      build: (options) ->
          options = {}  unless options
          options.manual = true
          modalPane = @create(options)
          modalPane.append()
  )
  */


  Bootstrap.ModalManager = Ember.Object.create({
    add: function(name, modalInstance) {
      return this.set(name, modalInstance);
    },
    register: function(name, modalInstance) {
      this.add(name, modalInstance);
      return modalInstance.appendTo(modalInstance.get('targetObject').namespace.rootElement);
    },
    remove: function(name) {
      return this.set(name, null);
    },
    close: function(name) {
      return this.get(name).close();
    },
    hide: function(name) {
      return this.get(name).hide();
    },
    show: function(name) {
      return this.get(name).show();
    },
    toggle: function(name) {
      return this.get(name).toggle();
    },
    confirm: function(controller, title, message, options, confirmButtonTitle, confirmButtonEvent, confirmButtonType, cancelButtonTitle, cancelButtonEvent, cancelButtonType) {
      var body, buttons;
      if (confirmButtonTitle == null) {
        confirmButtonTitle = "Confirm";
      }
      if (confirmButtonEvent == null) {
        confirmButtonEvent = "modalConfirmed";
      }
      if (confirmButtonType == null) {
        confirmButtonType = null;
      }
      if (cancelButtonTitle == null) {
        cancelButtonTitle = "Cancel";
      }
      if (cancelButtonEvent == null) {
        cancelButtonEvent = "modalCanceled";
      }
      if (cancelButtonType == null) {
        cancelButtonType = null;
      }
      body = Ember.View.extend({
        template: Ember.Handlebars.compile(message || "Are you sure you would like to perform this action?")
      });
      buttons = [
        Ember.Object.create({
          title: confirmButtonTitle,
          clicked: confirmButtonEvent,
          type: confirmButtonType,
          dismiss: 'modal'
        }), Ember.Object.create({
          title: cancelButtonTitle,
          clicked: cancelButtonEvent,
          type: cancelButtonType,
          dismiss: 'modal'
        })
      ];
      return this.open('confirm-modal', title || 'Confirmation required!', body, buttons, controller, options);
    }
  }, {
    okModal: function(controller, title, message, okButtonTitle, okButtonEvent, okButtonType, options) {
      var body, buttons;
      if (okButtonTitle == null) {
        okButtonTitle = "OK";
      }
      if (okButtonEvent == null) {
        okButtonEvent = "okModal";
      }
      if (okButtonType == null) {
        okButtonType = null;
      }
      body = Ember.View.extend({
        template: Ember.Handlebars.compile(message || "Are you sure you would like to perform this action?")
      });
      buttons = [
        Ember.Object.create({
          title: okButtonTitle,
          clicked: okButtonEvent,
          type: okButtonType,
          dismiss: 'modal'
        })
      ];
      return this.open('ok-modal', title || 'Confirmation required!', body, buttons, controller, options);
    },
    openModal: function(modalView, options) {
      var instance, rootElement;
      if (options == null) {
        options = {};
      }
      rootElement = options.rootElement || '.ember-application';
      instance = modalView.create(options);
      return instance.appendTo(rootElement);
    },
    openManual: function(name, title, content, footerButtons, controller, options) {
      var view;
      view = Ember.View.extend({
        template: Ember.Handlebars.compile(content),
        controller: controller
      });
      return this.open(name, title, view, footerButtons, controller, options);
    },
    open: function(name, title, view, footerButtons, controller, options) {
      var cl;
      return cl = void 0;
    }
  }, modalComponent = void 0, template = void 0, typeof options === "undefined" || options === null ? options = {} : void 0, options.fade == null ? options.fade = this.get("fade") : void 0, options.fullSizeButtons == null ? options.fullSizeButtons = this.get("fullSizeButtons") : void 0, options.targetObj == null ? options.targetObj = controller : void 0, options.vertical == null ? options.vertical = this.get("vertical") : void 0, cl = controller.container.lookup("component-lookup:main"), modalComponent = cl.lookupFactory("bs-modal", controller.get("container")).create(), modalComponent.setProperties, {
    name: name,
    title: title,
    manual: true,
    footerButtons: footerButtons,
    targetObject: options.targetObj,
    fade: options.fade,
    fullSizeButtons: options.fullSizeButtons,
    vertical: options.vertical
  }, Ember.typeOf(view) === "string" ? (template = controller.container.lookup("template:" + view), Ember.assert("Template " + view + " was specified for Modal but template could not be found.", template), template ? modalComponent.setProperties({
    body: Ember.View.extend({
      template: template,
      controller: controller
    })
  }) : void 0) : Ember.typeOf(view) === "class" ? modalComponent.setProperties({
    body: view,
    controller: controller
  }) : void 0, modalComponent.appendTo(controller.namespace.rootElement), {
    fade: true,
    fullSizeButtons: false,
    vertical: false
  });

  Ember.Application.initializer({
    name: 'bs-modal',
    initialize: function(container, application) {}
  });

  if (Ember.$(window).height() >= 320) {
    Ember.$(window).resize(Bootstrap.adjustModalMaxHeightAndPosition).trigger("resize");
  }

  container.register("component:bs-modal", Bootstrap.BsModalComponent);

}).call(this);

Ember.TEMPLATES["components/bs-modal"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        element(env, element0, context, "bind-attr", [], {"class": "titleIconClasses"});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        inline(env, morph0, context, "view", [get(env, context, "view.body")], {});
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        content(env, morph0, context, "yield");
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        inline(env, morph0, context, "bs-button", [], {"content": get(env, context, "this"), "targetObjectBinding": "view.targetObject"});
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    return {
      isHTMLBars: true,
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,1,contextualElement);
        inline(env, morph0, context, "view", [get(env, context, "this")], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createElement("div");
      dom.setAttribute(el0,"class","modal-dialog");
      var el1 = dom.createTextNode("\n    ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-content");
      var el2 = dom.createTextNode("\n        ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","modal-header");
      var el3 = dom.createTextNode("\n            ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"type","button");
      dom.setAttribute(el3,"data-dismiss","modal");
      dom.setAttribute(el3,"aria-hidden","true");
      var el4 = dom.createTextNode("×");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n            ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h4");
      dom.setAttribute(el3,"class","modal-title");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("                ");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n        ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","modal-body");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("        ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n        ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("        ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, get = hooks.get, block = hooks.block, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element1 = dom.childAt(fragment, [1]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element2, [3]);
      var element5 = dom.childAt(element1, [5]);
      if (this.cachedFragment) { dom.repairClonedNode(element5,[1]); }
      var morph0 = dom.createMorphAt(element4,0,1);
      var morph1 = dom.createUnsafeMorphAt(element4,1,2);
      var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),0,1);
      var morph3 = dom.createMorphAt(element5,0,1);
      var morph4 = dom.createMorphAt(element5,1,2);
      element(env, element3, context, "bind-attr", [], {"class": ":close allowClose::hide"});
      block(env, morph0, context, "if", [get(env, context, "titleIconClasses")], {}, child0, null);
      content(env, morph1, context, "title");
      block(env, morph2, context, "if", [get(env, context, "body")], {}, child1, child2);
      element(env, element5, context, "bind-attr", [], {"class": ":modal-footer fullSizeButtons:modal-footer-full"});
      block(env, morph3, context, "each", [get(env, context, "footerButtons")], {}, child3, null);
      block(env, morph4, context, "each", [get(env, context, "footerViews")], {}, child4, null);
      return fragment;
    }
  };
}()));