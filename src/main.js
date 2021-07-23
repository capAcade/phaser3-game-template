import Phaser from 'phaser';
import logoImg from './assets/img/player.png';

class MyGame extends Phaser.Scene {
  preload() {
    this.load.image('logo', logoImg);
  }

  create() {
    const logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: MyGame,
};

// eslint-disable-next-line
const game = new Phaser.Game(config);
