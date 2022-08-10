export default class PlatformClass {
    constructor(position, width, height, type) {
        this.image = new Image();
        this.position = position;
        this.width = width;
        this.height = height;
        this.type = type;
        this.image.src = './assets/images/map/' + type + '.png';
    }
}
