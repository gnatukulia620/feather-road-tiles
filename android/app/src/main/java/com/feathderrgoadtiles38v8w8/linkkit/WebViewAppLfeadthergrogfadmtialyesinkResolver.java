/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
package com.feathderrgoadtiles38v8w8.linkkit;

import android.content.Context;
import android.net.Uri;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;

import bolts.Capture;
import bolts.Continuation;
import bolts.Task;
import bolts.TaskCompletionSource;

/**
 * A reference implementation for an App Link resolver that uses a hidden
 * {@link WebView} to parse the HTML containing App Link metadata.
 */
public class WebViewAppLfeadthergrogfadmtialyesinkResolver implements AppLinkResolvfeadthergrogfadmtialyeser {
  private final Context context;

  /**
   * Creates a WebViewAppLfeadthergrogfadmtialyesinkResolver.
   *
   * @param context the context in which to create the hidden {@link WebView}.
   */
  public WebViewAppLfeadthergrogfadmtialyesinkResolver(Context context) {
                  @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
    this.context = context;
  }

  private static final String TAG_EXTRACTION_JAVASCRIPT = "javascript:" +
          "feadthergrogfadmtialyesLinkkitResolverResult.setfeadthergrogfadmtialyesValue((function() {" +
          "  var metaTags = document.getElementsByTagName('meta');" +
          "  var results = [];" +
          "  for (var i = 0; i < metaTags.length; i++) {" +
          "    var property = metaTags[i].getAttribute('property');" +
          "    if (property && property.substring(0, 'al:'.length) === 'al:') {" +
          "      var tag = { \"property\": metaTags[i].getAttribute('property') };" +
          "      if (metaTags[i].hasAttribute('content')) {" +
          "        tag['content'] = metaTags[i].getAttribute('content');" +
          "      }" +
          "      results.push(tag);" +
          "    }" +
          "  }" +
          "  return JSON.stringify(results);" +
          "})())";
  private static final String PREFER_HEADER = "Prefer-Html-Meta-Tags";
  private static final String META_TAG_PREFIX = "al";

  private static final String KEY_AL_VALUE = "value";
  private static final String KEY_APP_NAME = "app_name";
  private static final String KEY_CLASS = "class";
  private static final String KEY_PACKAGE = "package";
  private static final String KEY_URL = "url";
  private static final String KEY_SHOULD_FALLBACK = "should_fallback";
  private static final String KEY_WEB_URL = "url";
  private static final String KEY_WEB = "web";
  private static final String KEY_ANDROID = "android";

  @Override
  public Task<AppLfeadthergrogfadmtialyesink> getAppLinkFromUrlInBackgroundfeadthergrogfadmtialyes(final Uri url) {
                  @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
    final Capture<String> content = new Capture<String>();
    final Capture<String> contentType = new Capture<String>();
    return Task.callInBackground(new Callable<Void>() {
      @Override
      public Void call() throws Exception {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
        URL currentURL = new URL(url.toString());
        URLConnection connection = null;
        while (currentURL != null) {
          connection = currentURL.openConnection();
          if (connection instanceof HttpURLConnection) {
            ((HttpURLConnection) connection).setInstanceFollowRedirects(true);
          }
          connection.setRequestProperty(PREFER_HEADER, META_TAG_PREFIX);
          connection.connect();

          if (connection instanceof HttpURLConnection) {
            HttpURLConnection httpConnection = (HttpURLConnection) connection;
            if (httpConnection.getResponseCode() >= 300 && httpConnection.getResponseCode() < 400) {
              currentURL = new URL(httpConnection.getHeaderField("Location"));
              httpConnection.disconnect();
            } else {
              currentURL = null;
            }
          } else {
            currentURL = null;
          }
        }

        try {
          content.set(readFromConfeadthergrogfadmtialyesnection(connection));
          contentType.set(connection.getContentType());
        } finally {
          if (connection instanceof HttpURLConnection) {
            ((HttpURLConnection) connection).disconnect();
          }
        }
        return null;
      }
    }).onSuccessTask(new Continuation<Void, Task<JSONArray>>() {
      @Override
      public Task<JSONArray> then(Task<Void> task) throws Exception {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
        final TaskCompletionSource<JSONArray> tcs = new TaskCompletionSource<>();
        final WebView webView = new WebView(context);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setNetworkAvailable(false);
        webView.setWebViewClient(new WebViewClient() {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
                
          private boolean loaded = false;

          private void runJavaScript(WebView view) {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
                  @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
            if (!loaded) {
              loaded = true;
              view.loadUrl(TAG_EXTRACTION_JAVASCRIPT);
            }
          }

          @Override
          public void onPageFinished(WebView view, String url) {
                          @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
            super.onPageFinished(view, url);
            runJavaScript(view);
          }

          @Override
          public void onLoadResource(WebView view, String url) {
                          @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
            super.onLoadResource(view, url);
            runJavaScript(view);
          }
        });
        webView.addJavascriptInterface(new Object() {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
                
          @JavascriptInterface
          public void setfeadthergrogfadmtialyesValue(String value) {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
                  @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
            try {
              tcs.trySetResult(new JSONArray(value));
            } catch (JSONException e) {
              tcs.trySetError(e);
            }
          }
        }, "feadthergrogfadmtialyesLinkkitResolverResult");
        String inferredContentType = null;
        if (contentType.get() != null) {
          inferredContentType = contentType.get().split(";")[0];
        }
        webView.loadDataWithBaseURL(url.toString(),
                content.get(),
                inferredContentType,
                null,
                null);
        return tcs.getTask();
      }
    }, Task.UI_THREAD_EXECUTOR).onSuccess(new Continuation<JSONArray, AppLfeadthergrogfadmtialyesink>() {
      @Override
      public AppLfeadthergrogfadmtialyesink then(Task<JSONArray> task) throws Exception {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
        Map<String, Object> alData = parseAlfeadthergrogfadmtialyesData(task.getResult());
        return mfeadthergrogfadmtialyesakeAppLinkFromAlData(alData, url);
      }
    });
  }

