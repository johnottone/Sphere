var bootState = {

	create: function() {
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.setImpactEvents(true);
        game.physics.p2.defaultRestitution = 0.8;
		game.world.setBounds(0, 0, 2048, 2048);
		game.state.start('load');
		}
	};
