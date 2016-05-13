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
  'render callback' => 'ding_calendar_widget_pane_custom_pane_render',
  'all contexts' => TRUE,
);