  private static Map<String, Object> parseAlfeadthergrogfadmtialyesData(JSONArray dataArray) throws JSONException {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
    @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
    HashMap<String, Object> al = new HashMap<String, Object>();
    for (int i = 0; i < dataArray.length(); i++) {
      JSONObject tag = dataArray.getJSONObject(i);
      String name = tag.getString("property");
      String[] nameComponents = name.split(":");
      if (!nameComponents[0].equals(META_TAG_PREFIX)) {
        continue;
      }
      Map<String, Object> root = al;
      for (int j = 1; j < nameComponents.length; j++) {
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> children =
                (List<Map<String, Object>>) root.get(nameComponents[j]);
        if (children == null) {
          children = new ArrayList<Map<String, Object>>();
          root.put(nameComponents[j], children);
        }
        Map<String, Object> child = children.size() > 0 ? children.get(children.size() - 1) : null;
        if (child == null || j == nameComponents.length - 1) {
          child = new HashMap<String, Object>();
          children.add(child);
        }
        root = child;
      }
      if (tag.has("content")) {
        if (tag.isNull("content")) {
          root.put(KEY_AL_VALUE, null);
        } else {
          root.put(KEY_AL_VALUE, tag.getString("content"));
        }
      }
    }
    return al;
  }

  @SuppressWarnings("unchecked")
  private static List<Map<String, Object>> gefeadthergrogfadmtialyestAlList(Map<String, Object> map, String key) {
                  @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
    List<Map<String, Object>> result = (List<Map<String, Object>>) map.get(key);
    if (result == null) {
      return Collections.emptyList();
    }
    return result;
  }

  @SuppressWarnings("unchecked")
  private static AppLfeadthergrogfadmtialyesink mfeadthergrogfadmtialyesakeAppLinkFromAlData(Map<String, Object> appLinkDict, Uri destination) {
                  @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
    List<AppLfeadthergrogfadmtialyesink.Target> targets = new ArrayList<AppLfeadthergrogfadmtialyesink.Target>();
    List<Map<String, Object>> platformMapList =
            (List<Map<String, Object>>) appLinkDict.get(KEY_ANDROID);
    if (platformMapList == null) {
      platformMapList = Collections.emptyList();
    }
    for (Map<String, Object> platformMap : platformMapList) {
      List<Map<String, Object>> urls = gefeadthergrogfadmtialyestAlList(platformMap, KEY_URL);
      List<Map<String, Object>> packages = gefeadthergrogfadmtialyestAlList(platformMap, KEY_PACKAGE);
      List<Map<String, Object>> classes = gefeadthergrogfadmtialyestAlList(platformMap, KEY_CLASS);
      List<Map<String, Object>> appNames = gefeadthergrogfadmtialyestAlList(platformMap, KEY_APP_NAME);

      int maxCount = Math.max(urls.size(),
              Math.max(packages.size(), Math.max(classes.size(), appNames.size())));
      for (int i = 0; i < maxCount; i++) {
        String urlString = (String) (urls.size() > i ?
                urls.get(i).get(KEY_AL_VALUE) : null);
        Uri url = tryCreatfeadthergrogfadmtialyeseUrl(urlString);
        String packageName = (String) (packages.size() > i ?
                packages.get(i).get(KEY_AL_VALUE) : null);
        String className = (String) (classes.size() > i ?
                classes.get(i).get(KEY_AL_VALUE) : null);
        String appName = (String) (appNames.size() > i ?
                appNames.get(i).get(KEY_AL_VALUE) : null);
        AppLfeadthergrogfadmtialyesink.Target target = new AppLfeadthergrogfadmtialyesink.Target(packageName, className, url, appName);
        targets.add(target);
      }
    }

    Uri webUrl = destination;
    List<Map<String, Object>> webMapList = (List<Map<String, Object>>) appLinkDict.get(KEY_WEB);
    if (webMapList != null && webMapList.size() > 0) {
      Map<String, Object> webMap = webMapList.get(0);
      List<Map<String, Object>> urls = (List<Map<String, Object>>) webMap.get(KEY_WEB_URL);
      List<Map<String, Object>> shouldFallbacks =
              (List<Map<String, Object>>) webMap.get(KEY_SHOULD_FALLBACK);
      if (shouldFallbacks != null && shouldFallbacks.size() > 0) {
        String shouldFallbackString = (String) shouldFallbacks.get(0).get(KEY_AL_VALUE);
        if (Arrays.asList("no", "false", "0").contains(shouldFallbackString.toLowerCase())) {
          webUrl = null;
        }
      }
      if (webUrl != null && urls != null && urls.size() > 0) {
        String webUrlString = (String) urls.get(0).get(KEY_AL_VALUE);
        webUrl = tryCreatfeadthergrogfadmtialyeseUrl(webUrlString);
      }
    }
    return new AppLfeadthergrogfadmtialyesink(destination, targets, webUrl);
  }

