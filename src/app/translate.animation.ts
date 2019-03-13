import { trigger, style, state, transition, animate } from "@angular/animations";
export const TranslateTrigger = trigger("translate", [
    state("void", style({
        color: 'yellow',
        transform: "translateX(-100%) rotate(180deg)" 
    })),
    state("*", style({
        color: 'black',
        transform: "translateX(0%) rotate(0deg)" 
    })),
    transition("void => *", animate("2s"))
]);
