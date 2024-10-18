// First Section
document.getElementById("blackout_color_tab").onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("blackout_color_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("blackout_color_section");
};

document.querySelector('#blackout_color_section .btn-primary').onclick = function() {
    if(controlRequiredFields("blackout_color_section") > 0){
        alert("Seleccione un color de tela para continuar!");
    } else {
        // Remove btn-outline-secondary and disabled from card-header
        removeOutline();
        // remove btn-secondary class and add btn-outline-secondary class to this element
        addOutline("blackout_body_type_tab");
        // Hide the .section that is visible
        removeVisibility();
        // Show the correpsonding section
        addVisibility("blackout_body_type_section");
    }
}

// Second Section
document.getElementById("blackout_body_type_tab").onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("blackout_body_type_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("blackout_body_type_section");
};

document.querySelector('#blackout_body_type_section .btn-primary').onclick = function() {
    if(controlRequiredFields("blackout_body_type_section") > 0){
        alert("Seleccione un tipo de tela para continuar!");
    } else {
        // remove btn-outline-secondary from card-header
        removeOutline();
        // remove btn-secondary class and add btn-outline-secondary class to this element
        addOutline("screen_color_tab");
        // Hide the .section that is visible
        removeVisibility();
        // Show the correpsonding section
        addVisibility("screen_color_section");
    }
};

document.querySelector('#blackout_body_type_section .btn-secondary').onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // Add disabled to current tab
    addDisabled("blackout_body_type_tab");
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("blackout_color_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("blackout_color_section");
};

// Third Section
document.getElementById("screen_color_tab").onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("screen_color_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("screen_color_section");
};

document.querySelector('#screen_color_section .btn-primary').onclick = function() {
    if(controlRequiredFields("screen_color_section") > 0){
        alert("Seleccione un color de tela para continuar!");
    } else {
        // remove btn-outline-secondary from card-header
        removeOutline();
        // remove btn-secondary class and add btn-outline-secondary class to this element
        addOutline("measures_tab");
        // Hide the .section that is visible
        removeVisibility();
        // Show the correpsonding section
        addVisibility("measures_section");
    }
};

document.querySelector('#screen_color_section .btn-secondary').onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // Add disabled to current tab
    addDisabled("screen_color_tab");
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("blackout_body_type_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("blackout_body_type_section");
};

// Fourth Section
document.getElementById("measures_tab").onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("measures_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("measures_section");
};

document.querySelector('#measures_section .btn-primary').onclick = function() {
    if(controlRequiredFields("measures_section") > 0){
        alert("Complete todas las medidas de la cortina para continuar!");
    } else {
        // remove btn-outline-secondary from card-header
        removeOutline();
        // remove btn-secondary class and add btn-outline-secondary class to this element
        addOutline("placing_type_tab");
        // Hide the .section that is visible
        removeVisibility();
        // Show the correpsonding section
        addVisibility("placing_type_section");
    }
};

document.querySelector('#measures_section .btn-secondary').onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // Add disabled to current tab
    addDisabled("measures_tab");
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("screen_color_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("screen_color_section");
};

// Fifth Section
document.getElementById("placing_type_tab").onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("placing_type_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("placing_type_section");
};

document.querySelector('#placing_type_section .btn-primary').onclick = function() {
    if(controlRequiredFields("placing_type_section") > 0){
        alert("Seleccione un tipo de colocación para continuar!");
    } else {
        // remove btn-outline-secondary from card-header
        removeOutline();
        // remove btn-secondary class and add btn-outline-secondary class to this element
        addOutline("falling_type_tab");
        // Hide the .section that is visible
        removeVisibility();
        // Show the correpsonding section
        addVisibility("falling_type_section");
    }
};

document.querySelector('#placing_type_section .btn-secondary').onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // Add disabled to current tab
    addDisabled("placing_type_tab");
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("measures_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("measures_section");
};

// Sixth Section
document.getElementById("falling_type_tab").onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("falling_type_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("falling_type_section");
};

document.querySelector('#falling_type_section .btn-primary').onclick = function() {
    if(controlRequiredFields("falling_type_section") > 0){
        alert("Seleccione el tipo de caída para continuar!");
    } else {
        // remove btn-outline-secondary from card-header
        removeOutline();
        // remove btn-secondary class and add btn-outline-secondary class to this element
        addOutline("control_position_tab");
        // Hide the .section that is visible
        removeVisibility();
        // Show the correpsonding section
        addVisibility("control_position_section");
    }
};

document.querySelector('#falling_type_section .btn-secondary').onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // Add disabled to current tab
    addDisabled("falling_type_tab");
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("placing_type_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("placing_type_section");
};

// Seventh Section
document.getElementById("control_position_tab").onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("control_position_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("control_position_section");
};

document.querySelector('#control_position_section .btn-primary').onclick = function() {
    if(controlRequiredFields("control_position_section") > 0){
        alert("Seleccione un tipo de control para continuar!");
    } else {
        // remove btn-outline-secondary from card-header
        removeOutline();
        // remove btn-secondary class and add btn-outline-secondary class to this element
        addOutline("chain_type_tab");
        // Hide the .section that is visible
        removeVisibility();
        // Show the correpsonding section
        addVisibility("chain_type_section");
    }
};

