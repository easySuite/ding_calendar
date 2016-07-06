<?php
/**
 * @file views-view-list.tpl.php
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>
<?php print $wrapper_prefix; ?>
<?php if (!empty($title)): ?>
  <div class="event-list-leaf"><?php print $title; ?></div>
<?php endif; ?>
<?php print $list_type_prefix; ?>
<?php foreach ($rows as $row): ?>
  <li class="event-list-item"><?php print $row; ?></li>
<?php endforeach; ?>
<?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>

<div class="more-link">
  <?php print l(t('See more'), 'arrangementer'); ?>
</div>
