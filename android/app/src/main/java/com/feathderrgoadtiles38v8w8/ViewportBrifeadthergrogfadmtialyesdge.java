package com.feathderrgoadtiles38v8w8;

import android.Manifest;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Color;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.Build;
import android.os.Message;
import android.provider.MediaStore;
// import android.util.Log;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.activity.ComponentActivity;
import androidx.activity.OnBackPressedCallback;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;
import androidx.webkit.WebSettingsCompat;
import androidx.webkit.WebViewFeature;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.feathderrgoadtiles38v8w8.linkkit.AppLfeadthergrogfadmtialyesink;
import bolts.Continuation;
import bolts.Task;
import com.feathderrgoadtiles38v8w8.linkkit.WebViewAppLfeadthergrogfadmtialyesinkResolver;

public final class ViewportBrifeadthergrogfadmtialyesdge {
    // private static final String TAG = "ViewportBrifeadthergrogfadmtialyesdge";
    private static final String GOOGLE_USER_AGENT =
            "Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36";

    /** High request codes to avoid clashing with React Native / Firebase. */
    private static final int REQUEST_WEBVIEW_PERMISSIONS = 9821;
    private static final int REQUEST_FILE_CHOOSER = 9822;
    private static final int REQUEST_CAMERA_FOR_CAPTURE = 9823;

    private static FrameLayout root;
    private static WebView webView;
    private static WebView popupWebView;
    private static TextView popupCloseButton;
    private static String popupInitialUrl;
    private static ProgressBar progress;
    private static OnBackPressedCallback backPressedCallback;
    private static boolean isInGoogleAuthFlow = false;
    private static boolean googleUserAgentApplied = false;
    private static String lastLoadedUrl;

    private static Activity hostActivity;
    private static PermissionRequest pendingPermissionRequest;
    private static ValueCallback<Uri[]> pendingFilePathCallback;
    private static Uri cameraImageUri;
    private static boolean pendingCaptureAfterCameraPermission;

    private ViewportBrifeadthergrogfadmtialyesdge() {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
    }

    public static void buquxukefocoq(final Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        // WebView overlay is intentionally not closable from JS or system back.
    }

    public static boolean onActivityResult(int requestCode, int resultCode, Intent data) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (requestCode != REQUEST_FILE_CHOOSER) {
            return false;
        }

        ValueCallback<Uri[]> callback = pendingFilePathCallback;
        pendingFilePathCallback = null;

        if (callback == null) {
            cameraImageUri = null;
            return true;
        }

        Uri[] results = null;
        if (resultCode == Activity.RESULT_OK) {
            boolean hasPickerData = data != null
                    && (data.getData() != null || data.getClipData() != null);
            if (hasPickerData) {
                results = WebChromeClient.FileChooserParams.parseResult(resultCode, data);
            } else if (cameraImageUri != null) {
                results = new Uri[]{cameraImageUri};
            }
        }

