<?php
/**
 * @file
 * Calendar/search field pane plugin definition.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Full-page calendar block'),
  'description' => t('Full-page calendar block.'),
  'category' => t('Calendar widget'),
  'render callback' => 'ding_calendar_pane_custom_pane_render',
  'all contexts' => TRUE,
);

/**
 * Run-time rendering of the body of the block with calendar/search field.
 */
function ding_calendar_pane_custom_pane_render($subtype, $conf, $args, $contexts) {
  $block = new stdClass();

  $block->title = '';
  $year = date('Y');
  $month = date('m');
  $path = drupal_get_path('module', 'ding_calendar');
  $block->content = array(
    '#markup' => _ding_calendar_content($year, $month),
    '#attached' => array(
      'css' => array($path . '/css/ding_calendar.css'),
      'js' => array($path . '/js/ding_calendar.js'),
    ),
  );

  return $block;
}
