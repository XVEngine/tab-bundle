<?php

namespace XVEngine\Bundle\TabBundle\Component\Tab;


use XVEngine\Core\Component\AbstractComponent;

/**
 * Class TabComponent
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\TabBundle\Component\Tab
 */
class TabComponent extends AbstractComponent {


    /**
     * @var TabComponentItem[]
     */
    private $tabs = [];


    public function initialize() {
        $this->setComponentName('tab.tabComponent');
        $this->setParamByRef("tabs", $this->tabs);
    }

    /**
     * 
     * @param TabComponentItem $tab
     * @return TabComponent
     */
    public function addTab(TabComponentItem $tab) {
        $this->tabs[] = $tab;
        return $this;
    }
    
    /**
     * 
     * @param string $tabID
     * @return boolean
     */
    public function setActive($tabID){
        $this->setParam('active', $tabID);
        return true;
    }
    
}