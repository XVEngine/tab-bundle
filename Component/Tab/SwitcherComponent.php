<?php

namespace XVEngine\Bundle\TabBundle\Component\Tab;


use XVEngine\Core\Component\AbstractComponent;


class SwitcherComponent extends AbstractComponent {

 
    /**
     *
     * @var SwitcherComponentItem 
     */
    private $switches = [];
    
    
    public function initialize() {
        $this->setComponentName('tab.switcherComponent');
        $this->setParamByRef("switches", $this->switches);
    }

    
    /**
     * @deprecated
     * @param SwitcherComponentItem $switch
     * @return SwitcherComponent
     */
    public function addSwitch($switch) {
        return $this->addItem($switch);
    }


    /**
     *
     * @param SwitcherComponentItem $switch
     * @return SwitcherComponent
     */
    public function addItem(SwitcherComponentItem $switch) {
        $this->switches[] = $switch;
        return $this;
    }



    /**
     * 
     * @param string $id
     * @return SwitcherComponent
     */
    public function setActive($id){
        $this->setParam('active', $id);
        return $this;
    }
    
}