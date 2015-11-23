<?php

namespace XVEngine\Bundle\TabBundle\Component\Tab;

use JsonSerializable;
use XVEngine\Core\Component\AbstractComponent;


class SwitcherComponentItem implements JsonSerializable {
    
    
    /**
     *
     * @var string 
     */
    private $id;
    
    /**
     *
     * @var AbstractComponent 
     */
    private $component;
    
    
    /**
     * 
     * @param string $id
     * @param AbstractComponent $component
     */
    public function __construct($id = null, AbstractComponent $component = null) {
        $this->setComponent($component);
        $this->setID($id);
    }
    
    
    /**
     * 
     * @param string $id
     * @return boolean
     */
    public function setID($id){
        $this->id = $id;
        return true;
    }
    
    
    /**
     * 
     * @param AbstractComponent $component
     * @return boolean
     */
    public function setComponent(AbstractComponent $component){
        $this->component = $component;
        return true;
    }

    /**
     * 
     * @return mixed[]
     */
    public function jsonSerialize() {
        return array(
            "id" => $this->id,
            "component" => $this->component
        );
    }
    
    
}