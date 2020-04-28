/**
 * 
 * Simple Responsive Tabs
 * @author Fritz Bester <fritzbester@gmail.com>
 * @version 1.0
 * Tested on Chrome, Firefox and IE9+
 *  
 */

var simple_tabs = function(el){

    // constructor
    this.setup_events = function(el){

        this.container = document.getElementById(el);
        if(!this.container) { console.log('fail!'); return false; }

        // run through container's tabs
        this.tabs = this.container.querySelectorAll('.tab');
        // it has tabs
        if(this.tabs.length){
            // run through tabs
            for(var i = 0; i < this.tabs.length; i++){
                // add tab click event handler on this container's .tab elements
                this.tabs[i].addEventListener('click', this.tab_click_event_handler.bind(this));
            }
        }

        // run through accordion titles
        this.titles = this.container.querySelectorAll('.title');
        // it has titles
        if(this.titles.length){
            // run through titles
            for(var l = 0; l < this.titles.length; l++){
                // add click event handler on this container's .title elements
                this.titles[l].addEventListener('click', this.title_click_event_handler.bind(this));
            }
        }
    };

    // event handler for tabs
    this.tab_click_event_handler = function (e){
        var tab = e.target;
        var tab_id = tab.getAttribute('data-id');

        // reset all active tabs
        var _tabs = this.container.querySelectorAll('.tab');
        if(_tabs.length){
            var j;
            for(j = 0; j < _tabs.length; j++){
                // reset active on all tab
                _tabs[j].className = "tab";
            }
        }

        // ALSO reset all active titles (and synchronize active tab with corresponding title)
        var _titles = this.container.querySelectorAll('.title');
        if(_titles.length){
            var p;
            for(p = 0; p < _titles.length; p++){
                // reset active on all titles
                _titles[p].className = "title";
                // sync active tab with active title
                if(_titles[p].getAttribute('data-id') == tab_id){
                    _titles[p].className = "title active";
                }
            }
        }

        // set clicked tab as active
        tab.className = "tab active";

        // when clicking on a .tab, run through all .content elements
        var content = this.container.querySelectorAll('.content');
        if(content.length){
            var k;
            for(k = 0; k < content.length; k++){
                // reset active on all content
                content[k].className = "content";
                var content_id = content[k].getAttribute('data-id');
                // check if clicked tab's id matches content's id
                if(tab_id == content_id){
                    // unhide content
                    content[k].className = "content active";
                }
            }
        }
    };
    
    // event handler for titles
    this.title_click_event_handler = function(e){
        var title = e.target;
        // get clicked title's id
        var title_id = title.getAttribute('data-id');
        // reset active on all titles
        var _titles = this.container.querySelectorAll('.title');
        if(_titles.length){
            var m;
            for(m = 0; m < _titles.length; m++){
                // reset active on all titles
                _titles[m].className = "title";
            }
        }

        // ALSO reset all active tabs (and synchronize active title with corresponding tab)
        var _tabs = this.container.querySelectorAll('.tab');
        if(_tabs.length){
            var o;
            for(o = 0; o < _tabs.length; o++){
                // reset active on all tabs
                _tabs[o].className = "tab";
                // sync active title with active tab
                if(_tabs[o].getAttribute('data-id') == title_id){
                    _tabs[o].className = "tab active";
                }
            }
        }

        // set clicked title as active
        title.className = "title active";

        var content = this.container.querySelectorAll('.content');
        if(content.length){
            var n;
            for(n = 0; n < content.length; n++){
                // reset active on all content
                content[n].className = "content";
                var content_id = content[n].getAttribute('data-id');
                // check if clicked title's id matches content's id
                if(title_id == content_id){
                    // unhide content
                    content[n].className = "content active";
                }
            }
        }
    };  
    
    this.setup_events.call(this, el);

    return this;
};