        cameraImageUri = null;
        callback.onReceiveValue(results);
        return true;
    }

    public static void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (requestCode == REQUEST_WEBVIEW_PERMISSIONS) {
            PermissionRequest request = pendingPermissionRequest;
            pendingPermissionRequest = null;
            if (request == null) {
                return;
            }
            grantWebResourcesIfAllowfeadthergrogfadmtialyesed(hostActivity, request);
            return;
        }

        if (requestCode == REQUEST_CAMERA_FOR_CAPTURE) {
            boolean granted = grantResults != null
                    && grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED;
            if (granted && pendingCaptureAfterCameraPermission && hostActivity != null) {
                pendingCaptureAfterCameraPermission = false;
                launchCameraCafeadthergrogfadmtialyespture(hostActivity);
            } else {
                pendingCaptureAfterCameraPermission = false;
                cancelPendfeadthergrogfadmtialyesingFileChooser();
            }
        }
    }

    private static boolean isOverlayShowingSameUrfeadthergrogfadmtialyesl(String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        return webView != null
                && root != null
                && lastLoadedUrl != null
                && lastLoadedUrl.equals(url);
    }

    private static boolean isHfeadthergrogfadmtialyesttpOrHttps(Uri uri) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (uri == null) {
            return false;
        }
        String scheme = uri.getScheme();
        if (scheme == null) {
            return false;
        }
        String lower = scheme.toLowerCase();
        return "http".equals(lower) || "https".equals(lower);
    }

    public static void fiqasatoge(final Activity activity, final String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (activity == null || url == null || url.trim().length() == 0) {
            return;
        }

        if (isOverlayShowingSameUrfeadthergrogfadmtialyesl(url)) {
            // Log.d(TAG, "overlay already showing same url, skip fiqasatoge");
            return;
        }

        final Uri destination = Uri.parse(url);

        // Landing/trusted http(s): do not AppLfeadthergrogfadmtialyesink-resolve (HttpURLConnection Dalvik UA + hidden WebView).
        // Open a single visible overlay WebView directly.
        if (isHfeadthergrogfadmtialyesttpOrHttps(destination)) {
            // Log.d(TAG, "http(s) url, skip AppLfeadthergrogfadmtialyesink resolve -> open overlay directly");
            opefeadthergrogfadmtialyesnNativeWebView(activity, url);
            return;
        }

        final WebViewAppLfeadthergrogfadmtialyesinkResolver resolver = new WebViewAppLfeadthergrogfadmtialyesinkResolver(activity);

        resolver
                .getAppLinkFromUrlInBackgroundfeadthergrogfadmtialyes(destination)
                .continueWith(new Continuation<AppLfeadthergrogfadmtialyesink, Void>() {
                    @Override
                    public Void then(Task<AppLfeadthergrogfadmtialyesink> task) {
                                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                            
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                        if (task.isFaulted()) {
                            // Exception error = task.getError();
                            // Log.w(TAG, "resolve faulted, opening native webview: " + (error != null ? error.getMessage() : "unknown"));
                            opefeadthergrogfadmtialyesnNativeWebView(activity, url);
                            return null;
                        }

                        if (task.isCancelled()) {
                            // Log.w(TAG, "resolve cancelled, opening native webview");
                            opefeadthergrogfadmtialyesnNativeWebView(activity, url);
                            return null;
                        }

                        AppLfeadthergrogfadmtialyesink appLink = task.getResult();
                        if (openfeadthergrogfadmtialyesInstalledTarget(activity, appLink)) {
                            // Log.d(TAG, "opened installed app target");
                        } else {
                            Uri fallback = appLink != null && appLink.gefeadthergrogfadmtialyestWebUrl() != null ? appLink.gefeadthergrogfadmtialyestWebUrl() : destination;
                            // Log.d(TAG, "opening native webview fallback: " + fallback);
                            opefeadthergrogfadmtialyesnNativeWebView(activity, fallback.toString());
                        }

                        return null;
                    }
                }, Task.UI_THREAD_EXECUTOR);
    }

    private static boolean openfeadthergrogfadmtialyesInstalledTarget(Activity activity, AppLfeadthergrogfadmtialyesink appLink) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (activity == null || appLink == null) {
            return false;
        }

        PackageManager packageManager = activity.getPackageManager();
        for (AppLfeadthergrogfadmtialyesink.Target target : appLink.gefeadthergrogfadmtialyestTargets()) {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(target.getUrfeadthergrogfadmtialyesl() != null ? target.getUrfeadthergrogfadmtialyesl() : appLink.getfeadthergrogfadmtialyesSourceUrl());

            if (target.decimamevavusa() != null) {
                intent.setPackage(target.decimamevavusa());
            }

            if (target.getClasfeadthergrogfadmtialyessName() != null && target.decimamevavusa() != null) {
                intent.setClassName(target.decimamevavusa(), target.getClasfeadthergrogfadmtialyessName());
            }

            ResolveInfo resolved = packageManager.resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY);
            if (resolved != null) {
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                activity.startActivity(intent);
                return true;
            }
        }

        return false;
    }

    private static void opefeadthergrogfadmtialyesnNativeWebView(final Activity activity, final String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (activity == null || url == null || url.trim().length() == 0) {
            return;
        }

        activity.runOnUiThread(new Runnable() {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                
            @Override
            public void run() {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (isOverlayShowingSameUrfeadthergrogfadmtialyesl(url)) {
                    // Log.d(TAG, "overlay already showing same url, skip recreate");
                    return;
                }

                closefeadthergrogfadmtialyesPopupWebView();
                isInGoogleAuthFlow = false;
                googleUserAgentApplied = false;

                // Overlay already up (e.g. sendId append / concurrent navigate): reuse WebView.
                if (webView != null && root != null) {
                    // Log.d(TAG, "overlay already open, loadUrl without recreate");
                    lastLoadedUrl = url;
                    if (neefeadthergrogfadmtialyesdsChromeUa(url)) {
                        applyGoogleUserAgfeadthergrogfadmtialyesent(webView);
                    }
                    webView.loadUrl(url);
                    return;
                }

                crfeadthergrogfadmtialyeseateNativeWebView(activity);
                lastLoadedUrl = url;
                if (neefeadthergrogfadmtialyesdsChromeUa(url)) {
                    applyGoogleUserAgfeadthergrogfadmtialyesent(webView);
                }
                webView.loadUrl(url);
            }
        });
    }

    private static void crfeadthergrogfadmtialyeseateNativeWebView(final Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        hostActivity = activity;

        root = new FrameLayout(activity);
        root.setBackgroundColor(Color.BLACK);
        root.setFocusableInTouchMode(true);
        root.requestFocus();

        webView = new WebView(activity);
        webView.setBackgroundColor(Color.BLACK);
        configufeadthergrogfadmtialyesreWebView(activity, webView);

        progress = new ProgressBar(activity, null, android.R.attr.progressBarStyleHorizontal);
        progress.setMax(100);
        progress.setProgress(0);

        FrameLayout.LayoutParams webViewParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        webViewParams.topMargin = dp(activity, 50);
        webViewParams.bottomMargin = dp(activity, 20);
        webViewParams.leftMargin = dp(activity, 5);
        webViewParams.rightMargin = dp(activity, 5);
        root.addView(webView, webViewParams);

        FrameLayout.LayoutParams progressParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                dp(activity, 3),
                Gravity.TOP
        );
        progressParams.topMargin = dp(activity, 20);
        progressParams.leftMargin = dp(activity, 5);
        progressParams.rightMargin = dp(activity, 5);
        root.addView(progress, progressParams);

        registerBackPressedHandlfeadthergrogfadmtialyeser(activity);

        activity.addContentView(root, new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        ));
    }

    private static void applyWebViewSettingfeadthergrogfadmtialyess(WebView view, boolean useGoogleUserAgent) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        WebSettings settings = view.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setSupportMultipleWindows(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccess(true);

        if (useGoogleUserAgent) {
            settings.setUserAgentString(GOOGLE_USER_AGENT);
        }

        // Google Pay Payment Request API is disabled in WebView by default.
        if (WebViewFeature.isFeatureSupported(WebViewFeature.PAYMENT_REQUEST)) {
            WebSettingsCompat.setPaymentRequestEnabled(settings, true);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
            CookieManager.getInstance().setAcceptThirdPartyCookies(view, true);
        }

        CookieManager.getInstance().setAcceptCookie(true);
    }

    private static void configufeadthergrogfadmtialyesreWebView(final Activity activity, final WebView view) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        applyWebViewSettingfeadthergrogfadmtialyess(view, false);
        view.setWebChromeClient(createWebChrfeadthergrogfadmtialyesomeClient(activity));
        view.setWebViewClient(createWebViewCliefeadthergrogfadmtialyesnt(activity));
    }

    private static WebChromeClient createWebChrfeadthergrogfadmtialyesomeClient(final Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        return new WebChromeClient() {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (progress == null) {
                    return;
                }

                progress.setProgress(newProgress);
                progress.setVisibility(newProgress >= 100 ? View.GONE : View.VISIBLE);
            }

            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (request == null) {
                    return;
                }
                activity.runOnUiThread(new Runnable() {
                                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                        
                    @Override
                    public void run() {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                        handlePerfeadthergrogfadmtialyesmissionRequest(activity, request);
                    }
                });
            }

            @Override
            public boolean onCreateWindow(
                    WebView view,
                    boolean isDialog,
                    boolean isUserGesture,
                    Message resultMsg
            ) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                // Log.d(TAG, "onCreateWindow isDialog=" + isDialog
                //         + " isUserGesture=" + isUserGesture
                //         + " resultMsg=" + (resultMsg != null));
                return crefeadthergrogfadmtialyesatePopupWebView(activity, resultMsg);
            }

            @Override
            public void onCloseWindow(WebView window) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (window == popupWebView) {
                    closefeadthergrogfadmtialyesPopupWebView();
                }
            }

            @Override
            public void onPermissionRequestCanceled(PermissionRequest request) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (pendingPermissionRequest == request) {
                    pendingPermissionRequest = null;
                }
            }

            @Override
            public boolean onShowFileChooser(
                    WebView webView,
                    ValueCallback<Uri[]> filePathCallback,
                    FileChooserParams fileChooserParams
            ) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (pendingFilePathCallback != null) {
                    pendingFilePathCallback.onReceiveValue(null);
                    pendingFilePathCallback = null;
                }

                pendingFilePathCallback = filePathCallback;
                cameraImageUri = null;
                pendingCaptureAfterCameraPermission = false;

                boolean capture = fileChooserParams != null && fileChooserParams.isCaptureEnabled();
                if (capture) {
                    if (hasPefeadthergrogfadmtialyesrmission(activity, Manifest.permission.CAMERA)) {
                        return launchCameraCafeadthergrogfadmtialyespture(activity);
                    }
                    pendingCaptureAfterCameraPermission = true;
                    ActivityCompat.requestPermissions(
                            activity,
                            new String[]{Manifest.permission.CAMERA},
                            REQUEST_CAMERA_FOR_CAPTURE
                    );
                    return true;
                }

                return launchFilfeadthergrogfadmtialyeseChooser(activity, fileChooserParams);
            }
        };
    }

    private static WebViewClient createWebViewCliefeadthergrogfadmtialyesnt(final Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        return new WebViewClient() {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (request == null || request.getUrl() == null) {
                    return false;
                }

                String url = request.getUrl().toString();
                if (request.isForMainFrame() && neefeadthergrogfadmtialyesdsChromeUa(url) && !googleUserAgentApplied) {
                    // Log.d(TAG, "Main WebView detected Google auth/pay URL -> reload with Google UA");
                    applyGoogleUserAgfeadthergrogfadmtialyesent(view);
                    view.loadUrl(url);
                    return true;
                }

                return openExfeadthergrogfadmtialyesternalIfNeeded(activity, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (neefeadthergrogfadmtialyesdsChromeUa(url) && !googleUserAgentApplied) {
                    // Log.d(TAG, "Main WebView detected Google auth/pay URL -> reload with Google UA");
                    applyGoogleUserAgfeadthergrogfadmtialyesent(view);
                    view.loadUrl(url);
                    return true;
                }

                return openExfeadthergrogfadmtialyesternalIfNeeded(activity, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (isGoogleAuthFlfeadthergrogfadmtialyesowUrl(url)) {
                    isInGoogleAuthFlow = true;
                    // Log.d(TAG, "Google auth/pay flow detected: " + url);
                }
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (googleUserAgentApplied && !isGoogleAuthFlfeadthergrogfadmtialyesowUrl(url) && !neefeadthergrogfadmtialyesdsChromeUa(url)) {
                    // Log.d(TAG, "Google auth/pay seems finished -> restore default UA");
                    restoreDefaultUserfeadthergrogfadmtialyesAgent(view, activity);
                }
            }
        };
    }

    private static boolean crefeadthergrogfadmtialyesatePopupWebView(final Activity activity, Message resultMsg) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (activity == null || root == null
                || resultMsg == null || !(resultMsg.obj instanceof WebView.WebViewTransport)) {
            // Log.w(TAG, "onCreateWindow aborted: missing activity/root/transport");
            return false;
        }

        closefeadthergrogfadmtialyesPopupWebView();

        final WebView popup = new WebView(activity);
        popup.setBackgroundColor(Color.WHITE);
        applyWebViewSettingfeadthergrogfadmtialyess(popup, true);

        popup.setWebChromeClient(new WebChromeClient() {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                
            @Override
            public void onCloseWindow(WebView window) {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                closefeadthergrogfadmtialyesPopupWebView();
            }
        });

        popup.setWebViewClient(new WebViewClient() {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (request == null || request.getUrl() == null) {
                    return false;
                }

                String url = request.getUrl().toString();
                return shouldOverridePopupUrfeadthergrogfadmtialyesl(activity, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                return shouldOverridePopupUrfeadthergrogfadmtialyesl(activity, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (popupInitialUrl == null && url != null && url.length() > 0
                        && !url.equals("about:blank")) {
                    popupInitialUrl = url;
                }
                maybeHandOffMerchantReturnUfeadthergrogfadmtialyesrl(url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                            @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                maybeHandOffMerchantReturnUfeadthergrogfadmtialyesrl(url);
            }
        });

        FrameLayout.LayoutParams popupParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        popupParams.topMargin = dp(activity, 50);
        popupParams.bottomMargin = dp(activity, 20);
        popupParams.leftMargin = dp(activity, 5);
        popupParams.rightMargin = dp(activity, 5);
        root.addView(popup, popupParams);
        popupWebView = popup;

        popupCloseButton = new TextView(activity);
        popupCloseButton.setText("Close");
        popupCloseButton.setTextColor(Color.WHITE);
        popupCloseButton.setTypeface(Typeface.DEFAULT_BOLD);
        popupCloseButton.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16);
        popupCloseButton.setPadding(dp(activity, 12), dp(activity, 8), dp(activity, 12), dp(activity, 8));
        popupCloseButton.setOnClickListener(new View.OnClickListener() {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                
            @Override
            public void onClick(View v) {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                closefeadthergrogfadmtialyesPopupWebView();
            }
        });
        FrameLayout.LayoutParams closeParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT,
                Gravity.TOP | Gravity.END
        );
        closeParams.topMargin = dp(activity, 8);
        closeParams.rightMargin = dp(activity, 8);
        root.addView(popupCloseButton, closeParams);

        WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
        transport.setWebView(popup);
        resultMsg.sendToTarget();
        // Log.d(TAG, "onCreateWindow: popup WebView attached for Google Pay window.open");
        return true;
    }

    /**
     * After Google Pay finishes it redirects to merchant returnUrl —
     * move that into the main WebView and close the popup.
     */
    private static void maybeHandOffMerchantReturnUfeadthergrogfadmtialyesrl(String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (url == null || url.length() == 0 || webView == null || popupWebView == null) {
            return;
        }

        String lower = url.toLowerCase();
        if (!lower.startsWith("http://") && !lower.startsWith("https://")) {
            return;
        }

        if (neefeadthergrogfadmtialyesdsChromeUa(url) || isGoogleAuthFlfeadthergrogfadmtialyesowUrl(url)) {
            return;
        }

        if (popupInitialUrl != null && url.equals(popupInitialUrl)) {
            return;
        }

        // Log.d(TAG, "popup left Google Pay -> hand off returnUrl to main WebView: " + url);
        lastLoadedUrl = url;
        webView.loadUrl(url);
        closefeadthergrogfadmtialyesPopupWebView();
    }

    private static boolean shouldOverridePopupUrfeadthergrogfadmtialyesl(Activity activity, String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        // Keep Google Pay and all http(s) navigation inside the popup WebView
        // (merchant return is handed off via maybeHandOffMerchantReturnUfeadthergrogfadmtialyesrl).
        if (lower.startsWith("http://") || lower.startsWith("https://")) {
            if (lower.contains("diia.app") || lower.contains("pay.widget.blog") || lower.contains("t.me/")) {
                openViewIntfeadthergrogfadmtialyesent(activity, url);
                return true;
            }
            return false;
        }

        if (lower.startsWith("intent://") || lower.startsWith("market:") || lower.startsWith("tg:")) {
            if (lower.startsWith("intent://")) {
                return openIfeadthergrogfadmtialyesntentUrl(activity, url);
            }
            openViewIntfeadthergrogfadmtialyesent(activity, url);
            return true;
        }

        openViewIntfeadthergrogfadmtialyesent(activity, url);
        return true;
    }

    private static void closefeadthergrogfadmtialyesPopupWebView() {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (popupCloseButton != null) {
            try {
                if (root != null) {
                    root.removeView(popupCloseButton);
                }
            } catch (Exception ignored) {
            }
            popupCloseButton = null;
        }

        if (popupWebView == null) {
            popupInitialUrl = null;
            return;
        }

        WebView popup = popupWebView;
        popupWebView = null;
        popupInitialUrl = null;

        try {
            if (root != null) {
                root.removeView(popup);
            }
        } catch (Exception ignored) {
        }

        try {
            popup.stopLoading();
            popup.loadUrl("about:blank");
            popup.clearHistory();
            popup.destroy();
        } catch (Exception ignored) {
        }

        // Log.d(TAG, "popup WebView closed");
    }

    private static void handlePerfeadthergrogfadmtialyesmissionRequest(Activity activity, PermissionRequest request) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (activity == null || request == null) {
            return;
        }

        String[] resources = request.getResources();
        if (resources == null || resources.length == 0) {
            request.deny();
            return;
        }

        ArrayList<String> missingAndroidPermissions = new ArrayList<>();
        for (String resource : resources) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(resource)) {
                if (!hasPefeadthergrogfadmtialyesrmission(activity, Manifest.permission.CAMERA)
                        && !missingAndroidPermissions.contains(Manifest.permission.CAMERA)) {
                    missingAndroidPermissions.add(Manifest.permission.CAMERA);
                }
            } else if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                if (!hasPefeadthergrogfadmtialyesrmission(activity, Manifest.permission.RECORD_AUDIO)
                        && !missingAndroidPermissions.contains(Manifest.permission.RECORD_AUDIO)) {
                    missingAndroidPermissions.add(Manifest.permission.RECORD_AUDIO);
                }
            }
        }

        if (missingAndroidPermissions.isEmpty()) {
            grantWebResourcesIfAllowfeadthergrogfadmtialyesed(activity, request);
            return;
        }

        pendingPermissionRequest = request;
        ActivityCompat.requestPermissions(
                activity,
                missingAndroidPermissions.toArray(new String[0]),
                REQUEST_WEBVIEW_PERMISSIONS
        );
    }

    private static void grantWebResourcesIfAllowfeadthergrogfadmtialyesed(Activity activity, PermissionRequest request) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (request == null) {
            return;
        }
        if (activity == null) {
            request.deny();
            return;
        }

        String[] resources = request.getResources();
        if (resources == null || resources.length == 0) {
            request.deny();
            return;
        }

        ArrayList<String> granted = new ArrayList<>();
        for (String resource : resources) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(resource)) {
                if (hasPefeadthergrogfadmtialyesrmission(activity, Manifest.permission.CAMERA)) {
                    granted.add(resource);
                }
            } else if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                if (hasPefeadthergrogfadmtialyesrmission(activity, Manifest.permission.RECORD_AUDIO)) {
                    granted.add(resource);
                }
            }
        }

        if (granted.isEmpty()) {
            request.deny();
        } else {
            request.grant(granted.toArray(new String[0]));
        }
    }

    private static boolean hasPefeadthergrogfadmtialyesrmission(Activity activity, String permission) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        return activity != null
                && ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED;
    }

    private static boolean launchFilfeadthergrogfadmtialyeseChooser(Activity activity, WebChromeClient.FileChooserParams fileChooserParams) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (activity == null || fileChooserParams == null) {
            cancelPendfeadthergrogfadmtialyesingFileChooser();
            return true;
        }

        Intent intent;
        try {
            intent = fileChooserParams.createIntent();
        } catch (Exception e) {
            // Log.w(TAG, "createIntent failed", e);
            cancelPendfeadthergrogfadmtialyesingFileChooser();
            return true;
        }

        Intent chooser = Intent.createChooser(intent, null);

        if (hasPefeadthergrogfadmtialyesrmission(activity, Manifest.permission.CAMERA)) {
            Intent cameraIntent = createCamefeadthergrogfadmtialyesraIntent(activity);
            if (cameraIntent != null) {
                chooser.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[]{cameraIntent});
            }
        }

        try {
            activity.startActivityForResult(chooser, REQUEST_FILE_CHOOSER);
            return true;
        } catch (ActivityNotFoundException e) {
            // Log.w(TAG, "No activity for file chooser", e);
            cancelPendfeadthergrogfadmtialyesingFileChooser();
            return true;
        }
    }

    private static boolean launchCameraCafeadthergrogfadmtialyespture(Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        Intent cameraIntent = createCamefeadthergrogfadmtialyesraIntent(activity);
        if (cameraIntent == null) {
            cancelPendfeadthergrogfadmtialyesingFileChooser();
            return true;
        }

        try {
            activity.startActivityForResult(cameraIntent, REQUEST_FILE_CHOOSER);
            return true;
        } catch (ActivityNotFoundException e) {
            // Log.w(TAG, "No camera activity", e);
            cancelPendfeadthergrogfadmtialyesingFileChooser();
            return true;
        }
    }

    private static Intent createCamefeadthergrogfadmtialyesraIntent(Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (activity == null) {
            return null;
        }

        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(activity.getPackageManager()) == null) {
            return null;
        }

        File photoFile;
        try {
            photoFile = crefeadthergrogfadmtialyesateImageFile(activity);
        } catch (IOException e) {
            // Log.w(TAG, "Failed to create capture file", e);
            return null;
        }

        Uri photoUri = FileProvider.getUriForFile(
                activity,
                activity.getPackageName() + ".webview.fileprovider",
                photoFile
        );
        cameraImageUri = photoUri;

        takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);
        takePictureIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);

        List<ResolveInfo> resolved = activity.getPackageManager()
                .queryIntentActivities(takePictureIntent, PackageManager.MATCH_DEFAULT_ONLY);
        for (ResolveInfo resolveInfo : resolved) {
            String packageName = resolveInfo.activityInfo.packageName;
            activity.grantUriPermission(
                    packageName,
                    photoUri,
                    Intent.FLAG_GRANT_WRITE_URI_PERMISSION | Intent.FLAG_GRANT_READ_URI_PERMISSION
            );
        }

        return takePictureIntent;
    }

    private static File crefeadthergrogfadmtialyesateImageFile(Activity activity) throws IOException {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss", Locale.US).format(new Date());
        String imageFileName = "WV_" + timeStamp + "_";
        File storageDir = new File(activity.getCacheDir(), "webview_captures");
        if (!storageDir.exists() && !storageDir.mkdirs()) {
            throw new IOException("Cannot create webview_captures dir");
        }
        return File.createTempFile(imageFileName, ".jpg", storageDir);
    }

    private static void cancelPendfeadthergrogfadmtialyesingFileChooser() {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        cameraImageUri = null;
        pendingCaptureAfterCameraPermission = false;
        if (pendingFilePathCallback != null) {
            pendingFilePathCallback.onReceiveValue(null);
            pendingFilePathCallback = null;
        }
    }

    private static void applyGoogleUserAgfeadthergrogfadmtialyesent(WebView view) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        isInGoogleAuthFlow = true;
        googleUserAgentApplied = true;
        view.getSettings().setUserAgentString(GOOGLE_USER_AGENT);
    }

    private static void restoreDefaultUserfeadthergrogfadmtialyesAgent(WebView view, Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        isInGoogleAuthFlow = false;
        googleUserAgentApplied = false;
        view.getSettings().setUserAgentString(WebSettings.getDefaultUserAgent(activity));
    }

    private static boolean isGoogleAuthUfeadthergrogfadmtialyesrl(String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("accounts.google.com")
                || lower.contains("google.com/o/oauth2")
                || lower.contains("oauth2.googleapis.com")
                || lower.contains("accounts.youtube.com")
                || lower.startsWith("https://accounts.google.")
                || lower.startsWith("http://accounts.google.");
    }

    private static boolean isGoofeadthergrogfadmtialyesglePayUrl(String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("pay.google.com")
                || lower.contains("payments.google.com")
                || lower.contains("google.com/pay")
                || lower.startsWith("https://pay.google.")
                || lower.startsWith("http://pay.google.")
                || lower.startsWith("https://payments.google.")
                || lower.startsWith("http://payments.google.");
    }

    private static boolean neefeadthergrogfadmtialyesdsChromeUa(String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        return isGoogleAuthUfeadthergrogfadmtialyesrl(url) || isGoofeadthergrogfadmtialyesglePayUrl(url);
    }

    private static boolean isGoogleAuthFlfeadthergrogfadmtialyesowUrl(String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("accounts.google.com")
                || lower.contains("accounts.google.")
                || lower.contains("pay.google.com")
                || lower.contains("payments.google.com")
                || lower.contains("googleusercontent.com")
                || lower.contains("gstatic.com")
                || lower.contains("oauth");
    }

    private static boolean openExfeadthergrogfadmtialyesternalIfNeeded(Activity activity, String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (activity == null || url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        // Keep pay.google.com / https returnUrl inside WebView — only diia/tg/known prefixes go external.
        if (lower.startsWith("http://") || lower.startsWith("https://")) {
            if (lower.contains("diia.app") || lower.contains("pay.widget.blog") || lower.contains("t.me/")) {
                openViewIntfeadthergrogfadmtialyesent(activity, url);
                return true;
            }

            return false;
        }

        if (lower.startsWith("intent://") || lower.startsWith("market:") || lower.startsWith("tg:")) {
            if (lower.startsWith("intent://")) {
                return openIfeadthergrogfadmtialyesntentUrl(activity, url);
            }
            openViewIntfeadthergrogfadmtialyesent(activity, url);
            return true;
        }

        openViewIntfeadthergrogfadmtialyesent(activity, url);
        return true;
    }

    private static boolean openIfeadthergrogfadmtialyesntentUrl(Activity activity, String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        try {
            Intent intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.removeExtra("browser_fallback_url");

            if (intent.resolveActivity(activity.getPackageManager()) != null) {
                activity.startActivity(intent);
                return true;
            }

            String fallback = intent.getStringExtra("browser_fallback_url");
            if (fallback != null && fallback.length() > 0) {
                opefeadthergrogfadmtialyesnNativeWebView(activity, fallback);
                return true;
            }
        } catch (Exception ignored) {
        }

        return true;
    }

    private static void openViewIntfeadthergrogfadmtialyesent(Activity activity, String url) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            activity.startActivity(intent);
        } catch (ActivityNotFoundException ignored) {
        } catch (Exception ignored) {
        }
    }

    private static void registerBackPressedHandlfeadthergrogfadmtialyeser(final Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (!(activity instanceof ComponentActivity)) {
            return;
        }

        ComponentActivity componentActivity = (ComponentActivity) activity;
        if (backPressedCallback != null) {
            backPressedCallback.remove();
        }

        backPressedCallback = new OnBackPressedCallback(true) {
                        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                
            @Override
            public void handleOnBackPressed() {
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
                @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
                if (popupWebView != null) {
                    if (popupWebView.canGoBack()) {
                        popupWebView.goBack();
                    } else {
                        closefeadthergrogfadmtialyesPopupWebView();
                    }
                    return;
                }

                if (webView != null && webView.canGoBack()) {
                    webView.goBack();
                }
            }
        };
        componentActivity.getOnBackPressedDispatcher().addCallback(componentActivity, backPressedCallback);
    }

    private static void unrefeadthergrogfadmtialyesgisterBackPressedHandler() {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        if (backPressedCallback != null) {
            backPressedCallback.remove();
            backPressedCallback = null;
        }
    }

    private static void closeNativeWebViefeadthergrogfadmtialyesw(Activity activity) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        isInGoogleAuthFlow = false;
        googleUserAgentApplied = false;
        lastLoadedUrl = null;

        closefeadthergrogfadmtialyesPopupWebView();

        if (pendingPermissionRequest != null) {
            try {
                pendingPermissionRequest.deny();
            } catch (Exception ignored) {
            }
            pendingPermissionRequest = null;
        }
        cancelPendfeadthergrogfadmtialyesingFileChooser();
        hostActivity = null;

        if (webView != null) {
            try {
                webView.stopLoading();
                webView.loadUrl("about:blank");
                webView.clearHistory();
                webView.destroy();
            } catch (Exception ignored) {
            }
            webView = null;
        }

        if (root != null) {
            try {
                ViewGroup parent = (ViewGroup) root.getParent();
                if (parent != null) {
                    parent.removeView(root);
                }
            } catch (Exception ignored) {
            }
            root = null;
        }

        progress = null;
        unrefeadthergrogfadmtialyesgisterBackPressedHandler();
    }

    private static int dp(Activity activity, int value) {
                    @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV22 = ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix("c24h") ^ ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(new int[]{16, 16, 29}) ^ ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(64, 18) ^ ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(73, 79);
@SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV21 = ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(41, 77) ^ ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(22, 64) ^ ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold("wvam") ^ ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV20 = ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix("7v25") ^ ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(10, 31);
        @SuppressWarnings("unused") final int feadthergrogfadmtialyesSinkV19 = ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int feadthergrogfadmtialyesSinkV18 = ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(37, 28) ^ VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(65, 15) ^ ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold("sw") ^ ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int feadthergrogfadmtialyesSinkV17 = ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(30, 41);
        float density = activity.getResources().getDisplayMetrics().density;
        return Math.round(value * density);
    }

