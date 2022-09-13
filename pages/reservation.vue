<template>
  <div>
    {{ widget }}
  </div>
</template>

<script>
import { requireFromUrl } from 'require-from-url'
export default {
  name: 'ReservationPage',
  data () {
    return {
      widget: null
    }
  },
  mounted () {
    const SimplybookWidget = requireFromUrl('//widget.simplybook.it/v2/widget/widget.js')
    this.widget = new SimplybookWidget(
      {
        widget_type: 'iframe',
        url: 'https://vrcafe66.simplybook.it',
        theme: 'concise',
        theme_settings:
                {
                  timeline_hide_unavailable: '1',
                  hide_past_days: '1',
                  timeline_show_end_time: '0',
                  timeline_modern_display: 'as_slots',
                  light_font_color: '#ffffff',
                  sb_secondary_base: '#28243c',
                  sb_base_color: '#5a3afd',
                  display_item_mode: 'block',
                  booking_nav_bg_color: '#ffffff',
                  sb_review_image: '',
                  dark_font_color: '#333333',
                  sb_company_label_color: '#b390ff',
                  hide_img_mode: '0',
                  show_sidebar: '1',
                  sb_busy: '#dad2ce',
                  sb_available: '#d3e0f1'
                },
        timeline: 'modern',
        datepicker: 'top_calendar',
        is_rtl: false,
        app_config:
                {
                  allow_switch_to_ada: 0,
                  predefined: { category: '2' }
                }
      })
  }
}
</script>
