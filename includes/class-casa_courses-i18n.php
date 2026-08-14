<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}


/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Casa_courses
 * @subpackage Casa_courses/includes
 * @author     foretagsakademincasa
 */
class Casa_courses_i18n
{
    /**
     * Load the plugin text domain for translation.
     *
     * @since    1.0.0
     */
    public function load_plugin_textdomain()
    {
        $locale = get_locale();
        $path = plugin_dir_path(dirname(__FILE__)) . 'languages/';

        if ( file_exists( $path . 'casa-courses-' . $locale . '.mo' ) ) {
            load_textdomain( 'casa-courses', $path . "casa-courses-$locale.mo", $locale );
        }
    }
}
