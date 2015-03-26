var webpack = require( 'webpack' );

var ROOT_PATH = __dirname;
var SOURCES_PATH = ROOT_PATH + '/sources/';
var VENDORS_PATH = SOURCES_PATH + 'vendors/';
var NODE_PATH = ROOT_PATH + '/vendors/';


module.exports = {
    entry: {
        OSG: [ './sources/OSG.js' ],
        tests: [ './tests/tests.js' ]
    },
    output: {
        path: './builds/dist',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'OSG'
    },
    externals: [ {
        'qunit': {
            root: 'QUnit',
            commonjs2: 'qunit',
            commonjs: 'qunit',
            amd: 'qunit'
        }
    }, {
        'q': {
            root: 'Q',
            commonjs2: 'q',
            commonjs: 'q',
            amd: 'q'
        }
    }, {
        'hammer': {
            root: 'Hammer',
            commonjs2: 'hammerjs',
            commonjs: 'hammerjs',
            amd: 'hammer'
        }
    }, {
        'leap': {
            root: 'Leap',
            commonjs2: 'leapjs',
            commonjs: 'leapjs',
            amd: 'leap'
        }
    }, {
        'jquery': {
            root: '$',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        }
    } ],
    resolve: {
        root: [
            SOURCES_PATH,
            VENDORS_PATH,
            ROOT_PATH,
            NODE_PATH
        ]
    },
    module: {
        loaders: [ {
            // shaders
            test: /\.(frag|vert|glsl)$/,
            loader: 'raw-loader'
        } ]
    },
    plugins: [
        new webpack.BannerPlugin( [
            'OSGJS',
            'Cedric Pinson <trigrou@gmail.com> (http://cedricpinson.com)'
        ].join('\n') )
    ]

};