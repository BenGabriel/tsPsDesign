import { SenseProps, TopIcons } from "./types";

export const TopImages: TopIcons[] = [
    {
        id: 1,
        image: require('../assets/slider.png')
    },
    {
        id: 2,
        image: require('../assets/gamepad.png')
    },
    {
        id: 3,
        image: require('../assets/gameboy.png')
    },
    {
        id: 4,
        image: require('../assets/mouse.png')
    },
]

export const Pad: TopIcons[] = [
    {
        id: 2,
        image: require('../assets/pad1.png')
    },
    {
        id: 1,
        image: require('../assets/icon.png')
    },
]

export const senseItem: SenseProps[] = [
    {
        id: 1,
        icon: 'game-controller',
        name:'Futuristic',
        text:'Design',
        color:'#47afe4'
    },
    {
        id: 2,
        icon: 'mic',
        name:'Built-in',
        text:'Microphone',
        color:'#5b85d9'
    },
    {
        id: 3,
        icon: 'gamepad',
        name:'Haptic',
        text:'Feedback',
        color:'#af68d2'
    },
    {
        id: 4,
        icon: 'offline-bolt',
        name:'Fast charge',
        text:'USB-C port',
        color:'#8960ea'
    },
]