var config = {
    preButton: {
        _comment: "pre image",
        type: "button",
    },
    nextButton: {
        _comment: "next image",
        type: "button",
    },
    centerButton: {
        _comment: "center image",
        type: "button",
    },
    penClearButton: {
        _comment: "pen clear",
        type: "button",
    },
    index: {
        _comment: "background index",
        value: 0,
        valueType: 'number',
        min: 0,
        max: -1,
        type: "number",
    },
    imageOffset: {
        _comment: "background offset",
        value: 80,
        valueType: 'number',
        min: -100,
        max: 100,
        type: "number",
    },
    shadowOffset: {
        _comment: "shadow offset",
        value: 18,
        valueType: 'number',
        min: -50,
        max: 50,
        type: "number",
    },
    shadowBlur: {
        _comment: "shadow blur level",
        value: 23,
        valueType: 'number',
        min: 0,
        max: 30,
        type: "number",
    },
    shadowColorAlpha: {
        _comment: "shadow color alpha",
        value: 5,
        valueType: 'number',
        min: 0,
        max: 10,
        type: "number",
    },
    shadowColor: {
        _comment: "shadow color",
        value: '#000000',
        valueType: 'string',
        type: "color",
    },
    borderLength: {
        _comment: "border length:",
        value: 2.5,
        valueType: 'number',
        min: 0,
        max: 30,
        type: "number",
    },
    borderColor: {
        _comment: "border color",
        value: '#000000',
        valueType: 'string',
        type: "color",
    },
    penEnabled: {
        _comment: "pen enabled",
        value: 'false',
        valueType: 'boolean',
        type: "checkbox",
    },
    penWeight: {
        _comment: "pen weight:",
        value: 2,
        valueType: 'number',
        min: 0,
        max: 10,
        type: "number",
    },
    penColor: {
        _comment: "pen color",
        value: "#000000",
        valueType: "string",
        type: "color",
    },
    textInputEnabled: {
        _comment: "text input enabled",
        value: 'false',
        valueType: 'boolean',
        type: "checkbox",
    },
    textFont: {
        _comment: "text font",
        value: "20px Arial",
        valueType: "string",
        type: "text",
    },
    textColor: {
        _comment: "text font color",
        value: "#000000",
        valueType: "string",
        type: "color",
    },
    shapeEnabled: {
        _comment: "shape enabled",
        value: 'false',
        valueType: 'boolean',
        type: "checkbox",
    },
    shapeSelect: {
        _comment: "shape select",
        value: 'rect',
        valueType: 'string',
        type: "text",        
    },
    shapeColor: {
        _comment: "shape color",
        value: "#000000",
        valueType: "string",
        type: "color",
    },
    shapeBorder: {
        _comment: "shape border",
        value: 3,
        valueType: 'number',
        min: 3,
        max: 20,
        type: "number",
    },
    shapeFill: {
        _comment: "shape fill",
        value: "false",
        valueType: 'boolean',
        type: "text",
        options: [
            'false',
            'true', 
        ],
    },
    zoom: {
        _comment: "zoom",
        value: 100,
        valueType: 'number',
        type: "number",
    },
    defaultPointerEnable: {
        _comment: "default pointer enable",
        value: 'false',
        valueType: 'boolean',
        type: "checkbox",
    },
    canvasHeight: {
        _comment: "canvas height",
        value: 800,
        valueType: 'number',
        type: "number",
    },
    canvasWidth: {
        _comment: "canvas width",
        value: 1000,
        valueType: 'number',
        type: "number",
    },
}
