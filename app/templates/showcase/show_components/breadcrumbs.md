#Breadcrumbs

Indicate the current page's location within a navigational hierarchy.

The breadcrumbs is magically constructed by interpreting the current router location,

_Move between components and look at the showcase's breadcrumbs on the top of the screen _


The only thing needed to setup breadcrumbs is add to one of your top templates (such _application_ template):

```html
\{\{bs-breadcrumbs\}\}
```

#Breadcrumbs Names

By default the name of the breadcrumbs is set to the route name,
you can change this behavior by specifying some meta info on the route:


```javascript
SomeRoute = Ember.Route.extend({
    breadcrumbs: {name: 'Primary'}

    ...
});
```


If you're using [ember-i18n](https://github.com/jamesarosen/ember-i18n) translation library, you can also translate your breadcrumbs with relative ease. You'll have to enable [ember-i18n's properties translation](https://github.com/jamesarosen/ember-i18n#translate-properties-on-any-object) feature for the routes you'd like their names translated and setup breadcrumbs to refernce the translated property's name, like so:

```javascript
SomeRoute = Ember.Route.extend(Ember.I18n.TranslateableProperties, {
	primaryTranslation: "generic.primary",
	breadcrumbs: {name: 'primaryTranslation'}

	...
});
```