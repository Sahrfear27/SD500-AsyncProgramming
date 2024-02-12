// import { baker } from "./staff.mjs";
import * as Staff from "./staff.mjs";

export const oven = {
    makeCupCake(toppings) {
        // baker.bake("cupcake", toppings);
        Staff.baker.bake("Cupcake", toppings);
    },
    makeMuffin(mSize) {
        // baker.bake("muffin", mSize);
        Staff.baker.bake("Muffin", mSize)
    }
}