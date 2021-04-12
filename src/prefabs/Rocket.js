class Rocket extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, frame) {

        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.movementSpeed = 1;
        this.isFiring = false;
        this.sfxRocket = scene.sound.add('sfx_rocket');

    }

    update() {
        if(this.isFiring) {

            this.y -= this.movementSpeed;
            if(this.y < borderUISize * 1.5) {

                this.reset();

            }

        }

        if(keyLEFT.isDown) {

            this.x -= this.movementSpeed * 1.5;
        
        }
        if(keyRIGHT.isDown) {

            this.x += this.movementSpeed * 1.5;
        
        }
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {

            this.isFiring = true;
            this.sfxRocket.play();
        
        }

        this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding, game.config.width - borderUISize - borderPadding);

    }

    reset() {

        this.y = game.config.height - borderUISize - borderPadding;
        this.isFiring = false;

    }

}