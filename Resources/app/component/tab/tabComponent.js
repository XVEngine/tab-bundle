(function(namespace, app, globals) {


    namespace.tabComponent = app.newClass({
        extend: function () {
            return app.components.abstractComponent;
        }
    });
    
    


    /**
     * 
     * @returns {$}
     */
    namespace.tabComponent.prototype.getTemplate = function() {
        var tmplString = app.utils.getString(function() {
            //@formatter:off
            /**<string>
                    <xv-tab>
                    </xv-tab>
             </string>*/
            //@formatter:on
        });
        return $(tmplString);
    };
    
    /**
     * 
     * @returns {$}
     */
    namespace.tabComponent.prototype.getTabTemplate = function() {
        var tmplString = app.utils.getString(function() {
            //@formatter:off
            /**<string>
                    <a href="#">
                        <span class="label"></span>
                    </a>
             </string>*/
            //@formatter:on
        });
        return $(tmplString);
    };


    /**
     * 
     * @returns {object}
     */
    namespace.tabComponent.prototype.getDefaultParams = function() {
        return {
            tabs : [],
            active : null
        };
    };

  
    /**
     * 
     * @returns {undefined}
     */
    namespace.tabComponent.prototype.init = function() {
        this.setTabs(this.params.tabs);
        this.setActive(this.params.active);
        this.bindEvents();
    };
  
    /**
     * 
     * @returns {undefined}
     */
    namespace.tabComponent.prototype.setTabs = function(tabs) {
        var self = this;
        tabs.forEach(function(tab){
            self.addTab(tab);
        });
        return this;
    };
  
    /**
     * 
     * @returns {undefined}
     */
    namespace.tabComponent.prototype.addTab = function(tab) {
       var $tab = this.getTabTemplate();
       $tab.find(".label").html(tab.label);
       $tab.attr("tab-id", tab.id);
       this.$element.append($tab);
       return true;
    };
    
    
    
  
    /**
     * 
     * @returns {undefined}
     */
    namespace.tabComponent.prototype.setActive = function (tabID) {
        var $tabs = this.$element.find("> a").removeClass("active");
        $tabs.filter(function () {
            return $(this).attr("tab-id") == tabID;
        }).addClass("active");
        return true;
    };
    
    
  
    /**
     * 
     * @returns {undefined}
     */
    namespace.tabComponent.prototype.getActive = function (tabID) {
        return this.$element.find("> a.active:first").attr("tab-id");
    };
    
    
  
    /**
     * 
     * @returns {undefined}
     */
    namespace.tabComponent.prototype.bindEvents = function () {
        var self = this;
        this.$element.on("click" , " > a", function(){
            var id = $(this).attr("tab-id");
            if(self.getActive() == id){
                return false;
            }

            self.setActive(id);
            self.trigger("onChange");
            self.trigger("onClickTab-"+id);
            return false;
        });
    };
    
    
    


    
    return namespace.tabComponent;
})(__ARGUMENT_LIST__);