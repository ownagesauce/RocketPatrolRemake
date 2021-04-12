class Ship extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame, pointValue) {

        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;

    }

    update() {

        this.x -= moveSpeed;

        if(this.x < this.width - 100) {

            this.x = game.config.width;

        }

    }

    reset() {

        this.x = game.config.width + 50;
        this.alpha = 1;

    }

}