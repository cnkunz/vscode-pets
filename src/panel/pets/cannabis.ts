import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Cannabis extends BasePetType {
    label = 'cannabis';
    static possibleColors = [
        PetColor.green
    ];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [States.walkRight],
            },
            {
                state: States.walkRight,
                possibleNextStates: [States.walkLeft],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [
                    States.sitIdle,
                    States.walkRight,
                ],
            },
            {
                state: States.chase,
                possibleNextStates: [States.idleWithBall],
            },
            {
                state: States.idleWithBall,
                possibleNextStates: [
                    States.walkRight,
                    States.walkLeft,
                ],
            },
        ],
    };
    get emoji(): string {
        return '💚';
    }
    get hello(): string {
        return `Whaddup doe`;
    }
}

export const CANNABIS_NAMES: ReadonlyArray<string> = [
    'Leafy',
    'Leaf',
    'Canna',
    'Good Good',
    'Sticky',
    'Sticky Icky',
    'Green',
    'Hash',
    'Flower',
];
