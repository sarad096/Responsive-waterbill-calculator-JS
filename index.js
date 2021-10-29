calculatefunction =() =>{
    // console.log("this is working");
    let name = document.getElementById("name").value;
    // console.log(name);
    let unit = document.getElementById("unit-no").value;
    // console.log(unit);
    let size = document.getElementById("pipesize").value;
    // console.log(size);
    if (size=='1/2' && unit > '0' &&name !== ""){
        let min_unit = 10;
        let extra_unit = unit - min_unit
        if (unit<=min_unit){
            let charge = 100 ;
            // console.log(`Dear ${name} your charge amount is Rs. ${charge}`);
            alert(`Dear ${name} your charge amount is Rs. ${charge}`);

        }
        else if(unit>min_unit){
            let charge = 100 + extra_unit*32 ;
            // console.log(`Dear ${name} your charge amount is Rs. ${charge}`);
            alert(`Dear ${name} your charge amount is Rs. ${charge}`);
        }
    }
    else if(size=='3/4' && unit > '0' && name !== ""){
        let min_unit = 27;
        let extra_unit = unit - min_unit
        if (unit<=min_unit){
            let charge = 1910 ;
            // console.log(`Dear ${name} your charge amount is Rs. ${charge}`);
            alert(`Dear ${name} your charge amount is Rs. ${charge}`);
        }
        else if(unit>min_unit){
            let charge = 1910 + extra_unit*32 ;
            // console.log(`Dear ${name} your charge amount is Rs. ${charge}`);
            alert(`Dear ${name} your charge amount is Rs. ${charge}`);
        }

    }
    else if(size=='1' && unit > '0' && name !== ""){
        let min_unit = 56;
        let extra_unit = unit - min_unit
        if (unit<=min_unit){
            let charge = 3960 ;
            // console.log(`Dear ${name} your charge amount is Rs. ${charge}`);
            alert(`Dear ${name} your charge amount is Rs. ${charge}`);
        }
        else if(unit>min_unit){
            let charge = 3960 + extra_unit*71 ;
            // console.log(`Dear ${name} your charge amount is Rs. ${charge}`);
            alert(`Dear ${name} your charge amount is Rs. ${charge}`);
        }
    }
    // else if (size=='0'){
    //     console.log("Please Select Size");
    // }
    // else if (unit <= '0'){
    //     console.log("Invalid Unit");
    // }
    
    else if (name=="" | size =='0' | unit <= '0'){
        // console.log("Please enter valid details");
        alert("Please enter valid details");
    }
}