document.querySelector('#control_position_section .btn-secondary').onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // Add disabled to current tab
    addDisabled("control_position_tab");
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("falling_type_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("falling_type_section");
};

// Eigth Section
document.getElementById("chain_type_tab").onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("chain_type_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("chain_type_section");
};

document.querySelector('#chain_type_section .btn-primary').onclick = function() {
    if(controlRequiredFields("chain_type_section") > 0){
        alert("Seleccione un tipo de cadena para continuar!");
    } else {
        // Populate Control Section with filled fields
        populateControlSection();
        // remove btn-outline-secondary from card-header
        removeOutline();
        // remove btn-secondary class and add btn-outline-secondary class to this element
        addOutline("control_tab");
        // Hide the .section that is visible
        removeVisibility();
        // Show the correpsonding section
        addVisibility("control_section");
    }
};

document.querySelector('#chain_type_section .btn-secondary').onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // Add disabled to current tab
    addDisabled("chain_type_tab");
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("control_position_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("control_position_section");
};

// Control Section
document.getElementById("control_tab").onclick = function() {
    // Add the value of the previous fields
    populateControlSection();
    // remove btn-outline-secondary from card-header
    removeOutline();
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("control_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("control_section");
};

document.querySelector('#control_section .btn-primary').onclick = function() {
    // remove btn-outline-secondary from card-header
    var budget = calculateBudget();
    // Add disabled to current tab
    // $('h1 span').text(' NIPT');
    document.querySelector("#budget_container span").textContent = budget;
};

document.querySelector('#control_section .btn-secondary').onclick = function() {
    // remove btn-outline-secondary from card-header
    removeOutline();
    // Add disabled to current tab
    addDisabled("control_tab");
    // remove btn-secondary class and add btn-outline-secondary class to this element
    addOutline("ci_tab");
    // Hide the .section that is visible
    removeVisibility();
    // Show the correpsonding section
    addVisibility("ci_section");
};

// General Functions
function removeOutline() {
    const remove_outline = document.querySelector('.card-header .btn-outline-secondary');
    remove_outline.classList.remove("btn-outline-secondary");
    remove_outline.classList.add("btn-secondary");
}

function addOutline(add_outline_id) {
    const add_outline = document.getElementById(add_outline_id);
    add_outline.classList.remove("disabled");
    add_outline.classList.remove("btn-secondary");
    add_outline.classList.add("btn-outline-secondary");    
}

function removeVisibility() {
    const remove_visibility = document.querySelector('.section:not(.hidden)');
    remove_visibility.classList.remove("visible");
    remove_visibility.classList.add("hidden");
}

function addVisibility(add_visibility_id) {
    const add_visibility = document.getElementById(add_visibility_id);
    add_visibility.classList.remove("hidden");
    add_visibility.classList.add("visible");
}

function addDisabled(add_disabled_id) {
    const add_disabled = document.getElementById(add_disabled_id);
    add_disabled.classList.add("disabled");
}

function controlRequiredFields(section_id) {
    var empty_fields_counter = 0;
    
    document.querySelectorAll("#" + section_id + " input.req").forEach( (item) => {
        if(item.value.trim() === ""){
            empty_fields_counter += 1;
        }
    });

    // document.querySelectorAll("#" + section_id + " select.req").forEach( (item) => {
    //     if(item.value.trim() === ""){
    //         empty_fields_counter += 1;
    //     }
    // });

    if(document.querySelectorAll("#" + section_id + " input[type='radio'].req").length > 0 ){ 
        checked_items = 0;

        document.querySelectorAll("#" + section_id + " input[type='radio']:checked.req").forEach( (item) => {
            checked_items += 1;
        });

        if(checked_items == 0){
            empty_fields_counter += 1;
        }
    }
    
    // document.querySelectorAll("#" + section_id + " input[type='file'].req").forEach( (item) => {
    //     if( item.files.length == 0 ){
    //         empty_fields_counter += 1;
    //     }
    // });


    return empty_fields_counter;
}

function populateControlSection() {
    document.querySelectorAll(".card-body input:not([type=radio]):not([type=file]):not([type=hidden]):not([type=checkbox]):not([disabled])").forEach( (item) => {
        
        var item_to_populate_id = item.id + "_control";
        var item_to_populate = document.getElementById(item_to_populate_id)
        
        item_to_populate.classList.remove("hidden");
        item_to_populate.classList.add("visible");
        item_to_populate.value = item.value.trim();
    });

    document.querySelectorAll(".card-body input[type=radio]").forEach( (item) => {
        if (item.checked){
            var item_to_populate_id = item.id + "_control";
            var item_to_populate = document.getElementById(item_to_populate_id);

            item_to_populate.classList.remove("hidden");
            item_to_populate.classList.add("visible");
            // item_to_populate.value = item.value.trim();
        }
    });

    document.querySelectorAll(".card-body select:not([disabled])").forEach( (item) => {
        var item_to_populate_id = item.id + "_control";
        var item_to_populate = document.getElementById(item_to_populate_id);

        item_to_populate.classList.remove("hidden");
        item_to_populate.classList.add("visible");
        item_to_populate.value = item.value.toUpperCase();
    });

}

function calculateBudget(){
    return "150 USD";
}