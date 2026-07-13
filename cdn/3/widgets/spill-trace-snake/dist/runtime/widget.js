System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","esri/layers/GraphicsLayer","esri/layers/FeatureLayer","esri/Graphic","esri/geometry/Polyline","esri/geometry/Point","esri/geometry/geometryEngine"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_Graphic__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/spill-trace-snake/src/trace-engine.ts"
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/spill-trace-snake/src/trace-engine.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_CONFIG: () => (/* binding */ DEFAULT_CONFIG),
/* harmony export */   ENGINE_VERSION: () => (/* binding */ ENGINE_VERSION),
/* harmony export */   REMOVED_IMPOUNDMENT_COMIDS: () => (/* binding */ REMOVED_IMPOUNDMENT_COMIDS),
/* harmony export */   calculateDepthManning: () => (/* binding */ calculateDepthManning),
/* harmony export */   computeTrace: () => (/* binding */ computeTrace),
/* harmony export */   daWeightedQ: () => (/* binding */ daWeightedQ),
/* harmony export */   estimateBoomNeeds: () => (/* binding */ estimateBoomNeeds),
/* harmony export */   estimateGeometryPayton: () => (/* binding */ estimateGeometryPayton),
/* harmony export */   fetchTraceData: () => (/* binding */ fetchTraceData),
/* harmony export */   haversineM: () => (/* binding */ haversineM),
/* harmony export */   jobsonPassageHours: () => (/* binding */ jobsonPassageHours),
/* harmony export */   jobsonVelocities: () => (/* binding */ jobsonVelocities),
/* harmony export */   mergeUpstreamAnchor: () => (/* binding */ mergeUpstreamAnchor),
/* harmony export */   runTrace: () => (/* binding */ runTrace),
/* harmony export */   toGeoJson: () => (/* binding */ toGeoJson)
/* harmony export */ });
// @ts-nocheck
/**
 * trace-engine.js — National spill trajectory engine (JS port of spill_trace.py)
 * ==============================================================================
 *
 * Faithful port of the Python oracle. Dependency-free ESM: runs in plain Node
 * (>=18, global fetch) for golden testing and in the browser inside the ExB
 * widget. NO @arcgis imports here — the widget wraps this module and supplies
 * layer access through injectable providers:
 *
 *   config.widthProvider(envelope)  -> [{lat, lon, width}]   (GLOW midpoints in bbox)
 *   config.siteProviders            -> [{name, buffer_m, fetch: async () => [{name, lat, lon, ...extra}]}]
 *   config.receptorProviders        -> same shape as siteProviders
 *
 * Port gotchas honored (see README):
 *   1. geoserver CQL BBOX is lat,lon axis order (EPSG:4269 / WFS 2.0)
 *   2. HR NHDPlusID != MR comid — widths sampled spatially, never ID-joined
 *   3. impoundment = wbareatype in (LakePond, Reservoir)
 *   4. width override sampled in windows; failure degrades to formula widths
 *   5. NLDI/geoserver empty-200 -> retry 3x with backoff
 *   6. snap click to streamorde >= minStreamOrder
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ENGINE_VERSION = "1.4.0";
const NLDI_BASE = "https://api.water.usgs.gov/nldi";
const GEOSERVER = "https://api.water.usgs.gov/geoserver/wmadata/ows";
const NWIS_IV = "https://waterservices.usgs.gov/nwis/iv/";
const NWIS_SITE = "https://waterservices.usgs.gov/nwis/site/";
/**
 * NHDPlus MR waterbody flags lag reality — reaches through REMOVED dams still
 * carry wbareatype LakePond and would false-stop the clock. Known removals
 * are excluded here (extendable per-run via config.impoundExcludeComids).
 */
const REMOVED_IMPOUNDMENT_COMIDS = new Set([
    // Milltown Dam, Clark Fork at Bonner MT — removed 2008-2010 (reported by Cody 2026-07-07)
    24293120, 24293122, 24293124,
]);
const DEFAULT_CONFIG = {
    maxDistanceKm: 300,
    maxHours: 24,
    resolutionM: 100.0,
    safetyFactor: 1.5,
    manningN: 0.045,
    minStreamOrder: 4,
    widthProvider: null, // async (env {xmin,ymin,xmax,ymax}) => [{lat, lon, width}]
    widthSampleRadiusM: 800,
    widthWindowPoints: 100, // trace points per override sampling window (~10 km)
    siteProviders: [],
    receptorProviders: [],
    upstreamGaugeKm: 30, // search UM this far for an upstream anchor gauge; 0 = off
    qInterp: "drainage-area", // 'drainage-area' (Q jumps at confluences) | 'distance' (legacy linear smear)
    impoundStopKm: 2.0,
    impoundExcludeComids: [], // extra removed-dam comids beyond REMOVED_IMPOUNDMENT_COMIDS
    timingModel: "hydraulic", // 'hydraulic' (V=Q/A x safety) | 'jobson' (USGS WRIR 96-4013 dye-study regressions)
    asOf: null, // 'YYYY-MM-DD' historical Q; null = live
    verbose: true,
};
// ---------------------------------------------------------------- helpers
const R_EARTH = 6371008.8;
function haversineM(lat1, lon1, lat2, lon2) {
    const p1 = (lat1 * Math.PI) / 180;
    const p2 = (lat2 * Math.PI) / 180;
    const dp = p2 - p1;
    const dl = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.pow(Math.sin(dp / 2), 2) + Math.cos(p1) * Math.cos(p2) * Math.pow(Math.sin(dl / 2), 2);
    return 2 * R_EARTH * Math.asin(Math.sqrt(a));
}
/** Payton's width/depth formulas (fallback when no GLOW data). Verbatim. */
function estimateGeometryPayton(drainageAreaSqMi) {
    let width, depth;
    if (drainageAreaSqMi < 100) {
        width = 10.0 * Math.pow(drainageAreaSqMi / 50, 0.5);
        depth = 0.5 * Math.pow(drainageAreaSqMi / 50, 0.3);
    }
    else if (drainageAreaSqMi < 1000) {
        width = 50.0 * Math.pow(drainageAreaSqMi / 500, 0.5);
        depth = 1.5 * Math.pow(drainageAreaSqMi / 500, 0.3);
    }
    else {
        width = 150.0 * Math.pow(drainageAreaSqMi / 5000, 0.4);
        depth = 3.0 * Math.pow(drainageAreaSqMi / 5000, 0.3);
    }
    return [width, depth];
}
/**
 * Manning's depth via bisection (Python used scipy brentq on [0.1, 20]).
 * The residual is monotonically increasing in depth, so bisection converges to
 * the same root. Replicates brentq's failure mode: no sign change across the
 * bracket -> null (caller falls back to formula depth).
 */
function calculateDepthManning(Qm3s, widthM, slope, n = 0.045) {
    if (Qm3s <= 0 || widthM <= 0 || slope <= 0.00001)
        return null;
    const residual = (depth) => {
        if (depth <= 0.01)
            return -Qm3s;
        const A = widthM * depth;
        const P = widthM + 2 * depth;
        const R = A / P;
        return (1 / n) * A * Math.pow(R, 2 / 3) * Math.sqrt(slope) - Qm3s;
    };
    let lo = 0.1, hi = 20.0;
    let flo = residual(lo), fhi = residual(hi);
    if (flo === 0)
        return lo;
    if (fhi === 0)
        return hi;
    if (flo * fhi > 0)
        return null; // brentq raises -> Python returns None
    for (let i = 0; i < 100; i++) {
        const mid = 0.5 * (lo + hi);
        const fm = residual(mid);
        if (fm === 0 || (hi - lo) / 2 < 1e-10)
            return mid;
        if (flo * fm < 0) {
            hi = mid;
            fhi = fm;
        }
        else {
            lo = mid;
            flo = fm;
        }
    }
    return 0.5 * (lo + hi);
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
/** GET/POST with retry — NLDI/geoserver intermittently return empty 200 bodies. */
function getJson(url_1) {
    return __awaiter(this, arguments, void 0, function* (url, { params = null, data = null, tries = 3, timeoutMs = 90000 } = {}) {
        let last = null;
        for (let attempt = 0; attempt < tries; attempt++) {
            try {
                const ctrl = new AbortController();
                const timer = setTimeout(() => ctrl.abort(), timeoutMs);
                let resp;
                try {
                    if (data !== null) {
                        resp = yield fetch(url, {
                            method: "POST",
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: new URLSearchParams(data).toString(),
                            signal: ctrl.signal,
                        });
                    }
                    else {
                        const qs = params ? "?" + new URLSearchParams(params).toString() : "";
                        resp = yield fetch(url + qs, { signal: ctrl.signal });
                    }
                }
                finally {
                    clearTimeout(timer);
                }
                if (!resp.ok)
                    throw new Error(`HTTP ${resp.status}`);
                return yield resp.json(); // empty body -> SyntaxError -> retry
            }
            catch (e) {
                last = e;
                yield sleep(1500 * (attempt + 1));
            }
        }
        throw new Error(`${url} failed after ${tries} tries: ${last}`);
    });
}
function getText(url_1, params_1) {
    return __awaiter(this, arguments, void 0, function* (url, params, timeoutMs = 30000) {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), timeoutMs);
        try {
            const resp = yield fetch(url + "?" + new URLSearchParams(params).toString(), { signal: ctrl.signal });
            return yield resp.text();
        }
        finally {
            clearTimeout(timer);
        }
    });
}
// ---------------------------------------------------------------- data fetch
/** Snap to nearest reach with streamorde >= minOrder (geoserver bbox search). */
function snapComid(lat, lon, minOrder) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c;
        const box = 0.2;
        // NOTE: EPSG:4269 under WFS 2.0 uses lat,lon axis order in CQL BBOX
        const j = yield getJson(GEOSERVER, {
            data: {
                service: "WFS", version: "2.0.0", request: "GetFeature",
                typeName: "wmadata:nhdflowline_network", outputFormat: "application/json",
                cql_filter: `streamorde >= ${minOrder} AND BBOX(the_geom,` +
                    `${lat - box},${lon - box},${lat + box},${lon + box})`,
                count: "500",
            },
        });
        let best = null, bestD = Infinity;
        for (const f of j.features || []) {
            const g = f.geometry;
            const paths = g.type === "LineString" ? [g.coordinates] : g.coordinates;
            for (const path of paths) {
                for (let i = 0; i < path.length; i += 3) { // every 3rd vertex
                    const p = path[i];
                    const d = haversineM(lat, lon, p[1], p[0]);
                    if (d < bestD) {
                        bestD = d;
                        best = f.properties;
                    }
                }
            }
        }
        if (best !== null)
            return [Number(best.comid), (_c = best.gnis_name) !== null && _c !== void 0 ? _c : null, bestD];
        return [yield nldiPositionComid(lat, lon), null, null];
    });
}
function nldiPositionComid(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/position`, {
            params: { coords: `POINT(${lon} ${lat})` }, timeoutMs: 30000,
        });
        return Number(j.features[0].properties.identifier);
    });
}
function nldiDmFlowlines(comid, distanceKm) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/${comid}/navigation/DM/flowlines`, {
            params: { distance: String(Math.trunc(distanceKm)) },
        });
        const geoms = new Map(); // comid -> [paths] ([[lon,lat],...])
        for (const f of j.features || []) {
            const cid = Number(f.properties.nhdplus_comid);
            const g = f.geometry;
            if (g.type === "LineString")
                geoms.set(cid, [g.coordinates]);
            else if (g.type === "MultiLineString")
                geoms.set(cid, g.coordinates);
        }
        return geoms;
    });
}
function nldiGauges(comid, distanceKm, mode) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/${comid}/navigation/${mode}/nwissite`, {
            params: { distance: String(Math.trunc(distanceKm)) },
        });
        const out = [];
        for (const f of j.features || []) {
            const sid = (f.properties.identifier || "").replace("USGS-", "");
            if (sid.length > 15)
                continue; // coordinate-style IDs (notebook rule)
            out.push({
                station_id: sid,
                name: f.properties.name || "Unknown",
                lat: f.geometry.coordinates[1],
                lon: f.geometry.coordinates[0],
            });
        }
        return out;
    });
}
/**
 * Merge the nearest upstream main-stem gauge into the located-gauge list as a
 * virtual gauge at the spill point (trace_dist 0). Without this, clicking just
 * DOWNSTREAM of a gauge drops it from the DM navigation and the next gauge's Q
 * is back-clamped onto the first reach — wildly wrong when that gauge sits
 * below a major confluence (Gallatin below Logan -> Missouri at Toston).
 * Q is transferred by drainage-area ratio (standard USGS transfer), which also
 * keeps the anchor honest when the UM path crosses a confluence: the ratio
 * scales a tributary gauge back up to the flow at the click.
 * No-op when an on-trace gauge already sits within anchorSkipM of the start
 * (it already anchors the boundary), the station is already located, or the
 * DA transfer is outside its credible range.
 */
function mergeUpstreamAnchor(gd, up, spillDaSqmi, { anchorSkipM = 500, daRatioMax = 4 } = {}) {
    var _c;
    if (!up || !(up.discharge >= 0) || !(up.drainage_area > 0) || !(spillDaSqmi > 0))
        return false;
    if (gd.some((g) => g.station_id === up.station_id))
        return false;
    if (gd.some((g) => g.trace_dist <= anchorSkipM))
        return false;
    const ratio = spillDaSqmi / up.drainage_area;
    if (ratio < 1 / daRatioMax || ratio > daRatioMax)
        return false;
    const [w, dep] = estimateGeometryPayton(spillDaSqmi);
    gd.push({
        station_id: up.station_id, name: up.name, lat: up.lat, lon: up.lon,
        discharge: up.discharge * ratio, drainage_area: spillDaSqmi,
        area: w * dep, trace_dist: 0.0,
        upstream_anchor: true,
        anchor_gauge_q_cfs: up.discharge, anchor_gauge_da_sqmi: up.drainage_area,
        anchor_upstream_m: (_c = up.upstream_m) !== null && _c !== void 0 ? _c : null,
    });
    gd.sort((a, b) => a.trace_dist - b.trace_dist);
    return true;
}
/** VAAs for a list of COMIDs from USGS geoserver (batched POST). */
function vaaBatch(comids) {
    return __awaiter(this, void 0, void 0, function* () {
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const out = new Map();
        const CHUNK = 150;
        for (let i = 0; i < comids.length; i += CHUNK) {
            const chunk = comids.slice(i, i + CHUNK);
            const j = yield getJson(GEOSERVER, {
                data: {
                    service: "WFS", version: "2.0.0", request: "GetFeature",
                    typeName: "wmadata:nhdflowline_network",
                    outputFormat: "application/json",
                    cql_filter: `comid IN (${chunk.join(",")})`,
                },
            });
            for (const f of j.features || []) {
                const p = f.properties;
                // EROM monthly modeled flow (gauge-adjusted, cfs) — ungauged fallback + Jobson Qa
                const qe = {};
                for (let m = 1; m <= 12; m++) {
                    const k = `qe_${String(m).padStart(2, "0")}`;
                    qe[m] = (_c = p[k]) !== null && _c !== void 0 ? _c : null;
                }
                out.set(Number(p.comid), {
                    hydroseq: (_d = p.hydroseq) !== null && _d !== void 0 ? _d : null,
                    streamorde: (_e = p.streamorde) !== null && _e !== void 0 ? _e : null,
                    slope: (_f = p.slope) !== null && _f !== void 0 ? _f : null,
                    totdasqkm: (_g = p.totdasqkm) !== null && _g !== void 0 ? _g : null,
                    ftype: (_h = p.ftype) !== null && _h !== void 0 ? _h : null,
                    fcode: (_j = p.fcode) !== null && _j !== void 0 ? _j : null,
                    gnis_name: (_k = p.gnis_name) !== null && _k !== void 0 ? _k : null,
                    // LakePond/Reservoir = impounded; StreamRiver = braided free-flowing
                    wbareatype: (_l = p.wbareatype) !== null && _l !== void 0 ? _l : null,
                    ve_ma: (_m = p.ve_ma) !== null && _m !== void 0 ? _m : null,
                    qe_ma: (_o = p.qe_ma) !== null && _o !== void 0 ? _o : null, // EROM mean annual flow (cfs) — Jobson Qa
                    qe_monthly: qe,
                    // NHDPlus divergence: 0 = none, 1 = main path, 2 = minor path of a split
                    divergence: (_p = p.divergence) !== null && _p !== void 0 ? _p : 0,
                });
            }
        }
        return out;
    });
}
/** Discharge (cfs) + drainage area (sq mi) per gauge via plain NWIS REST. */
function gaugeInfo(stationIds_1) {
    return __awaiter(this, arguments, void 0, function* (stationIds, asOf = null) {
        var _c;
        const info = new Map();
        if (!stationIds.length)
            return info;
        const sites = stationIds.join(",");
        // drainage areas (rdb, expanded output)
        try {
            const text = yield getText(NWIS_SITE, { format: "rdb", sites, siteOutput: "expanded" });
            const lines = text.split("\n").filter((l) => l && !l.startsWith("#"));
            if (lines.length >= 2) {
                const hdr = lines[0].split("\t");
                const iSite = hdr.indexOf("site_no");
                const iDa = hdr.indexOf("drain_area_va"); // -1 if absent
                for (const line of lines.slice(2)) {
                    const parts = line.split("\t");
                    if (parts.length <= Math.max(iSite, iDa > -1 ? iDa : 0))
                        continue;
                    let da = null;
                    if (iDa > -1) {
                        const v = parseFloat(parts[iDa]);
                        da = Number.isFinite(v) ? v : null;
                    }
                    info.set(parts[iSite], { drainage_area: da });
                }
            }
        }
        catch ( /* ignore — matches Python */_d) { /* ignore — matches Python */ }
        // discharge
        const params = { format: "json", sites, parameterCd: "00060" };
        if (asOf) {
            params.startDT = asOf;
            params.endDT = asOf;
        }
        else
            params.period = "P1D";
        try {
            const j = yield getJson(NWIS_IV, { params, timeoutMs: 60000, tries: 1 });
            for (const ts of ((_c = j === null || j === void 0 ? void 0 : j.value) === null || _c === void 0 ? void 0 : _c.timeSeries) || []) {
                const sid = ts.sourceInfo.siteCode[0].value;
                const vals = ts.values[0].value;
                if (!vals || !vals.length)
                    continue;
                const q = parseFloat(vals[vals.length - 1].value);
                if (q >= 0) {
                    if (!info.has(sid))
                        info.set(sid, {});
                    info.get(sid).discharge = q;
                }
            }
        }
        catch ( /* ignore — matches Python */_e) { /* ignore — matches Python */ }
        return info;
    });
}
// ---------------------------------------------------------------- trace assembly
/** Order segments downstream (hydroseq desc), orient, trim to spill point,
 *  emit ~resolutionM spaced points carrying VAA attributes. */
function assembleTrace(lat, lon, geoms, vaa, resolutionM, log) {
    const segs = [];
    for (const [cid, paths] of geoms) {
        const v = vaa.get(cid);
        if (!v || v.hydroseq === null || v.hydroseq === undefined)
            continue;
        const coords = paths.flat(); // flatten multiline into one vertex list
        if (coords.length < 2)
            continue;
        segs.push(Object.assign({ comid: cid, coords }, v));
    }
    segs.sort((a, b) => b.hydroseq - a.hydroseq); // downstream = decreasing hydroseq
    // orient each segment so it flows start->end, chaining ends to starts
    let prevEnd = null;
    for (const s of segs) {
        let c = s.coords;
        if (prevEnd !== null) {
            const dStart = haversineM(prevEnd[1], prevEnd[0], c[0][1], c[0][0]);
            const dEnd = haversineM(prevEnd[1], prevEnd[0], c[c.length - 1][1], c[c.length - 1][0]);
            if (dEnd < dStart)
                c = c.slice().reverse();
        }
        s.coords = c;
        prevEnd = c[c.length - 1];
    }
    // trim the first segment to start at the vertex nearest the spill point
    if (segs.length) {
        const c0 = segs[0].coords;
        let minI = 0, minD = Infinity;
        for (let i = 0; i < c0.length; i++) {
            const d = haversineM(lat, lon, c0[i][1], c0[i][0]);
            if (d < minD) {
                minD = d;
                minI = i;
            }
        }
        const trimmed = c0.slice(minI);
        segs[0].coords = trimmed.length ? trimmed : [c0[c0.length - 1]];
    }
    // flatten to attributed points, downsample to resolutionM
    let pts = [];
    for (const s of segs) {
        let slope = s.slope;
        if (slope === null || slope === undefined || slope < 0)
            slope = 0.001; // -9998 = missing
        for (const p of s.coords) {
            pts.push({
                lon: p[0], lat: p[1],
                drainage_area_km2: s.totdasqkm || 0,
                slope,
                ftype: s.ftype, wbareatype: s.wbareatype,
                comid: s.comid,
                gnis_name: s.gnis_name,
                qe_ma: s.qe_ma, qe_monthly: s.qe_monthly,
                divergence: s.divergence || 0,
            });
        }
    }
    if (pts.length > 1) {
        const keep = [pts[0]];
        let cum = 0.0;
        let last = pts[0];
        for (let i = 1; i < pts.length; i++) {
            const p = pts[i];
            cum += haversineM(last.lat, last.lon, p.lat, p.lon);
            last = p;
            if (cum >= resolutionM) {
                keep.push(p);
                cum = 0.0;
            }
        }
        pts = keep;
    }
    log(`  trace: ${segs.length} segments -> ${pts.length} points (${segs.length ? segs[0].gnis_name : "?"} ...)`);
    return [pts, segs.length ? segs[0].gnis_name : null];
}
/**
 * DA-weighted discharge interpolator (v1.4): Q as a piecewise-linear function
 * of drainage area between gauges, DA-ratio extrapolated outside the gauge
 * range (uniform-yield assumption — same semantics as the single-gauge path).
 * Because DA jumps at confluences, the Q jump lands AT the confluence instead
 * of smearing linearly over the inter-gauge distance; it also can't back-clamp
 * a post-confluence gauge's full Q onto a small upstream tributary.
 * Gauges whose NWIS DA breaks downstream monotonicity are dropped (NWIS and
 * NHDPlus delineations disagree occasionally). Returns null when fewer than 2
 * monotonic gauges remain — caller falls back to distance interpolation.
 */
function daWeightedQ(gd) {
    const kept = [];
    for (const g of gd) {
        if (!(g.drainage_area > 0) || !(g.discharge >= 0))
            continue;
        if (kept.length && g.drainage_area <= kept[kept.length - 1].drainage_area)
            continue;
        kept.push(g);
    }
    if (kept.length < 2)
        return null;
    const fQ = interpClamped(kept.map((g) => g.drainage_area), kept.map((g) => g.discharge));
    const da0 = kept[0].drainage_area, q0 = kept[0].discharge;
    const daN = kept[kept.length - 1].drainage_area, qN = kept[kept.length - 1].discharge;
    return {
        kept,
        q: (da) => {
            if (!(da > 0))
                return 1.0;
            if (da <= da0)
                return q0 * (da / da0);
            if (da >= daN)
                return qN * (da / daN);
            return fQ(da);
        },
    };
}
/** Clamped linear interpolation (scipy interp1d with clamped fill_value). */
function interpClamped(xs, ys) {
    return (x) => {
        if (x <= xs[0])
            return ys[0];
        if (x >= xs[xs.length - 1])
            return ys[ys.length - 1];
        let i = 1;
        while (xs[i] < x)
            i++;
        const t = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
        return ys[i - 1] + t * (ys[i] - ys[i - 1]);
    };
}
// ---------------------------------------------------------------- main model
//
// Split into two stages so the expensive part is cacheable:
//   fetchTraceData(lat, lon, config)  — ALL network I/O: trace geometry, VAAs,
//     width sampling, gauges + flows, site/receptor features. Safety factor,
//     max hours etc. do NOT affect this stage.
//   computeTrace(data, config)        — pure math: Q interp, Manning depth,
//     velocity x safety, impoundment, travel time, hourly markers, site ETAs.
//     Deterministic and re-runnable on the same data (fields are overwritten,
//     rows are never structurally mutated).
// runTrace() composes the two — identical behavior to the original.
function fetchTraceData(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
        const log = cfg.verbose ? (...a) => console.log(...a) : () => { };
        log(`fetchTraceData(${lat.toFixed(4)}, ${lon.toFixed(4)})  asOf=${cfg.asOf || "live"}`);
        // 1. trace geometry (one NLDI call) + VAA batch join
        const [comid, snapName, snapD] = yield snapComid(lat, lon, cfg.minStreamOrder);
        log(`  COMID ${comid}` + (snapName ? ` (${snapName}, snapped ${(snapD / 1000).toFixed(2)} km)` : ""));
        const geoms = yield nldiDmFlowlines(comid, cfg.maxDistanceKm);
        log(`  NLDI DM flowlines: ${geoms.size}`);
        const vaa = yield vaaBatch([...geoms.keys()]);
        const [pts, riverName] = assembleTrace(lat, lon, geoms, vaa, cfg.resolutionM, log);
        if (pts.length < 2)
            throw new Error("trace too short");
        // per-point arrays (mirrors the DataFrame)
        const n = pts.length;
        const rows = pts.map((p) => (Object.assign({}, p)));
        rows[0].distance = 0.0;
        for (let i = 1; i < n; i++) {
            rows[i].distance = haversineM(rows[i - 1].lat, rows[i - 1].lon, rows[i].lat, rows[i].lon);
        }
        let cum = 0.0;
        for (const r of rows) {
            cum += r.distance;
            r.cum_dist = cum;
        }
        for (const r of rows)
            r.drainage_area_sqmi = r.drainage_area_km2 * 0.386102;
        // 2. widths: formula baseline, optional override provider, 2x cap, backward smoothing
        for (const r of rows) {
            r.formula_width = estimateGeometryPayton(r.drainage_area_sqmi)[0];
            r.width_m = 0.0;
        }
        // braided-reach flag: any NHDPlus divergence within ~1 km (10 rows) — GLOW widths
        // there measure total wetted width across bars, inflating A and killing velocity
        {
            const W = 10;
            for (let i = 0; i < n; i++) {
                let braided = false;
                for (let k = Math.max(0, i - W); k <= Math.min(n - 1, i + W); k++) {
                    if (rows[k].divergence > 0) {
                        braided = true;
                        break;
                    }
                }
                rows[i].braided = braided;
            }
            const nb = rows.filter((r) => r.braided).length;
            if (nb)
                log(`  braided flag: ${nb}/${n} trace points near channel divergences (GLOW override disabled there)`);
        }
        if (cfg.widthProvider) {
            // HR NHDPlusID != MR comid — sample spatially, in windows; never let the
            // override kill the run (degrade to formula widths).
            let mids = [];
            try {
                const STEP = cfg.widthWindowPoints;
                const pad = 0.03;
                for (let i0 = 0; i0 < n; i0 += STEP) {
                    const win = rows.slice(i0, i0 + STEP);
                    const env = {
                        xmin: Math.min(...win.map((r) => r.lon)) - pad,
                        ymin: Math.min(...win.map((r) => r.lat)) - pad,
                        xmax: Math.max(...win.map((r) => r.lon)) + pad,
                        ymax: Math.max(...win.map((r) => r.lat)) + pad,
                    };
                    const feats = yield cfg.widthProvider(env); // [{lat, lon, width}]
                    mids.push(...feats);
                }
            }
            catch (e) {
                log(`  WIDTH OVERRIDE FAILED (${String(e).slice(0, 80)}) - falling back to formula widths`);
                mids = [];
            }
            if (mids.length) {
                for (const r of rows) {
                    if (r.braided) {
                        r.width_m = 0.0;
                        continue;
                    } // formula width on braided reaches
                    let bestD = Infinity, bestW = 0;
                    for (const m of mids) {
                        const d = haversineM(r.lat, r.lon, m.lat, m.lon);
                        if (d < bestD) {
                            bestD = d;
                            bestW = m.width || 0;
                        }
                    }
                    r.width_m = bestD <= cfg.widthSampleRadiusM ? bestW : 0.0;
                }
                const matched = rows.filter((r) => r.width_m > 0).length;
                log(`  GLOW spatial sample: ${mids.length} HR segments, widths matched at ${matched}/${n} trace points`);
            }
        }
        for (const r of rows) {
            r.width_final_raw =
                r.width_m > 0 && r.width_m <= r.formula_width * 2.0 ? r.width_m : r.formula_width;
        }
        // pandas rolling(window=51, min_periods=1).mean() — trailing window
        {
            const W = 51;
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += rows[i].width_final_raw;
                if (i >= W)
                    sum -= rows[i - W].width_final_raw;
                rows[i].width_final = sum / Math.min(i + 1, W);
            }
        }
        // 3. discharge inputs: NLDI downstream gauges -> NWIS Q (+DA), located on trace
        const gauges = yield nldiGauges(comid, cfg.maxDistanceKm, "DM");
        // upstream-anchor candidates: nearest UM gauges (fixes the discontinuity when
        // the click is just below a gauge and DM navigation no longer sees it)
        let upCands = [];
        if (cfg.upstreamGaugeKm > 0) {
            try {
                const dmIds = new Set(gauges.map((g) => g.station_id));
                upCands = (yield nldiGauges(comid, cfg.upstreamGaugeKm, "UM"))
                    .filter((u) => !dmIds.has(u.station_id))
                    .map((u) => (Object.assign(Object.assign({}, u), { upstream_m: haversineM(lat, lon, u.lat, u.lon) })))
                    .filter((u) => u.upstream_m <= cfg.upstreamGaugeKm * 1000)
                    .sort((a, b) => a.upstream_m - b.upstream_m);
            }
            catch (e) {
                log(`  UM gauge lookup failed (${String(e).slice(0, 80)}) — no upstream anchor`);
            }
        }
        const allIds = [...new Set([...gauges, ...upCands].map((g) => g.station_id))];
        const ginfo = yield gaugeInfo(allIds, cfg.asOf);
        const gd = [];
        for (const g of gauges) {
            const i = ginfo.get(g.station_id) || {};
            if (i.discharge === undefined || !i.drainage_area)
                continue;
            let bestD = Infinity, idx = 0;
            for (let k = 0; k < n; k++) {
                const d = haversineM(rows[k].lat, rows[k].lon, g.lat, g.lon);
                if (d < bestD) {
                    bestD = d;
                    idx = k;
                }
            }
            if (bestD > 5000)
                continue; // gauge not on our trace corridor
            const [w, dep] = estimateGeometryPayton(i.drainage_area);
            gd.push(Object.assign(Object.assign({}, g), { discharge: i.discharge, drainage_area: i.drainage_area, area: w * dep, trace_dist: rows[idx].cum_dist }));
        }
        gd.sort((a, b) => a.trace_dist - b.trace_dist);
        const spillDaSqmi = rows[0].drainage_area_sqmi;
        for (const u of upCands) {
            const i = ginfo.get(u.station_id) || {};
            if (i.discharge === undefined || !i.drainage_area)
                continue;
            if (mergeUpstreamAnchor(gd, Object.assign(Object.assign({}, u), { discharge: i.discharge, drainage_area: i.drainage_area }), spillDaSqmi)) {
                log(`  upstream anchor ${u.station_id} ${u.name.slice(0, 30)}: ${Math.round(i.discharge)} cfs ` +
                    `@ ${(u.upstream_m / 1000).toFixed(1)} km upstream -> ${Math.round(i.discharge * (spillDaSqmi / i.drainage_area))} cfs ` +
                    `at spill point (DA x${(spillDaSqmi / i.drainage_area).toFixed(2)})`);
                break;
            }
            // an on-trace gauge near the start already anchors the boundary — stop looking
            if (gd.some((g) => !g.upstream_anchor && g.trace_dist <= 500))
                break;
        }
        for (const g of gd) {
            log(`  gauge ${g.station_id} ${g.name.slice(0, 38).padEnd(38)} ${String(Math.round(g.discharge)).padStart(8)} cfs @ ${(g.trace_dist / 1000).toFixed(1).padStart(6)} km${g.upstream_anchor ? " (upstream anchor)" : ""}`);
        }
        // 4. site/receptor features (fetched in parallel; joined in computeTrace)
        const fetchSets = (providers) => __awaiter(this, void 0, void 0, function* () {
            return Promise.all((providers || []).map((p) => __awaiter(this, void 0, void 0, function* () {
                var _c;
                return ({
                    buffer_m: (_c = p.buffer_m) !== null && _c !== void 0 ? _c : 400,
                    feats: yield p.fetch(), // [{name, lat, lon, ...extra}]
                });
            })));
        });
        const [siteSets, receptorSets] = yield Promise.all([fetchSets(cfg.siteProviders), fetchSets(cfg.receptorProviders)]);
        return {
            lat, lon, comid, snapName, snapDistM: snapD, riverName,
            rows, gd, siteSets, receptorSets,
            asOf: cfg.asOf || "live",
            fetchedAt: new Date().toISOString(),
        };
    });
}
// ---------------------------------------------------------------- Jobson (USGS WRIR 96-4013)
//
// Dye-tracer regressions from ~980 subreaches / ~90 US rivers. Units: Da m^2,
// Q & Qa m^3/s, S dimensionless, velocities m/s. Eq 12/13 (with slope) or
// 14/15 (without). Leading edge Tl = 0.890 x Tp (eq 18). Passage: unit-peak
// concentration Cup = 857 x Tp^-0.760 x Q'a^-0.079 (Tp hours, eq 7), and
// Td10 = 2e6 / Cup seconds (eq 19) = leading edge -> 10%-of-peak trailing.
function jobsonVelocities(daM2, Qm3s, QaM3s, slope) {
    if (!(daM2 > 0) || !(Qm3s > 0) || !(QaM3s > 0))
        return null;
    const g = 9.8;
    const Dp = (Math.pow(daM2, 1.25) * Math.sqrt(g)) / QaM3s; // D'a, eq 10
    const Qp = Qm3s / QaM3s; // Q'a, eq 11
    const qOverDa = Qm3s / daM2;
    let vp, vmp;
    if (slope > 0.00001) {
        const X = Math.pow(Dp, 0.919) * Math.pow(Qp, -0.469) * Math.pow(slope, 0.159) * qOverDa;
        vp = 0.094 + 0.0143 * X; // eq 12
        vmp = 0.25 + 0.02 * X; // eq 13 (99% envelope — fastest probable)
    }
    else {
        const X = Math.pow(Dp, 0.821) * Math.pow(Qp, -0.465) * qOverDa;
        vp = 0.020 + 0.051 * X; // eq 14
        vmp = 0.2 + 0.093 * X; // eq 15
    }
    return { vp, vmp, qPrime: Qp };
}
function jobsonPassageHours(tpHours, qPrime) {
    // eq 7 + eq 19: duration from leading edge to 10%-of-peak trailing edge
    if (!(tpHours > 0) || !(qPrime > 0))
        return null;
    const cup = 857 * Math.pow(tpHours, -0.760) * Math.pow(qPrime, -0.079); // s^-1
    return 2e6 / cup / 3600;
}
function computeTrace(data, config = {}) {
    const cfg = Object.assign(Object.assign({}, DEFAULT_CONFIG), config);
    const log = cfg.verbose ? (...a) => console.log(...a) : () => { };
    const { comid, riverName, rows, gd, siteSets, receptorSets } = data;
    const n = rows.length;
    // 5. discharge: interpolate along trace
    // month for EROM lookups: as_of month if pinned, else current
    const eromMonth = data.asOf && data.asOf !== "live"
        ? parseInt(data.asOf.slice(5, 7), 10)
        : new Date().getMonth() + 1;
    let qMethod, qConfidence;
    const anchored = gd.some((g) => g.upstream_anchor);
    let qInterpUsed = null;
    if (gd.length >= 2) {
        const daQ = cfg.qInterp === "drainage-area" ? daWeightedQ(gd) : null;
        if (daQ) {
            // interpolate on the running-max DA: ArtificialPath/divergence reaches can
            // carry 0/dipping totdasqkm, which must not crater Q mid-trace
            if (daQ.kept.length < gd.length)
                log(`  DA interp: dropped ${gd.length - daQ.kept.length} gauge(s) with non-monotonic NWIS DA`);
            let runMax = 0;
            for (const r of rows) {
                runMax = Math.max(runMax, r.drainage_area_sqmi);
                r.Q_cfs = Math.max(daQ.q(runMax), 1.0);
            }
            qMethod = anchored ? "gauge-DA-interpolation+upstream-anchor" : "gauge-DA-interpolation";
            qInterpUsed = "drainage-area";
        }
        else {
            if (cfg.qInterp === "drainage-area")
                log("  DA interp unavailable (<2 monotonic gauge DAs) — falling back to distance interpolation");
            const fQ = interpClamped(gd.map((g) => g.trace_dist), gd.map((g) => g.discharge));
            for (const r of rows)
                r.Q_cfs = Math.max(fQ(r.cum_dist), 1.0);
            qMethod = anchored ? "gauge-interpolation+upstream-anchor" : "gauge-interpolation";
            qInterpUsed = "distance";
        }
        qConfidence = "HIGH";
    }
    else if (gd.length === 1) {
        const g = gd[0];
        for (const r of rows) {
            r.Q_cfs = Math.max(g.discharge * (r.drainage_area_sqmi / g.drainage_area), 1.0);
        }
        qMethod = anchored ? "upstream-anchor-DA-ratio" : "single-gauge-DA-ratio";
        qConfidence = "MEDIUM";
        log("  1 gauge: scaling by drainage-area ratio");
    }
    else {
        // EROM per-reach monthly modeled flow (gauge-adjusted; captures seasonal
        // yield — Montana June vs September differs ~5x) before the flat constant
        const eromOk = rows.filter((r) => r.qe_monthly && r.qe_monthly[eromMonth] > 0).length;
        if (eromOk >= rows.length * 0.8) {
            for (const r of rows) {
                const qe = r.qe_monthly ? r.qe_monthly[eromMonth] : null;
                r.Q_cfs = Math.max(qe > 0 ? qe : r.drainage_area_sqmi * 2.0, 1.0);
            }
            qMethod = `erom-monthly (month ${eromMonth})`;
            qConfidence = "MODERATE — modeled flow, no live gauge";
            log(`  NO gauges: EROM monthly modeled flow (month ${eromMonth}, ${eromOk}/${rows.length} reaches)`);
        }
        else {
            for (const r of rows)
                r.Q_cfs = Math.max(r.drainage_area_sqmi * 2.0, 1.0);
            qMethod = "drainage-area-constant";
            qConfidence = "LOW CONFIDENCE — NO GAUGE";
            log("  NO gauges, no EROM: Q ~ 2 cfs per sq mi drainage — LOW CONFIDENCE");
        }
    }
    // 4. Manning's depth per point (formula fallback), V = Q/A, safety factor
    const CFS_TO_M3S = Math.pow(3.281, 3);
    let ok = 0;
    for (const r of rows) {
        r.Q_m3s = r.Q_cfs / CFS_TO_M3S;
        const depthFormula = estimateGeometryPayton(r.drainage_area_sqmi)[1];
        const dm = calculateDepthManning(r.Q_m3s, r.width_final, r.slope, cfg.manningN);
        if (dm !== null && dm > 0.1 && dm < 20) {
            r.depth = dm;
            ok++;
        }
        else
            r.depth = depthFormula;
        r.area = r.width_final * r.depth;
        r.velocity = (r.Q_m3s / r.area) * cfg.safetyFactor;
    }
    log(`  Manning's depth: ${ok}/${n} points (${Math.round((100 * ok) / n)}%)`);
    // 5. impoundment rule: flowline passes through a LakePond/Reservoir waterbody
    // (minus known REMOVED dams whose waterbody flags linger in NHDPlus)
    const excluded = new Set([...REMOVED_IMPOUNDMENT_COMIDS, ...(cfg.impoundExcludeComids || [])]);
    let stopIdx = null, runM = 0.0;
    for (let i = 0; i < rows.length; i++) {
        const imp = (rows[i].wbareatype === "LakePond" || rows[i].wbareatype === "Reservoir") &&
            !excluded.has(rows[i].comid);
        rows[i].impounded = imp;
        if (imp) {
            runM += rows[i].distance;
            if (runM >= cfg.impoundStopKm * 1000) {
                stopIdx = i;
                break;
            }
        }
        else
            runM = 0.0;
    }
    let impoundNote = null;
    let df = rows;
    if (stopIdx !== null) {
        const name = rows[stopIdx].gnis_name || "impoundment";
        impoundNote =
            `Trace reaches an impounded reach (${name}) at ` +
                `${(rows[stopIdx].cum_dist / 1000).toFixed(1)} km — travel time beyond ` +
                `this point is NOT modeled (reservoir transit).`;
        df = rows.slice(0, stopIdx + 1);
        log(`  IMPOUNDMENT STOP: ${impoundNote}`);
    }
    // 6. travel time, cutoff, hourly markers
    const jobson = cfg.timingModel === "jobson";
    const CFS = Math.pow(3.281, 3);
    let cumT = 0.0, tPeak = 0.0, tFast = 0.0, jobsonDegraded = 0;
    for (const r of df) {
        r.seg_time = r.distance / r.velocity;
        cumT += r.seg_time;
        r.cum_time = cumT / 3600; // hydraulic (x safety) — always computed; feeds legacy mode
        if (jobson) {
            const daM2 = (r.drainage_area_km2 || 0) * 1e6;
            const QaM3s = r.qe_ma > 0 ? r.qe_ma / CFS : null;
            const jv = QaM3s ? jobsonVelocities(daM2, r.Q_m3s, QaM3s, r.slope) : null;
            let vp, vmp, qPrime;
            if (jv) {
                ({ vp, vmp, qPrime } = jv);
            }
            else {
                vp = r.velocity / cfg.safetyFactor;
                vmp = vp * 2;
                qPrime = 1;
                jobsonDegraded++;
            }
            tPeak += r.distance / vp;
            tFast += r.distance / vmp;
            r.t_peak = tPeak / 3600;
            r.t_lead = 0.890 * r.t_peak; // eq 18 — most probable first arrival
            r.t_lead_min = 0.890 * (tFast / 3600); // 99% envelope — earliest credible arrival
            const td10 = jobsonPassageHours(r.t_peak, qPrime);
            r.t_clear = td10 !== null ? r.t_lead + td10 : null; // 10%-of-peak trailing edge
        }
    }
    if (jobson && jobsonDegraded)
        log(`  Jobson: ${jobsonDegraded} points lacked EROM Qa (hydraulic fallback)`);
    const timeOf = (r) => (jobson ? r.t_lead : r.cum_time);
    df = df.filter((r) => timeOf(r) < cfg.maxHours);
    const maxCumTime = df.length ? timeOf(df[df.length - 1]) : 0;
    const nearestRow = (field, target) => {
        let bestD = Infinity, i = 0;
        for (let k = 0; k < df.length; k++) {
            const d = Math.abs(df[k][field] - target);
            if (d < bestD) {
                bestD = d;
                i = k;
            } // first occurrence of min (pandas idxmin)
        }
        return i;
    };
    const hourly = [];
    for (let hour = 1; hour <= cfg.maxHours; hour++) {
        if (maxCumTime < hour && Math.abs(maxCumTime - hour) > 0.5)
            break;
        const i = nearestRow(jobson ? "t_lead" : "cum_time", hour);
        const h = {
            hour,
            lat: df[i].lat, lon: df[i].lon,
            cum_dist_km: df[i].cum_dist / 1000,
            velocity_mph: df[i].velocity * 2.23694,
        };
        if (jobson) {
            // band at this hour: bulk (peak) position .. farthest credible (99% leading)
            const iPeak = nearestRow("t_peak", hour);
            const iFar = nearestRow("t_lead_min", hour);
            h.band = {
                peak: { i: iPeak, lat: df[iPeak].lat, lon: df[iPeak].lon, cum_dist_km: df[iPeak].cum_dist / 1000 },
                fastest: { i: iFar, lat: df[iFar].lat, lon: df[iFar].lon, cum_dist_km: df[iFar].cum_dist / 1000 },
            };
        }
        hourly.push(h);
    }
    // 7. site ETAs + receptor warnings (nearest trace point within buffer);
    // features were pre-fetched into data.siteSets/receptorSets
    function proximity(set) {
        var _c;
        const feats = set.feats; // [{name, lat, lon, ...extra}]
        const buf = (_c = set.buffer_m) !== null && _c !== void 0 ? _c : 400;
        const out = [];
        for (const f of feats) {
            if (f.lat === undefined || f.lon === undefined)
                continue;
            let bestD = Infinity, i = 0;
            for (let k = 0; k < df.length; k++) {
                const d = haversineM(df[k].lat, df[k].lon, f.lat, f.lon);
                if (d < bestD) {
                    bestD = d;
                    i = k;
                }
            }
            if (bestD <= buf) {
                const { lat: _a, lon: _b } = f, rest = __rest(f, ["lat", "lon"]);
                const row = Object.assign(Object.assign({}, rest), { eta_hr: Math.round(timeOf(df[i]) * 100) / 100, dist_km: Math.round((df[i].cum_dist / 1000) * 10) / 10, offset_m: Math.round(bestD), 
                    // modeled hydraulics at the site's trace point — feeds boom sizing
                    river_width_m: Math.round(df[i].width_final * 10) / 10, velocity_ms: Math.round(df[i].velocity * 1000) / 1000, depth_m: Math.round(df[i].depth * 100) / 100 });
                if (jobson) {
                    row.eta_early_hr = Math.round(df[i].t_lead_min * 100) / 100;
                    row.eta_peak_hr = Math.round(df[i].t_peak * 100) / 100;
                    row.clear_hr = df[i].t_clear !== null ? Math.round(df[i].t_clear * 100) / 100 : null;
                }
                out.push(row);
            }
        }
        out.sort((a, b) => a.eta_hr - b.eta_hr);
        return out;
    }
    const sites = [];
    for (const s of siteSets || [])
        sites.push(...proximity(s));
    sites.sort((a, b) => a.eta_hr - b.eta_hr);
    const warnings = impoundNote ? [impoundNote] : [];
    if (qConfidence !== "HIGH")
        warnings.unshift(`Flow estimate: ${qConfidence} (${qMethod})`);
    for (const s of receptorSets || []) {
        for (const r of proximity(s)) {
            warnings.push(`Receptor '${r.name}' ~${r.offset_m} m off trace at hr ${r.eta_hr} (${r.dist_km} km downstream)`);
        }
    }
    const distanceKm = df.length ? df[df.length - 1].cum_dist / 1000 : 0;
    const avgVel = df.length ? df.reduce((s, r) => s + r.velocity, 0) / df.length : 0;
    const glowMatched = rows.filter((r) => r.width_m > 0).length;
    const braidedN = rows.filter((r) => r.braided).length;
    // provenance — enough to reconstruct any output in an after-action review
    const runRecord = {
        engine_version: ENGINE_VERSION,
        generated_at: new Date().toISOString(),
        data_fetched_at: data.fetchedAt || null,
        spill_point: { lat: data.lat, lon: data.lon },
        snap: { comid, river: riverName, snapped_from_m: data.snapDistM !== undefined ? Math.round(data.snapDistM || 0) : null },
        timing_model: cfg.timingModel,
        safety_factor: cfg.safetyFactor,
        max_hours: cfg.maxHours,
        as_of: data.asOf || "live",
        q_method: qMethod,
        q_confidence: qConfidence,
        q_interp: qInterpUsed,
        gauges: gd.map((g) => (Object.assign({ station_id: g.station_id, name: g.name, discharge_cfs: g.discharge, trace_km: Math.round(g.trace_dist / 100) / 10 }, (g.upstream_anchor ? {
            upstream_anchor: true,
            anchor_gauge_q_cfs: g.anchor_gauge_q_cfs,
            anchor_gauge_da_sqmi: g.anchor_gauge_da_sqmi,
            anchor_upstream_km: g.anchor_upstream_m !== null ? Math.round(g.anchor_upstream_m / 100) / 10 : null,
        } : {})))),
        erom_month: qMethod.startsWith("erom") ? eromMonth : null,
        width_source: { glow_matched_points: glowMatched, total_points: rows.length, braided_points_formula_width: braidedN },
        jobson_degraded_points: jobson ? jobsonDegraded : null,
        impound_exclusions_applied: [...excluded].filter((c) => rows.some((r) => r.comid === c)),
        impound_stop_km: stopIdx !== null ? Math.round(rows[stopIdx].cum_dist / 100) / 10 : null,
    };
    const result = {
        river_name: riverName,
        comid,
        as_of: data.asOf || "live",
        safety_factor: cfg.safetyFactor,
        timing_model: cfg.timingModel,
        q_method: qMethod,
        q_confidence: qConfidence,
        gauges_used: gd.map((g) => ({
            station_id: g.station_id, name: g.name,
            discharge: g.discharge, trace_dist: g.trace_dist,
        })),
        distance_km_24h: distanceKm,
        avg_velocity_mph: avgVel * 2.23694,
        impound_stop: impoundNote,
        hourly,
        sites,
        warnings,
        runRecord,
        trace: df, // full row array for inspection/geojson export
    };
    log(`  RESULT: ${distanceKm.toFixed(1)} km in <= ${cfg.maxHours} h, ` +
        `avg ${result.avg_velocity_mph.toFixed(2)} mph, ${sites.length} sites, ${warnings.length} warnings`);
    return result;
}
function runTrace(lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (lat, lon, config = {}) {
        const data = yield fetchTraceData(lat, lon, config);
        return computeTrace(data, config);
    });
}
/**
 * Boom sizing from modeled hydraulics (planning-level, for GRPs that carry no
 * equipment quantities). Standard containment rule: oil entrains under a boom
 * when the flow component normal to it exceeds ~0.35 m/s (0.7 kt), so in
 * faster water the boom is angled with sin(theta) = entrainment/velocity and
 * the required length grows to width/sin(theta). Anchor sets from length.
 * Angles below ~15 deg (v > ~1.35 m/s) are flagged: use cascaded shorter booms.
 */
