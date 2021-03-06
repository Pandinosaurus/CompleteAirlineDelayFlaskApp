document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("e8b4a1d7-60c0-4d26-8c5c-8ac117a61dd3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8b4a1d7-60c0-4d26-8c5c-8ac117a61dd3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"d7687e88-40d8-4cf7-9ee0-ff7762f4ff93":{"roots":{"references":[{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"0d43aa42-16fd-4e2b-a5a6-f18088195933","type":"BasicTickFormatter"},"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"},"ticker":{"id":"ba8ec6dc-1f6f-479c-b78b-d56013b9efbb","type":"BasicTicker"}},"id":"f862e8f2-098c-44a1-9fde-900bf1c247fe","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4444178-a898-4d88-bbbb-c17e71f8034e","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e4fd7ea8-ddb2-4d38-bcce-ac2d06444075","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[20],"y":["Tuesday"]}},"id":"5c8c36a8-2475-43bb-b1dd-846179eac006","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5c8c36a8-2475-43bb-b1dd-846179eac006","type":"ColumnDataSource"},"glyph":{"id":"b9a47eb1-a4f8-49c8-998d-bd11c15c971e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"48744d5f-0a79-4551-a0e1-ae1a304533de","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"94ab76ae-580b-4cdc-8ee1-6ebfe24f4b1b","type":"FactorRange"},{"attributes":{},"id":"a07f5371-5d78-4a42-a6a1-c620213014d8","type":"ToolEvents"},{"attributes":{},"id":"4667a541-4082-427e-9564-8c4f3a49b32b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"}},"id":"286cd303-b854-4605-918e-75771079e9a1","type":"WheelZoomTool"},{"attributes":{},"id":"24df0e0b-e67c-42c5-b482-c7ccb7160df5","type":"CategoricalTicker"},{"attributes":{},"id":"78a42c92-3994-48aa-9a19-b6e1b08816f8","type":"BasicTicker"},{"attributes":{"child":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"},"title":"US"},"id":"74d54c4b-b356-4437-b33c-459f0fd88083","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.21212121212121,20.0,19.0],"x":[7,20,20],"y":["Monday","Wednesday","Sunday"]}},"id":"c12d0e5f-e6f7-460b-9e94-7e970ce4497a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fd04ca00-1044-48e5-bbd1-c84ff16c9149","type":"ColumnDataSource"},"glyph":{"id":"fcb3555d-fed4-49be-bb90-65ffb6092544","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ff8e073e-4da5-40b8-9e58-2ba0f771b8ee","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"a53812c1-77f5-474e-a30f-dca07558922c","type":"BoxAnnotation"},"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"}},"id":"4a09caaf-dc4e-4114-86bf-817a115ff41c","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1787b804-c1cf-4dae-ade0-5704ba52f719","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.25,10.033333333333333],"x":[7,8],"y":["Friday","Sunday"]}},"id":"3e1e0b22-6a21-4067-8c89-53fc1d4cbeb0","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2a60acd9-c9ed-49b5-aa51-2ebae2186b82","type":"BoxAnnotation"},{"attributes":{"child":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"b6718cc5-7277-4d66-8061-a275752f538c","type":"Panel"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"aae4dfc1-93e6-4977-8503-b35fb851f323","type":"FactorRange"},{"attributes":{"plot":null,"text":"American Airlines "},"id":"39925da7-3068-4b2d-b6a4-8f05c7d87d4e","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.454545454545455,9.789473684210526,6.944444444444445,7.380952380952381],"x":[8,7,7,8],"y":["Monday","Wednesday","Thursday","Thursday"]}},"id":"1ef05040-7ce7-4377-8b43-de1c45b8b2fc","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d448a70c-d9e8-40ad-b67d-a54d7e89ade2","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fcb3555d-fed4-49be-bb90-65ffb6092544","type":"Rect"},{"attributes":{"overlay":{"id":"2a60acd9-c9ed-49b5-aa51-2ebae2186b82","type":"BoxAnnotation"},"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"}},"id":"6cd87a2b-3c05-402b-bd38-988fd34ee4aa","type":"BoxZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"45bf6229-4839-43c9-9f9b-30d119096350","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"},"ticker":{"id":"cb360838-1189-43c6-9d76-c14b6761bd27","type":"CategoricalTicker"}},"id":"9ad9e9cb-5a05-423d-b32d-2db5246a0849","type":"CategoricalAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"72e95b75-f498-4fc9-9cb1-4dbbafd7733b","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1ef05040-7ce7-4377-8b43-de1c45b8b2fc","type":"ColumnDataSource"},"glyph":{"id":"8407c889-96b3-43d2-8347-c749575369a6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9bd61976-6550-4af4-92c1-fe2257d55d9e","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"4b7b3e21-f8bb-458a-a081-73b957af4c09","type":"LinearColorMapper"},"formatter":{"id":"1757653e-1733-4981-bb44-8339c9d973b4","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"},"ticker":{"id":"fedc249d-3650-4e06-925b-1aa0d5172838","type":"BasicTicker"}},"id":"12233185-da21-4a40-87e8-8f48afdc50b4","type":"ColorBar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"d2108616-87f6-46ed-a61e-ec3ea21d98aa","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"},"ticker":{"id":"673bd274-31f1-46a6-8771-61f24f7b8bee","type":"CategoricalTicker"}},"id":"746d4086-53d9-4bee-94eb-22c14b00539d","type":"CategoricalAxis"},{"attributes":{},"id":"2c23c69d-5ae5-4b65-9f15-2dff5d41a68d","type":"ToolEvents"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"d11fe362-b3f5-4343-86d4-dfbf323d6fb9","type":"FactorRange"},{"attributes":{},"id":"5473cc02-9aac-47df-ba16-1e568b094def","type":"BasicTicker"},{"attributes":{"callback":null,"end":23},"id":"c58901fc-4bac-48be-8dae-568e60e5f2c8","type":"Range1d"},{"attributes":{"data_source":{"id":"72b1919d-1c8e-4815-a706-fa61954bc4a4","type":"ColumnDataSource"},"glyph":{"id":"b1723e7a-3c7e-46e2-ac67-25f93fa36244","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5c5cad55-636e-423b-91e1-e65a887417e6","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e117fbb-1c73-4959-b136-dffc962e2d5c","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"95168d81-144a-4050-b33c-724c7c70a6d6","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8407c889-96b3-43d2-8347-c749575369a6","type":"Rect"},{"attributes":{"data_source":{"id":"6bb4d184-5669-4595-aa98-acaf5315f08d","type":"ColumnDataSource"},"glyph":{"id":"dd6ddc40-cde2-488b-8b80-613774f2f739","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"71e68184-34fb-4003-9456-e3cbf567b086","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1723e7a-3c7e-46e2-ac67-25f93fa36244","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[20],"y":["Tuesday"]}},"id":"6bb4d184-5669-4595-aa98-acaf5315f08d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd6ddc40-cde2-488b-8b80-613774f2f739","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"10735c37-bf89-4966-a176-39b43926c34f","type":"PanTool"},{"id":"286cd303-b854-4605-918e-75771079e9a1","type":"WheelZoomTool"},{"id":"4a09caaf-dc4e-4114-86bf-817a115ff41c","type":"BoxZoomTool"},{"id":"e52f5bb3-0ff7-46d4-89f3-1722a31101dc","type":"SaveTool"},{"id":"b4972720-34d2-4757-bdd6-882886e20181","type":"ResetTool"},{"id":"705b0690-e447-43d0-b8da-aec5307c6abf","type":"HelpTool"}]},"id":"94da9aa3-f6d0-461b-8e22-42a4c9b903ad","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,2.0789473684210527,0.0,3.2260273972602738,0.6666666666666666,1.8,0.0],"x":[20,7,20,8,20,7,13],"y":["Monday","Tuesday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"fd04ca00-1044-48e5-bbd1-c84ff16c9149","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f64d3262-2f55-4931-aeef-4a504386fc92","type":"PanTool"},{"id":"e22d8265-4f8f-4329-8553-5d9c2c2488fa","type":"WheelZoomTool"},{"id":"029f563c-ab02-411a-8d14-96cda62b0cff","type":"BoxZoomTool"},{"id":"666bdb92-8df3-4dea-9d69-1bd65243583d","type":"SaveTool"},{"id":"1d521578-1166-4d11-89c2-9598bcab6cfa","type":"ResetTool"},{"id":"33d35c47-52c0-4b23-a55c-da6e022d8522","type":"HelpTool"}]},"id":"e82b4c36-cc60-4ac8-8b07-5d5092567502","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8b87804e-0712-4faa-b0ae-9ff9d2ef0f95","type":"PanTool"},{"id":"33f8dc65-4d27-45f3-a01f-e66c5282f287","type":"WheelZoomTool"},{"id":"6cd87a2b-3c05-402b-bd38-988fd34ee4aa","type":"BoxZoomTool"},{"id":"daf44ef2-ae99-46b9-8063-73a718f5c26c","type":"SaveTool"},{"id":"89cb1f1d-8ce3-4261-a8de-d8601dd2a87f","type":"ResetTool"},{"id":"4a91483c-b54a-4388-b70c-96673ceb425e","type":"HelpTool"}]},"id":"c7a5ffa4-31fb-44bd-a365-2cd23fde2fa8","type":"Toolbar"},{"attributes":{"data_source":{"id":"0bc7f498-e80e-4acc-93c4-8504ee709105","type":"ColumnDataSource"},"glyph":{"id":"25fe56fc-3e87-4648-a750-6e34ba137a75","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"27d6196b-1544-4390-8541-274d8604a17b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"}},"id":"f64d3262-2f55-4931-aeef-4a504386fc92","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0,5.096],"x":[20,8],"y":["Thursday","Sunday"]}},"id":"72b1919d-1c8e-4815-a706-fa61954bc4a4","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"0c8383d8-1efd-4406-8ce1-cb3636294e70","type":"Range1d"},{"attributes":{},"id":"673bd274-31f1-46a6-8771-61f24f7b8bee","type":"CategoricalTicker"},{"attributes":{},"id":"ba8ec6dc-1f6f-479c-b78b-d56013b9efbb","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.08]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.08]"}],"values":[0.0],"x":[13],"y":["Sunday"]}},"id":"eefd1cb3-97e8-4eab-a494-d508899fa226","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"274a9d3b-dc7b-4b3d-8e08-100f9d2e29bd","type":"LinearAxis"}],"left":[{"id":"9ad9e9cb-5a05-423d-b32d-2db5246a0849","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"72e95b75-f498-4fc9-9cb1-4dbbafd7733b","type":"BoxAnnotation"},{"id":"48744d5f-0a79-4551-a0e1-ae1a304533de","type":"GlyphRenderer"},{"id":"f1f97b7a-adc7-45e6-9f32-d2518a854424","type":"GlyphRenderer"},{"id":"55a64cce-779b-43c7-8378-9dcc57af32f8","type":"GlyphRenderer"},{"id":"c2012e18-0610-4737-ae98-3b844c9ff139","type":"GlyphRenderer"},{"id":"5c5cad55-636e-423b-91e1-e65a887417e6","type":"GlyphRenderer"},{"id":"ff8e073e-4da5-40b8-9e58-2ba0f771b8ee","type":"GlyphRenderer"},{"id":"274a9d3b-dc7b-4b3d-8e08-100f9d2e29bd","type":"LinearAxis"},{"id":"9ad9e9cb-5a05-423d-b32d-2db5246a0849","type":"CategoricalAxis"},{"id":"12233185-da21-4a40-87e8-8f48afdc50b4","type":"ColorBar"}],"right":[{"id":"12233185-da21-4a40-87e8-8f48afdc50b4","type":"ColorBar"}],"title":{"id":"73eeceea-9b9c-41c9-868e-dc5607b3cce7","type":"Title"},"tool_events":{"id":"2c23c69d-5ae5-4b65-9f15-2dff5d41a68d","type":"ToolEvents"},"toolbar":{"id":"e82b4c36-cc60-4ac8-8b07-5d5092567502","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c58901fc-4bac-48be-8dae-568e60e5f2c8","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"d11fe362-b3f5-4343-86d4-dfbf323d6fb9","type":"FactorRange"}},"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"f862e8f2-098c-44a1-9fde-900bf1c247fe","type":"LinearAxis"}],"left":[{"id":"e7397cdd-2361-47a4-b46e-f6db89867523","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"a53812c1-77f5-474e-a30f-dca07558922c","type":"BoxAnnotation"},{"id":"71e68184-34fb-4003-9456-e3cbf567b086","type":"GlyphRenderer"},{"id":"f5f1f0e9-1b76-438e-8e82-3450a4d85f31","type":"GlyphRenderer"},{"id":"75e21402-34c7-43f2-b053-f6e040431677","type":"GlyphRenderer"},{"id":"9bd61976-6550-4af4-92c1-fe2257d55d9e","type":"GlyphRenderer"},{"id":"bc0f116e-a02b-4ef4-942a-995786b62eb7","type":"GlyphRenderer"},{"id":"1d31ac6b-9849-4350-8fe1-1366609a3dd2","type":"GlyphRenderer"},{"id":"f862e8f2-098c-44a1-9fde-900bf1c247fe","type":"LinearAxis"},{"id":"e7397cdd-2361-47a4-b46e-f6db89867523","type":"CategoricalAxis"},{"id":"51f2e1e0-5213-4994-bf8f-20143aa976f9","type":"ColorBar"}],"right":[{"id":"51f2e1e0-5213-4994-bf8f-20143aa976f9","type":"ColorBar"}],"title":{"id":"39925da7-3068-4b2d-b6a4-8f05c7d87d4e","type":"Title"},"tool_events":{"id":"a07f5371-5d78-4a42-a6a1-c620213014d8","type":"ToolEvents"},"toolbar":{"id":"94da9aa3-f6d0-461b-8e22-42a4c9b903ad","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"0c8383d8-1efd-4406-8ce1-cb3636294e70","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"aae4dfc1-93e6-4977-8503-b35fb851f323","type":"FactorRange"}},"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"94caec7c-3bfb-4799-8933-0dd55589b820","type":"Rect"},{"attributes":{"plot":null,"text":"US Airways "},"id":"369f3777-2706-4ec6-a77a-7a07415ebd37","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.6, 9.7]","(8.6, 9.7]","(8.6, 9.7]"],"chart_index":[{"POS_ARR_DELAY":"(8.6, 9.7]"},{"POS_ARR_DELAY":"(8.6, 9.7]"},{"POS_ARR_DELAY":"(8.6, 9.7]"}],"values":[9.153846153846153,9.695652173913043,9.691489361702128],"x":[8,8,8],"y":["Monday","Thursday","Friday"]}},"id":"2dfbb641-4dec-4140-9ed1-1c56475603ef","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a3ab6241-ff14-40ea-a97e-8820cf4038fe","type":"ColumnDataSource"},"glyph":{"id":"6e117fbb-1c73-4959-b136-dffc962e2d5c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f1f97b7a-adc7-45e6-9f32-d2518a854424","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7.5, 8.6]","(7.5, 8.6]"],"chart_index":[{"POS_ARR_DELAY":"(7.5, 8.6]"},{"POS_ARR_DELAY":"(7.5, 8.6]"}],"values":[8.563829787234043,7.966666666666667],"x":[8,8],"y":["Tuesday","Wednesday"]}},"id":"0bc7f498-e80e-4acc-93c4-8504ee709105","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"25fe56fc-3e87-4648-a750-6e34ba137a75","type":"Rect"},{"attributes":{},"id":"0d43aa42-16fd-4e2b-a5a6-f18088195933","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"},"title":"AA"},"id":"56f931dd-a28d-4d59-b511-2e9bd951436d","type":"Panel"},{"attributes":{},"id":"e9a6e225-32ff-4840-b99d-0cfcb25a5880","type":"BasicTickFormatter"},{"attributes":{},"id":"45bf6229-4839-43c9-9f9b-30d119096350","type":"CategoricalTickFormatter"},{"attributes":{},"id":"d2108616-87f6-46ed-a61e-ec3ea21d98aa","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"}},"id":"33f8dc65-4d27-45f3-a01f-e66c5282f287","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"}},"id":"8b87804e-0712-4faa-b0ae-9ff9d2ef0f95","type":"PanTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"73eeceea-9b9c-41c9-868e-dc5607b3cce7","type":"Title"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"1cc34ede-8f03-437d-948b-e30200ecf59b","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.25],"x":[7],"y":["Friday"]}},"id":"8aafb7db-caad-41f5-abcc-9b8128c05a73","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,2.0789473684210527,2.473684210526316,2.4545454545454546,0.0,3.192982456140351,0.6666666666666666,1.8],"x":[20,7,8,8,20,8,20,7],"y":["Monday","Tuesday","Tuesday","Wednesday","Friday","Saturday","Saturday","Sunday"]}},"id":"51c61b0e-3307-4685-a29a-aae681b1c0dd","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0,5.571428571428571],"x":[20,8],"y":["Thursday","Friday"]}},"id":"b0ef17a7-e4cb-4719-9747-5635baabdb9b","type":"ColumnDataSource"},{"attributes":{},"id":"fedc249d-3650-4e06-925b-1aa0d5172838","type":"BasicTicker"},{"attributes":{"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"}},"id":"e52f5bb3-0ff7-46d4-89f3-1722a31101dc","type":"SaveTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"b2b8fd33-cd5a-4ccc-a624-dd8d15ba20ea","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"},"ticker":{"id":"24df0e0b-e67c-42c5-b482-c7ccb7160df5","type":"CategoricalTicker"}},"id":"e7397cdd-2361-47a4-b46e-f6db89867523","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"40dfae82-b7b8-481b-9501-c4a887becf54","type":"ColumnDataSource"},"glyph":{"id":"e4fd7ea8-ddb2-4d38-bcce-ac2d06444075","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c2012e18-0610-4737-ae98-3b844c9ff139","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a53812c1-77f5-474e-a30f-dca07558922c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"}},"id":"705b0690-e447-43d0-b8da-aec5307c6abf","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f11ad171-ecfe-4086-8d6f-e04234b9b19f","type":"Rect"},{"attributes":{"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"}},"id":"1d521578-1166-4d11-89c2-9598bcab6cfa","type":"ResetTool"},{"attributes":{"data_source":{"id":"8aafb7db-caad-41f5-abcc-9b8128c05a73","type":"ColumnDataSource"},"glyph":{"id":"b4444178-a898-4d88-bbbb-c17e71f8034e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"55a64cce-779b-43c7-8378-9dcc57af32f8","type":"GlyphRenderer"},{"attributes":{},"id":"2039133e-ab9e-478f-b909-78ff34c0f400","type":"ToolEvents"},{"attributes":{"color_mapper":{"id":"1cc34ede-8f03-437d-948b-e30200ecf59b","type":"LinearColorMapper"},"formatter":{"id":"bd6224f9-c2dd-49b9-8593-4167ed471963","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"},"ticker":{"id":"5473cc02-9aac-47df-ba16-1e568b094def","type":"BasicTicker"}},"id":"901b808f-3230-4443-a05f-ac5b7af3f670","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b895b465-b99f-42a0-bd1d-f0db27f9134a","type":"Rect"},{"attributes":{},"id":"f9ea5dc8-8f91-4ba9-835c-0cdb4c683b5e","type":"BasicTickFormatter"},{"attributes":{"color_mapper":{"id":"3c73d722-913b-45ff-b7dc-7cf900adf55f","type":"LinearColorMapper"},"formatter":{"id":"e9a6e225-32ff-4840-b99d-0cfcb25a5880","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"},"ticker":{"id":"78a42c92-3994-48aa-9a19-b6e1b08816f8","type":"BasicTicker"}},"id":"51f2e1e0-5213-4994-bf8f-20143aa976f9","type":"ColorBar"},{"attributes":{"data_source":{"id":"51c61b0e-3307-4685-a29a-aae681b1c0dd","type":"ColumnDataSource"},"glyph":{"id":"ff88314a-8b0f-46f8-b225-9849c78f0209","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1d31ac6b-9849-4350-8fe1-1366609a3dd2","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"}},"id":"4a91483c-b54a-4388-b70c-96673ceb425e","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9a47eb1-a4f8-49c8-998d-bd11c15c971e","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"4b7b3e21-f8bb-458a-a081-73b957af4c09","type":"LinearColorMapper"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"4667a541-4082-427e-9564-8c4f3a49b32b","type":"BasicTickFormatter"},"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"},"ticker":{"id":"b84df12c-b31a-43f2-b1ef-4f2fc72669d1","type":"BasicTicker"}},"id":"274a9d3b-dc7b-4b3d-8e08-100f9d2e29bd","type":"LinearAxis"},{"attributes":{"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"}},"id":"666bdb92-8df3-4dea-9d69-1bd65243583d","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.21212121212121,20.0,19.0],"x":[7,20,20],"y":["Monday","Wednesday","Sunday"]}},"id":"a3ab6241-ff14-40ea-a97e-8820cf4038fe","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.212389380530974,7.539823008849558,9.789473684210526,6.883928571428571,6.944444444444445,9.265486725663717,8.939130434782609],"x":[8,8,7,8,7,8,8],"y":["Monday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday"]}},"id":"40dfae82-b7b8-481b-9501-c4a887becf54","type":"ColumnDataSource"},{"attributes":{},"id":"bd6224f9-c2dd-49b9-8593-4167ed471963","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"f9ea5dc8-8f91-4ba9-835c-0cdb4c683b5e","type":"BasicTickFormatter"},"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"},"ticker":{"id":"95e71c01-b532-452f-bcbb-22bf97a876cf","type":"BasicTicker"}},"id":"546c58c4-cb18-4070-9f9a-5fd2583e8256","type":"LinearAxis"},{"attributes":{"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"}},"id":"89cb1f1d-8ce3-4261-a8de-d8601dd2a87f","type":"ResetTool"},{"attributes":{},"id":"cb360838-1189-43c6-9d76-c14b6761bd27","type":"CategoricalTicker"},{"attributes":{},"id":"1757653e-1733-4981-bb44-8339c9d973b4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"}},"id":"b4972720-34d2-4757-bdd6-882886e20181","type":"ResetTool"},{"attributes":{"data_source":{"id":"3e1e0b22-6a21-4067-8c89-53fc1d4cbeb0","type":"ColumnDataSource"},"glyph":{"id":"d448a70c-d9e8-40ad-b67d-a54d7e89ade2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"75e21402-34c7-43f2-b053-f6e040431677","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"546c58c4-cb18-4070-9f9a-5fd2583e8256","type":"LinearAxis"}],"left":[{"id":"746d4086-53d9-4bee-94eb-22c14b00539d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"2a60acd9-c9ed-49b5-aa51-2ebae2186b82","type":"BoxAnnotation"},{"id":"2492ef47-91fd-47b3-9d71-e2a65561e49d","type":"GlyphRenderer"},{"id":"27d6196b-1544-4390-8541-274d8604a17b","type":"GlyphRenderer"},{"id":"2a3e33d4-f3f2-4804-a47c-987b47ef48d1","type":"GlyphRenderer"},{"id":"3d76ca68-be6e-4d88-951a-32ccfe63134e","type":"GlyphRenderer"},{"id":"546c58c4-cb18-4070-9f9a-5fd2583e8256","type":"LinearAxis"},{"id":"746d4086-53d9-4bee-94eb-22c14b00539d","type":"CategoricalAxis"},{"id":"901b808f-3230-4443-a05f-ac5b7af3f670","type":"ColorBar"}],"right":[{"id":"901b808f-3230-4443-a05f-ac5b7af3f670","type":"ColorBar"}],"title":{"id":"369f3777-2706-4ec6-a77a-7a07415ebd37","type":"Title"},"tool_events":{"id":"2039133e-ab9e-478f-b909-78ff34c0f400","type":"ToolEvents"},"toolbar":{"id":"c7a5ffa4-31fb-44bd-a365-2cd23fde2fa8","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"95168d81-144a-4050-b33c-724c7c70a6d6","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"94ab76ae-580b-4cdc-8ee1-6ebfe24f4b1b","type":"FactorRange"}},"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff88314a-8b0f-46f8-b225-9849c78f0209","type":"Rect"},{"attributes":{},"id":"95e71c01-b532-452f-bcbb-22bf97a876cf","type":"BasicTicker"},{"attributes":{},"id":"b2b8fd33-cd5a-4ccc-a624-dd8d15ba20ea","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"19f8cb44-cdeb-41e2-9563-3da5efc3b160","subtype":"Chart","type":"Plot"}},"id":"10735c37-bf89-4966-a176-39b43926c34f","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f395b81d-523c-466d-bcd1-1585a1de05b4","type":"Rect"},{"attributes":{},"id":"b84df12c-b31a-43f2-b1ef-4f2fc72669d1","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.2, 4.3]","(3.2, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"(3.2, 4.3]"},{"POS_ARR_DELAY":"(3.2, 4.3]"}],"values":[3.247191011235955,3.536842105263158],"x":[8,8],"y":["Saturday","Sunday"]}},"id":"b30c481f-bf6f-4b82-91b4-f89801cd14c3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2dfbb641-4dec-4140-9ed1-1c56475603ef","type":"ColumnDataSource"},"glyph":{"id":"94caec7c-3bfb-4799-8933-0dd55589b820","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2492ef47-91fd-47b3-9d71-e2a65561e49d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b0ef17a7-e4cb-4719-9747-5635baabdb9b","type":"ColumnDataSource"},"glyph":{"id":"b895b465-b99f-42a0-bd1d-f0db27f9134a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bc0f116e-a02b-4ef4-942a-995786b62eb7","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"b6718cc5-7277-4d66-8061-a275752f538c","type":"Panel"},{"id":"74d54c4b-b356-4437-b33c-459f0fd88083","type":"Panel"},{"id":"56f931dd-a28d-4d59-b511-2e9bd951436d","type":"Panel"}]},"id":"fccbd180-442d-49d5-8f0b-b6a5230ffb31","type":"Tabs"},{"attributes":{"overlay":{"id":"72e95b75-f498-4fc9-9cb1-4dbbafd7733b","type":"BoxAnnotation"},"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"}},"id":"029f563c-ab02-411a-8d14-96cda62b0cff","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"37fb8232-b3a7-48c8-934b-a2ed063b70c2","subtype":"Chart","type":"Plot"}},"id":"daf44ef2-ae99-46b9-8063-73a718f5c26c","type":"SaveTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"3c73d722-913b-45ff-b7dc-7cf900adf55f","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"}},"id":"e22d8265-4f8f-4329-8553-5d9c2c2488fa","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"b30c481f-bf6f-4b82-91b4-f89801cd14c3","type":"ColumnDataSource"},"glyph":{"id":"1787b804-c1cf-4dae-ade0-5704ba52f719","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2a3e33d4-f3f2-4804-a47c-987b47ef48d1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"55b3865a-eb51-40df-9059-74517c1f39be","subtype":"Chart","type":"Plot"}},"id":"33d35c47-52c0-4b23-a55c-da6e022d8522","type":"HelpTool"},{"attributes":{"data_source":{"id":"eefd1cb3-97e8-4eab-a494-d508899fa226","type":"ColumnDataSource"},"glyph":{"id":"f395b81d-523c-466d-bcd1-1585a1de05b4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3d76ca68-be6e-4d88-951a-32ccfe63134e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c12d0e5f-e6f7-460b-9e94-7e970ce4497a","type":"ColumnDataSource"},"glyph":{"id":"f11ad171-ecfe-4086-8d6f-e04234b9b19f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f5f1f0e9-1b76-438e-8e82-3450a4d85f31","type":"GlyphRenderer"}],"root_ids":["fccbd180-442d-49d5-8f0b-b6a5230ffb31"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"d7687e88-40d8-4cf7-9ee0-ff7762f4ff93","elementid":"e8b4a1d7-60c0-4d26-8c5c-8ac117a61dd3","modelid":"fccbd180-442d-49d5-8f0b-b6a5230ffb31"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});