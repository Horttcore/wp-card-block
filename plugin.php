<?php
/**
 * Plugin Name:     WP Card Block
 * Plugin URI:      https://horttcore.de
 * Description:     A WordPress Gutenberg Card Block
 * Author:          Ralf Hortt
 * Author URI:      https://horttcore.de
 * Text Domain:     wp-card-block
 * Domain Path:     /languages
 * Version:         0.1.1
 *
 * @package         Horttcore/WP-Card-Block
 */

namespace Horttcore\WPCardBlock;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Enqueue block script and backend stylesheet.
 */
add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script( 'wp-card-block', plugins_url( 'dist/js/editor.blocks.js', __FILE__ ), [], filemtime( plugin_dir_path( __FILE__ ) . 'dist/js/editor.blocks.js' ), TRUE );
} );

/**
 * Enqueue styles for backend and frontend.
 */
// add_action( 'enqueue_block_assets', function() {
// 	wp_enqueue_style( 'wp-card-block-frontend', plugins_url( 'dist/css/frontend.blocks.css', __FILE__ ) );
// } );

/**
 * Load translation
 */
add_action( 'plugins_loaded', function(){
	load_plugin_textdomain( 'wp-card-block', false, plugin_dir_path( __FILE__ ) . 'languages' );
});
