<?php

namespace XVEngine\Bundle\TabBundle\Component\Tab;


/**
 * Class TabComponentItem
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\TabBundle\Component\Tab
 */
class TabComponentItem implements \JsonSerializable {

    /**
     *
     * @var string
     */
    private $label;

    /**
     *
     * @var string
     */
    private $id;


    /**
     *
     * @param string $id
     * @param string $label
     */
    public function __construct($id = null, $label = null) {
        $this->setLabel($label);
        $this->setID($id);
    }


    /**
     *
     * @param string $value
     * @return TabComponentItem
     */
    public function setLabel($value){
        $this->label = $value;
        return $this;
    }

    /**
     *
     * @param string $value
     * @return TabComponentItem
     */
    public function setID($value){
        $this->id = $value;
        return $this;
    }

    /**
     *
     * @return string[]
     */
    public function jsonSerialize() {
        return array(
            "id" => $this->id,
            "label" => $this->label
        );
    }

}