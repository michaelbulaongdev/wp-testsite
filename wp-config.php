<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'testsite' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fY+L){_$i7DxN?3USE,c|3Z:EXdiVg4!|8,.+O_SV:65iYu,M=MoMrr qhr%W$Rx' );
define( 'SECURE_AUTH_KEY',  'Ogb2vhnR5{7pBJw{h5wXEePr,e&8kF7!R|ogtW9)tVB3PV{)[%#(sUY=!5;E%7In' );
define( 'LOGGED_IN_KEY',    'N7<6T?0Nd!,b/uwz>I|lwV@/q>#`R2JXgw/@UrHw[>r+^crwMU*&3MFNZ7TI}k>C' );
define( 'NONCE_KEY',        '2uENV~Si1A[U`?lz</S)zwxzv1J dG?cM@-olFVbf3:eJk*FU-t vV**Srdo5+{I' );
define( 'AUTH_SALT',        ']*Hird}0WOb-3Ftn.XZC2I1`XD7YH6C3Q8P^P#ZnXz5jjFqP.>&ji|BbxN0+k*Cr' );
define( 'SECURE_AUTH_SALT', 'JPGL11yW7^TXVa-xQ22P^Ty={~Uk(;tR3^)H/Xv/l842,0GEQNUn;T(.%WzLFCnZ' );
define( 'LOGGED_IN_SALT',   '<]Y|!C*E(I#{0ihj7xv^9B%MH>SNLZ+I`.(q}b8a|yH1Ww@c2]q9fLlg]0,{SgT*' );
define( 'NONCE_SALT',       'w=T&]>i?][QIRF53/{vAGN5c]=r}T#bBV^Y3kY&Rzf/QyB%]?_dWdxS7Q{^wX_.q' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