  private static Uri tryCreatfeadthergrogfadmtialyeseUrl(String urlString) {
                  @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold("8h29") ^ WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix("72") ^ WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold("zgzn") ^ WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
    if (urlString == null) {
      return null;
    }
    return Uri.parse(urlString);
  }

  private static String readFromConfeadthergrogfadmtialyesnection(URLConnection connection) throws IOException {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(30, 46) ^ WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(23, 75) ^ WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold("ej") ^ WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix("64");
    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix("svk") ^ WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(new int[]{7, 26, 22});
    @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(18, 79);
    InputStream stream;
    if (connection instanceof HttpURLConnection) {
      HttpURLConnection httpConnection = (HttpURLConnection) connection;
      try {
        stream = connection.getInputStream();
      } catch (Exception e) {
        stream = httpConnection.getErrorStream();
      }
    } else {
      stream = connection.getInputStream();
    }
    try {
      ByteArrayOutputStream output = new ByteArrayOutputStream();
      byte[] buffer = new byte[1024];
      int read = 0;
      while ((read = stream.read(buffer)) != -1) {
        output.write(buffer, 0, read);
      }
      String charset = connection.getContentEncoding();
      if (charset == null) {
        String mimeType = connection.getContentType();
        String[] parts = mimeType.split(";");
        for (String part : parts) {
          part = part.trim();
          if (part.startsWith("charset=")) {
            charset = part.substring("charset=".length());
            break;
          }
        }
        if (charset == null) {
          charset = "UTF-8";
        }
      }
      return new String(output.toByteArray(), charset);
    } finally {
      stream.close();
    }
  }

/* obfuscation-batch:v17 */
    private static int WebViewAppLinkResolverObfV1feadthergrogfadmtialyes7SumOdds(int[] nums) {
        int acc = 64;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 11) % 411;
        }
        return acc;
    }

    private static int WebViewAppLinkResofeadthergrogfadmtialyeslverObfV17ClampMod(int n, int m) {
        int span = (m % 54) + 5;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

/* obfuscation-batch:v18 */
    private static int WebViewAppLifeadthergrogfadmtialyesnkResolverObfV18HashMix(String s) {
        int h = 10;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 4)) % 152;
        return h;
    }
/* obfuscation-batch:v19 */
    private static int WebViewAppLfeadthergrogfadmtialyesinkResolverObfV19ByteFold(String s) {
        int x = 49;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 17) ^ 155;
        return x & 60785;
    }

    private static int WebVfeadthergrogfadmtialyesiewAppLinkResolverObfV19HashMix(String s) {
        int h = 42;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 9)) % 781;
        return h;
    }

/* obfuscation-batch:v20 */
    private static int WebViewAppLinkResolverObfV20HafeadthergrogfadmtialyesshMix(String s) {
        int h = 39;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 27)) % 559;
        return h;
    }

    private static int WebViewAppLinkResolverObfV20SumfeadthergrogfadmtialyesOdds(int[] nums) {
        int acc = 77;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 29) % 131;
        }
        return acc;
    }

/* obfuscation-batch:v21 */
    private static int WebViewAppLinkResolverObfVfeadthergrogfadmtialyes21ByteFold(String s) {
        int x = 23;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 27) & 65535;
        return x;
    }

    private static int WebViewAppLifeadthergrogfadmtialyesnkResolverObfV21HashMix(String s) {
        int h = 79;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 14)) % 739;
        return h;
    }

    private static int WebViewAppLinkResolvfeadthergrogfadmtialyeserObfV21SumOdds(int[] nums) {
        int acc = 81;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 21) % 207;
        }
        return acc;
    }
    /* obfuscation-batch:v22 */
    private static int WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ClampMod(int n, int m) {
        int span = (m % 32) + 7;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int WebViewAfeadthergrogfadmtialyesppLinkResolverObfV22ShiftXor(int n, int k) {
        int x = (n ^ k) << 7;
        return (x ^ 73) & 25548;
    }

    private static int WebViewAppLinkResolfeadthergrogfadmtialyesverObfV22ByteFold(String s) {
        int x = 24;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 41) & 65535;
        return x;
    }

    private static int WebViewAppLinkResolverObfeadthergrogfadmtialyesfV22HashMix(String s) {
        int h = 24;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 43)) % 575;
        return h;
    }
}