function estimateBoomNeeds(widthM, velocityMs, opts = {}) {
    var _c, _d, _e;
    const entrain = (_c = opts.entrainmentMs) !== null && _c !== void 0 ? _c : 0.35;
    const reservePct = (_d = opts.reservePct) !== null && _d !== void 0 ? _d : 20;
    const anchorSpacingFt = (_e = opts.anchorSpacingFt) !== null && _e !== void 0 ? _e : 100;
    if (!(widthM > 0) || !(velocityMs >= 0))
        return null;
    const sinTheta = velocityMs > entrain ? entrain / velocityMs : 1;
    const angleDeg = (Math.asin(sinTheta) * 180) / Math.PI;
    const lengthFt = (widthM / sinTheta) * 3.28084 * (1 + reservePct / 100);
    const boomFt = Math.ceil(lengthFt / 50) * 50; // round up to 50-ft sticks
    const anchors = Math.max(2, Math.ceil(boomFt / anchorSpacingFt) + 1);
    return {
        boom_ft: boomFt,
        boom_angle_deg: Math.round(angleDeg),
        anchors,
        deflection: velocityMs > entrain,
        cascade_advised: angleDeg < 15, // too fast for a single sweep — cascade booms
    };
}
/** Trace line + hourly markers as a GeoJSON FeatureCollection (widget preview). */
function toGeoJson(result) {
    const df = result.trace;
    const fc = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {
                    kind: "trace", river: result.river_name,
                    distance_km_24h: result.distance_km_24h,
                },
                geometry: {
                    type: "LineString",
                    coordinates: df.map((r) => [
                        Math.round(r.lon * 1e6) / 1e6, Math.round(r.lat * 1e6) / 1e6,
                    ]),
                },
            },
        ],
    };
    for (const h of result.hourly) {
        fc.features.push({
            type: "Feature",
            properties: { kind: "hour", hour: h.hour, cum_dist_km: h.cum_dist_km, velocity_mph: h.velocity_mph },
            geometry: {
                type: "Point",
                coordinates: [Math.round(h.lon * 1e6) / 1e6, Math.round(h.lat * 1e6) / 1e6],
            },
        });
    }
    return fc;
}


/***/ },

/***/ "esri/Graphic"
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ },

/***/ "esri/geometry/Point"
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ },

/***/ "esri/geometry/Polyline"
/*!*****************************************!*\
  !*** external "esri/geometry/Polyline" ***!
  \*****************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polyline__;

/***/ },

/***/ "esri/geometry/geometryEngine"
/*!***********************************************!*\
  !*** external "esri/geometry/geometryEngine" ***!
  \***********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__;

/***/ },

/***/ "esri/layers/FeatureLayer"
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ },

/***/ "esri/layers/GraphicsLayer"
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ },

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/spill-trace-snake/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/geometry/Polyline */ "esri/geometry/Polyline");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/geometry/geometryEngine */ "esri/geometry/geometryEngine");
/* harmony import */ var _trace_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../trace-engine */ "./your-extensions/widgets/spill-trace-snake/src/trace-engine.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Spill Trajectory widget — runtime.
 *
 * Click "Set spill point" → click the map → the golden-tested trace engine
 * (trace-engine.ts, parity-verified vs the Python oracle) draws an ephemeral
 * time-colored plume on a client-side GraphicsLayer with hourly markers,
 * plus an ETA-sorted strategy-site list and receptor warnings.
 * Nothing is persisted — Clear (or widget unmount) removes everything.
 */