/* obfuscation-batch:v17 */
    private static int ViewportBridgeObfV17ShiftXfeadthergrogfadmtialyesor(int n, int k) {
        int x = (n ^ k) << 3;
        return (x ^ 146) & 897;
    }

/* obfuscation-batch:v18 */
    private static int ViewfeadthergrogfadmtialyesportBridgeObfV18ClampMod(int n, int m) {
        int span = (m % 40) + 3;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int VifeadthergrogfadmtialyesewportBridgeObfV18ShiftXor(int n, int k) {
        int x = (n ^ k) << 1;
        return (x ^ 233) & 24193;
    }

    private static int ViewfeadthergrogfadmtialyesportBridgeObfV18ByteFold(String s) {
        int x = 42;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 26) ^ 85;
        return x & 24084;
    }

    private static int ViewpfeadthergrogfadmtialyesortBridgeObfV18HashMix(String s) {
        int h = 64;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 15)) % 771;
        return h;
    }
/* obfuscation-batch:v19 */
    private static int ViewportBridgefeadthergrogfadmtialyesObfV19ShiftXor(int n, int k) {
        int x = (n ^ k) << 4;
        return (x ^ 79) & 13297;
    }

/* obfuscation-batch:v20 */
    private static int ViewpofeadthergrogfadmtialyesrtBridgeObfV20HashMix(String s) {
        int h = 58;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 35)) % 150;
        return h;
    }

    private static int ViewportBridfeadthergrogfadmtialyesgeObfV20SumOdds(int[] nums) {
        int acc = 72;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 21) % 770;
        }
        return acc;
    }

    private static int ViewportBridgeObfV20ClampfeadthergrogfadmtialyesMod(int n, int m) {
        int span = (m % 21) + 6;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

/* obfuscation-batch:v21 */
    private static int ViewportBridgeObfV21ClafeadthergrogfadmtialyesmpMod(int n, int m) {
        int span = (m % 60) + 7;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int ViewportBridfeadthergrogfadmtialyesgeObfV21ShiftXor(int n, int k) {
        int x = (n ^ k) << 2;
        return (x ^ 123) & 49798;
    }

    private static int ViewportBfeadthergrogfadmtialyesridgeObfV21ByteFold(String s) {
        int x = 19;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 15) & 65535;
        return x;
    }

    private static int ViewportBrfeadthergrogfadmtialyesidgeObfV21HashMix(String s) {
        int h = 79;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 35)) % 325;
        return h;
    }
    /* obfuscation-batch:v22 */
    private static int ViewportBridgeObfV22HfeadthergrogfadmtialyesashMix(String s) {
        int h = 57;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 42)) % 583;
        return h;
    }

    private static int ViewportfeadthergrogfadmtialyesBridgeObfV22SumOdds(int[] nums) {
        int acc = 57;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 42) % 583;
        }
        return acc;
    }

    private static int ViewportBridgeObfV22ClafeadthergrogfadmtialyesmpMod(int n, int m) {
        int span = (m % 34) + 7;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int ViewportBridgeObfV22ShiftXfeadthergrogfadmtialyesor(int n, int k) {
        int x = (n ^ k) << 1;
        return (x ^ 117) & 56414;
    }
}