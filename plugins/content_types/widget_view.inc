<?php
/**
 * @file
 * Filtered results pane plugin definition.
 */

$plugin = array(
  'single' => TRUE,
  'title' => t('Full-page calendar results'),
  'description' => t('Full-page calendar view results.'),
  'category' => t('Calendar widget'),
  'render callback' => 'ding_calendar_widget_results_pane_custom_pane_render',
  'all contexts' => TRUE,
);