const { useState, useRef, useCallback, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
// ETA color bands: <3 hr / 3–12 hr / 12–24 hr
const BAND_COLORS = [
    [3, '#d7191c'],
    [12, '#fdae61'],
    [24, '#2c7bb6'],
];
const bandColor = (hr) => {
    for (const [lim, c] of BAND_COLORS)
        if (hr < lim)
            return c;
    return '#2c7bb6';
};
const hexToRgb = (hex) => [
    parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16),
];
const normGuid = (v) => String(v || '').replace(/[{}]/g, '').toLowerCase();
/** Sum geodesic feet of drawn boom lines per site key (e.g. Snake Boom_Lines). */
function fetchDrawnBoom(cfg) {
    return __awaiter(this, void 0, void 0, function* () {
        const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: cfg.url });
        const q = fl.createQuery();
        q.where = cfg.where || '1=1';
        q.outFields = [cfg.siteKeyField];
        q.returnGeometry = true;
        q.outSpatialReference = { wkid: 4326 };
        const fs = yield fl.queryFeatures(q);
        const out = new Map();
        for (const f of fs.features) {
            const key = normGuid(f.attributes[cfg.siteKeyField]);
            if (!key || !f.geometry)
                continue;
            const ft = (0,esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_8__.geodesicLength)(f.geometry, 'feet');
            if (ft > 0)
                out.set(key, (out.get(key) || 0) + ft);
        }
        return out;
    });
}
const Widget = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [jmv, setJmv] = useState(null);
    const [arming, setArming] = useState(false);
    const [running, setRunning] = useState(false);
    const [status, setStatus] = useState('Click "Set spill point", then click the river.');
    const [result, setResult] = useState(null);
    const [safety, setSafety] = useState((_a = props.config.safetyFactor) !== null && _a !== void 0 ? _a : 1.5);
    const [diag, setDiag] = useState([]);
    const [hidden, setHidden] = useState(false);
    const layerRef = useRef(null);
    const clickHandleRef = useRef(null);
    // cached hydrology for the current spill point — safety-factor changes
    // recompute from this instantly instead of re-fetching NLDI/NWIS
    const cacheRef = useRef(null);
    // ---- ICP list sync (Snake clone only): tint the app's site-list cards by ETA
    // band so the left panel mirrors the plume colors. Card matching is by the value
    // of config.listSyncSiteCodeField (must also be in the site layer's extraFields);
    // the field's value must appear verbatim in the card text (site_code does).
    const listSyncField = props.config.listSyncSiteCodeField || '';
    const listObsRef = useRef(null);
    const listRowsRef = useRef([]);
    const paintStatsRef = useRef('');
    const [paintStats, setPaintStats] = useState('');
    const paintListCards = () => {
        if (!listSyncField)
            return;
        const marks = listRowsRef.current
            .filter((s) => s[listSyncField] != null && s.eta_hr != null)
            .map((s) => [String(s[listSyncField]).trim(), bandColor(s.eta_hr)]);
        // the card class is built dynamically (list-card-viewer / -editor / -content):
        // match any list-card* element but paint only the OUTERMOST one per card
        const els = Array.from(document.querySelectorAll('[class*="list-card"]'))
            .filter((el) => { var _a; return !((_a = el.parentElement) === null || _a === void 0 ? void 0 : _a.closest('[class*="list-card"]')); });
        let painted = 0;
        els.forEach((el) => {
            const txt = el.textContent || '';
            const hit = marks.find(([code]) => code.length > 0 && txt.indexOf(code) >= 0);
            if (hit) {
                painted++;
                el.style.borderLeft = '4px solid ' + hit[1];
                el.style.background = hit[1] + '26';
            }
            else {
                el.style.borderLeft = '';
                el.style.background = '';
            }
        });
        const stats = marks.length === 0
            ? ''
            : `${painted} of ${els.length} visible cards marked · ${marks.length} sites in path`;
        if (paintStatsRef.current !== stats) {
            paintStatsRef.current = stats;
            setPaintStats(stats);
        }
    };
    const clearListSync = () => {
        if (listObsRef.current) {
            listObsRef.current.disconnect();
            listObsRef.current = null;
        }
        listRowsRef.current = [];
        paintStatsRef.current = '';
        setPaintStats('');
        document.querySelectorAll('[class*="list-card"]').forEach((el) => {
            el.style.borderLeft = '';
            el.style.background = '';
        });
    };
    const armListSync = (rows) => {
        if (!listSyncField)
            return;
        listRowsRef.current = rows || [];
        paintListCards();
        if (!listObsRef.current) {
            // re-paint when the list re-renders (scroll/filter/search); childList-only
            // observation so our own style writes cannot re-trigger it
            let pending = false;
            const obs = new MutationObserver(() => {
                if (pending)
                    return;
                pending = true;
                requestAnimationFrame(() => { pending = false; paintListCards(); });
            });
            obs.observe(document.body, { childList: true, subtree: true });
            listObsRef.current = obs;
        }
    };
    // one graphics layer per widget lifetime; removed on unmount (ephemeral)
    useEffect(() => {
        return () => {
            if (clickHandleRef.current)
                clickHandleRef.current.remove();
            if (layerRef.current && jmv)
                jmv.view.map.remove(layerRef.current);
            clearListSync();
            if (maxedRef.current)
                setMapMaximized(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jmv]);
    const ensureLayer = (view) => {
        if (!layerRef.current) {
            layerRef.current = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({ title: 'Spill trajectory (ephemeral)', listMode: 'hide' });
            view.map.add(layerRef.current);
        }
        return layerRef.current;
    };
    // ---- providers: wrap configured layers for the engine ----
    // Failures are reported to the diagnostics list instead of killing the trace.
    const makeSiteProvider = (lc, defaultBuffer, label, notes) => {
        var _a;
        return ({
            buffer_m: (_a = lc.bufferM) !== null && _a !== void 0 ? _a : defaultBuffer,
            fetch: () => __awaiter(void 0, void 0, void 0, function* () {
                var _a;
                try {
                    const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: lc.url });
                    const q = fl.createQuery();
                    q.where = lc.where || '1=1';
                    q.outFields = [lc.nameField, ...(lc.extraFields || [])];
                    q.returnGeometry = true;
                    q.outSpatialReference = { wkid: 4326 };
                    const fs = yield fl.queryFeatures(q);
                    const rows = fs.features
                        .filter((f) => f.geometry && f.geometry.type === 'point')
                        .map((f) => {
                        const g = f.geometry;
                        const row = { name: f.attributes[lc.nameField], lat: g.y, lon: g.x };
                        for (const ef of lc.extraFields || [])
                            row[ef] = f.attributes[ef];
                        return row;
                    });
                    notes.push(`${label}: ${rows.length} point features loaded (buffer ${(_a = lc.bufferM) !== null && _a !== void 0 ? _a : defaultBuffer} m)`);
                    return rows;
                }
                catch (e) {
                    notes.push(`${label} FAILED: ${String(e).slice(0, 100)}`);
                    return [];
                }
            }),
        });
    };
    const makeWidthProvider = () => {
        const wl = props.config.widthLayer;
        if (!wl || !wl.url)
            return null;
        const fl = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_4__["default"]({ url: wl.url });
        return (env) => __awaiter(void 0, void 0, void 0, function* () {
            const q = fl.createQuery();
            q.where = wl.where || '1=1';
            q.geometry = Object.assign(Object.assign({ type: 'extent' }, env), { spatialReference: { wkid: 4326 } });
            q.spatialRelationship = 'intersects';
            q.outFields = [wl.widthField];
            q.returnGeometry = true;
            q.outSpatialReference = { wkid: 4326 };
            const fs = yield fl.queryFeatures(q);
            const mids = [];
            for (const f of fs.features) {
                const g = f.geometry;
                if (g && g.paths && g.paths.length) {
                    const p = g.paths[0];
                    const m = p[Math.floor(p.length / 2)];
                    mids.push({ lat: m[1], lon: m[0], width: f.attributes[wl.widthField] || 0 });
                }
            }
            return mids;
        });
    };
    // ---- drawing ----
    const draw = (view, res, spill) => {
        const layer = ensureLayer(view);
        layer.removeAll();
        // spill point
        layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
            geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: spill.lat, longitude: spill.lon }),
            symbol: {
                type: 'simple-marker', style: 'x', size: 14,
                outline: { color: '#000', width: 3 },
            },
            popupTemplate: { title: 'Spill point', content: `${spill.lat.toFixed(5)}, ${spill.lon.toFixed(5)}` },
        }));
        // trace polyline, split into ETA color bands
        const rows = res.trace;
        let bandStart = 0;
        for (let i = 1; i <= rows.length; i++) {
            const done = i === rows.length;
            const bandChanged = !done && bandColor(rows[i].cum_time) !== bandColor(rows[bandStart].cum_time);
            if (done || bandChanged) {
                const seg = rows.slice(bandStart, Math.min(i + 1, rows.length));
                layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    geometry: new esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]({ paths: [seg.map((r) => [r.lon, r.lat])], spatialReference: { wkid: 4326 } }),
                    symbol: { type: 'simple-line', color: bandColor(rows[bandStart].cum_time), width: 4 },
                }));
                bandStart = i;
            }
        }
        // Jobson uncertainty bands: translucent underlay from bulk (peak) position
        // to farthest credible (99% leading) position at each hour
        for (const h of res.hourly) {
            if (!h.band)
                continue;
            const i0 = Math.min(h.band.peak.i, h.band.fastest.i);
            const i1 = Math.max(h.band.peak.i, h.band.fastest.i);
            if (i1 <= i0)
                continue;
            const seg = rows.slice(i0, i1 + 1);
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Polyline__WEBPACK_IMPORTED_MODULE_6__["default"]({ paths: [seg.map((r) => [r.lon, r.lat])], spatialReference: { wkid: 4326 } }),
                symbol: { type: 'simple-line', color: [...hexToRgb(bandColor(h.hour)), 0.28], width: 14, cap: 'round' },
            }));
        }
        // hourly markers + labels
        for (const h of res.hourly) {
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: h.lat, longitude: h.lon }),
                symbol: {
                    type: 'simple-marker', size: 7, color: bandColor(h.hour),
                    outline: { color: '#fff', width: 1 },
                },
                popupTemplate: {
                    title: `Hour ${h.hour}`,
                    content: `${h.cum_dist_km.toFixed(1)} km downstream · ${h.velocity_mph.toFixed(1)} mph`,
                },
            }));
            layer.add(new esri_Graphic__WEBPACK_IMPORTED_MODULE_5__["default"]({
                geometry: new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({ latitude: h.lat, longitude: h.lon }),
                symbol: {
                    type: 'text',
                    text: `${h.hour} hr`,
                    color: bandColor(h.hour),
                    haloColor: '#ffffff',
                    haloSize: 1.5,
                    yoffset: 9,
                    font: { size: 10, weight: 'bold', family: 'sans-serif' },
                },
            }));
        }
    };
    // ---- model config + equipment + compute/render (pure, reusable on cached data) ----
    const modelCfg = (sf) => {
        var _a, _b, _c, _d;
        return ({
            safetyFactor: sf,
            timingModel: (_a = props.config.timingModel) !== null && _a !== void 0 ? _a : 'hydraulic',
            minStreamOrder: (_b = props.config.minStreamOrder) !== null && _b !== void 0 ? _b : 4,
            maxHours: (_c = props.config.maxHours) !== null && _c !== void 0 ? _c : 24,
            maxDistanceKm: (_d = props.config.maxDistanceKm) !== null && _d !== void 0 ? _d : 300,
            verbose: false,
        });
    };
    const applyEquipment = (res, drawn) => {
        var _a, _b, _c, _d, _e;
        const eq = props.config.equipment;
        if ((eq === null || eq === void 0 ? void 0 : eq.enabled) === false)
            return;
        const rules = {
            entrainmentMs: (_a = eq === null || eq === void 0 ? void 0 : eq.entrainmentMs) !== null && _a !== void 0 ? _a : 0.35,
            anchorSpacingFt: (_b = eq === null || eq === void 0 ? void 0 : eq.anchorSpacingFt) !== null && _b !== void 0 ? _b : 100,
            reservePct: (_c = eq === null || eq === void 0 ? void 0 : eq.reservePct) !== null && _c !== void 0 ? _c : 20,
        };
        for (const s of res.sites) {
            const key = normGuid((_e = (_d = s.GlobalID) !== null && _d !== void 0 ? _d : s.globalid) !== null && _e !== void 0 ? _e : s.GLOBALID);
            const drawnFt = key ? drawn.get(key) : undefined;
            if (drawnFt) {
                const boomFt = Math.ceil(drawnFt / 50) * 50;
                s.boom = {
                    boom_ft: boomFt,
                    anchors: Math.max(2, Math.ceil(boomFt / rules.anchorSpacingFt) + 1),
                    source: 'drawn',
                };
            }
            else {
                const est = (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.estimateBoomNeeds)(s.river_width_m, s.velocity_ms, rules);
                if (est)
                    s.boom = Object.assign(Object.assign({}, est), { source: 'est' });
            }
        }
    };
    const computeAndRender = (sf, fromCache = false) => {
        var _a;
        const c = cacheRef.current;
        if (!c || !jmv)
            return;
        const res = (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.computeTrace)(c.data, modelCfg(sf));
        applyEquipment(res, c.drawn);
        draw(jmv.view, res, { lat: c.lat, lon: c.lon });
        if (layerRef.current)
            layerRef.current.visible = true;
        setHidden(false);
        setResult(res);
        armListSync(res.sites || []);
        setDiag([...c.fetchNotes, `${res.sites.length} site(s) within buffer of the trace.`]);
        setStatus(`${res.river_name || 'Trace'} — ${res.distance_km_24h.toFixed(1)} km in ≤ ${(_a = props.config.maxHours) !== null && _a !== void 0 ? _a : 24} h` +
            (fromCache ? ' · recomputed instantly from cached hydrology' : ''));
    };
    // ---- run ----
    const armClick = useCallback(() => {
        if (!jmv || arming || running)
            return;
        setArming(true);
        setStatus('Click the spill location on the map…');
        clickHandleRef.current = jmv.view.on('click', (evt) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            clickHandleRef.current.remove();
            clickHandleRef.current = null;
            setArming(false);
            const mp = evt.mapPoint;
            const lat = mp.latitude, lon = mp.longitude;
            setRunning(true);
            setResult(null);
            setDiag([]);
            setStatus(`Tracing from ${lat.toFixed(4)}, ${lon.toFixed(4)}…`);
            const notes = [];
            try {
                const cfg = props.config;
                const siteLayers = (cfg.siteLayers || []);
                const receptorLayers = (cfg.receptorLayers || []);
                if (!siteLayers.length)
                    notes.push('No site layers configured — add them in the widget settings (Site layers JSON).');
                // fetch everything once (trace, flows, widths, site/receptor features)
                const data = yield (0,_trace_engine__WEBPACK_IMPORTED_MODULE_9__.fetchTraceData)(lat, lon, Object.assign(Object.assign({}, modelCfg(safety)), { widthProvider: makeWidthProvider(), siteProviders: siteLayers.map((lc, i) => makeSiteProvider(lc, 500, `Site layer ${i + 1}`, notes)), receptorProviders: receptorLayers.map((lc, i) => makeSiteProvider(lc, 800, `Receptor layer ${i + 1}`, notes)) }));
                // drawn boom lines: per-site-layer boomLayer (+ legacy global equipment.boomLayer)
                const drawn = new Map();
                const eq = cfg.equipment;
                if ((eq === null || eq === void 0 ? void 0 : eq.enabled) !== false) {
                    const boomCfgs = [];
                    for (const lc of siteLayers)
                        if ((_a = lc.boomLayer) === null || _a === void 0 ? void 0 : _a.url)
                            boomCfgs.push(lc.boomLayer);
                    if ((_b = eq === null || eq === void 0 ? void 0 : eq.boomLayer) === null || _b === void 0 ? void 0 : _b.url)
                        boomCfgs.push(eq.boomLayer);
                    const seen = new Set();
                    for (const bc of boomCfgs) {
                        const sig = `${bc.url}|${bc.siteKeyField}`;
                        if (seen.has(sig))
                            continue;
                        seen.add(sig);
                        try {
                            const m = yield fetchDrawnBoom(bc);
                            m.forEach((v, k) => drawn.set(k, (drawn.get(k) || 0) + v));
                            notes.push(`Boom lines (${sig.split('/').slice(-2)[0]}): drawn footage for ${m.size} site(s)`);
                        }
                        catch (e) {
                            notes.push(`Boom layer FAILED: ${String(e).slice(0, 90)}`);
                        }
                    }
                }
                cacheRef.current = { lat, lon, data, drawn, fetchNotes: notes.slice() };
                computeAndRender(safety);
            }
            catch (e) {
                setStatus(`Trace failed: ${String(e).slice(0, 120)}`);
                setDiag(notes);
            }
            finally {
                setRunning(false);
            }
        }));
    }, [jmv, arming, running, safety, props.config]);
    const clearAll = () => {
        if (clickHandleRef.current) {
            clickHandleRef.current.remove();
            clickHandleRef.current = null;
        }
        if (layerRef.current)
            layerRef.current.removeAll();
        clearListSync();
        cacheRef.current = null;
        setArming(false);
        setResult(null);
        setDiag([]);
        setHidden(false);
        setStatus('Cleared. Click "Set spill point" to run again.');
    };
    // full-page map: CSS maximize instead of the Fullscreen API — everything stays
    // mounted (plume, panels, popups) and this floating panel remains on top;
    // Esc or the button exits
    const [maxed, setMaxed] = useState(false);
    const maxedRef = useRef(false);
    const escHandlerRef = useRef(null);
    const setMapMaximized = (on) => {
        var _a;
        const el = document.querySelector('[data-widgetid="' + (((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0]) || '') + '"]');
        if (!el)
            return;
        if (on) {
            el.style.position = 'fixed';
            el.style.inset = '0';
            el.style.width = '100vw';
            el.style.height = '100vh';
            el.style.zIndex = '999';
            const esc = (e) => { if (e.key === 'Escape')
                setMapMaximized(false); };
            escHandlerRef.current = esc;
            document.addEventListener('keydown', esc);
        }
        else {
            el.style.position = '';
            el.style.inset = '';
            el.style.width = '';
            el.style.height = '';
            el.style.zIndex = '';
            if (escHandlerRef.current) {
                document.removeEventListener('keydown', escHandlerRef.current);
                escHandlerRef.current = null;
            }
        }
        maxedRef.current = on;
        setMaxed(on);
        window.dispatchEvent(new Event('resize'));
    };
    const toggleFullMap = () => setMapMaximized(!maxedRef.current);
    // briefing toggle: hide/show the trajectory graphics WITHOUT touching the
    // cached run — presenter can flip the model off during a slide and back
    const toggleVisible = () => {
        if (!layerRef.current)
            return;
        const v = !layerRef.current.visible;
        layerRef.current.visible = v;
        setHidden(!v);
    };
    const sites = (result === null || result === void 0 ? void 0 : result.sites) || [];
    const warnings = (result === null || result === void 0 ? void 0 : result.warnings) || [];
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { padding: 10, overflow: 'auto', fontSize: 13, color: '#fff' }, children: [((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: props.useMapWidgetIds[0], onActiveViewChange: (v) => setJmv(v) })), !((_c = props.useMapWidgetIds) === null || _c === void 0 ? void 0 : _c.length) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#ff8a80' }, children: "Select a Map widget in this widget's settings." })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', gap: 6, marginBottom: 8 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-primary btn-sm", disabled: !jmv || arming || running, onClick: armClick, children: arming ? 'Click the map…' : running ? 'Tracing…' : 'Set spill point' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: running, onClick: clearAll, children: "Clear" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", title: "Toggle full-page map (plume stays visible; this panel stays on top; Esc exits)", onClick: toggleFullMap, children: maxed ? '⛶ Exit full' : '⛶ Full map' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, onClick: toggleVisible, title: "Hide/show the trajectory on the map without losing the run (briefings)", children: hidden ? '👁 Show' : '👁 Hide' }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-secondary btn-sm", disabled: !result, title: "Copy run provenance record (JSON) for after-action documentation \u2014 includes a replay URL", onClick: () => {
                            if (!(result === null || result === void 0 ? void 0 : result.runRecord) || !cacheRef.current)
                                return;
                            const rec = Object.assign({}, result.runRecord);
                            const u = new URL('https://whitewaterrescue.github.io/wri-exb-widgets/embed/');
                            u.searchParams.set('config', 'all-grps');
                            u.searchParams.set('lat', cacheRef.current.lat.toFixed(5));
                            u.searchParams.set('lon', cacheRef.current.lon.toFixed(5));
                            u.searchParams.set('asOf', rec.as_of !== 'live' ? rec.as_of : rec.generated_at.slice(0, 10));
                            u.searchParams.set('sf', String(safety));
                            rec.replay_url = u.toString();
                            navigator.clipboard.writeText(JSON.stringify(rec, null, 1)).then(() => setStatus('Run record copied (includes replay_url).'));
                        }, children: "\u2398 Record" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }, title: "Safety factor \u2014 changing it re-runs instantly from cached hydrology", children: ["SF", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: safety, disabled: running, onChange: (e) => {
                                    const v = parseFloat(e.target.value);
                                    setSafety(v);
                                    if (cacheRef.current && !running)
                                        computeAndRender(v, true);
                                }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.0, children: "1.0" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.25, children: "1.25" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 1.5, children: "1.5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 2.0, children: "2.0" })] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, minHeight: 18 }, children: [running && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "jimu-secondary-loading" }), " ", status] }), diag.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#fff', fontSize: 11, marginBottom: 8 }, children: diag.map((d, i) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: d }, i)) })), warnings.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { background: '#fff3cd', color: '#333', border: '1px solid #ffeeba', padding: 6, marginBottom: 8, borderRadius: 4 }, children: warnings.map((w, i) => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 2 }, children: ["\u26A0 ", w] }, i)) })), result && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: 8, color: '#fff' }, children: ["ETAs are estimates (\u00B120%), safety factor \u00D7", result.safety_factor, " applied \u2014 treat as bands, not appointments.", result.gauges_used.length
                        ? ` Flows: ${result.gauges_used.map((g) => g.station_id).join(', ')}.`
                        : ' No live gauges found — drainage-area flow estimate.'] })), listSyncField && sites.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { margin: '6px 0', fontSize: 12 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", { children: [sites.length, " site", sites.length > 1 ? 's' : '', " in the plume path"] }), " \u2014 highlighted in the site list by ETA band.", sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: 2 }, children: ["Boom totals (", sites.filter((s) => { var _a; return ((_a = s.boom) === null || _a === void 0 ? void 0 : _a.source) === 'drawn'; }).length, " drawn \u2713 /", ' ', sites.filter((s) => { var _a; return ((_a = s.boom) === null || _a === void 0 ? void 0 : _a.source) === 'est'; }).length, " est):", ' ', sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.boom_ft) || 0); }, 0).toLocaleString(), " ft \u00B7", ' ', sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.anchors) || 0); }, 0), " anchors"] })), paintStats && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: 2, opacity: 0.7 }, children: ["list sync: ", paintStats] }))] })), !listSyncField && sites.length > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: '100%', borderCollapse: 'collapse' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { textAlign: 'left', borderBottom: '1px solid #ccc' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "ETA" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Site" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "km" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: '2px 4px' }, children: "Boom" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: sites.map((s, i) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderBottom: '1px solid #eee' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, title: s.eta_early_hr !== undefined
                                        ? `earliest credible ${s.eta_early_hr} hr · first arrival ${s.eta_hr} hr · peak ${s.eta_peak_hr} hr${s.clear_hr ? ` · clear ~${s.clear_hr} hr` : ''}`
                                        : '', children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: {
                                                display: 'inline-block', width: 10, height: 10, borderRadius: 5,
                                                background: bandColor(s.eta_hr), marginRight: 4,
                                            } }), s.eta_early_hr !== undefined
                                            ? `${s.eta_early_hr.toFixed(1)}–${s.eta_hr.toFixed(1)} hr`
                                            : s.eta_hr < 1 ? `${Math.round(s.eta_hr * 60)} min` : `${s.eta_hr.toFixed(1)} hr`] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: s.name }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px' }, children: s.dist_km.toFixed(1) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: '2px 4px', whiteSpace: 'nowrap' }, title: s.boom
                                        ? `${s.boom.anchors} anchor sets${s.boom.boom_angle_deg ? ` · ${s.boom.boom_angle_deg}° deployment` : ''}${s.boom.cascade_advised ? ' · fast water: cascade multiple booms' : ''} (${s.boom.source === 'drawn' ? 'from drawn boom lines' : 'estimated from modeled width/velocity'})`
                                        : '', children: s.boom
                                        ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [s.boom.boom_ft.toLocaleString(), " ft", s.boom.cascade_advised && ' ⚡', (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { color: '#fff' }, children: [" ", s.boom.source === 'drawn' ? '✓' : 'est.'] })] })
                                        : '—' })] }, i))) }), sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tfoot", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderTop: '2px solid #ccc', fontWeight: 600 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { colSpan: 3, style: { padding: '3px 4px' }, children: ["Totals (", sites.filter((s) => s.boom).length, " boom sites)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: '3px 4px', whiteSpace: 'nowrap' }, children: [sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.boom_ft) || 0); }, 0).toLocaleString(), " ft \u00B7", ' ', sites.reduce((t, s) => { var _a; return t + (((_a = s.boom) === null || _a === void 0 ? void 0 : _a.anchors) || 0); }, 0), " anchors"] })] }) }))] })), result && sites.some((s) => s.boom) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { color: '#fff', marginTop: 4 }, children: ["\u2713 = drawn boom lines \u00B7 est. = sized from modeled width/velocity (boom angled to keep normal flow \u2264 ", ((_e = (_d = props.config.equipment) === null || _d === void 0 ? void 0 : _d.entrainmentMs) !== null && _e !== void 0 ? _e : 0.35), " m/s, +", (_g = (_f = props.config.equipment) === null || _f === void 0 ? void 0 : _f.reservePct) !== null && _g !== void 0 ? _g : 20, "% reserve) \u00B7 \u26A1 = fast water, cascade booms"] })), result && sites.length === 0 && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#fff' }, children: "No configured sites within reach of this trace." })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS1zbmFrZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUM7QUFFdEMsTUFBTSxTQUFTLEdBQUcsaUNBQWlDLENBQUM7QUFDcEQsTUFBTSxTQUFTLEdBQUcsa0RBQWtELENBQUM7QUFDckUsTUFBTSxPQUFPLEdBQUcseUNBQXlDLENBQUM7QUFDMUQsTUFBTSxTQUFTLEdBQUcsMkNBQTJDLENBQUM7QUFFOUQ7Ozs7R0FJRztBQUNJLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDaEQsMEZBQTBGO0lBQzFGLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUTtDQUM3QixDQUFDLENBQUM7QUFFSSxNQUFNLGNBQWMsR0FBRztJQUM1QixhQUFhLEVBQUUsR0FBRztJQUNsQixRQUFRLEVBQUUsRUFBRTtJQUNaLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsY0FBYyxFQUFFLENBQUM7SUFDakIsYUFBYSxFQUFFLElBQUksRUFBUywyREFBMkQ7SUFDdkYsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixpQkFBaUIsRUFBRSxHQUFHLEVBQU0scURBQXFEO0lBQ2pGLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLGlCQUFpQixFQUFFLEVBQUU7SUFDckIsZUFBZSxFQUFFLEVBQUUsRUFBUywyREFBMkQ7SUFDdkYsT0FBTyxFQUFFLGVBQWUsRUFBSSw4RUFBOEU7SUFDMUcsYUFBYSxFQUFFLEdBQUc7SUFDbEIsb0JBQW9C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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3BpbGwtdHJhY2Utc25ha2Uvc3JjL3RyYWNlLWVuZ2luZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2ludFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2x5bGluZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3BpbGwtdHJhY2Utc25ha2Uvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xuLyoqXG4gKiB0cmFjZS1lbmdpbmUuanMg4oCUIE5hdGlvbmFsIHNwaWxsIHRyYWplY3RvcnkgZW5naW5lIChKUyBwb3J0IG9mIHNwaWxsX3RyYWNlLnB5KVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogRmFpdGhmdWwgcG9ydCBvZiB0aGUgUHl0aG9uIG9yYWNsZS4gRGVwZW5kZW5jeS1mcmVlIEVTTTogcnVucyBpbiBwbGFpbiBOb2RlXG4gKiAoPj0xOCwgZ2xvYmFsIGZldGNoKSBmb3IgZ29sZGVuIHRlc3RpbmcgYW5kIGluIHRoZSBicm93c2VyIGluc2lkZSB0aGUgRXhCXG4gKiB3aWRnZXQuIE5PIEBhcmNnaXMgaW1wb3J0cyBoZXJlIOKAlCB0aGUgd2lkZ2V0IHdyYXBzIHRoaXMgbW9kdWxlIGFuZCBzdXBwbGllc1xuICogbGF5ZXIgYWNjZXNzIHRocm91Z2ggaW5qZWN0YWJsZSBwcm92aWRlcnM6XG4gKlxuICogICBjb25maWcud2lkdGhQcm92aWRlcihlbnZlbG9wZSkgIC0+IFt7bGF0LCBsb24sIHdpZHRofV0gICAoR0xPVyBtaWRwb2ludHMgaW4gYmJveClcbiAqICAgY29uZmlnLnNpdGVQcm92aWRlcnMgICAgICAgICAgICAtPiBbe25hbWUsIGJ1ZmZlcl9tLCBmZXRjaDogYXN5bmMgKCkgPT4gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XX1dXG4gKiAgIGNvbmZpZy5yZWNlcHRvclByb3ZpZGVycyAgICAgICAgLT4gc2FtZSBzaGFwZSBhcyBzaXRlUHJvdmlkZXJzXG4gKlxuICogUG9ydCBnb3RjaGFzIGhvbm9yZWQgKHNlZSBSRUFETUUpOlxuICogICAxLiBnZW9zZXJ2ZXIgQ1FMIEJCT1ggaXMgbGF0LGxvbiBheGlzIG9yZGVyIChFUFNHOjQyNjkgLyBXRlMgMi4wKVxuICogICAyLiBIUiBOSERQbHVzSUQgIT0gTVIgY29taWQg4oCUIHdpZHRocyBzYW1wbGVkIHNwYXRpYWxseSwgbmV2ZXIgSUQtam9pbmVkXG4gKiAgIDMuIGltcG91bmRtZW50ID0gd2JhcmVhdHlwZSBpbiAoTGFrZVBvbmQsIFJlc2Vydm9pcilcbiAqICAgNC4gd2lkdGggb3ZlcnJpZGUgc2FtcGxlZCBpbiB3aW5kb3dzOyBmYWlsdXJlIGRlZ3JhZGVzIHRvIGZvcm11bGEgd2lkdGhzXG4gKiAgIDUuIE5MREkvZ2Vvc2VydmVyIGVtcHR5LTIwMCAtPiByZXRyeSAzeCB3aXRoIGJhY2tvZmZcbiAqICAgNi4gc25hcCBjbGljayB0byBzdHJlYW1vcmRlID49IG1pblN0cmVhbU9yZGVyXG4gKi9cblxuZXhwb3J0IGNvbnN0IEVOR0lORV9WRVJTSU9OID0gXCIxLjQuMFwiO1xuXG5jb25zdCBOTERJX0JBU0UgPSBcImh0dHBzOi8vYXBpLndhdGVyLnVzZ3MuZ292L25sZGlcIjtcbmNvbnN0IEdFT1NFUlZFUiA9IFwiaHR0cHM6Ly9hcGkud2F0ZXIudXNncy5nb3YvZ2Vvc2VydmVyL3dtYWRhdGEvb3dzXCI7XG5jb25zdCBOV0lTX0lWID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9pdi9cIjtcbmNvbnN0IE5XSVNfU0lURSA9IFwiaHR0cHM6Ly93YXRlcnNlcnZpY2VzLnVzZ3MuZ292L253aXMvc2l0ZS9cIjtcblxuLyoqXG4gKiBOSERQbHVzIE1SIHdhdGVyYm9keSBmbGFncyBsYWcgcmVhbGl0eSDigJQgcmVhY2hlcyB0aHJvdWdoIFJFTU9WRUQgZGFtcyBzdGlsbFxuICogY2Fycnkgd2JhcmVhdHlwZSBMYWtlUG9uZCBhbmQgd291bGQgZmFsc2Utc3RvcCB0aGUgY2xvY2suIEtub3duIHJlbW92YWxzXG4gKiBhcmUgZXhjbHVkZWQgaGVyZSAoZXh0ZW5kYWJsZSBwZXItcnVuIHZpYSBjb25maWcuaW1wb3VuZEV4Y2x1ZGVDb21pZHMpLlxuICovXG5leHBvcnQgY29uc3QgUkVNT1ZFRF9JTVBPVU5ETUVOVF9DT01JRFMgPSBuZXcgU2V0KFtcbiAgLy8gTWlsbHRvd24gRGFtLCBDbGFyayBGb3JrIGF0IEJvbm5lciBNVCDigJQgcmVtb3ZlZCAyMDA4LTIwMTAgKHJlcG9ydGVkIGJ5IENvZHkgMjAyNi0wNy0wNylcbiAgMjQyOTMxMjAsIDI0MjkzMTIyLCAyNDI5MzEyNCxcbl0pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIG1heERpc3RhbmNlS206IDMwMCxcbiAgbWF4SG91cnM6IDI0LFxuICByZXNvbHV0aW9uTTogMTAwLjAsXG4gIHNhZmV0eUZhY3RvcjogMS41LFxuICBtYW5uaW5nTjogMC4wNDUsXG4gIG1pblN0cmVhbU9yZGVyOiA0LFxuICB3aWR0aFByb3ZpZGVyOiBudWxsLCAgICAgICAgLy8gYXN5bmMgKGVudiB7eG1pbix5bWluLHhtYXgseW1heH0pID0+IFt7bGF0LCBsb24sIHdpZHRofV1cbiAgd2lkdGhTYW1wbGVSYWRpdXNNOiA4MDAsXG4gIHdpZHRoV2luZG93UG9pbnRzOiAxMDAsICAgICAvLyB0cmFjZSBwb2ludHMgcGVyIG92ZXJyaWRlIHNhbXBsaW5nIHdpbmRvdyAofjEwIGttKVxuICBzaXRlUHJvdmlkZXJzOiBbXSxcbiAgcmVjZXB0b3JQcm92aWRlcnM6IFtdLFxuICB1cHN0cmVhbUdhdWdlS206IDMwLCAgICAgICAgLy8gc2VhcmNoIFVNIHRoaXMgZmFyIGZvciBhbiB1cHN0cmVhbSBhbmNob3IgZ2F1Z2U7IDAgPSBvZmZcbiAgcUludGVycDogXCJkcmFpbmFnZS1hcmVhXCIsICAgLy8gJ2RyYWluYWdlLWFyZWEnIChRIGp1bXBzIGF0IGNvbmZsdWVuY2VzKSB8ICdkaXN0YW5jZScgKGxlZ2FjeSBsaW5lYXIgc21lYXIpXG4gIGltcG91bmRTdG9wS206IDIuMCxcbiAgaW1wb3VuZEV4Y2x1ZGVDb21pZHM6IFtdLCAgIC8vIGV4dHJhIHJlbW92ZWQtZGFtIGNvbWlkcyBiZXlvbmQgUkVNT1ZFRF9JTVBPVU5ETUVOVF9DT01JRFNcbiAgdGltaW5nTW9kZWw6IFwiaHlkcmF1bGljXCIsICAgLy8gJ2h5ZHJhdWxpYycgKFY9US9BIHggc2FmZXR5KSB8ICdqb2Jzb24nIChVU0dTIFdSSVIgOTYtNDAxMyBkeWUtc3R1ZHkgcmVncmVzc2lvbnMpXG4gIGFzT2Y6IG51bGwsICAgICAgICAgICAgICAgICAvLyAnWVlZWS1NTS1ERCcgaGlzdG9yaWNhbCBROyBudWxsID0gbGl2ZVxuICB2ZXJib3NlOiB0cnVlLFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzXG5cbmNvbnN0IFJfRUFSVEggPSA2MzcxMDA4Ljg7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXZlcnNpbmVNKGxhdDEsIGxvbjEsIGxhdDIsIGxvbjIpIHtcbiAgY29uc3QgcDEgPSAobGF0MSAqIE1hdGguUEkpIC8gMTgwO1xuICBjb25zdCBwMiA9IChsYXQyICogTWF0aC5QSSkgLyAxODA7XG4gIGNvbnN0IGRwID0gcDIgLSBwMTtcbiAgY29uc3QgZGwgPSAoKGxvbjIgLSBsb24xKSAqIE1hdGguUEkpIC8gMTgwO1xuICBjb25zdCBhID0gTWF0aC5zaW4oZHAgLyAyKSAqKiAyICsgTWF0aC5jb3MocDEpICogTWF0aC5jb3MocDIpICogTWF0aC5zaW4oZGwgLyAyKSAqKiAyO1xuICByZXR1cm4gMiAqIFJfRUFSVEggKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KGEpKTtcbn1cblxuLyoqIFBheXRvbidzIHdpZHRoL2RlcHRoIGZvcm11bGFzIChmYWxsYmFjayB3aGVuIG5vIEdMT1cgZGF0YSkuIFZlcmJhdGltLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlR2VvbWV0cnlQYXl0b24oZHJhaW5hZ2VBcmVhU3FNaSkge1xuICBsZXQgd2lkdGgsIGRlcHRoO1xuICBpZiAoZHJhaW5hZ2VBcmVhU3FNaSA8IDEwMCkge1xuICAgIHdpZHRoID0gMTAuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MCwgMC41KTtcbiAgICBkZXB0aCA9IDAuNSAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MCwgMC4zKTtcbiAgfSBlbHNlIGlmIChkcmFpbmFnZUFyZWFTcU1pIDwgMTAwMCkge1xuICAgIHdpZHRoID0gNTAuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAsIDAuNSk7XG4gICAgZGVwdGggPSAxLjUgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwLCAwLjMpO1xuICB9IGVsc2Uge1xuICAgIHdpZHRoID0gMTUwLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwMCwgMC40KTtcbiAgICBkZXB0aCA9IDMuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAwLCAwLjMpO1xuICB9XG4gIHJldHVybiBbd2lkdGgsIGRlcHRoXTtcbn1cblxuLyoqXG4gKiBNYW5uaW5nJ3MgZGVwdGggdmlhIGJpc2VjdGlvbiAoUHl0aG9uIHVzZWQgc2NpcHkgYnJlbnRxIG9uIFswLjEsIDIwXSkuXG4gKiBUaGUgcmVzaWR1YWwgaXMgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIGluIGRlcHRoLCBzbyBiaXNlY3Rpb24gY29udmVyZ2VzIHRvXG4gKiB0aGUgc2FtZSByb290LiBSZXBsaWNhdGVzIGJyZW50cSdzIGZhaWx1cmUgbW9kZTogbm8gc2lnbiBjaGFuZ2UgYWNyb3NzIHRoZVxuICogYnJhY2tldCAtPiBudWxsIChjYWxsZXIgZmFsbHMgYmFjayB0byBmb3JtdWxhIGRlcHRoKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURlcHRoTWFubmluZyhRbTNzLCB3aWR0aE0sIHNsb3BlLCBuID0gMC4wNDUpIHtcbiAgaWYgKFFtM3MgPD0gMCB8fCB3aWR0aE0gPD0gMCB8fCBzbG9wZSA8PSAwLjAwMDAxKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgcmVzaWR1YWwgPSAoZGVwdGgpID0+IHtcbiAgICBpZiAoZGVwdGggPD0gMC4wMSkgcmV0dXJuIC1RbTNzO1xuICAgIGNvbnN0IEEgPSB3aWR0aE0gKiBkZXB0aDtcbiAgICBjb25zdCBQID0gd2lkdGhNICsgMiAqIGRlcHRoO1xuICAgIGNvbnN0IFIgPSBBIC8gUDtcbiAgICByZXR1cm4gKDEgLyBuKSAqIEEgKiBNYXRoLnBvdyhSLCAyIC8gMykgKiBNYXRoLnNxcnQoc2xvcGUpIC0gUW0zcztcbiAgfTtcbiAgbGV0IGxvID0gMC4xLCBoaSA9IDIwLjA7XG4gIGxldCBmbG8gPSByZXNpZHVhbChsbyksIGZoaSA9IHJlc2lkdWFsKGhpKTtcbiAgaWYgKGZsbyA9PT0gMCkgcmV0dXJuIGxvO1xuICBpZiAoZmhpID09PSAwKSByZXR1cm4gaGk7XG4gIGlmIChmbG8gKiBmaGkgPiAwKSByZXR1cm4gbnVsbDsgLy8gYnJlbnRxIHJhaXNlcyAtPiBQeXRob24gcmV0dXJucyBOb25lXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBtaWQgPSAwLjUgKiAobG8gKyBoaSk7XG4gICAgY29uc3QgZm0gPSByZXNpZHVhbChtaWQpO1xuICAgIGlmIChmbSA9PT0gMCB8fCAoaGkgLSBsbykgLyAyIDwgMWUtMTApIHJldHVybiBtaWQ7XG4gICAgaWYgKGZsbyAqIGZtIDwgMCkgeyBoaSA9IG1pZDsgZmhpID0gZm07IH0gZWxzZSB7IGxvID0gbWlkOyBmbG8gPSBmbTsgfVxuICB9XG4gIHJldHVybiAwLjUgKiAobG8gKyBoaSk7XG59XG5cbmNvbnN0IHNsZWVwID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCBtcykpO1xuXG4vKiogR0VUL1BPU1Qgd2l0aCByZXRyeSDigJQgTkxESS9nZW9zZXJ2ZXIgaW50ZXJtaXR0ZW50bHkgcmV0dXJuIGVtcHR5IDIwMCBib2RpZXMuICovXG5hc3luYyBmdW5jdGlvbiBnZXRKc29uKHVybCwgeyBwYXJhbXMgPSBudWxsLCBkYXRhID0gbnVsbCwgdHJpZXMgPSAzLCB0aW1lb3V0TXMgPSA5MDAwMCB9ID0ge30pIHtcbiAgbGV0IGxhc3QgPSBudWxsO1xuICBmb3IgKGxldCBhdHRlbXB0ID0gMDsgYXR0ZW1wdCA8IHRyaWVzOyBhdHRlbXB0KyspIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3RybCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjdHJsLmFib3J0KCksIHRpbWVvdXRNcyk7XG4gICAgICBsZXQgcmVzcDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzcCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKS50b1N0cmluZygpLFxuICAgICAgICAgICAgc2lnbmFsOiBjdHJsLnNpZ25hbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBxcyA9IHBhcmFtcyA/IFwiP1wiICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCkgOiBcIlwiO1xuICAgICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwgKyBxcywgeyBzaWduYWw6IGN0cmwuc2lnbmFsIH0pO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgICAgaWYgKCFyZXNwLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXNwLnN0YXR1c31gKTtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwLmpzb24oKTsgLy8gZW1wdHkgYm9keSAtPiBTeW50YXhFcnJvciAtPiByZXRyeVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxhc3QgPSBlO1xuICAgICAgYXdhaXQgc2xlZXAoMTUwMCAqIChhdHRlbXB0ICsgMSkpO1xuICAgIH1cbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYCR7dXJsfSBmYWlsZWQgYWZ0ZXIgJHt0cmllc30gdHJpZXM6ICR7bGFzdH1gKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VGV4dCh1cmwsIHBhcmFtcywgdGltZW91dE1zID0gMzAwMDApIHtcbiAgY29uc3QgY3RybCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGN0cmwuYWJvcnQoKSwgdGltZW91dE1zKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsICsgXCI/XCIgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKSwgeyBzaWduYWw6IGN0cmwuc2lnbmFsIH0pO1xuICAgIHJldHVybiBhd2FpdCByZXNwLnRleHQoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGF0YSBmZXRjaFxuXG4vKiogU25hcCB0byBuZWFyZXN0IHJlYWNoIHdpdGggc3RyZWFtb3JkZSA+PSBtaW5PcmRlciAoZ2Vvc2VydmVyIGJib3ggc2VhcmNoKS4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNuYXBDb21pZChsYXQsIGxvbiwgbWluT3JkZXIpIHtcbiAgY29uc3QgYm94ID0gMC4yO1xuICAvLyBOT1RFOiBFUFNHOjQyNjkgdW5kZXIgV0ZTIDIuMCB1c2VzIGxhdCxsb24gYXhpcyBvcmRlciBpbiBDUUwgQkJPWFxuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihHRU9TRVJWRVIsIHtcbiAgICBkYXRhOiB7XG4gICAgICBzZXJ2aWNlOiBcIldGU1wiLCB2ZXJzaW9uOiBcIjIuMC4wXCIsIHJlcXVlc3Q6IFwiR2V0RmVhdHVyZVwiLFxuICAgICAgdHlwZU5hbWU6IFwid21hZGF0YTpuaGRmbG93bGluZV9uZXR3b3JrXCIsIG91dHB1dEZvcm1hdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBjcWxfZmlsdGVyOlxuICAgICAgICBgc3RyZWFtb3JkZSA+PSAke21pbk9yZGVyfSBBTkQgQkJPWCh0aGVfZ2VvbSxgICtcbiAgICAgICAgYCR7bGF0IC0gYm94fSwke2xvbiAtIGJveH0sJHtsYXQgKyBib3h9LCR7bG9uICsgYm94fSlgLFxuICAgICAgY291bnQ6IFwiNTAwXCIsXG4gICAgfSxcbiAgfSk7XG4gIGxldCBiZXN0ID0gbnVsbCwgYmVzdEQgPSBJbmZpbml0eTtcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICBjb25zdCBnID0gZi5nZW9tZXRyeTtcbiAgICBjb25zdCBwYXRocyA9IGcudHlwZSA9PT0gXCJMaW5lU3RyaW5nXCIgPyBbZy5jb29yZGluYXRlc10gOiBnLmNvb3JkaW5hdGVzO1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSArPSAzKSB7IC8vIGV2ZXJ5IDNyZCB2ZXJ0ZXhcbiAgICAgICAgY29uc3QgcCA9IHBhdGhbaV07XG4gICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKGxhdCwgbG9uLCBwWzFdLCBwWzBdKTtcbiAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3QgPSBmLnByb3BlcnRpZXM7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGJlc3QgIT09IG51bGwpIHJldHVybiBbTnVtYmVyKGJlc3QuY29taWQpLCBiZXN0LmduaXNfbmFtZSA/PyBudWxsLCBiZXN0RF07XG4gIHJldHVybiBbYXdhaXQgbmxkaVBvc2l0aW9uQ29taWQobGF0LCBsb24pLCBudWxsLCBudWxsXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmxkaVBvc2l0aW9uQ29taWQobGF0LCBsb24pIHtcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC9wb3NpdGlvbmAsIHtcbiAgICBwYXJhbXM6IHsgY29vcmRzOiBgUE9JTlQoJHtsb259ICR7bGF0fSlgIH0sIHRpbWVvdXRNczogMzAwMDAsXG4gIH0pO1xuICByZXR1cm4gTnVtYmVyKGouZmVhdHVyZXNbMF0ucHJvcGVydGllcy5pZGVudGlmaWVyKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmxkaURtRmxvd2xpbmVzKGNvbWlkLCBkaXN0YW5jZUttKSB7XG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke05MRElfQkFTRX0vbGlua2VkLWRhdGEvY29taWQvJHtjb21pZH0vbmF2aWdhdGlvbi9ETS9mbG93bGluZXNgLCB7XG4gICAgcGFyYW1zOiB7IGRpc3RhbmNlOiBTdHJpbmcoTWF0aC50cnVuYyhkaXN0YW5jZUttKSkgfSxcbiAgfSk7XG4gIGNvbnN0IGdlb21zID0gbmV3IE1hcCgpOyAvLyBjb21pZCAtPiBbcGF0aHNdIChbW2xvbixsYXRdLC4uLl0pXG4gIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgY29uc3QgY2lkID0gTnVtYmVyKGYucHJvcGVydGllcy5uaGRwbHVzX2NvbWlkKTtcbiAgICBjb25zdCBnID0gZi5nZW9tZXRyeTtcbiAgICBpZiAoZy50eXBlID09PSBcIkxpbmVTdHJpbmdcIikgZ2VvbXMuc2V0KGNpZCwgW2cuY29vcmRpbmF0ZXNdKTtcbiAgICBlbHNlIGlmIChnLnR5cGUgPT09IFwiTXVsdGlMaW5lU3RyaW5nXCIpIGdlb21zLnNldChjaWQsIGcuY29vcmRpbmF0ZXMpO1xuICB9XG4gIHJldHVybiBnZW9tcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmxkaUdhdWdlcyhjb21pZCwgZGlzdGFuY2VLbSwgbW9kZSkge1xuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkLyR7Y29taWR9L25hdmlnYXRpb24vJHttb2RlfS9ud2lzc2l0ZWAsIHtcbiAgICBwYXJhbXM6IHsgZGlzdGFuY2U6IFN0cmluZyhNYXRoLnRydW5jKGRpc3RhbmNlS20pKSB9LFxuICB9KTtcbiAgY29uc3Qgb3V0ID0gW107XG4gIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgY29uc3Qgc2lkID0gKGYucHJvcGVydGllcy5pZGVudGlmaWVyIHx8IFwiXCIpLnJlcGxhY2UoXCJVU0dTLVwiLCBcIlwiKTtcbiAgICBpZiAoc2lkLmxlbmd0aCA+IDE1KSBjb250aW51ZTsgLy8gY29vcmRpbmF0ZS1zdHlsZSBJRHMgKG5vdGVib29rIHJ1bGUpXG4gICAgb3V0LnB1c2goe1xuICAgICAgc3RhdGlvbl9pZDogc2lkLFxuICAgICAgbmFtZTogZi5wcm9wZXJ0aWVzLm5hbWUgfHwgXCJVbmtub3duXCIsXG4gICAgICBsYXQ6IGYuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMV0sXG4gICAgICBsb246IGYuZ2VvbWV0cnkuY29vcmRpbmF0ZXNbMF0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNZXJnZSB0aGUgbmVhcmVzdCB1cHN0cmVhbSBtYWluLXN0ZW0gZ2F1Z2UgaW50byB0aGUgbG9jYXRlZC1nYXVnZSBsaXN0IGFzIGFcbiAqIHZpcnR1YWwgZ2F1Z2UgYXQgdGhlIHNwaWxsIHBvaW50ICh0cmFjZV9kaXN0IDApLiBXaXRob3V0IHRoaXMsIGNsaWNraW5nIGp1c3RcbiAqIERPV05TVFJFQU0gb2YgYSBnYXVnZSBkcm9wcyBpdCBmcm9tIHRoZSBETSBuYXZpZ2F0aW9uIGFuZCB0aGUgbmV4dCBnYXVnZSdzIFFcbiAqIGlzIGJhY2stY2xhbXBlZCBvbnRvIHRoZSBmaXJzdCByZWFjaCDigJQgd2lsZGx5IHdyb25nIHdoZW4gdGhhdCBnYXVnZSBzaXRzXG4gKiBiZWxvdyBhIG1ham9yIGNvbmZsdWVuY2UgKEdhbGxhdGluIGJlbG93IExvZ2FuIC0+IE1pc3NvdXJpIGF0IFRvc3RvbikuXG4gKiBRIGlzIHRyYW5zZmVycmVkIGJ5IGRyYWluYWdlLWFyZWEgcmF0aW8gKHN0YW5kYXJkIFVTR1MgdHJhbnNmZXIpLCB3aGljaCBhbHNvXG4gKiBrZWVwcyB0aGUgYW5jaG9yIGhvbmVzdCB3aGVuIHRoZSBVTSBwYXRoIGNyb3NzZXMgYSBjb25mbHVlbmNlOiB0aGUgcmF0aW9cbiAqIHNjYWxlcyBhIHRyaWJ1dGFyeSBnYXVnZSBiYWNrIHVwIHRvIHRoZSBmbG93IGF0IHRoZSBjbGljay5cbiAqIE5vLW9wIHdoZW4gYW4gb24tdHJhY2UgZ2F1Z2UgYWxyZWFkeSBzaXRzIHdpdGhpbiBhbmNob3JTa2lwTSBvZiB0aGUgc3RhcnRcbiAqIChpdCBhbHJlYWR5IGFuY2hvcnMgdGhlIGJvdW5kYXJ5KSwgdGhlIHN0YXRpb24gaXMgYWxyZWFkeSBsb2NhdGVkLCBvciB0aGVcbiAqIERBIHRyYW5zZmVyIGlzIG91dHNpZGUgaXRzIGNyZWRpYmxlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VVcHN0cmVhbUFuY2hvcihnZCwgdXAsIHNwaWxsRGFTcW1pLCB7IGFuY2hvclNraXBNID0gNTAwLCBkYVJhdGlvTWF4ID0gNCB9ID0ge30pIHtcbiAgaWYgKCF1cCB8fCAhKHVwLmRpc2NoYXJnZSA+PSAwKSB8fCAhKHVwLmRyYWluYWdlX2FyZWEgPiAwKSB8fCAhKHNwaWxsRGFTcW1pID4gMCkpIHJldHVybiBmYWxzZTtcbiAgaWYgKGdkLnNvbWUoKGcpID0+IGcuc3RhdGlvbl9pZCA9PT0gdXAuc3RhdGlvbl9pZCkpIHJldHVybiBmYWxzZTtcbiAgaWYgKGdkLnNvbWUoKGcpID0+IGcudHJhY2VfZGlzdCA8PSBhbmNob3JTa2lwTSkpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcmF0aW8gPSBzcGlsbERhU3FtaSAvIHVwLmRyYWluYWdlX2FyZWE7XG4gIGlmIChyYXRpbyA8IDEgLyBkYVJhdGlvTWF4IHx8IHJhdGlvID4gZGFSYXRpb01heCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBbdywgZGVwXSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oc3BpbGxEYVNxbWkpO1xuICBnZC5wdXNoKHtcbiAgICBzdGF0aW9uX2lkOiB1cC5zdGF0aW9uX2lkLCBuYW1lOiB1cC5uYW1lLCBsYXQ6IHVwLmxhdCwgbG9uOiB1cC5sb24sXG4gICAgZGlzY2hhcmdlOiB1cC5kaXNjaGFyZ2UgKiByYXRpbywgZHJhaW5hZ2VfYXJlYTogc3BpbGxEYVNxbWksXG4gICAgYXJlYTogdyAqIGRlcCwgdHJhY2VfZGlzdDogMC4wLFxuICAgIHVwc3RyZWFtX2FuY2hvcjogdHJ1ZSxcbiAgICBhbmNob3JfZ2F1Z2VfcV9jZnM6IHVwLmRpc2NoYXJnZSwgYW5jaG9yX2dhdWdlX2RhX3NxbWk6IHVwLmRyYWluYWdlX2FyZWEsXG4gICAgYW5jaG9yX3Vwc3RyZWFtX206IHVwLnVwc3RyZWFtX20gPz8gbnVsbCxcbiAgfSk7XG4gIGdkLnNvcnQoKGEsIGIpID0+IGEudHJhY2VfZGlzdCAtIGIudHJhY2VfZGlzdCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKiogVkFBcyBmb3IgYSBsaXN0IG9mIENPTUlEcyBmcm9tIFVTR1MgZ2Vvc2VydmVyIChiYXRjaGVkIFBPU1QpLiAqL1xuYXN5bmMgZnVuY3Rpb24gdmFhQmF0Y2goY29taWRzKSB7XG4gIGNvbnN0IG91dCA9IG5ldyBNYXAoKTtcbiAgY29uc3QgQ0hVTksgPSAxNTA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29taWRzLmxlbmd0aDsgaSArPSBDSFVOSykge1xuICAgIGNvbnN0IGNodW5rID0gY29taWRzLnNsaWNlKGksIGkgKyBDSFVOSyk7XG4gICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oR0VPU0VSVkVSLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXG4gICAgICAgIHR5cGVOYW1lOiBcIndtYWRhdGE6bmhkZmxvd2xpbmVfbmV0d29ya1wiLFxuICAgICAgICBvdXRwdXRGb3JtYXQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBjcWxfZmlsdGVyOiBgY29taWQgSU4gKCR7Y2h1bmsuam9pbihcIixcIil9KWAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgICBjb25zdCBwID0gZi5wcm9wZXJ0aWVzO1xuICAgICAgLy8gRVJPTSBtb250aGx5IG1vZGVsZWQgZmxvdyAoZ2F1Z2UtYWRqdXN0ZWQsIGNmcykg4oCUIHVuZ2F1Z2VkIGZhbGxiYWNrICsgSm9ic29uIFFhXG4gICAgICBjb25zdCBxZSA9IHt9O1xuICAgICAgZm9yIChsZXQgbSA9IDE7IG0gPD0gMTI7IG0rKykge1xuICAgICAgICBjb25zdCBrID0gYHFlXyR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgICAgICBxZVttXSA9IHBba10gPz8gbnVsbDtcbiAgICAgIH1cbiAgICAgIG91dC5zZXQoTnVtYmVyKHAuY29taWQpLCB7XG4gICAgICAgIGh5ZHJvc2VxOiBwLmh5ZHJvc2VxID8/IG51bGwsXG4gICAgICAgIHN0cmVhbW9yZGU6IHAuc3RyZWFtb3JkZSA/PyBudWxsLFxuICAgICAgICBzbG9wZTogcC5zbG9wZSA/PyBudWxsLFxuICAgICAgICB0b3RkYXNxa206IHAudG90ZGFzcWttID8/IG51bGwsXG4gICAgICAgIGZ0eXBlOiBwLmZ0eXBlID8/IG51bGwsXG4gICAgICAgIGZjb2RlOiBwLmZjb2RlID8/IG51bGwsXG4gICAgICAgIGduaXNfbmFtZTogcC5nbmlzX25hbWUgPz8gbnVsbCxcbiAgICAgICAgLy8gTGFrZVBvbmQvUmVzZXJ2b2lyID0gaW1wb3VuZGVkOyBTdHJlYW1SaXZlciA9IGJyYWlkZWQgZnJlZS1mbG93aW5nXG4gICAgICAgIHdiYXJlYXR5cGU6IHAud2JhcmVhdHlwZSA/PyBudWxsLFxuICAgICAgICB2ZV9tYTogcC52ZV9tYSA/PyBudWxsLFxuICAgICAgICBxZV9tYTogcC5xZV9tYSA/PyBudWxsLCAgIC8vIEVST00gbWVhbiBhbm51YWwgZmxvdyAoY2ZzKSDigJQgSm9ic29uIFFhXG4gICAgICAgIHFlX21vbnRobHk6IHFlLFxuICAgICAgICAvLyBOSERQbHVzIGRpdmVyZ2VuY2U6IDAgPSBub25lLCAxID0gbWFpbiBwYXRoLCAyID0gbWlub3IgcGF0aCBvZiBhIHNwbGl0XG4gICAgICAgIGRpdmVyZ2VuY2U6IHAuZGl2ZXJnZW5jZSA/PyAwLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBEaXNjaGFyZ2UgKGNmcykgKyBkcmFpbmFnZSBhcmVhIChzcSBtaSkgcGVyIGdhdWdlIHZpYSBwbGFpbiBOV0lTIFJFU1QuICovXG5hc3luYyBmdW5jdGlvbiBnYXVnZUluZm8oc3RhdGlvbklkcywgYXNPZiA9IG51bGwpIHtcbiAgY29uc3QgaW5mbyA9IG5ldyBNYXAoKTtcbiAgaWYgKCFzdGF0aW9uSWRzLmxlbmd0aCkgcmV0dXJuIGluZm87XG4gIGNvbnN0IHNpdGVzID0gc3RhdGlvbklkcy5qb2luKFwiLFwiKTtcblxuICAvLyBkcmFpbmFnZSBhcmVhcyAocmRiLCBleHBhbmRlZCBvdXRwdXQpXG4gIHRyeSB7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IGdldFRleHQoTldJU19TSVRFLCB7IGZvcm1hdDogXCJyZGJcIiwgc2l0ZXMsIHNpdGVPdXRwdXQ6IFwiZXhwYW5kZWRcIiB9KTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIikuZmlsdGVyKChsKSA9PiBsICYmICFsLnN0YXJ0c1dpdGgoXCIjXCIpKTtcbiAgICBpZiAobGluZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIGNvbnN0IGhkciA9IGxpbmVzWzBdLnNwbGl0KFwiXFx0XCIpO1xuICAgICAgY29uc3QgaVNpdGUgPSBoZHIuaW5kZXhPZihcInNpdGVfbm9cIik7XG4gICAgICBjb25zdCBpRGEgPSBoZHIuaW5kZXhPZihcImRyYWluX2FyZWFfdmFcIik7IC8vIC0xIGlmIGFic2VudFxuICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzLnNsaWNlKDIpKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdChcIlxcdFwiKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8PSBNYXRoLm1heChpU2l0ZSwgaURhID4gLTEgPyBpRGEgOiAwKSkgY29udGludWU7XG4gICAgICAgIGxldCBkYSA9IG51bGw7XG4gICAgICAgIGlmIChpRGEgPiAtMSkge1xuICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KHBhcnRzW2lEYV0pO1xuICAgICAgICAgIGRhID0gTnVtYmVyLmlzRmluaXRlKHYpID8gdiA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5zZXQocGFydHNbaVNpdGVdLCB7IGRyYWluYWdlX2FyZWE6IGRhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSDigJQgbWF0Y2hlcyBQeXRob24gKi8gfVxuXG4gIC8vIGRpc2NoYXJnZVxuICBjb25zdCBwYXJhbXMgPSB7IGZvcm1hdDogXCJqc29uXCIsIHNpdGVzLCBwYXJhbWV0ZXJDZDogXCIwMDA2MFwiIH07XG4gIGlmIChhc09mKSB7IHBhcmFtcy5zdGFydERUID0gYXNPZjsgcGFyYW1zLmVuZERUID0gYXNPZjsgfVxuICBlbHNlIHBhcmFtcy5wZXJpb2QgPSBcIlAxRFwiO1xuICB0cnkge1xuICAgIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKE5XSVNfSVYsIHsgcGFyYW1zLCB0aW1lb3V0TXM6IDYwMDAwLCB0cmllczogMSB9KTtcbiAgICBmb3IgKGNvbnN0IHRzIG9mIGo/LnZhbHVlPy50aW1lU2VyaWVzIHx8IFtdKSB7XG4gICAgICBjb25zdCBzaWQgPSB0cy5zb3VyY2VJbmZvLnNpdGVDb2RlWzBdLnZhbHVlO1xuICAgICAgY29uc3QgdmFscyA9IHRzLnZhbHVlc1swXS52YWx1ZTtcbiAgICAgIGlmICghdmFscyB8fCAhdmFscy5sZW5ndGgpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgcSA9IHBhcnNlRmxvYXQodmFsc1t2YWxzLmxlbmd0aCAtIDFdLnZhbHVlKTtcbiAgICAgIGlmIChxID49IDApIHtcbiAgICAgICAgaWYgKCFpbmZvLmhhcyhzaWQpKSBpbmZvLnNldChzaWQsIHt9KTtcbiAgICAgICAgaW5mby5nZXQoc2lkKS5kaXNjaGFyZ2UgPSBxO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSDigJQgbWF0Y2hlcyBQeXRob24gKi8gfVxuICByZXR1cm4gaW5mbztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0cmFjZSBhc3NlbWJseVxuXG4vKiogT3JkZXIgc2VnbWVudHMgZG93bnN0cmVhbSAoaHlkcm9zZXEgZGVzYyksIG9yaWVudCwgdHJpbSB0byBzcGlsbCBwb2ludCxcbiAqICBlbWl0IH5yZXNvbHV0aW9uTSBzcGFjZWQgcG9pbnRzIGNhcnJ5aW5nIFZBQSBhdHRyaWJ1dGVzLiAqL1xuZnVuY3Rpb24gYXNzZW1ibGVUcmFjZShsYXQsIGxvbiwgZ2VvbXMsIHZhYSwgcmVzb2x1dGlvbk0sIGxvZykge1xuICBjb25zdCBzZWdzID0gW107XG4gIGZvciAoY29uc3QgW2NpZCwgcGF0aHNdIG9mIGdlb21zKSB7XG4gICAgY29uc3QgdiA9IHZhYS5nZXQoY2lkKTtcbiAgICBpZiAoIXYgfHwgdi5oeWRyb3NlcSA9PT0gbnVsbCB8fCB2Lmh5ZHJvc2VxID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGNvb3JkcyA9IHBhdGhzLmZsYXQoKTsgLy8gZmxhdHRlbiBtdWx0aWxpbmUgaW50byBvbmUgdmVydGV4IGxpc3RcbiAgICBpZiAoY29vcmRzLmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xuICAgIHNlZ3MucHVzaCh7IGNvbWlkOiBjaWQsIGNvb3JkcywgLi4udiB9KTtcbiAgfVxuICBzZWdzLnNvcnQoKGEsIGIpID0+IGIuaHlkcm9zZXEgLSBhLmh5ZHJvc2VxKTsgLy8gZG93bnN0cmVhbSA9IGRlY3JlYXNpbmcgaHlkcm9zZXFcblxuICAvLyBvcmllbnQgZWFjaCBzZWdtZW50IHNvIGl0IGZsb3dzIHN0YXJ0LT5lbmQsIGNoYWluaW5nIGVuZHMgdG8gc3RhcnRzXG4gIGxldCBwcmV2RW5kID0gbnVsbDtcbiAgZm9yIChjb25zdCBzIG9mIHNlZ3MpIHtcbiAgICBsZXQgYyA9IHMuY29vcmRzO1xuICAgIGlmIChwcmV2RW5kICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkU3RhcnQgPSBoYXZlcnNpbmVNKHByZXZFbmRbMV0sIHByZXZFbmRbMF0sIGNbMF1bMV0sIGNbMF1bMF0pO1xuICAgICAgY29uc3QgZEVuZCA9IGhhdmVyc2luZU0ocHJldkVuZFsxXSwgcHJldkVuZFswXSwgY1tjLmxlbmd0aCAtIDFdWzFdLCBjW2MubGVuZ3RoIC0gMV1bMF0pO1xuICAgICAgaWYgKGRFbmQgPCBkU3RhcnQpIGMgPSBjLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBzLmNvb3JkcyA9IGM7XG4gICAgcHJldkVuZCA9IGNbYy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIC8vIHRyaW0gdGhlIGZpcnN0IHNlZ21lbnQgdG8gc3RhcnQgYXQgdGhlIHZlcnRleCBuZWFyZXN0IHRoZSBzcGlsbCBwb2ludFxuICBpZiAoc2Vncy5sZW5ndGgpIHtcbiAgICBjb25zdCBjMCA9IHNlZ3NbMF0uY29vcmRzO1xuICAgIGxldCBtaW5JID0gMCwgbWluRCA9IEluZmluaXR5O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYzAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKGxhdCwgbG9uLCBjMFtpXVsxXSwgYzBbaV1bMF0pO1xuICAgICAgaWYgKGQgPCBtaW5EKSB7IG1pbkQgPSBkOyBtaW5JID0gaTsgfVxuICAgIH1cbiAgICBjb25zdCB0cmltbWVkID0gYzAuc2xpY2UobWluSSk7XG4gICAgc2Vnc1swXS5jb29yZHMgPSB0cmltbWVkLmxlbmd0aCA/IHRyaW1tZWQgOiBbYzBbYzAubGVuZ3RoIC0gMV1dO1xuICB9XG5cbiAgLy8gZmxhdHRlbiB0byBhdHRyaWJ1dGVkIHBvaW50cywgZG93bnNhbXBsZSB0byByZXNvbHV0aW9uTVxuICBsZXQgcHRzID0gW107XG4gIGZvciAoY29uc3QgcyBvZiBzZWdzKSB7XG4gICAgbGV0IHNsb3BlID0gcy5zbG9wZTtcbiAgICBpZiAoc2xvcGUgPT09IG51bGwgfHwgc2xvcGUgPT09IHVuZGVmaW5lZCB8fCBzbG9wZSA8IDApIHNsb3BlID0gMC4wMDE7IC8vIC05OTk4ID0gbWlzc2luZ1xuICAgIGZvciAoY29uc3QgcCBvZiBzLmNvb3Jkcykge1xuICAgICAgcHRzLnB1c2goe1xuICAgICAgICBsb246IHBbMF0sIGxhdDogcFsxXSxcbiAgICAgICAgZHJhaW5hZ2VfYXJlYV9rbTI6IHMudG90ZGFzcWttIHx8IDAsXG4gICAgICAgIHNsb3BlLFxuICAgICAgICBmdHlwZTogcy5mdHlwZSwgd2JhcmVhdHlwZTogcy53YmFyZWF0eXBlLFxuICAgICAgICBjb21pZDogcy5jb21pZCxcbiAgICAgICAgZ25pc19uYW1lOiBzLmduaXNfbmFtZSxcbiAgICAgICAgcWVfbWE6IHMucWVfbWEsIHFlX21vbnRobHk6IHMucWVfbW9udGhseSxcbiAgICAgICAgZGl2ZXJnZW5jZTogcy5kaXZlcmdlbmNlIHx8IDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKHB0cy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3Qga2VlcCA9IFtwdHNbMF1dO1xuICAgIGxldCBjdW0gPSAwLjA7XG4gICAgbGV0IGxhc3QgPSBwdHNbMF07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHAgPSBwdHNbaV07XG4gICAgICBjdW0gKz0gaGF2ZXJzaW5lTShsYXN0LmxhdCwgbGFzdC5sb24sIHAubGF0LCBwLmxvbik7XG4gICAgICBsYXN0ID0gcDtcbiAgICAgIGlmIChjdW0gPj0gcmVzb2x1dGlvbk0pIHsga2VlcC5wdXNoKHApOyBjdW0gPSAwLjA7IH1cbiAgICB9XG4gICAgcHRzID0ga2VlcDtcbiAgfVxuICBsb2coYCAgdHJhY2U6ICR7c2Vncy5sZW5ndGh9IHNlZ21lbnRzIC0+ICR7cHRzLmxlbmd0aH0gcG9pbnRzICgke3NlZ3MubGVuZ3RoID8gc2Vnc1swXS5nbmlzX25hbWUgOiBcIj9cIn0gLi4uKWApO1xuICByZXR1cm4gW3B0cywgc2Vncy5sZW5ndGggPyBzZWdzWzBdLmduaXNfbmFtZSA6IG51bGxdO1xufVxuXG4vKipcbiAqIERBLXdlaWdodGVkIGRpc2NoYXJnZSBpbnRlcnBvbGF0b3IgKHYxLjQpOiBRIGFzIGEgcGllY2V3aXNlLWxpbmVhciBmdW5jdGlvblxuICogb2YgZHJhaW5hZ2UgYXJlYSBiZXR3ZWVuIGdhdWdlcywgREEtcmF0aW8gZXh0cmFwb2xhdGVkIG91dHNpZGUgdGhlIGdhdWdlXG4gKiByYW5nZSAodW5pZm9ybS15aWVsZCBhc3N1bXB0aW9uIOKAlCBzYW1lIHNlbWFudGljcyBhcyB0aGUgc2luZ2xlLWdhdWdlIHBhdGgpLlxuICogQmVjYXVzZSBEQSBqdW1wcyBhdCBjb25mbHVlbmNlcywgdGhlIFEganVtcCBsYW5kcyBBVCB0aGUgY29uZmx1ZW5jZSBpbnN0ZWFkXG4gKiBvZiBzbWVhcmluZyBsaW5lYXJseSBvdmVyIHRoZSBpbnRlci1nYXVnZSBkaXN0YW5jZTsgaXQgYWxzbyBjYW4ndCBiYWNrLWNsYW1wXG4gKiBhIHBvc3QtY29uZmx1ZW5jZSBnYXVnZSdzIGZ1bGwgUSBvbnRvIGEgc21hbGwgdXBzdHJlYW0gdHJpYnV0YXJ5LlxuICogR2F1Z2VzIHdob3NlIE5XSVMgREEgYnJlYWtzIGRvd25zdHJlYW0gbW9ub3RvbmljaXR5IGFyZSBkcm9wcGVkIChOV0lTIGFuZFxuICogTkhEUGx1cyBkZWxpbmVhdGlvbnMgZGlzYWdyZWUgb2NjYXNpb25hbGx5KS4gUmV0dXJucyBudWxsIHdoZW4gZmV3ZXIgdGhhbiAyXG4gKiBtb25vdG9uaWMgZ2F1Z2VzIHJlbWFpbiDigJQgY2FsbGVyIGZhbGxzIGJhY2sgdG8gZGlzdGFuY2UgaW50ZXJwb2xhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhV2VpZ2h0ZWRRKGdkKSB7XG4gIGNvbnN0IGtlcHQgPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdkKSB7XG4gICAgaWYgKCEoZy5kcmFpbmFnZV9hcmVhID4gMCkgfHwgIShnLmRpc2NoYXJnZSA+PSAwKSkgY29udGludWU7XG4gICAgaWYgKGtlcHQubGVuZ3RoICYmIGcuZHJhaW5hZ2VfYXJlYSA8PSBrZXB0W2tlcHQubGVuZ3RoIC0gMV0uZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XG4gICAga2VwdC5wdXNoKGcpO1xuICB9XG4gIGlmIChrZXB0Lmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xuICBjb25zdCBmUSA9IGludGVycENsYW1wZWQoa2VwdC5tYXAoKGcpID0+IGcuZHJhaW5hZ2VfYXJlYSksIGtlcHQubWFwKChnKSA9PiBnLmRpc2NoYXJnZSkpO1xuICBjb25zdCBkYTAgPSBrZXB0WzBdLmRyYWluYWdlX2FyZWEsIHEwID0ga2VwdFswXS5kaXNjaGFyZ2U7XG4gIGNvbnN0IGRhTiA9IGtlcHRba2VwdC5sZW5ndGggLSAxXS5kcmFpbmFnZV9hcmVhLCBxTiA9IGtlcHRba2VwdC5sZW5ndGggLSAxXS5kaXNjaGFyZ2U7XG4gIHJldHVybiB7XG4gICAga2VwdCxcbiAgICBxOiAoZGEpID0+IHtcbiAgICAgIGlmICghKGRhID4gMCkpIHJldHVybiAxLjA7XG4gICAgICBpZiAoZGEgPD0gZGEwKSByZXR1cm4gcTAgKiAoZGEgLyBkYTApO1xuICAgICAgaWYgKGRhID49IGRhTikgcmV0dXJuIHFOICogKGRhIC8gZGFOKTtcbiAgICAgIHJldHVybiBmUShkYSk7XG4gICAgfSxcbiAgfTtcbn1cblxuLyoqIENsYW1wZWQgbGluZWFyIGludGVycG9sYXRpb24gKHNjaXB5IGludGVycDFkIHdpdGggY2xhbXBlZCBmaWxsX3ZhbHVlKS4gKi9cbmZ1bmN0aW9uIGludGVycENsYW1wZWQoeHMsIHlzKSB7XG4gIHJldHVybiAoeCkgPT4ge1xuICAgIGlmICh4IDw9IHhzWzBdKSByZXR1cm4geXNbMF07XG4gICAgaWYgKHggPj0geHNbeHMubGVuZ3RoIC0gMV0pIHJldHVybiB5c1t5cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgaSA9IDE7XG4gICAgd2hpbGUgKHhzW2ldIDwgeCkgaSsrO1xuICAgIGNvbnN0IHQgPSAoeCAtIHhzW2kgLSAxXSkgLyAoeHNbaV0gLSB4c1tpIC0gMV0pO1xuICAgIHJldHVybiB5c1tpIC0gMV0gKyB0ICogKHlzW2ldIC0geXNbaSAtIDFdKTtcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYWluIG1vZGVsXG4vL1xuLy8gU3BsaXQgaW50byB0d28gc3RhZ2VzIHNvIHRoZSBleHBlbnNpdmUgcGFydCBpcyBjYWNoZWFibGU6XG4vLyAgIGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcpICDigJQgQUxMIG5ldHdvcmsgSS9POiB0cmFjZSBnZW9tZXRyeSwgVkFBcyxcbi8vICAgICB3aWR0aCBzYW1wbGluZywgZ2F1Z2VzICsgZmxvd3MsIHNpdGUvcmVjZXB0b3IgZmVhdHVyZXMuIFNhZmV0eSBmYWN0b3IsXG4vLyAgICAgbWF4IGhvdXJzIGV0Yy4gZG8gTk9UIGFmZmVjdCB0aGlzIHN0YWdlLlxuLy8gICBjb21wdXRlVHJhY2UoZGF0YSwgY29uZmlnKSAgICAgICAg4oCUIHB1cmUgbWF0aDogUSBpbnRlcnAsIE1hbm5pbmcgZGVwdGgsXG4vLyAgICAgdmVsb2NpdHkgeCBzYWZldHksIGltcG91bmRtZW50LCB0cmF2ZWwgdGltZSwgaG91cmx5IG1hcmtlcnMsIHNpdGUgRVRBcy5cbi8vICAgICBEZXRlcm1pbmlzdGljIGFuZCByZS1ydW5uYWJsZSBvbiB0aGUgc2FtZSBkYXRhIChmaWVsZHMgYXJlIG92ZXJ3cml0dGVuLFxuLy8gICAgIHJvd3MgYXJlIG5ldmVyIHN0cnVjdHVyYWxseSBtdXRhdGVkKS5cbi8vIHJ1blRyYWNlKCkgY29tcG9zZXMgdGhlIHR3byDigJQgaWRlbnRpY2FsIGJlaGF2aW9yIHRvIHRoZSBvcmlnaW5hbC5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcgPSB7fSkge1xuICBjb25zdCBjZmcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcbiAgY29uc3QgbG9nID0gY2ZnLnZlcmJvc2UgPyAoLi4uYSkgPT4gY29uc29sZS5sb2coLi4uYSkgOiAoKSA9PiB7fTtcblxuICBsb2coYGZldGNoVHJhY2VEYXRhKCR7bGF0LnRvRml4ZWQoNCl9LCAke2xvbi50b0ZpeGVkKDQpfSkgIGFzT2Y9JHtjZmcuYXNPZiB8fCBcImxpdmVcIn1gKTtcblxuICAvLyAxLiB0cmFjZSBnZW9tZXRyeSAob25lIE5MREkgY2FsbCkgKyBWQUEgYmF0Y2ggam9pblxuICBjb25zdCBbY29taWQsIHNuYXBOYW1lLCBzbmFwRF0gPSBhd2FpdCBzbmFwQ29taWQobGF0LCBsb24sIGNmZy5taW5TdHJlYW1PcmRlcik7XG4gIGxvZyhgICBDT01JRCAke2NvbWlkfWAgKyAoc25hcE5hbWUgPyBgICgke3NuYXBOYW1lfSwgc25hcHBlZCAkeyhzbmFwRCAvIDEwMDApLnRvRml4ZWQoMil9IGttKWAgOiBcIlwiKSk7XG4gIGNvbnN0IGdlb21zID0gYXdhaXQgbmxkaURtRmxvd2xpbmVzKGNvbWlkLCBjZmcubWF4RGlzdGFuY2VLbSk7XG4gIGxvZyhgICBOTERJIERNIGZsb3dsaW5lczogJHtnZW9tcy5zaXplfWApO1xuICBjb25zdCB2YWEgPSBhd2FpdCB2YWFCYXRjaChbLi4uZ2VvbXMua2V5cygpXSk7XG4gIGNvbnN0IFtwdHMsIHJpdmVyTmFtZV0gPSBhc3NlbWJsZVRyYWNlKGxhdCwgbG9uLCBnZW9tcywgdmFhLCBjZmcucmVzb2x1dGlvbk0sIGxvZyk7XG4gIGlmIChwdHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwidHJhY2UgdG9vIHNob3J0XCIpO1xuXG4gIC8vIHBlci1wb2ludCBhcnJheXMgKG1pcnJvcnMgdGhlIERhdGFGcmFtZSlcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGg7XG4gIGNvbnN0IHJvd3MgPSBwdHMubWFwKChwKSA9PiAoeyAuLi5wIH0pKTtcbiAgcm93c1swXS5kaXN0YW5jZSA9IDAuMDtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICByb3dzW2ldLmRpc3RhbmNlID0gaGF2ZXJzaW5lTShyb3dzW2kgLSAxXS5sYXQsIHJvd3NbaSAtIDFdLmxvbiwgcm93c1tpXS5sYXQsIHJvd3NbaV0ubG9uKTtcbiAgfVxuICBsZXQgY3VtID0gMC4wO1xuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgeyBjdW0gKz0gci5kaXN0YW5jZTsgci5jdW1fZGlzdCA9IGN1bTsgfVxuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgci5kcmFpbmFnZV9hcmVhX3NxbWkgPSByLmRyYWluYWdlX2FyZWFfa20yICogMC4zODYxMDI7XG5cbiAgLy8gMi4gd2lkdGhzOiBmb3JtdWxhIGJhc2VsaW5lLCBvcHRpb25hbCBvdmVycmlkZSBwcm92aWRlciwgMnggY2FwLCBiYWNrd2FyZCBzbW9vdGhpbmdcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICByLmZvcm11bGFfd2lkdGggPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKHIuZHJhaW5hZ2VfYXJlYV9zcW1pKVswXTtcbiAgICByLndpZHRoX20gPSAwLjA7XG4gIH1cbiAgLy8gYnJhaWRlZC1yZWFjaCBmbGFnOiBhbnkgTkhEUGx1cyBkaXZlcmdlbmNlIHdpdGhpbiB+MSBrbSAoMTAgcm93cykg4oCUIEdMT1cgd2lkdGhzXG4gIC8vIHRoZXJlIG1lYXN1cmUgdG90YWwgd2V0dGVkIHdpZHRoIGFjcm9zcyBiYXJzLCBpbmZsYXRpbmcgQSBhbmQga2lsbGluZyB2ZWxvY2l0eVxuICB7XG4gICAgY29uc3QgVyA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBsZXQgYnJhaWRlZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgayA9IE1hdGgubWF4KDAsIGkgLSBXKTsgayA8PSBNYXRoLm1pbihuIC0gMSwgaSArIFcpOyBrKyspIHtcbiAgICAgICAgaWYgKHJvd3Nba10uZGl2ZXJnZW5jZSA+IDApIHsgYnJhaWRlZCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICB9XG4gICAgICByb3dzW2ldLmJyYWlkZWQgPSBicmFpZGVkO1xuICAgIH1cbiAgICBjb25zdCBuYiA9IHJvd3MuZmlsdGVyKChyKSA9PiByLmJyYWlkZWQpLmxlbmd0aDtcbiAgICBpZiAobmIpIGxvZyhgICBicmFpZGVkIGZsYWc6ICR7bmJ9LyR7bn0gdHJhY2UgcG9pbnRzIG5lYXIgY2hhbm5lbCBkaXZlcmdlbmNlcyAoR0xPVyBvdmVycmlkZSBkaXNhYmxlZCB0aGVyZSlgKTtcbiAgfVxuXG4gIGlmIChjZmcud2lkdGhQcm92aWRlcikge1xuICAgIC8vIEhSIE5IRFBsdXNJRCAhPSBNUiBjb21pZCDigJQgc2FtcGxlIHNwYXRpYWxseSwgaW4gd2luZG93czsgbmV2ZXIgbGV0IHRoZVxuICAgIC8vIG92ZXJyaWRlIGtpbGwgdGhlIHJ1biAoZGVncmFkZSB0byBmb3JtdWxhIHdpZHRocykuXG4gICAgbGV0IG1pZHMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgU1RFUCA9IGNmZy53aWR0aFdpbmRvd1BvaW50cztcbiAgICAgIGNvbnN0IHBhZCA9IDAuMDM7XG4gICAgICBmb3IgKGxldCBpMCA9IDA7IGkwIDwgbjsgaTAgKz0gU1RFUCkge1xuICAgICAgICBjb25zdCB3aW4gPSByb3dzLnNsaWNlKGkwLCBpMCArIFNURVApO1xuICAgICAgICBjb25zdCBlbnYgPSB7XG4gICAgICAgICAgeG1pbjogTWF0aC5taW4oLi4ud2luLm1hcCgocikgPT4gci5sb24pKSAtIHBhZCxcbiAgICAgICAgICB5bWluOiBNYXRoLm1pbiguLi53aW4ubWFwKChyKSA9PiByLmxhdCkpIC0gcGFkLFxuICAgICAgICAgIHhtYXg6IE1hdGgubWF4KC4uLndpbi5tYXAoKHIpID0+IHIubG9uKSkgKyBwYWQsXG4gICAgICAgICAgeW1heDogTWF0aC5tYXgoLi4ud2luLm1hcCgocikgPT4gci5sYXQpKSArIHBhZCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmVhdHMgPSBhd2FpdCBjZmcud2lkdGhQcm92aWRlcihlbnYpOyAvLyBbe2xhdCwgbG9uLCB3aWR0aH1dXG4gICAgICAgIG1pZHMucHVzaCguLi5mZWF0cyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nKGAgIFdJRFRIIE9WRVJSSURFIEZBSUxFRCAoJHtTdHJpbmcoZSkuc2xpY2UoMCwgODApfSkgLSBmYWxsaW5nIGJhY2sgdG8gZm9ybXVsYSB3aWR0aHNgKTtcbiAgICAgIG1pZHMgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1pZHMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgICAgICBpZiAoci5icmFpZGVkKSB7IHIud2lkdGhfbSA9IDAuMDsgY29udGludWU7IH0gLy8gZm9ybXVsYSB3aWR0aCBvbiBicmFpZGVkIHJlYWNoZXNcbiAgICAgICAgbGV0IGJlc3REID0gSW5maW5pdHksIGJlc3RXID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBtIG9mIG1pZHMpIHtcbiAgICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShyLmxhdCwgci5sb24sIG0ubGF0LCBtLmxvbik7XG4gICAgICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3RXID0gbS53aWR0aCB8fCAwOyB9XG4gICAgICAgIH1cbiAgICAgICAgci53aWR0aF9tID0gYmVzdEQgPD0gY2ZnLndpZHRoU2FtcGxlUmFkaXVzTSA/IGJlc3RXIDogMC4wO1xuICAgICAgfVxuICAgICAgY29uc3QgbWF0Y2hlZCA9IHJvd3MuZmlsdGVyKChyKSA9PiByLndpZHRoX20gPiAwKS5sZW5ndGg7XG4gICAgICBsb2coYCAgR0xPVyBzcGF0aWFsIHNhbXBsZTogJHttaWRzLmxlbmd0aH0gSFIgc2VnbWVudHMsIHdpZHRocyBtYXRjaGVkIGF0ICR7bWF0Y2hlZH0vJHtufSB0cmFjZSBwb2ludHNgKTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICByLndpZHRoX2ZpbmFsX3JhdyA9XG4gICAgICByLndpZHRoX20gPiAwICYmIHIud2lkdGhfbSA8PSByLmZvcm11bGFfd2lkdGggKiAyLjAgPyByLndpZHRoX20gOiByLmZvcm11bGFfd2lkdGg7XG4gIH1cbiAgLy8gcGFuZGFzIHJvbGxpbmcod2luZG93PTUxLCBtaW5fcGVyaW9kcz0xKS5tZWFuKCkg4oCUIHRyYWlsaW5nIHdpbmRvd1xuICB7XG4gICAgY29uc3QgVyA9IDUxO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzdW0gKz0gcm93c1tpXS53aWR0aF9maW5hbF9yYXc7XG4gICAgICBpZiAoaSA+PSBXKSBzdW0gLT0gcm93c1tpIC0gV10ud2lkdGhfZmluYWxfcmF3O1xuICAgICAgcm93c1tpXS53aWR0aF9maW5hbCA9IHN1bSAvIE1hdGgubWluKGkgKyAxLCBXKTtcbiAgICB9XG4gIH1cblxuICAvLyAzLiBkaXNjaGFyZ2UgaW5wdXRzOiBOTERJIGRvd25zdHJlYW0gZ2F1Z2VzIC0+IE5XSVMgUSAoK0RBKSwgbG9jYXRlZCBvbiB0cmFjZVxuICBjb25zdCBnYXVnZXMgPSBhd2FpdCBubGRpR2F1Z2VzKGNvbWlkLCBjZmcubWF4RGlzdGFuY2VLbSwgXCJETVwiKTtcbiAgLy8gdXBzdHJlYW0tYW5jaG9yIGNhbmRpZGF0ZXM6IG5lYXJlc3QgVU0gZ2F1Z2VzIChmaXhlcyB0aGUgZGlzY29udGludWl0eSB3aGVuXG4gIC8vIHRoZSBjbGljayBpcyBqdXN0IGJlbG93IGEgZ2F1Z2UgYW5kIERNIG5hdmlnYXRpb24gbm8gbG9uZ2VyIHNlZXMgaXQpXG4gIGxldCB1cENhbmRzID0gW107XG4gIGlmIChjZmcudXBzdHJlYW1HYXVnZUttID4gMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkbUlkcyA9IG5ldyBTZXQoZ2F1Z2VzLm1hcCgoZykgPT4gZy5zdGF0aW9uX2lkKSk7XG4gICAgICB1cENhbmRzID0gKGF3YWl0IG5sZGlHYXVnZXMoY29taWQsIGNmZy51cHN0cmVhbUdhdWdlS20sIFwiVU1cIikpXG4gICAgICAgIC5maWx0ZXIoKHUpID0+ICFkbUlkcy5oYXModS5zdGF0aW9uX2lkKSlcbiAgICAgICAgLm1hcCgodSkgPT4gKHsgLi4udSwgdXBzdHJlYW1fbTogaGF2ZXJzaW5lTShsYXQsIGxvbiwgdS5sYXQsIHUubG9uKSB9KSlcbiAgICAgICAgLmZpbHRlcigodSkgPT4gdS51cHN0cmVhbV9tIDw9IGNmZy51cHN0cmVhbUdhdWdlS20gKiAxMDAwKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS51cHN0cmVhbV9tIC0gYi51cHN0cmVhbV9tKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2coYCAgVU0gZ2F1Z2UgbG9va3VwIGZhaWxlZCAoJHtTdHJpbmcoZSkuc2xpY2UoMCwgODApfSkg4oCUIG5vIHVwc3RyZWFtIGFuY2hvcmApO1xuICAgIH1cbiAgfVxuICBjb25zdCBhbGxJZHMgPSBbLi4ubmV3IFNldChbLi4uZ2F1Z2VzLCAuLi51cENhbmRzXS5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCkpXTtcbiAgY29uc3QgZ2luZm8gPSBhd2FpdCBnYXVnZUluZm8oYWxsSWRzLCBjZmcuYXNPZik7XG4gIGNvbnN0IGdkID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnYXVnZXMpIHtcbiAgICBjb25zdCBpID0gZ2luZm8uZ2V0KGcuc3RhdGlvbl9pZCkgfHwge307XG4gICAgaWYgKGkuZGlzY2hhcmdlID09PSB1bmRlZmluZWQgfHwgIWkuZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XG4gICAgbGV0IGJlc3REID0gSW5maW5pdHksIGlkeCA9IDA7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKHJvd3Nba10ubGF0LCByb3dzW2tdLmxvbiwgZy5sYXQsIGcubG9uKTtcbiAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpZHggPSBrOyB9XG4gICAgfVxuICAgIGlmIChiZXN0RCA+IDUwMDApIGNvbnRpbnVlOyAvLyBnYXVnZSBub3Qgb24gb3VyIHRyYWNlIGNvcnJpZG9yXG4gICAgY29uc3QgW3csIGRlcF0gPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKGkuZHJhaW5hZ2VfYXJlYSk7XG4gICAgZ2QucHVzaCh7XG4gICAgICAuLi5nLCBkaXNjaGFyZ2U6IGkuZGlzY2hhcmdlLCBkcmFpbmFnZV9hcmVhOiBpLmRyYWluYWdlX2FyZWEsXG4gICAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiByb3dzW2lkeF0uY3VtX2Rpc3QsXG4gICAgfSk7XG4gIH1cbiAgZ2Quc29ydCgoYSwgYikgPT4gYS50cmFjZV9kaXN0IC0gYi50cmFjZV9kaXN0KTtcbiAgY29uc3Qgc3BpbGxEYVNxbWkgPSByb3dzWzBdLmRyYWluYWdlX2FyZWFfc3FtaTtcbiAgZm9yIChjb25zdCB1IG9mIHVwQ2FuZHMpIHtcbiAgICBjb25zdCBpID0gZ2luZm8uZ2V0KHUuc3RhdGlvbl9pZCkgfHwge307XG4gICAgaWYgKGkuZGlzY2hhcmdlID09PSB1bmRlZmluZWQgfHwgIWkuZHJhaW5hZ2VfYXJlYSkgY29udGludWU7XG4gICAgaWYgKG1lcmdlVXBzdHJlYW1BbmNob3IoZ2QsIHsgLi4udSwgZGlzY2hhcmdlOiBpLmRpc2NoYXJnZSwgZHJhaW5hZ2VfYXJlYTogaS5kcmFpbmFnZV9hcmVhIH0sIHNwaWxsRGFTcW1pKSkge1xuICAgICAgbG9nKFxuICAgICAgICBgICB1cHN0cmVhbSBhbmNob3IgJHt1LnN0YXRpb25faWR9ICR7dS5uYW1lLnNsaWNlKDAsIDMwKX06ICR7TWF0aC5yb3VuZChpLmRpc2NoYXJnZSl9IGNmcyBgICtcbiAgICAgICAgYEAgJHsodS51cHN0cmVhbV9tIC8gMTAwMCkudG9GaXhlZCgxKX0ga20gdXBzdHJlYW0gLT4gJHtNYXRoLnJvdW5kKGkuZGlzY2hhcmdlICogKHNwaWxsRGFTcW1pIC8gaS5kcmFpbmFnZV9hcmVhKSl9IGNmcyBgICtcbiAgICAgICAgYGF0IHNwaWxsIHBvaW50IChEQSB4JHsoc3BpbGxEYVNxbWkgLyBpLmRyYWluYWdlX2FyZWEpLnRvRml4ZWQoMil9KWAsXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIGFuIG9uLXRyYWNlIGdhdWdlIG5lYXIgdGhlIHN0YXJ0IGFscmVhZHkgYW5jaG9ycyB0aGUgYm91bmRhcnkg4oCUIHN0b3AgbG9va2luZ1xuICAgIGlmIChnZC5zb21lKChnKSA9PiAhZy51cHN0cmVhbV9hbmNob3IgJiYgZy50cmFjZV9kaXN0IDw9IDUwMCkpIGJyZWFrO1xuICB9XG4gIGZvciAoY29uc3QgZyBvZiBnZCkge1xuICAgIGxvZyhgICBnYXVnZSAke2cuc3RhdGlvbl9pZH0gJHtnLm5hbWUuc2xpY2UoMCwgMzgpLnBhZEVuZCgzOCl9ICR7U3RyaW5nKE1hdGgucm91bmQoZy5kaXNjaGFyZ2UpKS5wYWRTdGFydCg4KX0gY2ZzIEAgJHsoZy50cmFjZV9kaXN0IC8gMTAwMCkudG9GaXhlZCgxKS5wYWRTdGFydCg2KX0ga20ke2cudXBzdHJlYW1fYW5jaG9yID8gXCIgKHVwc3RyZWFtIGFuY2hvcilcIiA6IFwiXCJ9YCk7XG4gIH1cblxuICAvLyA0LiBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzIChmZXRjaGVkIGluIHBhcmFsbGVsOyBqb2luZWQgaW4gY29tcHV0ZVRyYWNlKVxuICBjb25zdCBmZXRjaFNldHMgPSBhc3luYyAocHJvdmlkZXJzKSA9PiBQcm9taXNlLmFsbChcbiAgICAocHJvdmlkZXJzIHx8IFtdKS5tYXAoYXN5bmMgKHApID0+ICh7XG4gICAgICBidWZmZXJfbTogcC5idWZmZXJfbSA/PyA0MDAsXG4gICAgICBmZWF0czogYXdhaXQgcC5mZXRjaCgpLCAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXG4gICAgfSkpLFxuICApO1xuICBjb25zdCBbc2l0ZVNldHMsIHJlY2VwdG9yU2V0c10gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBbZmV0Y2hTZXRzKGNmZy5zaXRlUHJvdmlkZXJzKSwgZmV0Y2hTZXRzKGNmZy5yZWNlcHRvclByb3ZpZGVycyldLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbGF0LCBsb24sIGNvbWlkLCBzbmFwTmFtZSwgc25hcERpc3RNOiBzbmFwRCwgcml2ZXJOYW1lLFxuICAgIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzLFxuICAgIGFzT2Y6IGNmZy5hc09mIHx8IFwibGl2ZVwiLFxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEpvYnNvbiAoVVNHUyBXUklSIDk2LTQwMTMpXG4vL1xuLy8gRHllLXRyYWNlciByZWdyZXNzaW9ucyBmcm9tIH45ODAgc3VicmVhY2hlcyAvIH45MCBVUyByaXZlcnMuIFVuaXRzOiBEYSBtXjIsXG4vLyBRICYgUWEgbV4zL3MsIFMgZGltZW5zaW9ubGVzcywgdmVsb2NpdGllcyBtL3MuIEVxIDEyLzEzICh3aXRoIHNsb3BlKSBvclxuLy8gMTQvMTUgKHdpdGhvdXQpLiBMZWFkaW5nIGVkZ2UgVGwgPSAwLjg5MCB4IFRwIChlcSAxOCkuIFBhc3NhZ2U6IHVuaXQtcGVha1xuLy8gY29uY2VudHJhdGlvbiBDdXAgPSA4NTcgeCBUcF4tMC43NjAgeCBRJ2FeLTAuMDc5IChUcCBob3VycywgZXEgNyksIGFuZFxuLy8gVGQxMCA9IDJlNiAvIEN1cCBzZWNvbmRzIChlcSAxOSkgPSBsZWFkaW5nIGVkZ2UgLT4gMTAlLW9mLXBlYWsgdHJhaWxpbmcuXG5leHBvcnQgZnVuY3Rpb24gam9ic29uVmVsb2NpdGllcyhkYU0yLCBRbTNzLCBRYU0zcywgc2xvcGUpIHtcbiAgaWYgKCEoZGFNMiA+IDApIHx8ICEoUW0zcyA+IDApIHx8ICEoUWFNM3MgPiAwKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGcgPSA5Ljg7XG4gIGNvbnN0IERwID0gKE1hdGgucG93KGRhTTIsIDEuMjUpICogTWF0aC5zcXJ0KGcpKSAvIFFhTTNzOyAvLyBEJ2EsIGVxIDEwXG4gIGNvbnN0IFFwID0gUW0zcyAvIFFhTTNzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUSdhLCBlcSAxMVxuICBjb25zdCBxT3ZlckRhID0gUW0zcyAvIGRhTTI7XG4gIGxldCB2cCwgdm1wO1xuICBpZiAoc2xvcGUgPiAwLjAwMDAxKSB7XG4gICAgY29uc3QgWCA9IE1hdGgucG93KERwLCAwLjkxOSkgKiBNYXRoLnBvdyhRcCwgLTAuNDY5KSAqIE1hdGgucG93KHNsb3BlLCAwLjE1OSkgKiBxT3ZlckRhO1xuICAgIHZwID0gMC4wOTQgKyAwLjAxNDMgKiBYOyAgIC8vIGVxIDEyXG4gICAgdm1wID0gMC4yNSArIDAuMDIgKiBYOyAgICAgLy8gZXEgMTMgKDk5JSBlbnZlbG9wZSDigJQgZmFzdGVzdCBwcm9iYWJsZSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBYID0gTWF0aC5wb3coRHAsIDAuODIxKSAqIE1hdGgucG93KFFwLCAtMC40NjUpICogcU92ZXJEYTtcbiAgICB2cCA9IDAuMDIwICsgMC4wNTEgKiBYOyAgICAvLyBlcSAxNFxuICAgIHZtcCA9IDAuMiArIDAuMDkzICogWDsgICAgIC8vIGVxIDE1XG4gIH1cbiAgcmV0dXJuIHsgdnAsIHZtcCwgcVByaW1lOiBRcCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9ic29uUGFzc2FnZUhvdXJzKHRwSG91cnMsIHFQcmltZSkge1xuICAvLyBlcSA3ICsgZXEgMTk6IGR1cmF0aW9uIGZyb20gbGVhZGluZyBlZGdlIHRvIDEwJS1vZi1wZWFrIHRyYWlsaW5nIGVkZ2VcbiAgaWYgKCEodHBIb3VycyA+IDApIHx8ICEocVByaW1lID4gMCkpIHJldHVybiBudWxsO1xuICBjb25zdCBjdXAgPSA4NTcgKiBNYXRoLnBvdyh0cEhvdXJzLCAtMC43NjApICogTWF0aC5wb3cocVByaW1lLCAtMC4wNzkpOyAvLyBzXi0xXG4gIHJldHVybiAyZTYgLyBjdXAgLyAzNjAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xuICBjb25zdCB7IGNvbWlkLCByaXZlck5hbWUsIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzIH0gPSBkYXRhO1xuICBjb25zdCBuID0gcm93cy5sZW5ndGg7XG5cbiAgLy8gNS4gZGlzY2hhcmdlOiBpbnRlcnBvbGF0ZSBhbG9uZyB0cmFjZVxuICAvLyBtb250aCBmb3IgRVJPTSBsb29rdXBzOiBhc19vZiBtb250aCBpZiBwaW5uZWQsIGVsc2UgY3VycmVudFxuICBjb25zdCBlcm9tTW9udGggPSBkYXRhLmFzT2YgJiYgZGF0YS5hc09mICE9PSBcImxpdmVcIlxuICAgID8gcGFyc2VJbnQoZGF0YS5hc09mLnNsaWNlKDUsIDcpLCAxMClcbiAgICA6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG5cbiAgbGV0IHFNZXRob2QsIHFDb25maWRlbmNlO1xuICBjb25zdCBhbmNob3JlZCA9IGdkLnNvbWUoKGcpID0+IGcudXBzdHJlYW1fYW5jaG9yKTtcbiAgbGV0IHFJbnRlcnBVc2VkID0gbnVsbDtcbiAgaWYgKGdkLmxlbmd0aCA+PSAyKSB7XG4gICAgY29uc3QgZGFRID0gY2ZnLnFJbnRlcnAgPT09IFwiZHJhaW5hZ2UtYXJlYVwiID8gZGFXZWlnaHRlZFEoZ2QpIDogbnVsbDtcbiAgICBpZiAoZGFRKSB7XG4gICAgICAvLyBpbnRlcnBvbGF0ZSBvbiB0aGUgcnVubmluZy1tYXggREE6IEFydGlmaWNpYWxQYXRoL2RpdmVyZ2VuY2UgcmVhY2hlcyBjYW5cbiAgICAgIC8vIGNhcnJ5IDAvZGlwcGluZyB0b3RkYXNxa20sIHdoaWNoIG11c3Qgbm90IGNyYXRlciBRIG1pZC10cmFjZVxuICAgICAgaWYgKGRhUS5rZXB0Lmxlbmd0aCA8IGdkLmxlbmd0aClcbiAgICAgICAgbG9nKGAgIERBIGludGVycDogZHJvcHBlZCAke2dkLmxlbmd0aCAtIGRhUS5rZXB0Lmxlbmd0aH0gZ2F1Z2Uocykgd2l0aCBub24tbW9ub3RvbmljIE5XSVMgREFgKTtcbiAgICAgIGxldCBydW5NYXggPSAwO1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgICAgcnVuTWF4ID0gTWF0aC5tYXgocnVuTWF4LCByLmRyYWluYWdlX2FyZWFfc3FtaSk7XG4gICAgICAgIHIuUV9jZnMgPSBNYXRoLm1heChkYVEucShydW5NYXgpLCAxLjApO1xuICAgICAgfVxuICAgICAgcU1ldGhvZCA9IGFuY2hvcmVkID8gXCJnYXVnZS1EQS1pbnRlcnBvbGF0aW9uK3Vwc3RyZWFtLWFuY2hvclwiIDogXCJnYXVnZS1EQS1pbnRlcnBvbGF0aW9uXCI7XG4gICAgICBxSW50ZXJwVXNlZCA9IFwiZHJhaW5hZ2UtYXJlYVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2ZnLnFJbnRlcnAgPT09IFwiZHJhaW5hZ2UtYXJlYVwiKVxuICAgICAgICBsb2coXCIgIERBIGludGVycCB1bmF2YWlsYWJsZSAoPDIgbW9ub3RvbmljIGdhdWdlIERBcykg4oCUIGZhbGxpbmcgYmFjayB0byBkaXN0YW5jZSBpbnRlcnBvbGF0aW9uXCIpO1xuICAgICAgY29uc3QgZlEgPSBpbnRlcnBDbGFtcGVkKGdkLm1hcCgoZykgPT4gZy50cmFjZV9kaXN0KSwgZ2QubWFwKChnKSA9PiBnLmRpc2NoYXJnZSkpO1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuUV9jZnMgPSBNYXRoLm1heChmUShyLmN1bV9kaXN0KSwgMS4wKTtcbiAgICAgIHFNZXRob2QgPSBhbmNob3JlZCA/IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvbit1cHN0cmVhbS1hbmNob3JcIiA6IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvblwiO1xuICAgICAgcUludGVycFVzZWQgPSBcImRpc3RhbmNlXCI7XG4gICAgfVxuICAgIHFDb25maWRlbmNlID0gXCJISUdIXCI7XG4gIH0gZWxzZSBpZiAoZ2QubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZyA9IGdkWzBdO1xuICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICByLlFfY2ZzID0gTWF0aC5tYXgoZy5kaXNjaGFyZ2UgKiAoci5kcmFpbmFnZV9hcmVhX3NxbWkgLyBnLmRyYWluYWdlX2FyZWEpLCAxLjApO1xuICAgIH1cbiAgICBxTWV0aG9kID0gYW5jaG9yZWQgPyBcInVwc3RyZWFtLWFuY2hvci1EQS1yYXRpb1wiIDogXCJzaW5nbGUtZ2F1Z2UtREEtcmF0aW9cIjtcbiAgICBxQ29uZmlkZW5jZSA9IFwiTUVESVVNXCI7XG4gICAgbG9nKFwiICAxIGdhdWdlOiBzY2FsaW5nIGJ5IGRyYWluYWdlLWFyZWEgcmF0aW9cIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gRVJPTSBwZXItcmVhY2ggbW9udGhseSBtb2RlbGVkIGZsb3cgKGdhdWdlLWFkanVzdGVkOyBjYXB0dXJlcyBzZWFzb25hbFxuICAgIC8vIHlpZWxkIOKAlCBNb250YW5hIEp1bmUgdnMgU2VwdGVtYmVyIGRpZmZlcnMgfjV4KSBiZWZvcmUgdGhlIGZsYXQgY29uc3RhbnRcbiAgICBjb25zdCBlcm9tT2sgPSByb3dzLmZpbHRlcigocikgPT4gci5xZV9tb250aGx5ICYmIHIucWVfbW9udGhseVtlcm9tTW9udGhdID4gMCkubGVuZ3RoO1xuICAgIGlmIChlcm9tT2sgPj0gcm93cy5sZW5ndGggKiAwLjgpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICAgIGNvbnN0IHFlID0gci5xZV9tb250aGx5ID8gci5xZV9tb250aGx5W2Vyb21Nb250aF0gOiBudWxsO1xuICAgICAgICByLlFfY2ZzID0gTWF0aC5tYXgocWUgPiAwID8gcWUgOiByLmRyYWluYWdlX2FyZWFfc3FtaSAqIDIuMCwgMS4wKTtcbiAgICAgIH1cbiAgICAgIHFNZXRob2QgPSBgZXJvbS1tb250aGx5IChtb250aCAke2Vyb21Nb250aH0pYDsgcUNvbmZpZGVuY2UgPSBcIk1PREVSQVRFIOKAlCBtb2RlbGVkIGZsb3csIG5vIGxpdmUgZ2F1Z2VcIjtcbiAgICAgIGxvZyhgICBOTyBnYXVnZXM6IEVST00gbW9udGhseSBtb2RlbGVkIGZsb3cgKG1vbnRoICR7ZXJvbU1vbnRofSwgJHtlcm9tT2t9LyR7cm93cy5sZW5ndGh9IHJlYWNoZXMpYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSByLlFfY2ZzID0gTWF0aC5tYXgoci5kcmFpbmFnZV9hcmVhX3NxbWkgKiAyLjAsIDEuMCk7XG4gICAgICBxTWV0aG9kID0gXCJkcmFpbmFnZS1hcmVhLWNvbnN0YW50XCI7IHFDb25maWRlbmNlID0gXCJMT1cgQ09ORklERU5DRSDigJQgTk8gR0FVR0VcIjtcbiAgICAgIGxvZyhcIiAgTk8gZ2F1Z2VzLCBubyBFUk9NOiBRIH4gMiBjZnMgcGVyIHNxIG1pIGRyYWluYWdlIOKAlCBMT1cgQ09ORklERU5DRVwiKTtcbiAgICB9XG4gIH1cblxuICAvLyA0LiBNYW5uaW5nJ3MgZGVwdGggcGVyIHBvaW50IChmb3JtdWxhIGZhbGxiYWNrKSwgViA9IFEvQSwgc2FmZXR5IGZhY3RvclxuICBjb25zdCBDRlNfVE9fTTNTID0gTWF0aC5wb3coMy4yODEsIDMpO1xuICBsZXQgb2sgPSAwO1xuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgIHIuUV9tM3MgPSByLlFfY2ZzIC8gQ0ZTX1RPX00zUztcbiAgICBjb25zdCBkZXB0aEZvcm11bGEgPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKHIuZHJhaW5hZ2VfYXJlYV9zcW1pKVsxXTtcbiAgICBjb25zdCBkbSA9IGNhbGN1bGF0ZURlcHRoTWFubmluZyhyLlFfbTNzLCByLndpZHRoX2ZpbmFsLCByLnNsb3BlLCBjZmcubWFubmluZ04pO1xuICAgIGlmIChkbSAhPT0gbnVsbCAmJiBkbSA+IDAuMSAmJiBkbSA8IDIwKSB7IHIuZGVwdGggPSBkbTsgb2srKzsgfVxuICAgIGVsc2Ugci5kZXB0aCA9IGRlcHRoRm9ybXVsYTtcbiAgICByLmFyZWEgPSByLndpZHRoX2ZpbmFsICogci5kZXB0aDtcbiAgICByLnZlbG9jaXR5ID0gKHIuUV9tM3MgLyByLmFyZWEpICogY2ZnLnNhZmV0eUZhY3RvcjtcbiAgfVxuICBsb2coYCAgTWFubmluZydzIGRlcHRoOiAke29rfS8ke259IHBvaW50cyAoJHtNYXRoLnJvdW5kKCgxMDAgKiBvaykgLyBuKX0lKWApO1xuXG4gIC8vIDUuIGltcG91bmRtZW50IHJ1bGU6IGZsb3dsaW5lIHBhc3NlcyB0aHJvdWdoIGEgTGFrZVBvbmQvUmVzZXJ2b2lyIHdhdGVyYm9keVxuICAvLyAobWludXMga25vd24gUkVNT1ZFRCBkYW1zIHdob3NlIHdhdGVyYm9keSBmbGFncyBsaW5nZXIgaW4gTkhEUGx1cylcbiAgY29uc3QgZXhjbHVkZWQgPSBuZXcgU2V0KFsuLi5SRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEUywgLi4uKGNmZy5pbXBvdW5kRXhjbHVkZUNvbWlkcyB8fCBbXSldKTtcbiAgbGV0IHN0b3BJZHggPSBudWxsLCBydW5NID0gMC4wO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbXAgPSAocm93c1tpXS53YmFyZWF0eXBlID09PSBcIkxha2VQb25kXCIgfHwgcm93c1tpXS53YmFyZWF0eXBlID09PSBcIlJlc2Vydm9pclwiKSAmJlxuICAgICAgIWV4Y2x1ZGVkLmhhcyhyb3dzW2ldLmNvbWlkKTtcbiAgICByb3dzW2ldLmltcG91bmRlZCA9IGltcDtcbiAgICBpZiAoaW1wKSB7XG4gICAgICBydW5NICs9IHJvd3NbaV0uZGlzdGFuY2U7XG4gICAgICBpZiAocnVuTSA+PSBjZmcuaW1wb3VuZFN0b3BLbSAqIDEwMDApIHsgc3RvcElkeCA9IGk7IGJyZWFrOyB9XG4gICAgfSBlbHNlIHJ1bk0gPSAwLjA7XG4gIH1cbiAgbGV0IGltcG91bmROb3RlID0gbnVsbDtcbiAgbGV0IGRmID0gcm93cztcbiAgaWYgKHN0b3BJZHggIT09IG51bGwpIHtcbiAgICBjb25zdCBuYW1lID0gcm93c1tzdG9wSWR4XS5nbmlzX25hbWUgfHwgXCJpbXBvdW5kbWVudFwiO1xuICAgIGltcG91bmROb3RlID1cbiAgICAgIGBUcmFjZSByZWFjaGVzIGFuIGltcG91bmRlZCByZWFjaCAoJHtuYW1lfSkgYXQgYCArXG4gICAgICBgJHsocm93c1tzdG9wSWR4XS5jdW1fZGlzdCAvIDEwMDApLnRvRml4ZWQoMSl9IGttIOKAlCB0cmF2ZWwgdGltZSBiZXlvbmQgYCArXG4gICAgICBgdGhpcyBwb2ludCBpcyBOT1QgbW9kZWxlZCAocmVzZXJ2b2lyIHRyYW5zaXQpLmA7XG4gICAgZGYgPSByb3dzLnNsaWNlKDAsIHN0b3BJZHggKyAxKTtcbiAgICBsb2coYCAgSU1QT1VORE1FTlQgU1RPUDogJHtpbXBvdW5kTm90ZX1gKTtcbiAgfVxuXG4gIC8vIDYuIHRyYXZlbCB0aW1lLCBjdXRvZmYsIGhvdXJseSBtYXJrZXJzXG4gIGNvbnN0IGpvYnNvbiA9IGNmZy50aW1pbmdNb2RlbCA9PT0gXCJqb2Jzb25cIjtcbiAgY29uc3QgQ0ZTID0gTWF0aC5wb3coMy4yODEsIDMpO1xuICBsZXQgY3VtVCA9IDAuMCwgdFBlYWsgPSAwLjAsIHRGYXN0ID0gMC4wLCBqb2Jzb25EZWdyYWRlZCA9IDA7XG4gIGZvciAoY29uc3QgciBvZiBkZikge1xuICAgIHIuc2VnX3RpbWUgPSByLmRpc3RhbmNlIC8gci52ZWxvY2l0eTtcbiAgICBjdW1UICs9IHIuc2VnX3RpbWU7XG4gICAgci5jdW1fdGltZSA9IGN1bVQgLyAzNjAwOyAvLyBoeWRyYXVsaWMgKHggc2FmZXR5KSDigJQgYWx3YXlzIGNvbXB1dGVkOyBmZWVkcyBsZWdhY3kgbW9kZVxuICAgIGlmIChqb2Jzb24pIHtcbiAgICAgIGNvbnN0IGRhTTIgPSAoci5kcmFpbmFnZV9hcmVhX2ttMiB8fCAwKSAqIDFlNjtcbiAgICAgIGNvbnN0IFFhTTNzID0gci5xZV9tYSA+IDAgPyByLnFlX21hIC8gQ0ZTIDogbnVsbDtcbiAgICAgIGNvbnN0IGp2ID0gUWFNM3MgPyBqb2Jzb25WZWxvY2l0aWVzKGRhTTIsIHIuUV9tM3MsIFFhTTNzLCByLnNsb3BlKSA6IG51bGw7XG4gICAgICBsZXQgdnAsIHZtcCwgcVByaW1lO1xuICAgICAgaWYgKGp2KSB7ICh7IHZwLCB2bXAsIHFQcmltZSB9ID0ganYpOyB9XG4gICAgICBlbHNlIHsgdnAgPSByLnZlbG9jaXR5IC8gY2ZnLnNhZmV0eUZhY3Rvcjsgdm1wID0gdnAgKiAyOyBxUHJpbWUgPSAxOyBqb2Jzb25EZWdyYWRlZCsrOyB9XG4gICAgICB0UGVhayArPSByLmRpc3RhbmNlIC8gdnA7XG4gICAgICB0RmFzdCArPSByLmRpc3RhbmNlIC8gdm1wO1xuICAgICAgci50X3BlYWsgPSB0UGVhayAvIDM2MDA7XG4gICAgICByLnRfbGVhZCA9IDAuODkwICogci50X3BlYWs7ICAgICAgICAgICAgICAvLyBlcSAxOCDigJQgbW9zdCBwcm9iYWJsZSBmaXJzdCBhcnJpdmFsXG4gICAgICByLnRfbGVhZF9taW4gPSAwLjg5MCAqICh0RmFzdCAvIDM2MDApOyAgICAvLyA5OSUgZW52ZWxvcGUg4oCUIGVhcmxpZXN0IGNyZWRpYmxlIGFycml2YWxcbiAgICAgIGNvbnN0IHRkMTAgPSBqb2Jzb25QYXNzYWdlSG91cnMoci50X3BlYWssIHFQcmltZSk7XG4gICAgICByLnRfY2xlYXIgPSB0ZDEwICE9PSBudWxsID8gci50X2xlYWQgKyB0ZDEwIDogbnVsbDsgLy8gMTAlLW9mLXBlYWsgdHJhaWxpbmcgZWRnZVxuICAgIH1cbiAgfVxuICBpZiAoam9ic29uICYmIGpvYnNvbkRlZ3JhZGVkKSBsb2coYCAgSm9ic29uOiAke2pvYnNvbkRlZ3JhZGVkfSBwb2ludHMgbGFja2VkIEVST00gUWEgKGh5ZHJhdWxpYyBmYWxsYmFjaylgKTtcbiAgY29uc3QgdGltZU9mID0gKHIpID0+IChqb2Jzb24gPyByLnRfbGVhZCA6IHIuY3VtX3RpbWUpO1xuICBkZiA9IGRmLmZpbHRlcigocikgPT4gdGltZU9mKHIpIDwgY2ZnLm1heEhvdXJzKTtcbiAgY29uc3QgbWF4Q3VtVGltZSA9IGRmLmxlbmd0aCA/IHRpbWVPZihkZltkZi5sZW5ndGggLSAxXSkgOiAwO1xuICBjb25zdCBuZWFyZXN0Um93ID0gKGZpZWxkLCB0YXJnZXQpID0+IHtcbiAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgaSA9IDA7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xuICAgICAgY29uc3QgZCA9IE1hdGguYWJzKGRmW2tdW2ZpZWxkXSAtIHRhcmdldCk7XG4gICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgaSA9IGs7IH0gLy8gZmlyc3Qgb2NjdXJyZW5jZSBvZiBtaW4gKHBhbmRhcyBpZHhtaW4pXG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9O1xuICBjb25zdCBob3VybHkgPSBbXTtcbiAgZm9yIChsZXQgaG91ciA9IDE7IGhvdXIgPD0gY2ZnLm1heEhvdXJzOyBob3VyKyspIHtcbiAgICBpZiAobWF4Q3VtVGltZSA8IGhvdXIgJiYgTWF0aC5hYnMobWF4Q3VtVGltZSAtIGhvdXIpID4gMC41KSBicmVhaztcbiAgICBjb25zdCBpID0gbmVhcmVzdFJvdyhqb2Jzb24gPyBcInRfbGVhZFwiIDogXCJjdW1fdGltZVwiLCBob3VyKTtcbiAgICBjb25zdCBoID0ge1xuICAgICAgaG91cixcbiAgICAgIGxhdDogZGZbaV0ubGF0LCBsb246IGRmW2ldLmxvbixcbiAgICAgIGN1bV9kaXN0X2ttOiBkZltpXS5jdW1fZGlzdCAvIDEwMDAsXG4gICAgICB2ZWxvY2l0eV9tcGg6IGRmW2ldLnZlbG9jaXR5ICogMi4yMzY5NCxcbiAgICB9O1xuICAgIGlmIChqb2Jzb24pIHtcbiAgICAgIC8vIGJhbmQgYXQgdGhpcyBob3VyOiBidWxrIChwZWFrKSBwb3NpdGlvbiAuLiBmYXJ0aGVzdCBjcmVkaWJsZSAoOTklIGxlYWRpbmcpXG4gICAgICBjb25zdCBpUGVhayA9IG5lYXJlc3RSb3coXCJ0X3BlYWtcIiwgaG91cik7XG4gICAgICBjb25zdCBpRmFyID0gbmVhcmVzdFJvdyhcInRfbGVhZF9taW5cIiwgaG91cik7XG4gICAgICBoLmJhbmQgPSB7XG4gICAgICAgIHBlYWs6IHsgaTogaVBlYWssIGxhdDogZGZbaVBlYWtdLmxhdCwgbG9uOiBkZltpUGVha10ubG9uLCBjdW1fZGlzdF9rbTogZGZbaVBlYWtdLmN1bV9kaXN0IC8gMTAwMCB9LFxuICAgICAgICBmYXN0ZXN0OiB7IGk6IGlGYXIsIGxhdDogZGZbaUZhcl0ubGF0LCBsb246IGRmW2lGYXJdLmxvbiwgY3VtX2Rpc3Rfa206IGRmW2lGYXJdLmN1bV9kaXN0IC8gMTAwMCB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgaG91cmx5LnB1c2goaCk7XG4gIH1cblxuICAvLyA3LiBzaXRlIEVUQXMgKyByZWNlcHRvciB3YXJuaW5ncyAobmVhcmVzdCB0cmFjZSBwb2ludCB3aXRoaW4gYnVmZmVyKTtcbiAgLy8gZmVhdHVyZXMgd2VyZSBwcmUtZmV0Y2hlZCBpbnRvIGRhdGEuc2l0ZVNldHMvcmVjZXB0b3JTZXRzXG4gIGZ1bmN0aW9uIHByb3hpbWl0eShzZXQpIHtcbiAgICBjb25zdCBmZWF0cyA9IHNldC5mZWF0czsgLy8gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XVxuICAgIGNvbnN0IGJ1ZiA9IHNldC5idWZmZXJfbSA/PyA0MDA7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZm9yIChjb25zdCBmIG9mIGZlYXRzKSB7XG4gICAgICBpZiAoZi5sYXQgPT09IHVuZGVmaW5lZCB8fCBmLmxvbiA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpID0gMDtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGYubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0oZGZba10ubGF0LCBkZltrXS5sb24sIGYubGF0LCBmLmxvbik7XG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpID0gazsgfVxuICAgICAgfVxuICAgICAgaWYgKGJlc3REIDw9IGJ1Zikge1xuICAgICAgICBjb25zdCB7IGxhdDogX2EsIGxvbjogX2IsIC4uLnJlc3QgfSA9IGY7XG4gICAgICAgIGNvbnN0IHJvdyA9IHtcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgIGV0YV9ocjogTWF0aC5yb3VuZCh0aW1lT2YoZGZbaV0pICogMTAwKSAvIDEwMCxcbiAgICAgICAgICBkaXN0X2ttOiBNYXRoLnJvdW5kKChkZltpXS5jdW1fZGlzdCAvIDEwMDApICogMTApIC8gMTAsXG4gICAgICAgICAgb2Zmc2V0X206IE1hdGgucm91bmQoYmVzdEQpLFxuICAgICAgICAgIC8vIG1vZGVsZWQgaHlkcmF1bGljcyBhdCB0aGUgc2l0ZSdzIHRyYWNlIHBvaW50IOKAlCBmZWVkcyBib29tIHNpemluZ1xuICAgICAgICAgIHJpdmVyX3dpZHRoX206IE1hdGgucm91bmQoZGZbaV0ud2lkdGhfZmluYWwgKiAxMCkgLyAxMCxcbiAgICAgICAgICB2ZWxvY2l0eV9tczogTWF0aC5yb3VuZChkZltpXS52ZWxvY2l0eSAqIDEwMDApIC8gMTAwMCxcbiAgICAgICAgICBkZXB0aF9tOiBNYXRoLnJvdW5kKGRmW2ldLmRlcHRoICogMTAwKSAvIDEwMCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGpvYnNvbikge1xuICAgICAgICAgIHJvdy5ldGFfZWFybHlfaHIgPSBNYXRoLnJvdW5kKGRmW2ldLnRfbGVhZF9taW4gKiAxMDApIC8gMTAwO1xuICAgICAgICAgIHJvdy5ldGFfcGVha19ociA9IE1hdGgucm91bmQoZGZbaV0udF9wZWFrICogMTAwKSAvIDEwMDtcbiAgICAgICAgICByb3cuY2xlYXJfaHIgPSBkZltpXS50X2NsZWFyICE9PSBudWxsID8gTWF0aC5yb3VuZChkZltpXS50X2NsZWFyICogMTAwKSAvIDEwMCA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgb3V0LnB1c2gocm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0LnNvcnQoKGEsIGIpID0+IGEuZXRhX2hyIC0gYi5ldGFfaHIpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBjb25zdCBzaXRlcyA9IFtdO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2l0ZVNldHMgfHwgW10pIHNpdGVzLnB1c2goLi4ucHJveGltaXR5KHMpKTtcbiAgc2l0ZXMuc29ydCgoYSwgYikgPT4gYS5ldGFfaHIgLSBiLmV0YV9ocik7XG4gIGNvbnN0IHdhcm5pbmdzID0gaW1wb3VuZE5vdGUgPyBbaW1wb3VuZE5vdGVdIDogW107XG4gIGlmIChxQ29uZmlkZW5jZSAhPT0gXCJISUdIXCIpIHdhcm5pbmdzLnVuc2hpZnQoYEZsb3cgZXN0aW1hdGU6ICR7cUNvbmZpZGVuY2V9ICgke3FNZXRob2R9KWApO1xuICBmb3IgKGNvbnN0IHMgb2YgcmVjZXB0b3JTZXRzIHx8IFtdKSB7XG4gICAgZm9yIChjb25zdCByIG9mIHByb3hpbWl0eShzKSkge1xuICAgICAgd2FybmluZ3MucHVzaChcbiAgICAgICAgYFJlY2VwdG9yICcke3IubmFtZX0nIH4ke3Iub2Zmc2V0X219IG0gb2ZmIHRyYWNlIGF0IGhyICR7ci5ldGFfaHJ9ICgke3IuZGlzdF9rbX0ga20gZG93bnN0cmVhbSlgLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkaXN0YW5jZUttID0gZGYubGVuZ3RoID8gZGZbZGYubGVuZ3RoIC0gMV0uY3VtX2Rpc3QgLyAxMDAwIDogMDtcbiAgY29uc3QgYXZnVmVsID0gZGYubGVuZ3RoID8gZGYucmVkdWNlKChzLCByKSA9PiBzICsgci52ZWxvY2l0eSwgMCkgLyBkZi5sZW5ndGggOiAwO1xuICBjb25zdCBnbG93TWF0Y2hlZCA9IHJvd3MuZmlsdGVyKChyKSA9PiByLndpZHRoX20gPiAwKS5sZW5ndGg7XG4gIGNvbnN0IGJyYWlkZWROID0gcm93cy5maWx0ZXIoKHIpID0+IHIuYnJhaWRlZCkubGVuZ3RoO1xuXG4gIC8vIHByb3ZlbmFuY2Ug4oCUIGVub3VnaCB0byByZWNvbnN0cnVjdCBhbnkgb3V0cHV0IGluIGFuIGFmdGVyLWFjdGlvbiByZXZpZXdcbiAgY29uc3QgcnVuUmVjb3JkID0ge1xuICAgIGVuZ2luZV92ZXJzaW9uOiBFTkdJTkVfVkVSU0lPTixcbiAgICBnZW5lcmF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBkYXRhX2ZldGNoZWRfYXQ6IGRhdGEuZmV0Y2hlZEF0IHx8IG51bGwsXG4gICAgc3BpbGxfcG9pbnQ6IHsgbGF0OiBkYXRhLmxhdCwgbG9uOiBkYXRhLmxvbiB9LFxuICAgIHNuYXA6IHsgY29taWQsIHJpdmVyOiByaXZlck5hbWUsIHNuYXBwZWRfZnJvbV9tOiBkYXRhLnNuYXBEaXN0TSAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZChkYXRhLnNuYXBEaXN0TSB8fCAwKSA6IG51bGwgfSxcbiAgICB0aW1pbmdfbW9kZWw6IGNmZy50aW1pbmdNb2RlbCxcbiAgICBzYWZldHlfZmFjdG9yOiBjZmcuc2FmZXR5RmFjdG9yLFxuICAgIG1heF9ob3VyczogY2ZnLm1heEhvdXJzLFxuICAgIGFzX29mOiBkYXRhLmFzT2YgfHwgXCJsaXZlXCIsXG4gICAgcV9tZXRob2Q6IHFNZXRob2QsXG4gICAgcV9jb25maWRlbmNlOiBxQ29uZmlkZW5jZSxcbiAgICBxX2ludGVycDogcUludGVycFVzZWQsXG4gICAgZ2F1Z2VzOiBnZC5tYXAoKGcpID0+ICh7XG4gICAgICBzdGF0aW9uX2lkOiBnLnN0YXRpb25faWQsIG5hbWU6IGcubmFtZSwgZGlzY2hhcmdlX2NmczogZy5kaXNjaGFyZ2UsIHRyYWNlX2ttOiBNYXRoLnJvdW5kKGcudHJhY2VfZGlzdCAvIDEwMCkgLyAxMCxcbiAgICAgIC4uLihnLnVwc3RyZWFtX2FuY2hvciA/IHtcbiAgICAgICAgdXBzdHJlYW1fYW5jaG9yOiB0cnVlLFxuICAgICAgICBhbmNob3JfZ2F1Z2VfcV9jZnM6IGcuYW5jaG9yX2dhdWdlX3FfY2ZzLFxuICAgICAgICBhbmNob3JfZ2F1Z2VfZGFfc3FtaTogZy5hbmNob3JfZ2F1Z2VfZGFfc3FtaSxcbiAgICAgICAgYW5jaG9yX3Vwc3RyZWFtX2ttOiBnLmFuY2hvcl91cHN0cmVhbV9tICE9PSBudWxsID8gTWF0aC5yb3VuZChnLmFuY2hvcl91cHN0cmVhbV9tIC8gMTAwKSAvIDEwIDogbnVsbCxcbiAgICAgIH0gOiB7fSksXG4gICAgfSkpLFxuICAgIGVyb21fbW9udGg6IHFNZXRob2Quc3RhcnRzV2l0aChcImVyb21cIikgPyBlcm9tTW9udGggOiBudWxsLFxuICAgIHdpZHRoX3NvdXJjZTogeyBnbG93X21hdGNoZWRfcG9pbnRzOiBnbG93TWF0Y2hlZCwgdG90YWxfcG9pbnRzOiByb3dzLmxlbmd0aCwgYnJhaWRlZF9wb2ludHNfZm9ybXVsYV93aWR0aDogYnJhaWRlZE4gfSxcbiAgICBqb2Jzb25fZGVncmFkZWRfcG9pbnRzOiBqb2Jzb24gPyBqb2Jzb25EZWdyYWRlZCA6IG51bGwsXG4gICAgaW1wb3VuZF9leGNsdXNpb25zX2FwcGxpZWQ6IFsuLi5leGNsdWRlZF0uZmlsdGVyKChjKSA9PiByb3dzLnNvbWUoKHIpID0+IHIuY29taWQgPT09IGMpKSxcbiAgICBpbXBvdW5kX3N0b3Bfa206IHN0b3BJZHggIT09IG51bGwgPyBNYXRoLnJvdW5kKHJvd3Nbc3RvcElkeF0uY3VtX2Rpc3QgLyAxMDApIC8gMTAgOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICByaXZlcl9uYW1lOiByaXZlck5hbWUsXG4gICAgY29taWQsXG4gICAgYXNfb2Y6IGRhdGEuYXNPZiB8fCBcImxpdmVcIixcbiAgICBzYWZldHlfZmFjdG9yOiBjZmcuc2FmZXR5RmFjdG9yLFxuICAgIHRpbWluZ19tb2RlbDogY2ZnLnRpbWluZ01vZGVsLFxuICAgIHFfbWV0aG9kOiBxTWV0aG9kLFxuICAgIHFfY29uZmlkZW5jZTogcUNvbmZpZGVuY2UsXG4gICAgZ2F1Z2VzX3VzZWQ6IGdkLm1hcCgoZykgPT4gKHtcbiAgICAgIHN0YXRpb25faWQ6IGcuc3RhdGlvbl9pZCwgbmFtZTogZy5uYW1lLFxuICAgICAgZGlzY2hhcmdlOiBnLmRpc2NoYXJnZSwgdHJhY2VfZGlzdDogZy50cmFjZV9kaXN0LFxuICAgIH0pKSxcbiAgICBkaXN0YW5jZV9rbV8yNGg6IGRpc3RhbmNlS20sXG4gICAgYXZnX3ZlbG9jaXR5X21waDogYXZnVmVsICogMi4yMzY5NCxcbiAgICBpbXBvdW5kX3N0b3A6IGltcG91bmROb3RlLFxuICAgIGhvdXJseSxcbiAgICBzaXRlcyxcbiAgICB3YXJuaW5ncyxcbiAgICBydW5SZWNvcmQsXG4gICAgdHJhY2U6IGRmLCAvLyBmdWxsIHJvdyBhcnJheSBmb3IgaW5zcGVjdGlvbi9nZW9qc29uIGV4cG9ydFxuICB9O1xuICBsb2coXG4gICAgYCAgUkVTVUxUOiAke2Rpc3RhbmNlS20udG9GaXhlZCgxKX0ga20gaW4gPD0gJHtjZmcubWF4SG91cnN9IGgsIGAgK1xuICAgIGBhdmcgJHtyZXN1bHQuYXZnX3ZlbG9jaXR5X21waC50b0ZpeGVkKDIpfSBtcGgsICR7c2l0ZXMubGVuZ3RofSBzaXRlcywgJHt3YXJuaW5ncy5sZW5ndGh9IHdhcm5pbmdzYCxcbiAgKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJ1blRyYWNlKGxhdCwgbG9uLCBjb25maWcgPSB7fSkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIGNvbmZpZyk7XG4gIHJldHVybiBjb21wdXRlVHJhY2UoZGF0YSwgY29uZmlnKTtcbn1cblxuLyoqXG4gKiBCb29tIHNpemluZyBmcm9tIG1vZGVsZWQgaHlkcmF1bGljcyAocGxhbm5pbmctbGV2ZWwsIGZvciBHUlBzIHRoYXQgY2Fycnkgbm9cbiAqIGVxdWlwbWVudCBxdWFudGl0aWVzKS4gU3RhbmRhcmQgY29udGFpbm1lbnQgcnVsZTogb2lsIGVudHJhaW5zIHVuZGVyIGEgYm9vbVxuICogd2hlbiB0aGUgZmxvdyBjb21wb25lbnQgbm9ybWFsIHRvIGl0IGV4Y2VlZHMgfjAuMzUgbS9zICgwLjcga3QpLCBzbyBpblxuICogZmFzdGVyIHdhdGVyIHRoZSBib29tIGlzIGFuZ2xlZCB3aXRoIHNpbih0aGV0YSkgPSBlbnRyYWlubWVudC92ZWxvY2l0eSBhbmRcbiAqIHRoZSByZXF1aXJlZCBsZW5ndGggZ3Jvd3MgdG8gd2lkdGgvc2luKHRoZXRhKS4gQW5jaG9yIHNldHMgZnJvbSBsZW5ndGguXG4gKiBBbmdsZXMgYmVsb3cgfjE1IGRlZyAodiA+IH4xLjM1IG0vcykgYXJlIGZsYWdnZWQ6IHVzZSBjYXNjYWRlZCBzaG9ydGVyIGJvb21zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVCb29tTmVlZHMod2lkdGhNLCB2ZWxvY2l0eU1zLCBvcHRzID0ge30pIHtcbiAgY29uc3QgZW50cmFpbiA9IG9wdHMuZW50cmFpbm1lbnRNcyA/PyAwLjM1O1xuICBjb25zdCByZXNlcnZlUGN0ID0gb3B0cy5yZXNlcnZlUGN0ID8/IDIwO1xuICBjb25zdCBhbmNob3JTcGFjaW5nRnQgPSBvcHRzLmFuY2hvclNwYWNpbmdGdCA/PyAxMDA7XG4gIGlmICghKHdpZHRoTSA+IDApIHx8ICEodmVsb2NpdHlNcyA+PSAwKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHNpblRoZXRhID0gdmVsb2NpdHlNcyA+IGVudHJhaW4gPyBlbnRyYWluIC8gdmVsb2NpdHlNcyA6IDE7XG4gIGNvbnN0IGFuZ2xlRGVnID0gKE1hdGguYXNpbihzaW5UaGV0YSkgKiAxODApIC8gTWF0aC5QSTtcbiAgY29uc3QgbGVuZ3RoRnQgPSAod2lkdGhNIC8gc2luVGhldGEpICogMy4yODA4NCAqICgxICsgcmVzZXJ2ZVBjdCAvIDEwMCk7XG4gIGNvbnN0IGJvb21GdCA9IE1hdGguY2VpbChsZW5ndGhGdCAvIDUwKSAqIDUwOyAvLyByb3VuZCB1cCB0byA1MC1mdCBzdGlja3NcbiAgY29uc3QgYW5jaG9ycyA9IE1hdGgubWF4KDIsIE1hdGguY2VpbChib29tRnQgLyBhbmNob3JTcGFjaW5nRnQpICsgMSk7XG4gIHJldHVybiB7XG4gICAgYm9vbV9mdDogYm9vbUZ0LFxuICAgIGJvb21fYW5nbGVfZGVnOiBNYXRoLnJvdW5kKGFuZ2xlRGVnKSxcbiAgICBhbmNob3JzLFxuICAgIGRlZmxlY3Rpb246IHZlbG9jaXR5TXMgPiBlbnRyYWluLFxuICAgIGNhc2NhZGVfYWR2aXNlZDogYW5nbGVEZWcgPCAxNSwgLy8gdG9vIGZhc3QgZm9yIGEgc2luZ2xlIHN3ZWVwIOKAlCBjYXNjYWRlIGJvb21zXG4gIH07XG59XG5cbi8qKiBUcmFjZSBsaW5lICsgaG91cmx5IG1hcmtlcnMgYXMgYSBHZW9KU09OIEZlYXR1cmVDb2xsZWN0aW9uICh3aWRnZXQgcHJldmlldykuICovXG5leHBvcnQgZnVuY3Rpb24gdG9HZW9Kc29uKHJlc3VsdCkge1xuICBjb25zdCBkZiA9IHJlc3VsdC50cmFjZTtcbiAgY29uc3QgZmMgPSB7XG4gICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAga2luZDogXCJ0cmFjZVwiLCByaXZlcjogcmVzdWx0LnJpdmVyX25hbWUsXG4gICAgICAgICAgZGlzdGFuY2Vfa21fMjRoOiByZXN1bHQuZGlzdGFuY2Vfa21fMjRoLFxuICAgICAgICB9LFxuICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxuICAgICAgICAgIGNvb3JkaW5hdGVzOiBkZi5tYXAoKHIpID0+IFtcbiAgICAgICAgICAgIE1hdGgucm91bmQoci5sb24gKiAxZTYpIC8gMWU2LCBNYXRoLnJvdW5kKHIubGF0ICogMWU2KSAvIDFlNixcbiAgICAgICAgICBdKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgZm9yIChjb25zdCBoIG9mIHJlc3VsdC5ob3VybHkpIHtcbiAgICBmYy5mZWF0dXJlcy5wdXNoKHtcbiAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgcHJvcGVydGllczogeyBraW5kOiBcImhvdXJcIiwgaG91cjogaC5ob3VyLCBjdW1fZGlzdF9rbTogaC5jdW1fZGlzdF9rbSwgdmVsb2NpdHlfbXBoOiBoLnZlbG9jaXR5X21waCB9LFxuICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICBjb29yZGluYXRlczogW01hdGgucm91bmQoaC5sb24gKiAxZTYpIC8gMWU2LCBNYXRoLnJvdW5kKGgubGF0ICogMWU2KSAvIDFlNl0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBmYztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2ludF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvbHlsaW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKipcclxuICogU3BpbGwgVHJhamVjdG9yeSB3aWRnZXQg4oCUIHJ1bnRpbWUuXHJcbiAqXHJcbiAqIENsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIg4oaSIGNsaWNrIHRoZSBtYXAg4oaSIHRoZSBnb2xkZW4tdGVzdGVkIHRyYWNlIGVuZ2luZVxyXG4gKiAodHJhY2UtZW5naW5lLnRzLCBwYXJpdHktdmVyaWZpZWQgdnMgdGhlIFB5dGhvbiBvcmFjbGUpIGRyYXdzIGFuIGVwaGVtZXJhbFxyXG4gKiB0aW1lLWNvbG9yZWQgcGx1bWUgb24gYSBjbGllbnQtc2lkZSBHcmFwaGljc0xheWVyIHdpdGggaG91cmx5IG1hcmtlcnMsXHJcbiAqIHBsdXMgYW4gRVRBLXNvcnRlZCBzdHJhdGVneS1zaXRlIGxpc3QgYW5kIHJlY2VwdG9yIHdhcm5pbmdzLlxyXG4gKiBOb3RoaW5nIGlzIHBlcnNpc3RlZCDigJQgQ2xlYXIgKG9yIHdpZGdldCB1bm1vdW50KSByZW1vdmVzIGV2ZXJ5dGhpbmcuXHJcbiAqL1xyXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcidcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYydcclxuaW1wb3J0IFBvbHlsaW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWxpbmUnXHJcbmltcG9ydCBQb2ludCBmcm9tICdlc3JpL2dlb21ldHJ5L1BvaW50J1xyXG5pbXBvcnQgeyBnZW9kZXNpY0xlbmd0aCB9IGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcsIFNpdGVMYXllckNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZmV0Y2hUcmFjZURhdGEsIGNvbXB1dGVUcmFjZSwgZXN0aW1hdGVCb29tTmVlZHMgfSBmcm9tICcuLi90cmFjZS1lbmdpbmUnXHJcblxyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSA9IFJlYWN0XHJcblxyXG4vLyBFVEEgY29sb3IgYmFuZHM6IDwzIGhyIC8gM+KAkzEyIGhyIC8gMTLigJMyNCBoclxyXG5jb25zdCBCQU5EX0NPTE9SUzogQXJyYXk8W251bWJlciwgc3RyaW5nXT4gPSBbXHJcbiAgWzMsICcjZDcxOTFjJ10sXHJcbiAgWzEyLCAnI2ZkYWU2MSddLFxyXG4gIFsyNCwgJyMyYzdiYjYnXSxcclxuXVxyXG5jb25zdCBiYW5kQ29sb3IgPSAoaHI6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgZm9yIChjb25zdCBbbGltLCBjXSBvZiBCQU5EX0NPTE9SUykgaWYgKGhyIDwgbGltKSByZXR1cm4gY1xyXG4gIHJldHVybiAnIzJjN2JiNidcclxufVxyXG5jb25zdCBoZXhUb1JnYiA9IChoZXg6IHN0cmluZyk6IG51bWJlcltdID0+IFtcclxuICBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSwgcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNiksIHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpLFxyXG5dXHJcblxyXG5pbnRlcmZhY2UgU2l0ZVJvdyB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgZXRhX2hyOiBudW1iZXJcclxuICBkaXN0X2ttOiBudW1iZXJcclxuICBvZmZzZXRfbTogbnVtYmVyXHJcbiAgcml2ZXJfd2lkdGhfbT86IG51bWJlclxyXG4gIHZlbG9jaXR5X21zPzogbnVtYmVyXHJcbiAgYm9vbT86IHsgYm9vbV9mdDogbnVtYmVyLCBhbmNob3JzOiBudW1iZXIsIGJvb21fYW5nbGVfZGVnPzogbnVtYmVyLCBjYXNjYWRlX2FkdmlzZWQ/OiBib29sZWFuLCBzb3VyY2U6ICdkcmF3bicgfCAnZXN0JyB9XHJcbiAgW2s6IHN0cmluZ106IGFueVxyXG59XHJcblxyXG5jb25zdCBub3JtR3VpZCA9ICh2OiBhbnkpOiBzdHJpbmcgPT4gU3RyaW5nKHYgfHwgJycpLnJlcGxhY2UoL1t7fV0vZywgJycpLnRvTG93ZXJDYXNlKClcclxuXHJcbi8qKiBTdW0gZ2VvZGVzaWMgZmVldCBvZiBkcmF3biBib29tIGxpbmVzIHBlciBzaXRlIGtleSAoZS5nLiBTbmFrZSBCb29tX0xpbmVzKS4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEcmF3bkJvb20oY2ZnOiB7IHVybDogc3RyaW5nLCBzaXRlS2V5RmllbGQ6IHN0cmluZywgd2hlcmU/OiBzdHJpbmcgfSk6IFByb21pc2U8TWFwPHN0cmluZywgbnVtYmVyPj4ge1xyXG4gIGNvbnN0IGZsID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogY2ZnLnVybCB9KVxyXG4gIGNvbnN0IHEgPSBmbC5jcmVhdGVRdWVyeSgpXHJcbiAgcS53aGVyZSA9IGNmZy53aGVyZSB8fCAnMT0xJ1xyXG4gIHEub3V0RmllbGRzID0gW2NmZy5zaXRlS2V5RmllbGRdXHJcbiAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcclxuICBjb25zdCBmcyA9IGF3YWl0IGZsLnF1ZXJ5RmVhdHVyZXMocSlcclxuICBjb25zdCBvdXQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXHJcbiAgZm9yIChjb25zdCBmIG9mIGZzLmZlYXR1cmVzKSB7XHJcbiAgICBjb25zdCBrZXkgPSBub3JtR3VpZChmLmF0dHJpYnV0ZXNbY2ZnLnNpdGVLZXlGaWVsZF0pXHJcbiAgICBpZiAoIWtleSB8fCAhZi5nZW9tZXRyeSkgY29udGludWVcclxuICAgIGNvbnN0IGZ0ID0gZ2VvZGVzaWNMZW5ndGgoZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmUsICdmZWV0JylcclxuICAgIGlmIChmdCA+IDApIG91dC5zZXQoa2V5LCAob3V0LmdldChrZXkpIHx8IDApICsgZnQpXHJcbiAgfVxyXG4gIHJldHVybiBvdXRcclxufVxyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcclxuICBjb25zdCBbam12LCBzZXRKbXZdID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXHJcbiAgY29uc3QgW2FybWluZywgc2V0QXJtaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtydW5uaW5nLCBzZXRSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnQ2xpY2sgXCJTZXQgc3BpbGwgcG9pbnRcIiwgdGhlbiBjbGljayB0aGUgcml2ZXIuJylcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8YW55PihudWxsKVxyXG4gIGNvbnN0IFtzYWZldHksIHNldFNhZmV0eV0gPSB1c2VTdGF0ZTxudW1iZXI+KHByb3BzLmNvbmZpZy5zYWZldHlGYWN0b3IgPz8gMS41KVxyXG4gIGNvbnN0IFtkaWFnLCBzZXREaWFnXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcclxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgbGF5ZXJSZWYgPSB1c2VSZWY8X19lc3JpLkdyYXBoaWNzTGF5ZXI+KG51bGwpXHJcbiAgY29uc3QgY2xpY2tIYW5kbGVSZWYgPSB1c2VSZWY8X19lc3JpLkhhbmRsZT4obnVsbClcclxuICAvLyBjYWNoZWQgaHlkcm9sb2d5IGZvciB0aGUgY3VycmVudCBzcGlsbCBwb2ludCDigJQgc2FmZXR5LWZhY3RvciBjaGFuZ2VzXHJcbiAgLy8gcmVjb21wdXRlIGZyb20gdGhpcyBpbnN0YW50bHkgaW5zdGVhZCBvZiByZS1mZXRjaGluZyBOTERJL05XSVNcclxuICBjb25zdCBjYWNoZVJlZiA9IHVzZVJlZjx7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciwgZGF0YTogYW55LCBkcmF3bjogTWFwPHN0cmluZywgbnVtYmVyPiwgZmV0Y2hOb3Rlczogc3RyaW5nW10gfSB8IG51bGw+KG51bGwpXHJcblxyXG4gIC8vIC0tLS0gSUNQIGxpc3Qgc3luYyAoU25ha2UgY2xvbmUgb25seSk6IHRpbnQgdGhlIGFwcCdzIHNpdGUtbGlzdCBjYXJkcyBieSBFVEFcclxuICAvLyBiYW5kIHNvIHRoZSBsZWZ0IHBhbmVsIG1pcnJvcnMgdGhlIHBsdW1lIGNvbG9ycy4gQ2FyZCBtYXRjaGluZyBpcyBieSB0aGUgdmFsdWVcclxuICAvLyBvZiBjb25maWcubGlzdFN5bmNTaXRlQ29kZUZpZWxkIChtdXN0IGFsc28gYmUgaW4gdGhlIHNpdGUgbGF5ZXIncyBleHRyYUZpZWxkcyk7XHJcbiAgLy8gdGhlIGZpZWxkJ3MgdmFsdWUgbXVzdCBhcHBlYXIgdmVyYmF0aW0gaW4gdGhlIGNhcmQgdGV4dCAoc2l0ZV9jb2RlIGRvZXMpLlxyXG4gIGNvbnN0IGxpc3RTeW5jRmllbGQ6IHN0cmluZyA9IChwcm9wcy5jb25maWcgYXMgYW55KS5saXN0U3luY1NpdGVDb2RlRmllbGQgfHwgJydcclxuICBjb25zdCBsaXN0T2JzUmVmID0gdXNlUmVmPE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IGxpc3RSb3dzUmVmID0gdXNlUmVmPFNpdGVSb3dbXT4oW10pXHJcbiAgY29uc3QgcGFpbnRTdGF0c1JlZiA9IHVzZVJlZignJylcclxuICBjb25zdCBbcGFpbnRTdGF0cywgc2V0UGFpbnRTdGF0c10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgcGFpbnRMaXN0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWxpc3RTeW5jRmllbGQpIHJldHVyblxyXG4gICAgY29uc3QgbWFya3M6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+ID0gbGlzdFJvd3NSZWYuY3VycmVudFxyXG4gICAgICAuZmlsdGVyKChzKSA9PiBzW2xpc3RTeW5jRmllbGRdICE9IG51bGwgJiYgcy5ldGFfaHIgIT0gbnVsbClcclxuICAgICAgLm1hcCgocykgPT4gW1N0cmluZyhzW2xpc3RTeW5jRmllbGRdKS50cmltKCksIGJhbmRDb2xvcihzLmV0YV9ocildKVxyXG4gICAgLy8gdGhlIGNhcmQgY2xhc3MgaXMgYnVpbHQgZHluYW1pY2FsbHkgKGxpc3QtY2FyZC12aWV3ZXIgLyAtZWRpdG9yIC8gLWNvbnRlbnQpOlxyXG4gICAgLy8gbWF0Y2ggYW55IGxpc3QtY2FyZCogZWxlbWVudCBidXQgcGFpbnQgb25seSB0aGUgT1VURVJNT1NUIG9uZSBwZXIgY2FyZFxyXG4gICAgY29uc3QgZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignW2NsYXNzKj1cImxpc3QtY2FyZFwiXScpKVxyXG4gICAgICAuZmlsdGVyKChlbCkgPT4gIWVsLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJ1tjbGFzcyo9XCJsaXN0LWNhcmRcIl0nKSlcclxuICAgIGxldCBwYWludGVkID0gMFxyXG4gICAgZWxzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IHR4dCA9IGVsLnRleHRDb250ZW50IHx8ICcnXHJcbiAgICAgIGNvbnN0IGhpdCA9IG1hcmtzLmZpbmQoKFtjb2RlXSkgPT4gY29kZS5sZW5ndGggPiAwICYmIHR4dC5pbmRleE9mKGNvZGUpID49IDApXHJcbiAgICAgIGlmIChoaXQpIHtcclxuICAgICAgICBwYWludGVkKytcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJMZWZ0ID0gJzRweCBzb2xpZCAnICsgaGl0WzFdXHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZCA9IGhpdFsxXSArICcyNidcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXJMZWZ0ID0gJydcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kID0gJydcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHN0YXRzID0gbWFya3MubGVuZ3RoID09PSAwXHJcbiAgICAgID8gJydcclxuICAgICAgOiBgJHtwYWludGVkfSBvZiAke2Vscy5sZW5ndGh9IHZpc2libGUgY2FyZHMgbWFya2VkIMK3ICR7bWFya3MubGVuZ3RofSBzaXRlcyBpbiBwYXRoYFxyXG4gICAgaWYgKHBhaW50U3RhdHNSZWYuY3VycmVudCAhPT0gc3RhdHMpIHtcclxuICAgICAgcGFpbnRTdGF0c1JlZi5jdXJyZW50ID0gc3RhdHNcclxuICAgICAgc2V0UGFpbnRTdGF0cyhzdGF0cylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyTGlzdFN5bmMgPSAoKSA9PiB7XHJcbiAgICBpZiAobGlzdE9ic1JlZi5jdXJyZW50KSB7IGxpc3RPYnNSZWYuY3VycmVudC5kaXNjb25uZWN0KCk7IGxpc3RPYnNSZWYuY3VycmVudCA9IG51bGwgfVxyXG4gICAgbGlzdFJvd3NSZWYuY3VycmVudCA9IFtdXHJcbiAgICBwYWludFN0YXRzUmVmLmN1cnJlbnQgPSAnJ1xyXG4gICAgc2V0UGFpbnRTdGF0cygnJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbY2xhc3MqPVwibGlzdC1jYXJkXCJdJykuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuc3R5bGUuYm9yZGVyTGVmdCA9ICcnXHJcbiAgICAgIGVsLnN0eWxlLmJhY2tncm91bmQgPSAnJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGFybUxpc3RTeW5jID0gKHJvd3M6IFNpdGVSb3dbXSkgPT4ge1xyXG4gICAgaWYgKCFsaXN0U3luY0ZpZWxkKSByZXR1cm5cclxuICAgIGxpc3RSb3dzUmVmLmN1cnJlbnQgPSByb3dzIHx8IFtdXHJcbiAgICBwYWludExpc3RDYXJkcygpXHJcbiAgICBpZiAoIWxpc3RPYnNSZWYuY3VycmVudCkge1xyXG4gICAgICAvLyByZS1wYWludCB3aGVuIHRoZSBsaXN0IHJlLXJlbmRlcnMgKHNjcm9sbC9maWx0ZXIvc2VhcmNoKTsgY2hpbGRMaXN0LW9ubHlcclxuICAgICAgLy8gb2JzZXJ2YXRpb24gc28gb3VyIG93biBzdHlsZSB3cml0ZXMgY2Fubm90IHJlLXRyaWdnZXIgaXRcclxuICAgICAgbGV0IHBlbmRpbmcgPSBmYWxzZVxyXG4gICAgICBjb25zdCBvYnMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBlbmRpbmcpIHJldHVyblxyXG4gICAgICAgIHBlbmRpbmcgPSB0cnVlXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgcGVuZGluZyA9IGZhbHNlOyBwYWludExpc3RDYXJkcygpIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIG9icy5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXHJcbiAgICAgIGxpc3RPYnNSZWYuY3VycmVudCA9IG9ic1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gb25lIGdyYXBoaWNzIGxheWVyIHBlciB3aWRnZXQgbGlmZXRpbWU7IHJlbW92ZWQgb24gdW5tb3VudCAoZXBoZW1lcmFsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoY2xpY2tIYW5kbGVSZWYuY3VycmVudCkgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKVxyXG4gICAgICBpZiAobGF5ZXJSZWYuY3VycmVudCAmJiBqbXYpIGptdi52aWV3Lm1hcC5yZW1vdmUobGF5ZXJSZWYuY3VycmVudClcclxuICAgICAgY2xlYXJMaXN0U3luYygpXHJcbiAgICAgIGlmIChtYXhlZFJlZi5jdXJyZW50KSBzZXRNYXBNYXhpbWl6ZWQoZmFsc2UpXHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW2ptdl0pXHJcblxyXG4gIGNvbnN0IGVuc3VyZUxheWVyID0gKHZpZXc6IF9fZXNyaS5NYXBWaWV3KTogX19lc3JpLkdyYXBoaWNzTGF5ZXIgPT4ge1xyXG4gICAgaWYgKCFsYXllclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGxheWVyUmVmLmN1cnJlbnQgPSBuZXcgR3JhcGhpY3NMYXllcih7IHRpdGxlOiAnU3BpbGwgdHJhamVjdG9yeSAoZXBoZW1lcmFsKScsIGxpc3RNb2RlOiAnaGlkZScgfSlcclxuICAgICAgdmlldy5tYXAuYWRkKGxheWVyUmVmLmN1cnJlbnQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGF5ZXJSZWYuY3VycmVudFxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBwcm92aWRlcnM6IHdyYXAgY29uZmlndXJlZCBsYXllcnMgZm9yIHRoZSBlbmdpbmUgLS0tLVxyXG4gIC8vIEZhaWx1cmVzIGFyZSByZXBvcnRlZCB0byB0aGUgZGlhZ25vc3RpY3MgbGlzdCBpbnN0ZWFkIG9mIGtpbGxpbmcgdGhlIHRyYWNlLlxyXG4gIGNvbnN0IG1ha2VTaXRlUHJvdmlkZXIgPSAobGM6IFNpdGVMYXllckNvbmZpZywgZGVmYXVsdEJ1ZmZlcjogbnVtYmVyLCBsYWJlbDogc3RyaW5nLCBub3Rlczogc3RyaW5nW10pID0+ICh7XHJcbiAgICBidWZmZXJfbTogbGMuYnVmZmVyTSA/PyBkZWZhdWx0QnVmZmVyLFxyXG4gICAgZmV0Y2g6IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IGxjLnVybCB9KVxyXG4gICAgICAgIGNvbnN0IHEgPSBmbC5jcmVhdGVRdWVyeSgpXHJcbiAgICAgICAgcS53aGVyZSA9IGxjLndoZXJlIHx8ICcxPTEnXHJcbiAgICAgICAgcS5vdXRGaWVsZHMgPSBbbGMubmFtZUZpZWxkLCAuLi4obGMuZXh0cmFGaWVsZHMgfHwgW10pXVxyXG4gICAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICAgICAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XHJcbiAgICAgICAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXHJcbiAgICAgICAgY29uc3Qgcm93cyA9IGZzLmZlYXR1cmVzXHJcbiAgICAgICAgICAuZmlsdGVyKChmKSA9PiBmLmdlb21ldHJ5ICYmIGYuZ2VvbWV0cnkudHlwZSA9PT0gJ3BvaW50JylcclxuICAgICAgICAgIC5tYXAoKGYpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZyA9IGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogYW55ID0geyBuYW1lOiBmLmF0dHJpYnV0ZXNbbGMubmFtZUZpZWxkXSwgbGF0OiBnLnksIGxvbjogZy54IH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBlZiBvZiBsYy5leHRyYUZpZWxkcyB8fCBbXSkgcm93W2VmXSA9IGYuYXR0cmlidXRlc1tlZl1cclxuICAgICAgICAgICAgcmV0dXJuIHJvd1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICBub3Rlcy5wdXNoKGAke2xhYmVsfTogJHtyb3dzLmxlbmd0aH0gcG9pbnQgZmVhdHVyZXMgbG9hZGVkIChidWZmZXIgJHtsYy5idWZmZXJNID8/IGRlZmF1bHRCdWZmZXJ9IG0pYClcclxuICAgICAgICByZXR1cm4gcm93c1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgbm90ZXMucHVzaChgJHtsYWJlbH0gRkFJTEVEOiAke1N0cmluZyhlKS5zbGljZSgwLCAxMDApfWApXHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbWFrZVdpZHRoUHJvdmlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3bCA9IHByb3BzLmNvbmZpZy53aWR0aExheWVyXHJcbiAgICBpZiAoIXdsIHx8ICF3bC51cmwpIHJldHVybiBudWxsXHJcbiAgICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IHdsLnVybCB9KVxyXG4gICAgcmV0dXJuIGFzeW5jIChlbnY6IHsgeG1pbjogbnVtYmVyLCB5bWluOiBudW1iZXIsIHhtYXg6IG51bWJlciwgeW1heDogbnVtYmVyIH0pID0+IHtcclxuICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgcS53aGVyZSA9IHdsLndoZXJlIHx8ICcxPTEnXHJcbiAgICAgIHEuZ2VvbWV0cnkgPSB7IHR5cGU6ICdleHRlbnQnLCAuLi5lbnYsIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IH0gYXMgYW55XHJcbiAgICAgIHEuc3BhdGlhbFJlbGF0aW9uc2hpcCA9ICdpbnRlcnNlY3RzJ1xyXG4gICAgICBxLm91dEZpZWxkcyA9IFt3bC53aWR0aEZpZWxkXVxyXG4gICAgICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcclxuICAgICAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXHJcbiAgICAgIGNvbnN0IG1pZHM6IEFycmF5PHsgbGF0OiBudW1iZXIsIGxvbjogbnVtYmVyLCB3aWR0aDogbnVtYmVyIH0+ID0gW11cclxuICAgICAgZm9yIChjb25zdCBmIG9mIGZzLmZlYXR1cmVzKSB7XHJcbiAgICAgICAgY29uc3QgZyA9IGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lXHJcbiAgICAgICAgaWYgKGcgJiYgZy5wYXRocyAmJiBnLnBhdGhzLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc3QgcCA9IGcucGF0aHNbMF1cclxuICAgICAgICAgIGNvbnN0IG0gPSBwW01hdGguZmxvb3IocC5sZW5ndGggLyAyKV1cclxuICAgICAgICAgIG1pZHMucHVzaCh7IGxhdDogbVsxXSwgbG9uOiBtWzBdLCB3aWR0aDogZi5hdHRyaWJ1dGVzW3dsLndpZHRoRmllbGRdIHx8IDAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1pZHNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0gZHJhd2luZyAtLS0tXHJcbiAgY29uc3QgZHJhdyA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldywgcmVzOiBhbnksIHNwaWxsOiB7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciB9KSA9PiB7XHJcbiAgICBjb25zdCBsYXllciA9IGVuc3VyZUxheWVyKHZpZXcpXHJcbiAgICBsYXllci5yZW1vdmVBbGwoKVxyXG5cclxuICAgIC8vIHNwaWxsIHBvaW50XHJcbiAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xyXG4gICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IHNwaWxsLmxhdCwgbG9uZ2l0dWRlOiBzcGlsbC5sb24gfSksXHJcbiAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJywgc3R5bGU6ICd4Jywgc2l6ZTogMTQsXHJcbiAgICAgICAgb3V0bGluZTogeyBjb2xvcjogJyMwMDAnLCB3aWR0aDogMyB9LFxyXG4gICAgICB9IGFzIGFueSxcclxuICAgICAgcG9wdXBUZW1wbGF0ZTogeyB0aXRsZTogJ1NwaWxsIHBvaW50JywgY29udGVudDogYCR7c3BpbGwubGF0LnRvRml4ZWQoNSl9LCAke3NwaWxsLmxvbi50b0ZpeGVkKDUpfWAgfSBhcyBhbnksXHJcbiAgICB9KSlcclxuXHJcbiAgICAvLyB0cmFjZSBwb2x5bGluZSwgc3BsaXQgaW50byBFVEEgY29sb3IgYmFuZHNcclxuICAgIGNvbnN0IHJvd3M6IGFueVtdID0gcmVzLnRyYWNlXHJcbiAgICBsZXQgYmFuZFN0YXJ0ID0gMFxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkb25lID0gaSA9PT0gcm93cy5sZW5ndGhcclxuICAgICAgY29uc3QgYmFuZENoYW5nZWQgPSAhZG9uZSAmJiBiYW5kQ29sb3Iocm93c1tpXS5jdW1fdGltZSkgIT09IGJhbmRDb2xvcihyb3dzW2JhbmRTdGFydF0uY3VtX3RpbWUpXHJcbiAgICAgIGlmIChkb25lIHx8IGJhbmRDaGFuZ2VkKSB7XHJcbiAgICAgICAgY29uc3Qgc2VnID0gcm93cy5zbGljZShiYW5kU3RhcnQsIE1hdGgubWluKGkgKyAxLCByb3dzLmxlbmd0aCkpXHJcbiAgICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWxpbmUoeyBwYXRoczogW3NlZy5tYXAoKHIpID0+IFtyLmxvbiwgci5sYXRdKV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXHJcbiAgICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1saW5lJywgY29sb3I6IGJhbmRDb2xvcihyb3dzW2JhbmRTdGFydF0uY3VtX3RpbWUpLCB3aWR0aDogNCB9IGFzIGFueSxcclxuICAgICAgICB9KSlcclxuICAgICAgICBiYW5kU3RhcnQgPSBpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBKb2Jzb24gdW5jZXJ0YWludHkgYmFuZHM6IHRyYW5zbHVjZW50IHVuZGVybGF5IGZyb20gYnVsayAocGVhaykgcG9zaXRpb25cclxuICAgIC8vIHRvIGZhcnRoZXN0IGNyZWRpYmxlICg5OSUgbGVhZGluZykgcG9zaXRpb24gYXQgZWFjaCBob3VyXHJcbiAgICBmb3IgKGNvbnN0IGggb2YgcmVzLmhvdXJseSkge1xyXG4gICAgICBpZiAoIWguYmFuZCkgY29udGludWVcclxuICAgICAgY29uc3QgaTAgPSBNYXRoLm1pbihoLmJhbmQucGVhay5pLCBoLmJhbmQuZmFzdGVzdC5pKVxyXG4gICAgICBjb25zdCBpMSA9IE1hdGgubWF4KGguYmFuZC5wZWFrLmksIGguYmFuZC5mYXN0ZXN0LmkpXHJcbiAgICAgIGlmIChpMSA8PSBpMCkgY29udGludWVcclxuICAgICAgY29uc3Qgc2VnID0gcm93cy5zbGljZShpMCwgaTEgKyAxKVxyXG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9seWxpbmUoeyBwYXRoczogW3NlZy5tYXAoKHI6IGFueSkgPT4gW3IubG9uLCByLmxhdF0pXSBhcyBhbnksIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueSB9KSxcclxuICAgICAgICBzeW1ib2w6IHsgdHlwZTogJ3NpbXBsZS1saW5lJywgY29sb3I6IFsuLi5oZXhUb1JnYihiYW5kQ29sb3IoaC5ob3VyKSksIDAuMjhdLCB3aWR0aDogMTQsIGNhcDogJ3JvdW5kJyB9IGFzIGFueSxcclxuICAgICAgfSkpXHJcbiAgICB9XHJcbiAgICAvLyBob3VybHkgbWFya2VycyArIGxhYmVsc1xyXG4gICAgZm9yIChjb25zdCBoIG9mIHJlcy5ob3VybHkpIHtcclxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcclxuICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGgubGF0LCBsb25naXR1ZGU6IGgubG9uIH0pLFxyXG4gICAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLCBzaXplOiA3LCBjb2xvcjogYmFuZENvbG9yKGguaG91ciksXHJcbiAgICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiAnI2ZmZicsIHdpZHRoOiAxIH0sXHJcbiAgICAgICAgfSBhcyBhbnksXHJcbiAgICAgICAgcG9wdXBUZW1wbGF0ZToge1xyXG4gICAgICAgICAgdGl0bGU6IGBIb3VyICR7aC5ob3VyfWAsXHJcbiAgICAgICAgICBjb250ZW50OiBgJHtoLmN1bV9kaXN0X2ttLnRvRml4ZWQoMSl9IGttIGRvd25zdHJlYW0gwrcgJHtoLnZlbG9jaXR5X21waC50b0ZpeGVkKDEpfSBtcGhgLFxyXG4gICAgICAgIH0gYXMgYW55LFxyXG4gICAgICB9KSlcclxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcclxuICAgICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGgubGF0LCBsb25naXR1ZGU6IGgubG9uIH0pLFxyXG4gICAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgdGV4dDogYCR7aC5ob3VyfSBocmAsXHJcbiAgICAgICAgICBjb2xvcjogYmFuZENvbG9yKGguaG91ciksXHJcbiAgICAgICAgICBoYWxvQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgIGhhbG9TaXplOiAxLjUsXHJcbiAgICAgICAgICB5b2Zmc2V0OiA5LFxyXG4gICAgICAgICAgZm9udDogeyBzaXplOiAxMCwgd2VpZ2h0OiAnYm9sZCcsIGZhbWlseTogJ3NhbnMtc2VyaWYnIH0sXHJcbiAgICAgICAgfSBhcyBhbnksXHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBtb2RlbCBjb25maWcgKyBlcXVpcG1lbnQgKyBjb21wdXRlL3JlbmRlciAocHVyZSwgcmV1c2FibGUgb24gY2FjaGVkIGRhdGEpIC0tLS1cclxuICBjb25zdCBtb2RlbENmZyA9IChzZjogbnVtYmVyKSA9PiAoe1xyXG4gICAgc2FmZXR5RmFjdG9yOiBzZixcclxuICAgIHRpbWluZ01vZGVsOiBwcm9wcy5jb25maWcudGltaW5nTW9kZWwgPz8gJ2h5ZHJhdWxpYycsXHJcbiAgICBtaW5TdHJlYW1PcmRlcjogcHJvcHMuY29uZmlnLm1pblN0cmVhbU9yZGVyID8/IDQsXHJcbiAgICBtYXhIb3VyczogcHJvcHMuY29uZmlnLm1heEhvdXJzID8/IDI0LFxyXG4gICAgbWF4RGlzdGFuY2VLbTogcHJvcHMuY29uZmlnLm1heERpc3RhbmNlS20gPz8gMzAwLFxyXG4gICAgdmVyYm9zZTogZmFsc2UsXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgYXBwbHlFcXVpcG1lbnQgPSAocmVzOiBhbnksIGRyYXduOiBNYXA8c3RyaW5nLCBudW1iZXI+KSA9PiB7XHJcbiAgICBjb25zdCBlcSA9IHByb3BzLmNvbmZpZy5lcXVpcG1lbnRcclxuICAgIGlmIChlcT8uZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVyblxyXG4gICAgY29uc3QgcnVsZXMgPSB7XHJcbiAgICAgIGVudHJhaW5tZW50TXM6IGVxPy5lbnRyYWlubWVudE1zID8/IDAuMzUsXHJcbiAgICAgIGFuY2hvclNwYWNpbmdGdDogZXE/LmFuY2hvclNwYWNpbmdGdCA/PyAxMDAsXHJcbiAgICAgIHJlc2VydmVQY3Q6IGVxPy5yZXNlcnZlUGN0ID8/IDIwLFxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBzIG9mIHJlcy5zaXRlcykge1xyXG4gICAgICBjb25zdCBrZXkgPSBub3JtR3VpZChzLkdsb2JhbElEID8/IHMuZ2xvYmFsaWQgPz8gcy5HTE9CQUxJRClcclxuICAgICAgY29uc3QgZHJhd25GdCA9IGtleSA/IGRyYXduLmdldChrZXkpIDogdW5kZWZpbmVkXHJcbiAgICAgIGlmIChkcmF3bkZ0KSB7XHJcbiAgICAgICAgY29uc3QgYm9vbUZ0ID0gTWF0aC5jZWlsKGRyYXduRnQgLyA1MCkgKiA1MFxyXG4gICAgICAgIHMuYm9vbSA9IHtcclxuICAgICAgICAgIGJvb21fZnQ6IGJvb21GdCxcclxuICAgICAgICAgIGFuY2hvcnM6IE1hdGgubWF4KDIsIE1hdGguY2VpbChib29tRnQgLyBydWxlcy5hbmNob3JTcGFjaW5nRnQpICsgMSksXHJcbiAgICAgICAgICBzb3VyY2U6ICdkcmF3bicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVzdCA9IGVzdGltYXRlQm9vbU5lZWRzKHMucml2ZXJfd2lkdGhfbSwgcy52ZWxvY2l0eV9tcywgcnVsZXMpXHJcbiAgICAgICAgaWYgKGVzdCkgcy5ib29tID0geyAuLi5lc3QsIHNvdXJjZTogJ2VzdCcgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21wdXRlQW5kUmVuZGVyID0gKHNmOiBudW1iZXIsIGZyb21DYWNoZSA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBjID0gY2FjaGVSZWYuY3VycmVudFxyXG4gICAgaWYgKCFjIHx8ICFqbXYpIHJldHVyblxyXG4gICAgY29uc3QgcmVzID0gY29tcHV0ZVRyYWNlKGMuZGF0YSwgbW9kZWxDZmcoc2YpKVxyXG4gICAgYXBwbHlFcXVpcG1lbnQocmVzLCBjLmRyYXduKVxyXG4gICAgZHJhdyhqbXYudmlldyBhcyBfX2VzcmkuTWFwVmlldywgcmVzLCB7IGxhdDogYy5sYXQsIGxvbjogYy5sb24gfSlcclxuICAgIGlmIChsYXllclJlZi5jdXJyZW50KSBsYXllclJlZi5jdXJyZW50LnZpc2libGUgPSB0cnVlXHJcbiAgICBzZXRIaWRkZW4oZmFsc2UpXHJcbiAgICBzZXRSZXN1bHQocmVzKVxyXG4gICAgYXJtTGlzdFN5bmMocmVzLnNpdGVzIHx8IFtdKVxyXG4gICAgc2V0RGlhZyhbLi4uYy5mZXRjaE5vdGVzLCBgJHtyZXMuc2l0ZXMubGVuZ3RofSBzaXRlKHMpIHdpdGhpbiBidWZmZXIgb2YgdGhlIHRyYWNlLmBdKVxyXG4gICAgc2V0U3RhdHVzKFxyXG4gICAgICBgJHtyZXMucml2ZXJfbmFtZSB8fCAnVHJhY2UnfSDigJQgJHtyZXMuZGlzdGFuY2Vfa21fMjRoLnRvRml4ZWQoMSl9IGttIGluIOKJpCAke3Byb3BzLmNvbmZpZy5tYXhIb3VycyA/PyAyNH0gaGAgK1xyXG4gICAgICAoZnJvbUNhY2hlID8gJyDCtyByZWNvbXB1dGVkIGluc3RhbnRseSBmcm9tIGNhY2hlZCBoeWRyb2xvZ3knIDogJycpLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBydW4gLS0tLVxyXG4gIGNvbnN0IGFybUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFqbXYgfHwgYXJtaW5nIHx8IHJ1bm5pbmcpIHJldHVyblxyXG4gICAgc2V0QXJtaW5nKHRydWUpXHJcbiAgICBzZXRTdGF0dXMoJ0NsaWNrIHRoZSBzcGlsbCBsb2NhdGlvbiBvbiB0aGUgbWFw4oCmJylcclxuICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBqbXYudmlldy5vbignY2xpY2snLCBhc3luYyAoZXZ0KSA9PiB7XHJcbiAgICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKClcclxuICAgICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IG51bGxcclxuICAgICAgc2V0QXJtaW5nKGZhbHNlKVxyXG4gICAgICBjb25zdCBtcCA9IGV2dC5tYXBQb2ludFxyXG4gICAgICBjb25zdCBsYXQgPSBtcC5sYXRpdHVkZSwgbG9uID0gbXAubG9uZ2l0dWRlXHJcbiAgICAgIHNldFJ1bm5pbmcodHJ1ZSlcclxuICAgICAgc2V0UmVzdWx0KG51bGwpXHJcbiAgICAgIHNldERpYWcoW10pXHJcbiAgICAgIHNldFN0YXR1cyhgVHJhY2luZyBmcm9tICR7bGF0LnRvRml4ZWQoNCl9LCAke2xvbi50b0ZpeGVkKDQpfeKApmApXHJcbiAgICAgIGNvbnN0IG5vdGVzOiBzdHJpbmdbXSA9IFtdXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2ZnID0gcHJvcHMuY29uZmlnXHJcbiAgICAgICAgY29uc3Qgc2l0ZUxheWVycyA9IChjZmcuc2l0ZUxheWVycyB8fCBbXSkgYXMgYW55XHJcbiAgICAgICAgY29uc3QgcmVjZXB0b3JMYXllcnMgPSAoY2ZnLnJlY2VwdG9yTGF5ZXJzIHx8IFtdKSBhcyBhbnlcclxuICAgICAgICBpZiAoIXNpdGVMYXllcnMubGVuZ3RoKSBub3Rlcy5wdXNoKCdObyBzaXRlIGxheWVycyBjb25maWd1cmVkIOKAlCBhZGQgdGhlbSBpbiB0aGUgd2lkZ2V0IHNldHRpbmdzIChTaXRlIGxheWVycyBKU09OKS4nKVxyXG5cclxuICAgICAgICAvLyBmZXRjaCBldmVyeXRoaW5nIG9uY2UgKHRyYWNlLCBmbG93cywgd2lkdGhzLCBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwge1xyXG4gICAgICAgICAgLi4ubW9kZWxDZmcoc2FmZXR5KSxcclxuICAgICAgICAgIHdpZHRoUHJvdmlkZXI6IG1ha2VXaWR0aFByb3ZpZGVyKCksXHJcbiAgICAgICAgICBzaXRlUHJvdmlkZXJzOiBzaXRlTGF5ZXJzLm1hcCgobGMsIGkpID0+IG1ha2VTaXRlUHJvdmlkZXIobGMsIDUwMCwgYFNpdGUgbGF5ZXIgJHtpICsgMX1gLCBub3RlcykpLFxyXG4gICAgICAgICAgcmVjZXB0b3JQcm92aWRlcnM6IHJlY2VwdG9yTGF5ZXJzLm1hcCgobGMsIGkpID0+IG1ha2VTaXRlUHJvdmlkZXIobGMsIDgwMCwgYFJlY2VwdG9yIGxheWVyICR7aSArIDF9YCwgbm90ZXMpKSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBkcmF3biBib29tIGxpbmVzOiBwZXItc2l0ZS1sYXllciBib29tTGF5ZXIgKCsgbGVnYWN5IGdsb2JhbCBlcXVpcG1lbnQuYm9vbUxheWVyKVxyXG4gICAgICAgIGNvbnN0IGRyYXduID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxyXG4gICAgICAgIGNvbnN0IGVxID0gY2ZnLmVxdWlwbWVudFxyXG4gICAgICAgIGlmIChlcT8uZW5hYmxlZCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnN0IGJvb21DZmdzOiBhbnlbXSA9IFtdXHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGxjIG9mIHNpdGVMYXllcnMpIGlmIChsYy5ib29tTGF5ZXI/LnVybCkgYm9vbUNmZ3MucHVzaChsYy5ib29tTGF5ZXIpXHJcbiAgICAgICAgICBpZiAoZXE/LmJvb21MYXllcj8udXJsKSBib29tQ2Zncy5wdXNoKGVxLmJvb21MYXllcilcclxuICAgICAgICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKVxyXG4gICAgICAgICAgZm9yIChjb25zdCBiYyBvZiBib29tQ2Zncykge1xyXG4gICAgICAgICAgICBjb25zdCBzaWcgPSBgJHtiYy51cmx9fCR7YmMuc2l0ZUtleUZpZWxkfWBcclxuICAgICAgICAgICAgaWYgKHNlZW4uaGFzKHNpZykpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIHNlZW4uYWRkKHNpZylcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCBtID0gYXdhaXQgZmV0Y2hEcmF3bkJvb20oYmMgYXMgYW55KVxyXG4gICAgICAgICAgICAgIG0uZm9yRWFjaCgodiwgaykgPT4gZHJhd24uc2V0KGssIChkcmF3bi5nZXQoaykgfHwgMCkgKyB2KSlcclxuICAgICAgICAgICAgICBub3Rlcy5wdXNoKGBCb29tIGxpbmVzICgke3NpZy5zcGxpdCgnLycpLnNsaWNlKC0yKVswXX0pOiBkcmF3biBmb290YWdlIGZvciAke20uc2l6ZX0gc2l0ZShzKWApXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICBub3Rlcy5wdXNoKGBCb29tIGxheWVyIEZBSUxFRDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgOTApfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhY2hlUmVmLmN1cnJlbnQgPSB7IGxhdCwgbG9uLCBkYXRhLCBkcmF3biwgZmV0Y2hOb3Rlczogbm90ZXMuc2xpY2UoKSB9XHJcbiAgICAgICAgY29tcHV0ZUFuZFJlbmRlcihzYWZldHkpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzZXRTdGF0dXMoYFRyYWNlIGZhaWxlZDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgMTIwKX1gKVxyXG4gICAgICAgIHNldERpYWcobm90ZXMpXHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0UnVubmluZyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbam12LCBhcm1pbmcsIHJ1bm5pbmcsIHNhZmV0eSwgcHJvcHMuY29uZmlnXSlcclxuXHJcbiAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2xpY2tIYW5kbGVSZWYuY3VycmVudCkgeyBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpOyBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gbnVsbCB9XHJcbiAgICBpZiAobGF5ZXJSZWYuY3VycmVudCkgbGF5ZXJSZWYuY3VycmVudC5yZW1vdmVBbGwoKVxyXG4gICAgY2xlYXJMaXN0U3luYygpXHJcbiAgICBjYWNoZVJlZi5jdXJyZW50ID0gbnVsbFxyXG4gICAgc2V0QXJtaW5nKGZhbHNlKVxyXG4gICAgc2V0UmVzdWx0KG51bGwpXHJcbiAgICBzZXREaWFnKFtdKVxyXG4gICAgc2V0SGlkZGVuKGZhbHNlKVxyXG4gICAgc2V0U3RhdHVzKCdDbGVhcmVkLiBDbGljayBcIlNldCBzcGlsbCBwb2ludFwiIHRvIHJ1biBhZ2Fpbi4nKVxyXG4gIH1cclxuXHJcbiAgLy8gZnVsbC1wYWdlIG1hcDogQ1NTIG1heGltaXplIGluc3RlYWQgb2YgdGhlIEZ1bGxzY3JlZW4gQVBJIOKAlCBldmVyeXRoaW5nIHN0YXlzXHJcbiAgLy8gbW91bnRlZCAocGx1bWUsIHBhbmVscywgcG9wdXBzKSBhbmQgdGhpcyBmbG9hdGluZyBwYW5lbCByZW1haW5zIG9uIHRvcDtcclxuICAvLyBFc2Mgb3IgdGhlIGJ1dHRvbiBleGl0c1xyXG4gIGNvbnN0IFttYXhlZCwgc2V0TWF4ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgbWF4ZWRSZWYgPSB1c2VSZWYoZmFsc2UpXHJcbiAgY29uc3QgZXNjSGFuZGxlclJlZiA9IHVzZVJlZjwoZTogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZD4obnVsbClcclxuICBjb25zdCBzZXRNYXBNYXhpbWl6ZWQgPSAob246IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXHJcbiAgICAgICdbZGF0YS13aWRnZXRpZD1cIicgKyAocHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF0gfHwgJycpICsgJ1wiXScpXHJcbiAgICBpZiAoIWVsKSByZXR1cm5cclxuICAgIGlmIChvbikge1xyXG4gICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuICAgICAgZWwuc3R5bGUuaW5zZXQgPSAnMCdcclxuICAgICAgZWwuc3R5bGUud2lkdGggPSAnMTAwdncnXHJcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9ICcxMDB2aCdcclxuICAgICAgZWwuc3R5bGUuekluZGV4ID0gJzk5OSdcclxuICAgICAgY29uc3QgZXNjID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgc2V0TWFwTWF4aW1pemVkKGZhbHNlKSB9XHJcbiAgICAgIGVzY0hhbmRsZXJSZWYuY3VycmVudCA9IGVzY1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWwuc3R5bGUucG9zaXRpb24gPSAnJ1xyXG4gICAgICBlbC5zdHlsZS5pbnNldCA9ICcnXHJcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gJydcclxuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gJydcclxuICAgICAgZWwuc3R5bGUuekluZGV4ID0gJydcclxuICAgICAgaWYgKGVzY0hhbmRsZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2NIYW5kbGVyUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgZXNjSGFuZGxlclJlZi5jdXJyZW50ID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXhlZFJlZi5jdXJyZW50ID0gb25cclxuICAgIHNldE1heGVkKG9uKVxyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSlcclxuICB9XHJcbiAgY29uc3QgdG9nZ2xlRnVsbE1hcCA9ICgpID0+IHNldE1hcE1heGltaXplZCghbWF4ZWRSZWYuY3VycmVudClcclxuXHJcbiAgLy8gYnJpZWZpbmcgdG9nZ2xlOiBoaWRlL3Nob3cgdGhlIHRyYWplY3RvcnkgZ3JhcGhpY3MgV0lUSE9VVCB0b3VjaGluZyB0aGVcclxuICAvLyBjYWNoZWQgcnVuIOKAlCBwcmVzZW50ZXIgY2FuIGZsaXAgdGhlIG1vZGVsIG9mZiBkdXJpbmcgYSBzbGlkZSBhbmQgYmFja1xyXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWxheWVyUmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgY29uc3QgdiA9ICFsYXllclJlZi5jdXJyZW50LnZpc2libGVcclxuICAgIGxheWVyUmVmLmN1cnJlbnQudmlzaWJsZSA9IHZcclxuICAgIHNldEhpZGRlbighdilcclxuICB9XHJcblxyXG4gIGNvbnN0IHNpdGVzOiBTaXRlUm93W10gPSByZXN1bHQ/LnNpdGVzIHx8IFtdXHJcbiAgY29uc3Qgd2FybmluZ3M6IHN0cmluZ1tdID0gcmVzdWx0Py53YXJuaW5ncyB8fCBbXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHBhZGRpbmc6IDEwLCBvdmVyZmxvdzogJ2F1dG8nLCBmb250U2l6ZTogMTMsIGNvbG9yOiAnI2ZmZicgfX0+XHJcbiAgICAgIHtwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkc1swXX1cclxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KHYpID0+IHNldEptdih2KX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7IXByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2ZmOGE4MCcgfX0+U2VsZWN0IGEgTWFwIHdpZGdldCBpbiB0aGlzIHdpZGdldCdzIHNldHRpbmdzLjwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH19PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXsham12IHx8IGFybWluZyB8fCBydW5uaW5nfSBvbkNsaWNrPXthcm1DbGlja30+XHJcbiAgICAgICAgICB7YXJtaW5nID8gJ0NsaWNrIHRoZSBtYXDigKYnIDogcnVubmluZyA/ICdUcmFjaW5n4oCmJyA6ICdTZXQgc3BpbGwgcG9pbnQnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9e3J1bm5pbmd9IG9uQ2xpY2s9e2NsZWFyQWxsfT5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcclxuICAgICAgICAgIHRpdGxlPVwiVG9nZ2xlIGZ1bGwtcGFnZSBtYXAgKHBsdW1lIHN0YXlzIHZpc2libGU7IHRoaXMgcGFuZWwgc3RheXMgb24gdG9wOyBFc2MgZXhpdHMpXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUZ1bGxNYXB9PlxyXG4gICAgICAgICAge21heGVkID8gJ+KbtiBFeGl0IGZ1bGwnIDogJ+KbtiBGdWxsIG1hcCd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17IXJlc3VsdH0gb25DbGljaz17dG9nZ2xlVmlzaWJsZX1cclxuICAgICAgICAgIHRpdGxlPVwiSGlkZS9zaG93IHRoZSB0cmFqZWN0b3J5IG9uIHRoZSBtYXAgd2l0aG91dCBsb3NpbmcgdGhlIHJ1biAoYnJpZWZpbmdzKVwiPlxyXG4gICAgICAgICAge2hpZGRlbiA/ICfwn5GBIFNob3cnIDogJ/CfkYEgSGlkZSd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17IXJlc3VsdH0gdGl0bGU9XCJDb3B5IHJ1biBwcm92ZW5hbmNlIHJlY29yZCAoSlNPTikgZm9yIGFmdGVyLWFjdGlvbiBkb2N1bWVudGF0aW9uIOKAlCBpbmNsdWRlcyBhIHJlcGxheSBVUkxcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdD8ucnVuUmVjb3JkIHx8ICFjYWNoZVJlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICAgICAgY29uc3QgcmVjOiBhbnkgPSB7IC4uLnJlc3VsdC5ydW5SZWNvcmQgfVxyXG4gICAgICAgICAgICBjb25zdCB1ID0gbmV3IFVSTCgnaHR0cHM6Ly93aGl0ZXdhdGVycmVzY3VlLmdpdGh1Yi5pby93cmktZXhiLXdpZGdldHMvZW1iZWQvJylcclxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdjb25maWcnLCAnYWxsLWdycHMnKVxyXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2xhdCcsIGNhY2hlUmVmLmN1cnJlbnQubGF0LnRvRml4ZWQoNSkpXHJcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnbG9uJywgY2FjaGVSZWYuY3VycmVudC5sb24udG9GaXhlZCg1KSlcclxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdhc09mJywgcmVjLmFzX29mICE9PSAnbGl2ZScgPyByZWMuYXNfb2YgOiByZWMuZ2VuZXJhdGVkX2F0LnNsaWNlKDAsIDEwKSlcclxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdzZicsIFN0cmluZyhzYWZldHkpKVxyXG4gICAgICAgICAgICByZWMucmVwbGF5X3VybCA9IHUudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeShyZWMsIG51bGwsIDEpKS50aGVuKCgpID0+IHNldFN0YXR1cygnUnVuIHJlY29yZCBjb3BpZWQgKGluY2x1ZGVzIHJlcGxheV91cmwpLicpKVxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICDijpggUmVjb3JkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA0IH19XHJcbiAgICAgICAgICB0aXRsZT1cIlNhZmV0eSBmYWN0b3Ig4oCUIGNoYW5naW5nIGl0IHJlLXJ1bnMgaW5zdGFudGx5IGZyb20gY2FjaGVkIGh5ZHJvbG9neVwiPlxyXG4gICAgICAgICAgU0ZcclxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NhZmV0eX0gZGlzYWJsZWQ9e3J1bm5pbmd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgIHNldFNhZmV0eSh2KVxyXG4gICAgICAgICAgICAgIGlmIChjYWNoZVJlZi5jdXJyZW50ICYmICFydW5uaW5nKSBjb21wdXRlQW5kUmVuZGVyKHYsIHRydWUpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxLjB9PjEuMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxLjI1fT4xLjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuNX0+MS41PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezIuMH0+Mi4wPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4LCBtaW5IZWlnaHQ6IDE4IH19PntydW5uaW5nICYmIDxzcGFuIGNsYXNzTmFtZT1cImppbXUtc2Vjb25kYXJ5LWxvYWRpbmdcIiAvPn0ge3N0YXR1c308L2Rpdj5cclxuXHJcbiAgICAgIHtkaWFnLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjZmZmJywgZm9udFNpemU6IDExLCBtYXJnaW5Cb3R0b206IDggfX0+XHJcbiAgICAgICAgICB7ZGlhZy5tYXAoKGQsIGkpID0+IDxkaXYga2V5PXtpfT57ZH08L2Rpdj4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3dhcm5pbmdzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNmZmYzY2QnLCBjb2xvcjogJyMzMzMnLCBib3JkZXI6ICcxcHggc29saWQgI2ZmZWViYScsIHBhZGRpbmc6IDYsIG1hcmdpbkJvdHRvbTogOCwgYm9yZGVyUmFkaXVzOiA0IH19PlxyXG4gICAgICAgICAge3dhcm5pbmdzLm1hcCgodywgaSkgPT4gPGRpdiBrZXk9e2l9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMiB9fT7imqAge3d9PC9kaXY+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4LCBjb2xvcjogJyNmZmYnIH19PlxyXG4gICAgICAgICAgRVRBcyBhcmUgZXN0aW1hdGVzICjCsTIwJSksIHNhZmV0eSBmYWN0b3Igw5d7cmVzdWx0LnNhZmV0eV9mYWN0b3J9IGFwcGxpZWQg4oCUIHRyZWF0IGFzIGJhbmRzLCBub3QgYXBwb2ludG1lbnRzLlxyXG4gICAgICAgICAge3Jlc3VsdC5nYXVnZXNfdXNlZC5sZW5ndGhcclxuICAgICAgICAgICAgPyBgIEZsb3dzOiAke3Jlc3VsdC5nYXVnZXNfdXNlZC5tYXAoKGc6IGFueSkgPT4gZy5zdGF0aW9uX2lkKS5qb2luKCcsICcpfS5gXHJcbiAgICAgICAgICAgIDogJyBObyBsaXZlIGdhdWdlcyBmb3VuZCDigJQgZHJhaW5hZ2UtYXJlYSBmbG93IGVzdGltYXRlLid9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7bGlzdFN5bmNGaWVsZCAmJiBzaXRlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzZweCAwJywgZm9udFNpemU6IDEyIH19PlxyXG4gICAgICAgICAgPGI+e3NpdGVzLmxlbmd0aH0gc2l0ZXtzaXRlcy5sZW5ndGggPiAxID8gJ3MnIDogJyd9IGluIHRoZSBwbHVtZSBwYXRoPC9iPiDigJQgaGlnaGxpZ2h0ZWQgaW4gdGhlIHNpdGUgbGlzdCBieSBFVEEgYmFuZC5cclxuICAgICAgICAgIHtzaXRlcy5zb21lKChzKSA9PiBzLmJvb20pICYmIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIgfX0+XHJcbiAgICAgICAgICAgICAgQm9vbSB0b3RhbHMgKHtzaXRlcy5maWx0ZXIoKHMpID0+IHMuYm9vbT8uc291cmNlID09PSAnZHJhd24nKS5sZW5ndGh9IGRyYXduIOKckyAveycgJ31cclxuICAgICAgICAgICAgICB7c2l0ZXMuZmlsdGVyKChzKSA9PiBzLmJvb20/LnNvdXJjZSA9PT0gJ2VzdCcpLmxlbmd0aH0gZXN0KTp7JyAnfVxyXG4gICAgICAgICAgICAgIHtzaXRlcy5yZWR1Y2UoKHQsIHMpID0+IHQgKyAocy5ib29tPy5ib29tX2Z0IHx8IDApLCAwKS50b0xvY2FsZVN0cmluZygpfSBmdCDCt3snICd9XHJcbiAgICAgICAgICAgICAge3NpdGVzLnJlZHVjZSgodCwgcykgPT4gdCArIChzLmJvb20/LmFuY2hvcnMgfHwgMCksIDApfSBhbmNob3JzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtwYWludFN0YXRzICYmIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIsIG9wYWNpdHk6IDAuNyB9fT5saXN0IHN5bmM6IHtwYWludFN0YXRzfTwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgeyFsaXN0U3luY0ZpZWxkICYmIHNpdGVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2NjYycgfX0+XHJcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5FVEE8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+U2l0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5rbTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5Cb29tPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtzaXRlcy5tYXAoKHMsIGkpID0+IChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtpfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17cy5ldGFfZWFybHlfaHIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gYGVhcmxpZXN0IGNyZWRpYmxlICR7cy5ldGFfZWFybHlfaHJ9IGhyIMK3IGZpcnN0IGFycml2YWwgJHtzLmV0YV9ocn0gaHIgwrcgcGVhayAke3MuZXRhX3BlYWtfaHJ9IGhyJHtzLmNsZWFyX2hyID8gYCDCtyBjbGVhciB+JHtzLmNsZWFyX2hyfSBocmAgOiAnJ31gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhbmRDb2xvcihzLmV0YV9ociksIG1hcmdpblJpZ2h0OiA0LFxyXG4gICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICB7cy5ldGFfZWFybHlfaHIgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7cy5ldGFfZWFybHlfaHIudG9GaXhlZCgxKX3igJMke3MuZXRhX2hyLnRvRml4ZWQoMSl9IGhyYFxyXG4gICAgICAgICAgICAgICAgICAgIDogcy5ldGFfaHIgPCAxID8gYCR7TWF0aC5yb3VuZChzLmV0YV9ociAqIDYwKX0gbWluYCA6IGAke3MuZXRhX2hyLnRvRml4ZWQoMSl9IGhyYH1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PntzLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MuZGlzdF9rbS50b0ZpeGVkKDEpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fSB0aXRsZT17cy5ib29tXHJcbiAgICAgICAgICAgICAgICAgID8gYCR7cy5ib29tLmFuY2hvcnN9IGFuY2hvciBzZXRzJHtzLmJvb20uYm9vbV9hbmdsZV9kZWcgPyBgIMK3ICR7cy5ib29tLmJvb21fYW5nbGVfZGVnfcKwIGRlcGxveW1lbnRgIDogJyd9JHtzLmJvb20uY2FzY2FkZV9hZHZpc2VkID8gJyDCtyBmYXN0IHdhdGVyOiBjYXNjYWRlIG11bHRpcGxlIGJvb21zJyA6ICcnfSAoJHtzLmJvb20uc291cmNlID09PSAnZHJhd24nID8gJ2Zyb20gZHJhd24gYm9vbSBsaW5lcycgOiAnZXN0aW1hdGVkIGZyb20gbW9kZWxlZCB3aWR0aC92ZWxvY2l0eSd9KWBcclxuICAgICAgICAgICAgICAgICAgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgIHtzLmJvb21cclxuICAgICAgICAgICAgICAgICAgICA/IDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzLmJvb20uYm9vbV9mdC50b0xvY2FsZVN0cmluZygpfSBmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cy5ib29tLmNhc2NhZGVfYWR2aXNlZCAmJiAnIOKaoSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+IHtzLmJvb20uc291cmNlID09PSAnZHJhd24nID8gJ+KckycgOiAnZXN0Lid9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiAn4oCUJ31cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAge3NpdGVzLnNvbWUoKHMpID0+IHMuYm9vbSkgJiYgKFxyXG4gICAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlclRvcDogJzJweCBzb2xpZCAjY2NjJywgZm9udFdlaWdodDogNjAwIH19PlxyXG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICczcHggNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgVG90YWxzICh7c2l0ZXMuZmlsdGVyKChzKSA9PiBzLmJvb20pLmxlbmd0aH0gYm9vbSBzaXRlcylcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzNweCA0cHgnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3NpdGVzLnJlZHVjZSgodCwgcykgPT4gdCArIChzLmJvb20/LmJvb21fZnQgfHwgMCksIDApLnRvTG9jYWxlU3RyaW5nKCl9IGZ0IMK3eycgJ31cclxuICAgICAgICAgICAgICAgICAge3NpdGVzLnJlZHVjZSgodCwgcykgPT4gdCArIChzLmJvb20/LmFuY2hvcnMgfHwgMCksIDApfSBhbmNob3JzXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICl9XHJcbiAgICAgIHtyZXN1bHQgJiYgc2l0ZXMuc29tZSgocykgPT4gcy5ib29tKSAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNmZmYnLCBtYXJnaW5Ub3A6IDQgfX0+XHJcbiAgICAgICAgICDinJMgPSBkcmF3biBib29tIGxpbmVzIMK3IGVzdC4gPSBzaXplZCBmcm9tIG1vZGVsZWQgd2lkdGgvdmVsb2NpdHlcclxuICAgICAgICAgIChib29tIGFuZ2xlZCB0byBrZWVwIG5vcm1hbCBmbG93IOKJpCB7KHByb3BzLmNvbmZpZy5lcXVpcG1lbnQ/LmVudHJhaW5tZW50TXMgPz8gMC4zNSl9IG0vcyxcclxuICAgICAgICAgICt7cHJvcHMuY29uZmlnLmVxdWlwbWVudD8ucmVzZXJ2ZVBjdCA/PyAyMH0lIHJlc2VydmUpIMK3IOKaoSA9IGZhc3Qgd2F0ZXIsIGNhc2NhZGUgYm9vbXNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3Jlc3VsdCAmJiBzaXRlcy5sZW5ndGggPT09IDAgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19Pk5vIGNvbmZpZ3VyZWQgc2l0ZXMgd2l0aGluIHJlYWNoIG9mIHRoaXMgdHJhY2UuPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==