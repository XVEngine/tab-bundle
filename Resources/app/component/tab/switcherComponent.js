/**
 * Bootstrap class
 * @param {object} namespace
 * @param {object} app
 * @param {window} globals
 * @returns {object}
 */
(function(namespace, app, globals) {


    namespace.switcherComponent = app.newClass({
        extend: function () {
            return app.components.abstractComponent;
        }
    });
    
    

    /**
     * 
     * @returns {$}
     */
    namespace.switcherComponent.prototype.getTemplate = function() {
        var tmplString = app.utils.getString(function() {
            //@formatter:off
            /**<string>
                    <xv-switcher>

                    </xv-switcher>
             </string>*/
            //@formatter:on
        });
        return $(tmplString);
    };


    /**
     * 
     * @returns {object}
     */
    namespace.switcherComponent.getDefaultParams = function() {
        return {
            switches : []
        };
    };

    /**
     * 
     * @returns {undefined}
     */
    namespace.switcherComponent.prototype.init = function() {
        this.loadSwitches(this.params.switches);
        this.setActive(this.params.active);
    };

    namespace.switcherComponent.prototype.loadSwitches = function(switches) {
        var self = this;
        switches.forEach(function(item){
            self.addSwitch( item );
        });
    };

 
    namespace.switcherComponent.prototype.addSwitch = function(item) {
        return this.addItem(item);
    };

    namespace.switcherComponent.prototype.addItem = function(item) {
        var self = this;
        return app.utils.buildComponent(item.component).then(function ($item) {
            var $div = $("<div>").attr({
                "switch-id": item.id
            });

            self.$element.append($div);
            $div.html($item);
            self._refreshActive();
            return true;
        });
    };



 
    namespace.switcherComponent.prototype.setActive = function(id) {
        this._activeID =  id;
        this._refreshActive();
        return this;
    };

 
    namespace.switcherComponent.prototype._refreshActive = function() {
        var self = this;
        var $activeElement = this.$element.find("> .active");

        if($activeElement.attr("switch-id") == self._activeID){
            return this;
        }

        $activeElement.removeClass("active");
        this.$element.find("> div").filter(function(){
            return $(this).attr("switch-id") == self._activeID;
        }).addClass("active");
        return this;
    };


    namespace.switcherComponent.prototype.replaceComponent = function(switchID, component) {
        var $el = this.$element.find("> div").filter(function(){
            return $(this).attr("switch-id") == switchID;
        });

        return app.utils.buildComponent(component).then(function($html){
            $el.html($html);
            return true;
        });
    };
    
    
    
    

 
    return namespace.switcherComponent;
})(__ARGUMENT_LIST__);