package com.everyformula.app;

import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.BridgeWebViewClient;

public class MainActivity extends BridgeActivity {
    private static final String APP_USER_AGENT = " EveryFormulaApp/2.1";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        WebView webView = bridge.getWebView();
        WebSettings settings = webView.getSettings();
        String currentUserAgent = settings.getUserAgentString();
        if (currentUserAgent == null || !currentUserAgent.contains("EveryFormulaApp/")) {
            settings.setUserAgentString((currentUserAgent == null ? "" : currentUserAgent) + APP_USER_AGENT);
        }

        bridge.setWebViewClient(new BridgeWebViewClient(bridge) {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return keepWebPagesInsideApp(view, request.getUrl());
            }

            @Override
            @SuppressWarnings("deprecation")
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return keepWebPagesInsideApp(view, Uri.parse(url));
            }

            private boolean keepWebPagesInsideApp(WebView view, Uri uri) {
                String scheme = uri.getScheme();
                if ("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme)) {
                    return false;
                }
                return super.shouldOverrideUrlLoading(view, uri.toString());
            }
        });
    }
}
