/*jshint esversion: 8 */

const house = {
    isDoorOpen : false,
    openDoor : () => {
        house.isDoorOpen = true;
    }
};


house.openDoor();
console.log(house.isDoorOpen);


