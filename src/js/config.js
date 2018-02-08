require.config({

	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'lunbo': 'lunbo',
		'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom'
	},

	shim:{
		// 设置依赖
		'zoom':['jquery'],
		'lunbo':['jquery']
	}
});
