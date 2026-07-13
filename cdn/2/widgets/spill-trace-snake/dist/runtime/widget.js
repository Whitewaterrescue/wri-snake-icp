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
const ENGINE_VERSION = "1.3.0";
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
    if (gd.length >= 2) {
        const fQ = interpClamped(gd.map((g) => g.trace_dist), gd.map((g) => g.discharge));
        for (const r of rows)
            r.Q_cfs = Math.max(fQ(r.cum_dist), 1.0);
        qMethod = anchored ? "gauge-interpolation+upstream-anchor" : "gauge-interpolation";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS1zbmFrZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGNBQWM7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVJLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQztBQUV0QyxNQUFNLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztBQUNwRCxNQUFNLFNBQVMsR0FBRyxrREFBa0QsQ0FBQztBQUNyRSxNQUFNLE9BQU8sR0FBRyx5Q0FBeUMsQ0FBQztBQUMxRCxNQUFNLFNBQVMsR0FBRywyQ0FBMkMsQ0FBQztBQUU5RDs7OztHQUlHO0FBQ0ksTUFBTSwwQkFBMEIsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNoRCwwRkFBMEY7SUFDMUYsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO0NBQzdCLENBQUMsQ0FBQztBQUVJLE1BQU0sY0FBYyxHQUFHO0lBQzVCLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLFFBQVEsRUFBRSxFQUFFO0lBQ1osV0FBVyxFQUFFLEtBQUs7SUFDbEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixjQUFjLEVBQUUsQ0FBQztJQUNqQixhQUFhLEVBQUUsSUFBSSxFQUFTLDJEQUEyRDtJQUN2RixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGlCQUFpQixFQUFFLEdBQUcsRUFBTSxxREFBcUQ7SUFDakYsYUFBYSxFQUFFLEVBQUU7SUFDakIsaUJBQWlCLEVBQUUsRUFBRTtJQUNyQixlQUFlLEVBQUUsRUFBRSxFQUFTLDJEQUEyRDtJQUN2RixhQUFhLEVBQUUsR0FBRztJQUNsQixvQkFBb0IsRUFBRSxFQUFFLEVBQUksNkRBQTZEO0lBQ3pGLFdBQVcs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QUUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNoRCxJQUFJLFVBQVUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRztZQUFFLE1BQU07UUFDbEUsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLEdBQUc7WUFDUixJQUFJO1lBQ0osR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQzlCLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUk7WUFDbEMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTztTQUN2QyxDQUFDO1FBQ0YsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLDZFQUE2RTtZQUM3RSxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLElBQUksR0FBRztnQkFDUCxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRTtnQkFDbEcsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFB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QkFBTyxHQUFHLEVBQ2hGLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBQyxRQUFDLEdBQUcsQ0FBQyxRQUFDLENBQUMsSUFBSSwwQ0FBRSxPQUFPLEtBQUksQ0FBQyxDQUFDLEtBQUUsQ0FBQyxDQUFDLGdCQUNuRCxJQUNGLEdBQ0MsQ0FDVCxJQUNLLENBQ1QsRUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RDLDBFQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxtSUFFTCxDQUFDLGlCQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsMENBQUUsYUFBYSxtQ0FBSSxJQUFJLENBQUMsYUFDakYsaUJBQUssQ0FBQyxNQUFNLENBQUMsU0FBUywwQ0FBRSxVQUFVLG1DQUFJLEVBQUUsNERBQ3RDLENBQ1AsRUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUkseUVBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxnRUFBdUQsSUFDakgsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3BpbGwtdHJhY2Utc25ha2Uvc3JjL3RyYWNlLWVuZ2luZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2ludFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2x5bGluZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3BpbGwtdHJhY2Utc25ha2Uvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xuLyoqXG4gKiB0cmFjZS1lbmdpbmUuanMg4oCUIE5hdGlvbmFsIHNwaWxsIHRyYWplY3RvcnkgZW5naW5lIChKUyBwb3J0IG9mIHNwaWxsX3RyYWNlLnB5KVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogRmFpdGhmdWwgcG9ydCBvZiB0aGUgUHl0aG9uIG9yYWNsZS4gRGVwZW5kZW5jeS1mcmVlIEVTTTogcnVucyBpbiBwbGFpbiBOb2RlXG4gKiAoPj0xOCwgZ2xvYmFsIGZldGNoKSBmb3IgZ29sZGVuIHRlc3RpbmcgYW5kIGluIHRoZSBicm93c2VyIGluc2lkZSB0aGUgRXhCXG4gKiB3aWRnZXQuIE5PIEBhcmNnaXMgaW1wb3J0cyBoZXJlIOKAlCB0aGUgd2lkZ2V0IHdyYXBzIHRoaXMgbW9kdWxlIGFuZCBzdXBwbGllc1xuICogbGF5ZXIgYWNjZXNzIHRocm91Z2ggaW5qZWN0YWJsZSBwcm92aWRlcnM6XG4gKlxuICogICBjb25maWcud2lkdGhQcm92aWRlcihlbnZlbG9wZSkgIC0+IFt7bGF0LCBsb24sIHdpZHRofV0gICAoR0xPVyBtaWRwb2ludHMgaW4gYmJveClcbiAqICAgY29uZmlnLnNpdGVQcm92aWRlcnMgICAgICAgICAgICAtPiBbe25hbWUsIGJ1ZmZlcl9tLCBmZXRjaDogYXN5bmMgKCkgPT4gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XX1dXG4gKiAgIGNvbmZpZy5yZWNlcHRvclByb3ZpZGVycyAgICAgICAgLT4gc2FtZSBzaGFwZSBhcyBzaXRlUHJvdmlkZXJzXG4gKlxuICogUG9ydCBnb3RjaGFzIGhvbm9yZWQgKHNlZSBSRUFETUUpOlxuICogICAxLiBnZW9zZXJ2ZXIgQ1FMIEJCT1ggaXMgbGF0LGxvbiBheGlzIG9yZGVyIChFUFNHOjQyNjkgLyBXRlMgMi4wKVxuICogICAyLiBIUiBOSERQbHVzSUQgIT0gTVIgY29taWQg4oCUIHdpZHRocyBzYW1wbGVkIHNwYXRpYWxseSwgbmV2ZXIgSUQtam9pbmVkXG4gKiAgIDMuIGltcG91bmRtZW50ID0gd2JhcmVhdHlwZSBpbiAoTGFrZVBvbmQsIFJlc2Vydm9pcilcbiAqICAgNC4gd2lkdGggb3ZlcnJpZGUgc2FtcGxlZCBpbiB3aW5kb3dzOyBmYWlsdXJlIGRlZ3JhZGVzIHRvIGZvcm11bGEgd2lkdGhzXG4gKiAgIDUuIE5MREkvZ2Vvc2VydmVyIGVtcHR5LTIwMCAtPiByZXRyeSAzeCB3aXRoIGJhY2tvZmZcbiAqICAgNi4gc25hcCBjbGljayB0byBzdHJlYW1vcmRlID49IG1pblN0cmVhbU9yZGVyXG4gKi9cblxuZXhwb3J0IGNvbnN0IEVOR0lORV9WRVJTSU9OID0gXCIxLjMuMFwiO1xuXG5jb25zdCBOTERJX0JBU0UgPSBcImh0dHBzOi8vYXBpLndhdGVyLnVzZ3MuZ292L25sZGlcIjtcbmNvbnN0IEdFT1NFUlZFUiA9IFwiaHR0cHM6Ly9hcGkud2F0ZXIudXNncy5nb3YvZ2Vvc2VydmVyL3dtYWRhdGEvb3dzXCI7XG5jb25zdCBOV0lTX0lWID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9pdi9cIjtcbmNvbnN0IE5XSVNfU0lURSA9IFwiaHR0cHM6Ly93YXRlcnNlcnZpY2VzLnVzZ3MuZ292L253aXMvc2l0ZS9cIjtcblxuLyoqXG4gKiBOSERQbHVzIE1SIHdhdGVyYm9keSBmbGFncyBsYWcgcmVhbGl0eSDigJQgcmVhY2hlcyB0aHJvdWdoIFJFTU9WRUQgZGFtcyBzdGlsbFxuICogY2Fycnkgd2JhcmVhdHlwZSBMYWtlUG9uZCBhbmQgd291bGQgZmFsc2Utc3RvcCB0aGUgY2xvY2suIEtub3duIHJlbW92YWxzXG4gKiBhcmUgZXhjbHVkZWQgaGVyZSAoZXh0ZW5kYWJsZSBwZXItcnVuIHZpYSBjb25maWcuaW1wb3VuZEV4Y2x1ZGVDb21pZHMpLlxuICovXG5leHBvcnQgY29uc3QgUkVNT1ZFRF9JTVBPVU5ETUVOVF9DT01JRFMgPSBuZXcgU2V0KFtcbiAgLy8gTWlsbHRvd24gRGFtLCBDbGFyayBGb3JrIGF0IEJvbm5lciBNVCDigJQgcmVtb3ZlZCAyMDA4LTIwMTAgKHJlcG9ydGVkIGJ5IENvZHkgMjAyNi0wNy0wNylcbiAgMjQyOTMxMjAsIDI0MjkzMTIyLCAyNDI5MzEyNCxcbl0pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIG1heERpc3RhbmNlS206IDMwMCxcbiAgbWF4SG91cnM6IDI0LFxuICByZXNvbHV0aW9uTTogMTAwLjAsXG4gIHNhZmV0eUZhY3RvcjogMS41LFxuICBtYW5uaW5nTjogMC4wNDUsXG4gIG1pblN0cmVhbU9yZGVyOiA0LFxuICB3aWR0aFByb3ZpZGVyOiBudWxsLCAgICAgICAgLy8gYXN5bmMgKGVudiB7eG1pbix5bWluLHhtYXgseW1heH0pID0+IFt7bGF0LCBsb24sIHdpZHRofV1cbiAgd2lkdGhTYW1wbGVSYWRpdXNNOiA4MDAsXG4gIHdpZHRoV2luZG93UG9pbnRzOiAxMDAsICAgICAvLyB0cmFjZSBwb2ludHMgcGVyIG92ZXJyaWRlIHNhbXBsaW5nIHdpbmRvdyAofjEwIGttKVxuICBzaXRlUHJvdmlkZXJzOiBbXSxcbiAgcmVjZXB0b3JQcm92aWRlcnM6IFtdLFxuICB1cHN0cmVhbUdhdWdlS206IDMwLCAgICAgICAgLy8gc2VhcmNoIFVNIHRoaXMgZmFyIGZvciBhbiB1cHN0cmVhbSBhbmNob3IgZ2F1Z2U7IDAgPSBvZmZcbiAgaW1wb3VuZFN0b3BLbTogMi4wLFxuICBpbXBvdW5kRXhjbHVkZUNvbWlkczogW10sICAgLy8gZXh0cmEgcmVtb3ZlZC1kYW0gY29taWRzIGJleW9uZCBSRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEU1xuICB0aW1pbmdNb2RlbDogXCJoeWRyYXVsaWNcIiwgICAvLyAnaHlkcmF1bGljJyAoVj1RL0EgeCBzYWZldHkpIHwgJ2pvYnNvbicgKFVTR1MgV1JJUiA5Ni00MDEzIGR5ZS1zdHVkeSByZWdyZXNzaW9ucylcbiAgYXNPZjogbnVsbCwgICAgICAgICAgICAgICAgIC8vICdZWVlZLU1NLUREJyBoaXN0b3JpY2FsIFE7IG51bGwgPSBsaXZlXG4gIHZlcmJvc2U6IHRydWUsXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnNcblxuY29uc3QgUl9FQVJUSCA9IDYzNzEwMDguODtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhdmVyc2luZU0obGF0MSwgbG9uMSwgbGF0MiwgbG9uMikge1xuICBjb25zdCBwMSA9IChsYXQxICogTWF0aC5QSSkgLyAxODA7XG4gIGNvbnN0IHAyID0gKGxhdDIgKiBNYXRoLlBJKSAvIDE4MDtcbiAgY29uc3QgZHAgPSBwMiAtIHAxO1xuICBjb25zdCBkbCA9ICgobG9uMiAtIGxvbjEpICogTWF0aC5QSSkgLyAxODA7XG4gIGNvbnN0IGEgPSBNYXRoLnNpbihkcCAvIDIpICoqIDIgKyBNYXRoLmNvcyhwMSkgKiBNYXRoLmNvcyhwMikgKiBNYXRoLnNpbihkbCAvIDIpICoqIDI7XG4gIHJldHVybiAyICogUl9FQVJUSCAqIE1hdGguYXNpbihNYXRoLnNxcnQoYSkpO1xufVxuXG4vKiogUGF5dG9uJ3Mgd2lkdGgvZGVwdGggZm9ybXVsYXMgKGZhbGxiYWNrIHdoZW4gbm8gR0xPVyBkYXRhKS4gVmVyYmF0aW0uICovXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihkcmFpbmFnZUFyZWFTcU1pKSB7XG4gIGxldCB3aWR0aCwgZGVwdGg7XG4gIGlmIChkcmFpbmFnZUFyZWFTcU1pIDwgMTAwKSB7XG4gICAgd2lkdGggPSAxMC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwLCAwLjUpO1xuICAgIGRlcHRoID0gMC41ICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwLCAwLjMpO1xuICB9IGVsc2UgaWYgKGRyYWluYWdlQXJlYVNxTWkgPCAxMDAwKSB7XG4gICAgd2lkdGggPSA1MC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMCwgMC41KTtcbiAgICBkZXB0aCA9IDEuNSAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAsIDAuMyk7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAxNTAuMCAqIE1hdGgucG93KGRyYWluYWdlQXJlYVNxTWkgLyA1MDAwLCAwLjQpO1xuICAgIGRlcHRoID0gMy4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMDAsIDAuMyk7XG4gIH1cbiAgcmV0dXJuIFt3aWR0aCwgZGVwdGhdO1xufVxuXG4vKipcbiAqIE1hbm5pbmcncyBkZXB0aCB2aWEgYmlzZWN0aW9uIChQeXRob24gdXNlZCBzY2lweSBicmVudHEgb24gWzAuMSwgMjBdKS5cbiAqIFRoZSByZXNpZHVhbCBpcyBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgaW4gZGVwdGgsIHNvIGJpc2VjdGlvbiBjb252ZXJnZXMgdG9cbiAqIHRoZSBzYW1lIHJvb3QuIFJlcGxpY2F0ZXMgYnJlbnRxJ3MgZmFpbHVyZSBtb2RlOiBubyBzaWduIGNoYW5nZSBhY3Jvc3MgdGhlXG4gKiBicmFja2V0IC0+IG51bGwgKGNhbGxlciBmYWxscyBiYWNrIHRvIGZvcm11bGEgZGVwdGgpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGVwdGhNYW5uaW5nKFFtM3MsIHdpZHRoTSwgc2xvcGUsIG4gPSAwLjA0NSkge1xuICBpZiAoUW0zcyA8PSAwIHx8IHdpZHRoTSA8PSAwIHx8IHNsb3BlIDw9IDAuMDAwMDEpIHJldHVybiBudWxsO1xuICBjb25zdCByZXNpZHVhbCA9IChkZXB0aCkgPT4ge1xuICAgIGlmIChkZXB0aCA8PSAwLjAxKSByZXR1cm4gLVFtM3M7XG4gICAgY29uc3QgQSA9IHdpZHRoTSAqIGRlcHRoO1xuICAgIGNvbnN0IFAgPSB3aWR0aE0gKyAyICogZGVwdGg7XG4gICAgY29uc3QgUiA9IEEgLyBQO1xuICAgIHJldHVybiAoMSAvIG4pICogQSAqIE1hdGgucG93KFIsIDIgLyAzKSAqIE1hdGguc3FydChzbG9wZSkgLSBRbTNzO1xuICB9O1xuICBsZXQgbG8gPSAwLjEsIGhpID0gMjAuMDtcbiAgbGV0IGZsbyA9IHJlc2lkdWFsKGxvKSwgZmhpID0gcmVzaWR1YWwoaGkpO1xuICBpZiAoZmxvID09PSAwKSByZXR1cm4gbG87XG4gIGlmIChmaGkgPT09IDApIHJldHVybiBoaTtcbiAgaWYgKGZsbyAqIGZoaSA+IDApIHJldHVybiBudWxsOyAvLyBicmVudHEgcmFpc2VzIC0+IFB5dGhvbiByZXR1cm5zIE5vbmVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IG1pZCA9IDAuNSAqIChsbyArIGhpKTtcbiAgICBjb25zdCBmbSA9IHJlc2lkdWFsKG1pZCk7XG4gICAgaWYgKGZtID09PSAwIHx8IChoaSAtIGxvKSAvIDIgPCAxZS0xMCkgcmV0dXJuIG1pZDtcbiAgICBpZiAoZmxvICogZm0gPCAwKSB7IGhpID0gbWlkOyBmaGkgPSBmbTsgfSBlbHNlIHsgbG8gPSBtaWQ7IGZsbyA9IGZtOyB9XG4gIH1cbiAgcmV0dXJuIDAuNSAqIChsbyArIGhpKTtcbn1cblxuY29uc3Qgc2xlZXAgPSAobXMpID0+IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XG5cbi8qKiBHRVQvUE9TVCB3aXRoIHJldHJ5IOKAlCBOTERJL2dlb3NlcnZlciBpbnRlcm1pdHRlbnRseSByZXR1cm4gZW1wdHkgMjAwIGJvZGllcy4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEpzb24odXJsLCB7IHBhcmFtcyA9IG51bGwsIGRhdGEgPSBudWxsLCB0cmllcyA9IDMsIHRpbWVvdXRNcyA9IDkwMDAwIH0gPSB7fSkge1xuICBsZXQgbGFzdCA9IG51bGw7XG4gIGZvciAobGV0IGF0dGVtcHQgPSAwOyBhdHRlbXB0IDwgdHJpZXM7IGF0dGVtcHQrKykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdHJsID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGN0cmwuYWJvcnQoKSwgdGltZW91dE1zKTtcbiAgICAgIGxldCByZXNwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICByZXNwID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGRhdGEpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzaWduYWw6IGN0cmwuc2lnbmFsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHFzID0gcGFyYW1zID8gXCI/XCIgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgICAgICAgcmVzcCA9IGF3YWl0IGZldGNoKHVybCArIHFzLCB7IHNpZ25hbDogY3RybC5zaWduYWwgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3Aub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Jlc3Auc3RhdHVzfWApO1xuICAgICAgcmV0dXJuIGF3YWl0IHJlc3AuanNvbigpOyAvLyBlbXB0eSBib2R5IC0+IFN5bnRheEVycm9yIC0+IHJldHJ5XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbGFzdCA9IGU7XG4gICAgICBhd2FpdCBzbGVlcCgxNTAwICogKGF0dGVtcHQgKyAxKSk7XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihgJHt1cmx9IGZhaWxlZCBhZnRlciAke3RyaWVzfSB0cmllczogJHtsYXN0fWApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUZXh0KHVybCwgcGFyYW1zLCB0aW1lb3V0TXMgPSAzMDAwMCkge1xuICBjb25zdCBjdHJsID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gY3RybC5hYm9ydCgpLCB0aW1lb3V0TXMpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwgKyBcIj9cIiArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpLCB7IHNpZ25hbDogY3RybC5zaWduYWwgfSk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3AudGV4dCgpO1xuICB9IGZpbmFsbHkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkYXRhIGZldGNoXG5cbi8qKiBTbmFwIHRvIG5lYXJlc3QgcmVhY2ggd2l0aCBzdHJlYW1vcmRlID49IG1pbk9yZGVyIChnZW9zZXJ2ZXIgYmJveCBzZWFyY2gpLiAqL1xuYXN5bmMgZnVuY3Rpb24gc25hcENvbWlkKGxhdCwgbG9uLCBtaW5PcmRlcikge1xuICBjb25zdCBib3ggPSAwLjI7XG4gIC8vIE5PVEU6IEVQU0c6NDI2OSB1bmRlciBXRlMgMi4wIHVzZXMgbGF0LGxvbiBheGlzIG9yZGVyIGluIENRTCBCQk9YXG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKEdFT1NFUlZFUiwge1xuICAgIGRhdGE6IHtcbiAgICAgIHNlcnZpY2U6IFwiV0ZTXCIsIHZlcnNpb246IFwiMi4wLjBcIiwgcmVxdWVzdDogXCJHZXRGZWF0dXJlXCIsXG4gICAgICB0eXBlTmFtZTogXCJ3bWFkYXRhOm5oZGZsb3dsaW5lX25ldHdvcmtcIiwgb3V0cHV0Rm9ybWF0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIGNxbF9maWx0ZXI6XG4gICAgICAgIGBzdHJlYW1vcmRlID49ICR7bWluT3JkZXJ9IEFORCBCQk9YKHRoZV9nZW9tLGAgK1xuICAgICAgICBgJHtsYXQgLSBib3h9LCR7bG9uIC0gYm94fSwke2xhdCArIGJveH0sJHtsb24gKyBib3h9KWAsXG4gICAgICBjb3VudDogXCI1MDBcIixcbiAgICB9LFxuICB9KTtcbiAgbGV0IGJlc3QgPSBudWxsLCBiZXN0RCA9IEluZmluaXR5O1xuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xuICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5O1xuICAgIGNvbnN0IHBhdGhzID0gZy50eXBlID09PSBcIkxpbmVTdHJpbmdcIiA/IFtnLmNvb3JkaW5hdGVzXSA6IGcuY29vcmRpbmF0ZXM7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpICs9IDMpIHsgLy8gZXZlcnkgM3JkIHZlcnRleFxuICAgICAgICBjb25zdCBwID0gcGF0aFtpXTtcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIHBbMV0sIHBbMF0pO1xuICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgYmVzdCA9IGYucHJvcGVydGllczsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYmVzdCAhPT0gbnVsbCkgcmV0dXJuIFtOdW1iZXIoYmVzdC5jb21pZCksIGJlc3QuZ25pc19uYW1lID8/IG51bGwsIGJlc3REXTtcbiAgcmV0dXJuIFthd2FpdCBubGRpUG9zaXRpb25Db21pZChsYXQsIGxvbiksIG51bGwsIG51bGxdO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpUG9zaXRpb25Db21pZChsYXQsIGxvbikge1xuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkL3Bvc2l0aW9uYCwge1xuICAgIHBhcmFtczogeyBjb29yZHM6IGBQT0lOVCgke2xvbn0gJHtsYXR9KWAgfSwgdGltZW91dE1zOiAzMDAwMCxcbiAgfSk7XG4gIHJldHVybiBOdW1iZXIoai5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLmlkZW50aWZpZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpRG1GbG93bGluZXMoY29taWQsIGRpc3RhbmNlS20pIHtcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oYCR7TkxESV9CQVNFfS9saW5rZWQtZGF0YS9jb21pZC8ke2NvbWlkfS9uYXZpZ2F0aW9uL0RNL2Zsb3dsaW5lc2AsIHtcbiAgICBwYXJhbXM6IHsgZGlzdGFuY2U6IFN0cmluZyhNYXRoLnRydW5jKGRpc3RhbmNlS20pKSB9LFxuICB9KTtcbiAgY29uc3QgZ2VvbXMgPSBuZXcgTWFwKCk7IC8vIGNvbWlkIC0+IFtwYXRoc10gKFtbbG9uLGxhdF0sLi4uXSlcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICBjb25zdCBjaWQgPSBOdW1iZXIoZi5wcm9wZXJ0aWVzLm5oZHBsdXNfY29taWQpO1xuICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5O1xuICAgIGlmIChnLnR5cGUgPT09IFwiTGluZVN0cmluZ1wiKSBnZW9tcy5zZXQoY2lkLCBbZy5jb29yZGluYXRlc10pO1xuICAgIGVsc2UgaWYgKGcudHlwZSA9PT0gXCJNdWx0aUxpbmVTdHJpbmdcIikgZ2VvbXMuc2V0KGNpZCwgZy5jb29yZGluYXRlcyk7XG4gIH1cbiAgcmV0dXJuIGdlb21zO1xufVxuXG5hc3luYyBmdW5jdGlvbiBubGRpR2F1Z2VzKGNvbWlkLCBkaXN0YW5jZUttLCBtb2RlKSB7XG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke05MRElfQkFTRX0vbGlua2VkLWRhdGEvY29taWQvJHtjb21pZH0vbmF2aWdhdGlvbi8ke21vZGV9L253aXNzaXRlYCwge1xuICAgIHBhcmFtczogeyBkaXN0YW5jZTogU3RyaW5nKE1hdGgudHJ1bmMoZGlzdGFuY2VLbSkpIH0sXG4gIH0pO1xuICBjb25zdCBvdXQgPSBbXTtcbiAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICBjb25zdCBzaWQgPSAoZi5wcm9wZXJ0aWVzLmlkZW50aWZpZXIgfHwgXCJcIikucmVwbGFjZShcIlVTR1MtXCIsIFwiXCIpO1xuICAgIGlmIChzaWQubGVuZ3RoID4gMTUpIGNvbnRpbnVlOyAvLyBjb29yZGluYXRlLXN0eWxlIElEcyAobm90ZWJvb2sgcnVsZSlcbiAgICBvdXQucHVzaCh7XG4gICAgICBzdGF0aW9uX2lkOiBzaWQsXG4gICAgICBuYW1lOiBmLnByb3BlcnRpZXMubmFtZSB8fCBcIlVua25vd25cIixcbiAgICAgIGxhdDogZi5nZW9tZXRyeS5jb29yZGluYXRlc1sxXSxcbiAgICAgIGxvbjogZi5nZW9tZXRyeS5jb29yZGluYXRlc1swXSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1lcmdlIHRoZSBuZWFyZXN0IHVwc3RyZWFtIG1haW4tc3RlbSBnYXVnZSBpbnRvIHRoZSBsb2NhdGVkLWdhdWdlIGxpc3QgYXMgYVxuICogdmlydHVhbCBnYXVnZSBhdCB0aGUgc3BpbGwgcG9pbnQgKHRyYWNlX2Rpc3QgMCkuIFdpdGhvdXQgdGhpcywgY2xpY2tpbmcganVzdFxuICogRE9XTlNUUkVBTSBvZiBhIGdhdWdlIGRyb3BzIGl0IGZyb20gdGhlIERNIG5hdmlnYXRpb24gYW5kIHRoZSBuZXh0IGdhdWdlJ3MgUVxuICogaXMgYmFjay1jbGFtcGVkIG9udG8gdGhlIGZpcnN0IHJlYWNoIOKAlCB3aWxkbHkgd3Jvbmcgd2hlbiB0aGF0IGdhdWdlIHNpdHNcbiAqIGJlbG93IGEgbWFqb3IgY29uZmx1ZW5jZSAoR2FsbGF0aW4gYmVsb3cgTG9nYW4gLT4gTWlzc291cmkgYXQgVG9zdG9uKS5cbiAqIFEgaXMgdHJhbnNmZXJyZWQgYnkgZHJhaW5hZ2UtYXJlYSByYXRpbyAoc3RhbmRhcmQgVVNHUyB0cmFuc2ZlciksIHdoaWNoIGFsc29cbiAqIGtlZXBzIHRoZSBhbmNob3IgaG9uZXN0IHdoZW4gdGhlIFVNIHBhdGggY3Jvc3NlcyBhIGNvbmZsdWVuY2U6IHRoZSByYXRpb1xuICogc2NhbGVzIGEgdHJpYnV0YXJ5IGdhdWdlIGJhY2sgdXAgdG8gdGhlIGZsb3cgYXQgdGhlIGNsaWNrLlxuICogTm8tb3Agd2hlbiBhbiBvbi10cmFjZSBnYXVnZSBhbHJlYWR5IHNpdHMgd2l0aGluIGFuY2hvclNraXBNIG9mIHRoZSBzdGFydFxuICogKGl0IGFscmVhZHkgYW5jaG9ycyB0aGUgYm91bmRhcnkpLCB0aGUgc3RhdGlvbiBpcyBhbHJlYWR5IGxvY2F0ZWQsIG9yIHRoZVxuICogREEgdHJhbnNmZXIgaXMgb3V0c2lkZSBpdHMgY3JlZGlibGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVVwc3RyZWFtQW5jaG9yKGdkLCB1cCwgc3BpbGxEYVNxbWksIHsgYW5jaG9yU2tpcE0gPSA1MDAsIGRhUmF0aW9NYXggPSA0IH0gPSB7fSkge1xuICBpZiAoIXVwIHx8ICEodXAuZGlzY2hhcmdlID49IDApIHx8ICEodXAuZHJhaW5hZ2VfYXJlYSA+IDApIHx8ICEoc3BpbGxEYVNxbWkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoZ2Quc29tZSgoZykgPT4gZy5zdGF0aW9uX2lkID09PSB1cC5zdGF0aW9uX2lkKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoZ2Quc29tZSgoZykgPT4gZy50cmFjZV9kaXN0IDw9IGFuY2hvclNraXBNKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCByYXRpbyA9IHNwaWxsRGFTcW1pIC8gdXAuZHJhaW5hZ2VfYXJlYTtcbiAgaWYgKHJhdGlvIDwgMSAvIGRhUmF0aW9NYXggfHwgcmF0aW8gPiBkYVJhdGlvTWF4KSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IFt3LCBkZXBdID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihzcGlsbERhU3FtaSk7XG4gIGdkLnB1c2goe1xuICAgIHN0YXRpb25faWQ6IHVwLnN0YXRpb25faWQsIG5hbWU6IHVwLm5hbWUsIGxhdDogdXAubGF0LCBsb246IHVwLmxvbixcbiAgICBkaXNjaGFyZ2U6IHVwLmRpc2NoYXJnZSAqIHJhdGlvLCBkcmFpbmFnZV9hcmVhOiBzcGlsbERhU3FtaSxcbiAgICBhcmVhOiB3ICogZGVwLCB0cmFjZV9kaXN0OiAwLjAsXG4gICAgdXBzdHJlYW1fYW5jaG9yOiB0cnVlLFxuICAgIGFuY2hvcl9nYXVnZV9xX2NmczogdXAuZGlzY2hhcmdlLCBhbmNob3JfZ2F1Z2VfZGFfc3FtaTogdXAuZHJhaW5hZ2VfYXJlYSxcbiAgICBhbmNob3JfdXBzdHJlYW1fbTogdXAudXBzdHJlYW1fbSA/PyBudWxsLFxuICB9KTtcbiAgZ2Quc29ydCgoYSwgYikgPT4gYS50cmFjZV9kaXN0IC0gYi50cmFjZV9kaXN0KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKiBWQUFzIGZvciBhIGxpc3Qgb2YgQ09NSURzIGZyb20gVVNHUyBnZW9zZXJ2ZXIgKGJhdGNoZWQgUE9TVCkuICovXG5hc3luYyBmdW5jdGlvbiB2YWFCYXRjaChjb21pZHMpIHtcbiAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICBjb25zdCBDSFVOSyA9IDE1MDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21pZHMubGVuZ3RoOyBpICs9IENIVU5LKSB7XG4gICAgY29uc3QgY2h1bmsgPSBjb21pZHMuc2xpY2UoaSwgaSArIENIVU5LKTtcbiAgICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihHRU9TRVJWRVIsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VydmljZTogXCJXRlNcIiwgdmVyc2lvbjogXCIyLjAuMFwiLCByZXF1ZXN0OiBcIkdldEZlYXR1cmVcIixcbiAgICAgICAgdHlwZU5hbWU6IFwid21hZGF0YTpuaGRmbG93bGluZV9uZXR3b3JrXCIsXG4gICAgICAgIG91dHB1dEZvcm1hdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGNxbF9maWx0ZXI6IGBjb21pZCBJTiAoJHtjaHVuay5qb2luKFwiLFwiKX0pYCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICAgIGNvbnN0IHAgPSBmLnByb3BlcnRpZXM7XG4gICAgICAvLyBFUk9NIG1vbnRobHkgbW9kZWxlZCBmbG93IChnYXVnZS1hZGp1c3RlZCwgY2ZzKSDigJQgdW5nYXVnZWQgZmFsbGJhY2sgKyBKb2Jzb24gUWFcbiAgICAgIGNvbnN0IHFlID0ge307XG4gICAgICBmb3IgKGxldCBtID0gMTsgbSA8PSAxMjsgbSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBgcWVfJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgICAgIHFlW21dID0gcFtrXSA/PyBudWxsO1xuICAgICAgfVxuICAgICAgb3V0LnNldChOdW1iZXIocC5jb21pZCksIHtcbiAgICAgICAgaHlkcm9zZXE6IHAuaHlkcm9zZXEgPz8gbnVsbCxcbiAgICAgICAgc3RyZWFtb3JkZTogcC5zdHJlYW1vcmRlID8/IG51bGwsXG4gICAgICAgIHNsb3BlOiBwLnNsb3BlID8/IG51bGwsXG4gICAgICAgIHRvdGRhc3FrbTogcC50b3RkYXNxa20gPz8gbnVsbCxcbiAgICAgICAgZnR5cGU6IHAuZnR5cGUgPz8gbnVsbCxcbiAgICAgICAgZmNvZGU6IHAuZmNvZGUgPz8gbnVsbCxcbiAgICAgICAgZ25pc19uYW1lOiBwLmduaXNfbmFtZSA/PyBudWxsLFxuICAgICAgICAvLyBMYWtlUG9uZC9SZXNlcnZvaXIgPSBpbXBvdW5kZWQ7IFN0cmVhbVJpdmVyID0gYnJhaWRlZCBmcmVlLWZsb3dpbmdcbiAgICAgICAgd2JhcmVhdHlwZTogcC53YmFyZWF0eXBlID8/IG51bGwsXG4gICAgICAgIHZlX21hOiBwLnZlX21hID8/IG51bGwsXG4gICAgICAgIHFlX21hOiBwLnFlX21hID8/IG51bGwsICAgLy8gRVJPTSBtZWFuIGFubnVhbCBmbG93IChjZnMpIOKAlCBKb2Jzb24gUWFcbiAgICAgICAgcWVfbW9udGhseTogcWUsXG4gICAgICAgIC8vIE5IRFBsdXMgZGl2ZXJnZW5jZTogMCA9IG5vbmUsIDEgPSBtYWluIHBhdGgsIDIgPSBtaW5vciBwYXRoIG9mIGEgc3BsaXRcbiAgICAgICAgZGl2ZXJnZW5jZTogcC5kaXZlcmdlbmNlID8/IDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIERpc2NoYXJnZSAoY2ZzKSArIGRyYWluYWdlIGFyZWEgKHNxIG1pKSBwZXIgZ2F1Z2UgdmlhIHBsYWluIE5XSVMgUkVTVC4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdhdWdlSW5mbyhzdGF0aW9uSWRzLCBhc09mID0gbnVsbCkge1xuICBjb25zdCBpbmZvID0gbmV3IE1hcCgpO1xuICBpZiAoIXN0YXRpb25JZHMubGVuZ3RoKSByZXR1cm4gaW5mbztcbiAgY29uc3Qgc2l0ZXMgPSBzdGF0aW9uSWRzLmpvaW4oXCIsXCIpO1xuXG4gIC8vIGRyYWluYWdlIGFyZWFzIChyZGIsIGV4cGFuZGVkIG91dHB1dClcbiAgdHJ5IHtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZ2V0VGV4dChOV0lTX1NJVEUsIHsgZm9ybWF0OiBcInJkYlwiLCBzaXRlcywgc2l0ZU91dHB1dDogXCJleHBhbmRlZFwiIH0pO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGwpID0+IGwgJiYgIWwuc3RhcnRzV2l0aChcIiNcIikpO1xuICAgIGlmIChsaW5lcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgaGRyID0gbGluZXNbMF0uc3BsaXQoXCJcXHRcIik7XG4gICAgICBjb25zdCBpU2l0ZSA9IGhkci5pbmRleE9mKFwic2l0ZV9ub1wiKTtcbiAgICAgIGNvbnN0IGlEYSA9IGhkci5pbmRleE9mKFwiZHJhaW5fYXJlYV92YVwiKTsgLy8gLTEgaWYgYWJzZW50XG4gICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMuc2xpY2UoMikpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoIDw9IE1hdGgubWF4KGlTaXRlLCBpRGEgPiAtMSA/IGlEYSA6IDApKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGRhID0gbnVsbDtcbiAgICAgICAgaWYgKGlEYSA+IC0xKSB7XG4gICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQocGFydHNbaURhXSk7XG4gICAgICAgICAgZGEgPSBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnNldChwYXJ0c1tpU2l0ZV0sIHsgZHJhaW5hZ2VfYXJlYTogZGEgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHsgLyogaWdub3JlIOKAlCBtYXRjaGVzIFB5dGhvbiAqLyB9XG5cbiAgLy8gZGlzY2hhcmdlXG4gIGNvbnN0IHBhcmFtcyA9IHsgZm9ybWF0OiBcImpzb25cIiwgc2l0ZXMsIHBhcmFtZXRlckNkOiBcIjAwMDYwXCIgfTtcbiAgaWYgKGFzT2YpIHsgcGFyYW1zLnN0YXJ0RFQgPSBhc09mOyBwYXJhbXMuZW5kRFQgPSBhc09mOyB9XG4gIGVsc2UgcGFyYW1zLnBlcmlvZCA9IFwiUDFEXCI7XG4gIHRyeSB7XG4gICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oTldJU19JViwgeyBwYXJhbXMsIHRpbWVvdXRNczogNjAwMDAsIHRyaWVzOiAxIH0pO1xuICAgIGZvciAoY29uc3QgdHMgb2Ygaj8udmFsdWU/LnRpbWVTZXJpZXMgfHwgW10pIHtcbiAgICAgIGNvbnN0IHNpZCA9IHRzLnNvdXJjZUluZm8uc2l0ZUNvZGVbMF0udmFsdWU7XG4gICAgICBjb25zdCB2YWxzID0gdHMudmFsdWVzWzBdLnZhbHVlO1xuICAgICAgaWYgKCF2YWxzIHx8ICF2YWxzLmxlbmd0aCkgY29udGludWU7XG4gICAgICBjb25zdCBxID0gcGFyc2VGbG9hdCh2YWxzW3ZhbHMubGVuZ3RoIC0gMV0udmFsdWUpO1xuICAgICAgaWYgKHEgPj0gMCkge1xuICAgICAgICBpZiAoIWluZm8uaGFzKHNpZCkpIGluZm8uc2V0KHNpZCwge30pO1xuICAgICAgICBpbmZvLmdldChzaWQpLmRpc2NoYXJnZSA9IHE7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHsgLyogaWdub3JlIOKAlCBtYXRjaGVzIFB5dGhvbiAqLyB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRyYWNlIGFzc2VtYmx5XG5cbi8qKiBPcmRlciBzZWdtZW50cyBkb3duc3RyZWFtIChoeWRyb3NlcSBkZXNjKSwgb3JpZW50LCB0cmltIHRvIHNwaWxsIHBvaW50LFxuICogIGVtaXQgfnJlc29sdXRpb25NIHNwYWNlZCBwb2ludHMgY2FycnlpbmcgVkFBIGF0dHJpYnV0ZXMuICovXG5mdW5jdGlvbiBhc3NlbWJsZVRyYWNlKGxhdCwgbG9uLCBnZW9tcywgdmFhLCByZXNvbHV0aW9uTSwgbG9nKSB7XG4gIGNvbnN0IHNlZ3MgPSBbXTtcbiAgZm9yIChjb25zdCBbY2lkLCBwYXRoc10gb2YgZ2VvbXMpIHtcbiAgICBjb25zdCB2ID0gdmFhLmdldChjaWQpO1xuICAgIGlmICghdiB8fCB2Lmh5ZHJvc2VxID09PSBudWxsIHx8IHYuaHlkcm9zZXEgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3QgY29vcmRzID0gcGF0aHMuZmxhdCgpOyAvLyBmbGF0dGVuIG11bHRpbGluZSBpbnRvIG9uZSB2ZXJ0ZXggbGlzdFxuICAgIGlmIChjb29yZHMubGVuZ3RoIDwgMikgY29udGludWU7XG4gICAgc2Vncy5wdXNoKHsgY29taWQ6IGNpZCwgY29vcmRzLCAuLi52IH0pO1xuICB9XG4gIHNlZ3Muc29ydCgoYSwgYikgPT4gYi5oeWRyb3NlcSAtIGEuaHlkcm9zZXEpOyAvLyBkb3duc3RyZWFtID0gZGVjcmVhc2luZyBoeWRyb3NlcVxuXG4gIC8vIG9yaWVudCBlYWNoIHNlZ21lbnQgc28gaXQgZmxvd3Mgc3RhcnQtPmVuZCwgY2hhaW5pbmcgZW5kcyB0byBzdGFydHNcbiAgbGV0IHByZXZFbmQgPSBudWxsO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2Vncykge1xuICAgIGxldCBjID0gcy5jb29yZHM7XG4gICAgaWYgKHByZXZFbmQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRTdGFydCA9IGhhdmVyc2luZU0ocHJldkVuZFsxXSwgcHJldkVuZFswXSwgY1swXVsxXSwgY1swXVswXSk7XG4gICAgICBjb25zdCBkRW5kID0gaGF2ZXJzaW5lTShwcmV2RW5kWzFdLCBwcmV2RW5kWzBdLCBjW2MubGVuZ3RoIC0gMV1bMV0sIGNbYy5sZW5ndGggLSAxXVswXSk7XG4gICAgICBpZiAoZEVuZCA8IGRTdGFydCkgYyA9IGMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHMuY29vcmRzID0gYztcbiAgICBwcmV2RW5kID0gY1tjLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgLy8gdHJpbSB0aGUgZmlyc3Qgc2VnbWVudCB0byBzdGFydCBhdCB0aGUgdmVydGV4IG5lYXJlc3QgdGhlIHNwaWxsIHBvaW50XG4gIGlmIChzZWdzLmxlbmd0aCkge1xuICAgIGNvbnN0IGMwID0gc2Vnc1swXS5jb29yZHM7XG4gICAgbGV0IG1pbkkgPSAwLCBtaW5EID0gSW5maW5pdHk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjMC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIGMwW2ldWzFdLCBjMFtpXVswXSk7XG4gICAgICBpZiAoZCA8IG1pbkQpIHsgbWluRCA9IGQ7IG1pbkkgPSBpOyB9XG4gICAgfVxuICAgIGNvbnN0IHRyaW1tZWQgPSBjMC5zbGljZShtaW5JKTtcbiAgICBzZWdzWzBdLmNvb3JkcyA9IHRyaW1tZWQubGVuZ3RoID8gdHJpbW1lZCA6IFtjMFtjMC5sZW5ndGggLSAxXV07XG4gIH1cblxuICAvLyBmbGF0dGVuIHRvIGF0dHJpYnV0ZWQgcG9pbnRzLCBkb3duc2FtcGxlIHRvIHJlc29sdXRpb25NXG4gIGxldCBwdHMgPSBbXTtcbiAgZm9yIChjb25zdCBzIG9mIHNlZ3MpIHtcbiAgICBsZXQgc2xvcGUgPSBzLnNsb3BlO1xuICAgIGlmIChzbG9wZSA9PT0gbnVsbCB8fCBzbG9wZSA9PT0gdW5kZWZpbmVkIHx8IHNsb3BlIDwgMCkgc2xvcGUgPSAwLjAwMTsgLy8gLTk5OTggPSBtaXNzaW5nXG4gICAgZm9yIChjb25zdCBwIG9mIHMuY29vcmRzKSB7XG4gICAgICBwdHMucHVzaCh7XG4gICAgICAgIGxvbjogcFswXSwgbGF0OiBwWzFdLFxuICAgICAgICBkcmFpbmFnZV9hcmVhX2ttMjogcy50b3RkYXNxa20gfHwgMCxcbiAgICAgICAgc2xvcGUsXG4gICAgICAgIGZ0eXBlOiBzLmZ0eXBlLCB3YmFyZWF0eXBlOiBzLndiYXJlYXR5cGUsXG4gICAgICAgIGNvbWlkOiBzLmNvbWlkLFxuICAgICAgICBnbmlzX25hbWU6IHMuZ25pc19uYW1lLFxuICAgICAgICBxZV9tYTogcy5xZV9tYSwgcWVfbW9udGhseTogcy5xZV9tb250aGx5LFxuICAgICAgICBkaXZlcmdlbmNlOiBzLmRpdmVyZ2VuY2UgfHwgMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAocHRzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBrZWVwID0gW3B0c1swXV07XG4gICAgbGV0IGN1bSA9IDAuMDtcbiAgICBsZXQgbGFzdCA9IHB0c1swXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcCA9IHB0c1tpXTtcbiAgICAgIGN1bSArPSBoYXZlcnNpbmVNKGxhc3QubGF0LCBsYXN0LmxvbiwgcC5sYXQsIHAubG9uKTtcbiAgICAgIGxhc3QgPSBwO1xuICAgICAgaWYgKGN1bSA+PSByZXNvbHV0aW9uTSkgeyBrZWVwLnB1c2gocCk7IGN1bSA9IDAuMDsgfVxuICAgIH1cbiAgICBwdHMgPSBrZWVwO1xuICB9XG4gIGxvZyhgICB0cmFjZTogJHtzZWdzLmxlbmd0aH0gc2VnbWVudHMgLT4gJHtwdHMubGVuZ3RofSBwb2ludHMgKCR7c2Vncy5sZW5ndGggPyBzZWdzWzBdLmduaXNfbmFtZSA6IFwiP1wifSAuLi4pYCk7XG4gIHJldHVybiBbcHRzLCBzZWdzLmxlbmd0aCA/IHNlZ3NbMF0uZ25pc19uYW1lIDogbnVsbF07XG59XG5cbi8qKiBDbGFtcGVkIGxpbmVhciBpbnRlcnBvbGF0aW9uIChzY2lweSBpbnRlcnAxZCB3aXRoIGNsYW1wZWQgZmlsbF92YWx1ZSkuICovXG5mdW5jdGlvbiBpbnRlcnBDbGFtcGVkKHhzLCB5cykge1xuICByZXR1cm4gKHgpID0+IHtcbiAgICBpZiAoeCA8PSB4c1swXSkgcmV0dXJuIHlzWzBdO1xuICAgIGlmICh4ID49IHhzW3hzLmxlbmd0aCAtIDFdKSByZXR1cm4geXNbeXMubGVuZ3RoIC0gMV07XG4gICAgbGV0IGkgPSAxO1xuICAgIHdoaWxlICh4c1tpXSA8IHgpIGkrKztcbiAgICBjb25zdCB0ID0gKHggLSB4c1tpIC0gMV0pIC8gKHhzW2ldIC0geHNbaSAtIDFdKTtcbiAgICByZXR1cm4geXNbaSAtIDFdICsgdCAqICh5c1tpXSAtIHlzW2kgLSAxXSk7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWFpbiBtb2RlbFxuLy9cbi8vIFNwbGl0IGludG8gdHdvIHN0YWdlcyBzbyB0aGUgZXhwZW5zaXZlIHBhcnQgaXMgY2FjaGVhYmxlOlxuLy8gICBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnKSAg4oCUIEFMTCBuZXR3b3JrIEkvTzogdHJhY2UgZ2VvbWV0cnksIFZBQXMsXG4vLyAgICAgd2lkdGggc2FtcGxpbmcsIGdhdWdlcyArIGZsb3dzLCBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzLiBTYWZldHkgZmFjdG9yLFxuLy8gICAgIG1heCBob3VycyBldGMuIGRvIE5PVCBhZmZlY3QgdGhpcyBzdGFnZS5cbi8vICAgY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZykgICAgICAgIOKAlCBwdXJlIG1hdGg6IFEgaW50ZXJwLCBNYW5uaW5nIGRlcHRoLFxuLy8gICAgIHZlbG9jaXR5IHggc2FmZXR5LCBpbXBvdW5kbWVudCwgdHJhdmVsIHRpbWUsIGhvdXJseSBtYXJrZXJzLCBzaXRlIEVUQXMuXG4vLyAgICAgRGV0ZXJtaW5pc3RpYyBhbmQgcmUtcnVubmFibGUgb24gdGhlIHNhbWUgZGF0YSAoZmllbGRzIGFyZSBvdmVyd3JpdHRlbixcbi8vICAgICByb3dzIGFyZSBuZXZlciBzdHJ1Y3R1cmFsbHkgbXV0YXRlZCkuXG4vLyBydW5UcmFjZSgpIGNvbXBvc2VzIHRoZSB0d28g4oCUIGlkZW50aWNhbCBiZWhhdmlvciB0byB0aGUgb3JpZ2luYWwuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcbiAgY29uc3QgY2ZnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XG4gIGNvbnN0IGxvZyA9IGNmZy52ZXJib3NlID8gKC4uLmEpID0+IGNvbnNvbGUubG9nKC4uLmEpIDogKCkgPT4ge307XG5cbiAgbG9nKGBmZXRjaFRyYWNlRGF0YSgke2xhdC50b0ZpeGVkKDQpfSwgJHtsb24udG9GaXhlZCg0KX0pICBhc09mPSR7Y2ZnLmFzT2YgfHwgXCJsaXZlXCJ9YCk7XG5cbiAgLy8gMS4gdHJhY2UgZ2VvbWV0cnkgKG9uZSBOTERJIGNhbGwpICsgVkFBIGJhdGNoIGpvaW5cbiAgY29uc3QgW2NvbWlkLCBzbmFwTmFtZSwgc25hcERdID0gYXdhaXQgc25hcENvbWlkKGxhdCwgbG9uLCBjZmcubWluU3RyZWFtT3JkZXIpO1xuICBsb2coYCAgQ09NSUQgJHtjb21pZH1gICsgKHNuYXBOYW1lID8gYCAoJHtzbmFwTmFtZX0sIHNuYXBwZWQgJHsoc25hcEQgLyAxMDAwKS50b0ZpeGVkKDIpfSBrbSlgIDogXCJcIikpO1xuICBjb25zdCBnZW9tcyA9IGF3YWl0IG5sZGlEbUZsb3dsaW5lcyhjb21pZCwgY2ZnLm1heERpc3RhbmNlS20pO1xuICBsb2coYCAgTkxESSBETSBmbG93bGluZXM6ICR7Z2VvbXMuc2l6ZX1gKTtcbiAgY29uc3QgdmFhID0gYXdhaXQgdmFhQmF0Y2goWy4uLmdlb21zLmtleXMoKV0pO1xuICBjb25zdCBbcHRzLCByaXZlck5hbWVdID0gYXNzZW1ibGVUcmFjZShsYXQsIGxvbiwgZ2VvbXMsIHZhYSwgY2ZnLnJlc29sdXRpb25NLCBsb2cpO1xuICBpZiAocHRzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcihcInRyYWNlIHRvbyBzaG9ydFwiKTtcblxuICAvLyBwZXItcG9pbnQgYXJyYXlzIChtaXJyb3JzIHRoZSBEYXRhRnJhbWUpXG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoO1xuICBjb25zdCByb3dzID0gcHRzLm1hcCgocCkgPT4gKHsgLi4ucCB9KSk7XG4gIHJvd3NbMF0uZGlzdGFuY2UgPSAwLjA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgcm93c1tpXS5kaXN0YW5jZSA9IGhhdmVyc2luZU0ocm93c1tpIC0gMV0ubGF0LCByb3dzW2kgLSAxXS5sb24sIHJvd3NbaV0ubGF0LCByb3dzW2ldLmxvbik7XG4gIH1cbiAgbGV0IGN1bSA9IDAuMDtcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHsgY3VtICs9IHIuZGlzdGFuY2U7IHIuY3VtX2Rpc3QgPSBjdW07IH1cbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuZHJhaW5hZ2VfYXJlYV9zcW1pID0gci5kcmFpbmFnZV9hcmVhX2ttMiAqIDAuMzg2MTAyO1xuXG4gIC8vIDIuIHdpZHRoczogZm9ybXVsYSBiYXNlbGluZSwgb3B0aW9uYWwgb3ZlcnJpZGUgcHJvdmlkZXIsIDJ4IGNhcCwgYmFja3dhcmQgc21vb3RoaW5nXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci5mb3JtdWxhX3dpZHRoID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihyLmRyYWluYWdlX2FyZWFfc3FtaSlbMF07XG4gICAgci53aWR0aF9tID0gMC4wO1xuICB9XG4gIC8vIGJyYWlkZWQtcmVhY2ggZmxhZzogYW55IE5IRFBsdXMgZGl2ZXJnZW5jZSB3aXRoaW4gfjEga20gKDEwIHJvd3MpIOKAlCBHTE9XIHdpZHRoc1xuICAvLyB0aGVyZSBtZWFzdXJlIHRvdGFsIHdldHRlZCB3aWR0aCBhY3Jvc3MgYmFycywgaW5mbGF0aW5nIEEgYW5kIGtpbGxpbmcgdmVsb2NpdHlcbiAge1xuICAgIGNvbnN0IFcgPSAxMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgbGV0IGJyYWlkZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGsgPSBNYXRoLm1heCgwLCBpIC0gVyk7IGsgPD0gTWF0aC5taW4obiAtIDEsIGkgKyBXKTsgaysrKSB7XG4gICAgICAgIGlmIChyb3dzW2tdLmRpdmVyZ2VuY2UgPiAwKSB7IGJyYWlkZWQgPSB0cnVlOyBicmVhazsgfVxuICAgICAgfVxuICAgICAgcm93c1tpXS5icmFpZGVkID0gYnJhaWRlZDtcbiAgICB9XG4gICAgY29uc3QgbmIgPSByb3dzLmZpbHRlcigocikgPT4gci5icmFpZGVkKS5sZW5ndGg7XG4gICAgaWYgKG5iKSBsb2coYCAgYnJhaWRlZCBmbGFnOiAke25ifS8ke259IHRyYWNlIHBvaW50cyBuZWFyIGNoYW5uZWwgZGl2ZXJnZW5jZXMgKEdMT1cgb3ZlcnJpZGUgZGlzYWJsZWQgdGhlcmUpYCk7XG4gIH1cblxuICBpZiAoY2ZnLndpZHRoUHJvdmlkZXIpIHtcbiAgICAvLyBIUiBOSERQbHVzSUQgIT0gTVIgY29taWQg4oCUIHNhbXBsZSBzcGF0aWFsbHksIGluIHdpbmRvd3M7IG5ldmVyIGxldCB0aGVcbiAgICAvLyBvdmVycmlkZSBraWxsIHRoZSBydW4gKGRlZ3JhZGUgdG8gZm9ybXVsYSB3aWR0aHMpLlxuICAgIGxldCBtaWRzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFNURVAgPSBjZmcud2lkdGhXaW5kb3dQb2ludHM7XG4gICAgICBjb25zdCBwYWQgPSAwLjAzO1xuICAgICAgZm9yIChsZXQgaTAgPSAwOyBpMCA8IG47IGkwICs9IFNURVApIHtcbiAgICAgICAgY29uc3Qgd2luID0gcm93cy5zbGljZShpMCwgaTAgKyBTVEVQKTtcbiAgICAgICAgY29uc3QgZW52ID0ge1xuICAgICAgICAgIHhtaW46IE1hdGgubWluKC4uLndpbi5tYXAoKHIpID0+IHIubG9uKSkgLSBwYWQsXG4gICAgICAgICAgeW1pbjogTWF0aC5taW4oLi4ud2luLm1hcCgocikgPT4gci5sYXQpKSAtIHBhZCxcbiAgICAgICAgICB4bWF4OiBNYXRoLm1heCguLi53aW4ubWFwKChyKSA9PiByLmxvbikpICsgcGFkLFxuICAgICAgICAgIHltYXg6IE1hdGgubWF4KC4uLndpbi5tYXAoKHIpID0+IHIubGF0KSkgKyBwYWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZlYXRzID0gYXdhaXQgY2ZnLndpZHRoUHJvdmlkZXIoZW52KTsgLy8gW3tsYXQsIGxvbiwgd2lkdGh9XVxuICAgICAgICBtaWRzLnB1c2goLi4uZmVhdHMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZyhgICBXSURUSCBPVkVSUklERSBGQUlMRUQgKCR7U3RyaW5nKGUpLnNsaWNlKDAsIDgwKX0pIC0gZmFsbGluZyBiYWNrIHRvIGZvcm11bGEgd2lkdGhzYCk7XG4gICAgICBtaWRzID0gW107XG4gICAgfVxuICAgIGlmIChtaWRzLmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgICAgaWYgKHIuYnJhaWRlZCkgeyByLndpZHRoX20gPSAwLjA7IGNvbnRpbnVlOyB9IC8vIGZvcm11bGEgd2lkdGggb24gYnJhaWRlZCByZWFjaGVzXG4gICAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBiZXN0VyA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgbSBvZiBtaWRzKSB7XG4gICAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0oci5sYXQsIHIubG9uLCBtLmxhdCwgbS5sb24pO1xuICAgICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0VyA9IG0ud2lkdGggfHwgMDsgfVxuICAgICAgICB9XG4gICAgICAgIHIud2lkdGhfbSA9IGJlc3REIDw9IGNmZy53aWR0aFNhbXBsZVJhZGl1c00gPyBiZXN0VyA6IDAuMDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hdGNoZWQgPSByb3dzLmZpbHRlcigocikgPT4gci53aWR0aF9tID4gMCkubGVuZ3RoO1xuICAgICAgbG9nKGAgIEdMT1cgc3BhdGlhbCBzYW1wbGU6ICR7bWlkcy5sZW5ndGh9IEhSIHNlZ21lbnRzLCB3aWR0aHMgbWF0Y2hlZCBhdCAke21hdGNoZWR9LyR7bn0gdHJhY2UgcG9pbnRzYCk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci53aWR0aF9maW5hbF9yYXcgPVxuICAgICAgci53aWR0aF9tID4gMCAmJiByLndpZHRoX20gPD0gci5mb3JtdWxhX3dpZHRoICogMi4wID8gci53aWR0aF9tIDogci5mb3JtdWxhX3dpZHRoO1xuICB9XG4gIC8vIHBhbmRhcyByb2xsaW5nKHdpbmRvdz01MSwgbWluX3BlcmlvZHM9MSkubWVhbigpIOKAlCB0cmFpbGluZyB3aW5kb3dcbiAge1xuICAgIGNvbnN0IFcgPSA1MTtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgc3VtICs9IHJvd3NbaV0ud2lkdGhfZmluYWxfcmF3O1xuICAgICAgaWYgKGkgPj0gVykgc3VtIC09IHJvd3NbaSAtIFddLndpZHRoX2ZpbmFsX3JhdztcbiAgICAgIHJvd3NbaV0ud2lkdGhfZmluYWwgPSBzdW0gLyBNYXRoLm1pbihpICsgMSwgVyk7XG4gICAgfVxuICB9XG5cbiAgLy8gMy4gZGlzY2hhcmdlIGlucHV0czogTkxESSBkb3duc3RyZWFtIGdhdWdlcyAtPiBOV0lTIFEgKCtEQSksIGxvY2F0ZWQgb24gdHJhY2VcbiAgY29uc3QgZ2F1Z2VzID0gYXdhaXQgbmxkaUdhdWdlcyhjb21pZCwgY2ZnLm1heERpc3RhbmNlS20sIFwiRE1cIik7XG4gIC8vIHVwc3RyZWFtLWFuY2hvciBjYW5kaWRhdGVzOiBuZWFyZXN0IFVNIGdhdWdlcyAoZml4ZXMgdGhlIGRpc2NvbnRpbnVpdHkgd2hlblxuICAvLyB0aGUgY2xpY2sgaXMganVzdCBiZWxvdyBhIGdhdWdlIGFuZCBETSBuYXZpZ2F0aW9uIG5vIGxvbmdlciBzZWVzIGl0KVxuICBsZXQgdXBDYW5kcyA9IFtdO1xuICBpZiAoY2ZnLnVwc3RyZWFtR2F1Z2VLbSA+IDApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZG1JZHMgPSBuZXcgU2V0KGdhdWdlcy5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCkpO1xuICAgICAgdXBDYW5kcyA9IChhd2FpdCBubGRpR2F1Z2VzKGNvbWlkLCBjZmcudXBzdHJlYW1HYXVnZUttLCBcIlVNXCIpKVxuICAgICAgICAuZmlsdGVyKCh1KSA9PiAhZG1JZHMuaGFzKHUuc3RhdGlvbl9pZCkpXG4gICAgICAgIC5tYXAoKHUpID0+ICh7IC4uLnUsIHVwc3RyZWFtX206IGhhdmVyc2luZU0obGF0LCBsb24sIHUubGF0LCB1LmxvbikgfSkpXG4gICAgICAgIC5maWx0ZXIoKHUpID0+IHUudXBzdHJlYW1fbSA8PSBjZmcudXBzdHJlYW1HYXVnZUttICogMTAwMClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudXBzdHJlYW1fbSAtIGIudXBzdHJlYW1fbSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nKGAgIFVNIGdhdWdlIGxvb2t1cCBmYWlsZWQgKCR7U3RyaW5nKGUpLnNsaWNlKDAsIDgwKX0pIOKAlCBubyB1cHN0cmVhbSBhbmNob3JgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYWxsSWRzID0gWy4uLm5ldyBTZXQoWy4uLmdhdWdlcywgLi4udXBDYW5kc10ubWFwKChnKSA9PiBnLnN0YXRpb25faWQpKV07XG4gIGNvbnN0IGdpbmZvID0gYXdhaXQgZ2F1Z2VJbmZvKGFsbElkcywgY2ZnLmFzT2YpO1xuICBjb25zdCBnZCA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2F1Z2VzKSB7XG4gICAgY29uc3QgaSA9IGdpbmZvLmdldChnLnN0YXRpb25faWQpIHx8IHt9O1xuICAgIGlmIChpLmRpc2NoYXJnZSA9PT0gdW5kZWZpbmVkIHx8ICFpLmRyYWluYWdlX2FyZWEpIGNvbnRpbnVlO1xuICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpZHggPSAwO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShyb3dzW2tdLmxhdCwgcm93c1trXS5sb24sIGcubGF0LCBnLmxvbik7XG4gICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgaWR4ID0gazsgfVxuICAgIH1cbiAgICBpZiAoYmVzdEQgPiA1MDAwKSBjb250aW51ZTsgLy8gZ2F1Z2Ugbm90IG9uIG91ciB0cmFjZSBjb3JyaWRvclxuICAgIGNvbnN0IFt3LCBkZXBdID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihpLmRyYWluYWdlX2FyZWEpO1xuICAgIGdkLnB1c2goe1xuICAgICAgLi4uZywgZGlzY2hhcmdlOiBpLmRpc2NoYXJnZSwgZHJhaW5hZ2VfYXJlYTogaS5kcmFpbmFnZV9hcmVhLFxuICAgICAgYXJlYTogdyAqIGRlcCwgdHJhY2VfZGlzdDogcm93c1tpZHhdLmN1bV9kaXN0LFxuICAgIH0pO1xuICB9XG4gIGdkLnNvcnQoKGEsIGIpID0+IGEudHJhY2VfZGlzdCAtIGIudHJhY2VfZGlzdCk7XG4gIGNvbnN0IHNwaWxsRGFTcW1pID0gcm93c1swXS5kcmFpbmFnZV9hcmVhX3NxbWk7XG4gIGZvciAoY29uc3QgdSBvZiB1cENhbmRzKSB7XG4gICAgY29uc3QgaSA9IGdpbmZvLmdldCh1LnN0YXRpb25faWQpIHx8IHt9O1xuICAgIGlmIChpLmRpc2NoYXJnZSA9PT0gdW5kZWZpbmVkIHx8ICFpLmRyYWluYWdlX2FyZWEpIGNvbnRpbnVlO1xuICAgIGlmIChtZXJnZVVwc3RyZWFtQW5jaG9yKGdkLCB7IC4uLnUsIGRpc2NoYXJnZTogaS5kaXNjaGFyZ2UsIGRyYWluYWdlX2FyZWE6IGkuZHJhaW5hZ2VfYXJlYSB9LCBzcGlsbERhU3FtaSkpIHtcbiAgICAgIGxvZyhcbiAgICAgICAgYCAgdXBzdHJlYW0gYW5jaG9yICR7dS5zdGF0aW9uX2lkfSAke3UubmFtZS5zbGljZSgwLCAzMCl9OiAke01hdGgucm91bmQoaS5kaXNjaGFyZ2UpfSBjZnMgYCArXG4gICAgICAgIGBAICR7KHUudXBzdHJlYW1fbSAvIDEwMDApLnRvRml4ZWQoMSl9IGttIHVwc3RyZWFtIC0+ICR7TWF0aC5yb3VuZChpLmRpc2NoYXJnZSAqIChzcGlsbERhU3FtaSAvIGkuZHJhaW5hZ2VfYXJlYSkpfSBjZnMgYCArXG4gICAgICAgIGBhdCBzcGlsbCBwb2ludCAoREEgeCR7KHNwaWxsRGFTcW1pIC8gaS5kcmFpbmFnZV9hcmVhKS50b0ZpeGVkKDIpfSlgLFxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBhbiBvbi10cmFjZSBnYXVnZSBuZWFyIHRoZSBzdGFydCBhbHJlYWR5IGFuY2hvcnMgdGhlIGJvdW5kYXJ5IOKAlCBzdG9wIGxvb2tpbmdcbiAgICBpZiAoZ2Quc29tZSgoZykgPT4gIWcudXBzdHJlYW1fYW5jaG9yICYmIGcudHJhY2VfZGlzdCA8PSA1MDApKSBicmVhaztcbiAgfVxuICBmb3IgKGNvbnN0IGcgb2YgZ2QpIHtcbiAgICBsb2coYCAgZ2F1Z2UgJHtnLnN0YXRpb25faWR9ICR7Zy5uYW1lLnNsaWNlKDAsIDM4KS5wYWRFbmQoMzgpfSAke1N0cmluZyhNYXRoLnJvdW5kKGcuZGlzY2hhcmdlKSkucGFkU3RhcnQoOCl9IGNmcyBAICR7KGcudHJhY2VfZGlzdCAvIDEwMDApLnRvRml4ZWQoMSkucGFkU3RhcnQoNil9IGttJHtnLnVwc3RyZWFtX2FuY2hvciA/IFwiICh1cHN0cmVhbSBhbmNob3IpXCIgOiBcIlwifWApO1xuICB9XG5cbiAgLy8gNC4gc2l0ZS9yZWNlcHRvciBmZWF0dXJlcyAoZmV0Y2hlZCBpbiBwYXJhbGxlbDsgam9pbmVkIGluIGNvbXB1dGVUcmFjZSlcbiAgY29uc3QgZmV0Y2hTZXRzID0gYXN5bmMgKHByb3ZpZGVycykgPT4gUHJvbWlzZS5hbGwoXG4gICAgKHByb3ZpZGVycyB8fCBbXSkubWFwKGFzeW5jIChwKSA9PiAoe1xuICAgICAgYnVmZmVyX206IHAuYnVmZmVyX20gPz8gNDAwLFxuICAgICAgZmVhdHM6IGF3YWl0IHAuZmV0Y2goKSwgLy8gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XVxuICAgIH0pKSxcbiAgKTtcbiAgY29uc3QgW3NpdGVTZXRzLCByZWNlcHRvclNldHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgW2ZldGNoU2V0cyhjZmcuc2l0ZVByb3ZpZGVycyksIGZldGNoU2V0cyhjZmcucmVjZXB0b3JQcm92aWRlcnMpXSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGxhdCwgbG9uLCBjb21pZCwgc25hcE5hbWUsIHNuYXBEaXN0TTogc25hcEQsIHJpdmVyTmFtZSxcbiAgICByb3dzLCBnZCwgc2l0ZVNldHMsIHJlY2VwdG9yU2V0cyxcbiAgICBhc09mOiBjZmcuYXNPZiB8fCBcImxpdmVcIixcbiAgICBmZXRjaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBKb2Jzb24gKFVTR1MgV1JJUiA5Ni00MDEzKVxuLy9cbi8vIER5ZS10cmFjZXIgcmVncmVzc2lvbnMgZnJvbSB+OTgwIHN1YnJlYWNoZXMgLyB+OTAgVVMgcml2ZXJzLiBVbml0czogRGEgbV4yLFxuLy8gUSAmIFFhIG1eMy9zLCBTIGRpbWVuc2lvbmxlc3MsIHZlbG9jaXRpZXMgbS9zLiBFcSAxMi8xMyAod2l0aCBzbG9wZSkgb3Jcbi8vIDE0LzE1ICh3aXRob3V0KS4gTGVhZGluZyBlZGdlIFRsID0gMC44OTAgeCBUcCAoZXEgMTgpLiBQYXNzYWdlOiB1bml0LXBlYWtcbi8vIGNvbmNlbnRyYXRpb24gQ3VwID0gODU3IHggVHBeLTAuNzYwIHggUSdhXi0wLjA3OSAoVHAgaG91cnMsIGVxIDcpLCBhbmRcbi8vIFRkMTAgPSAyZTYgLyBDdXAgc2Vjb25kcyAoZXEgMTkpID0gbGVhZGluZyBlZGdlIC0+IDEwJS1vZi1wZWFrIHRyYWlsaW5nLlxuZXhwb3J0IGZ1bmN0aW9uIGpvYnNvblZlbG9jaXRpZXMoZGFNMiwgUW0zcywgUWFNM3MsIHNsb3BlKSB7XG4gIGlmICghKGRhTTIgPiAwKSB8fCAhKFFtM3MgPiAwKSB8fCAhKFFhTTNzID4gMCkpIHJldHVybiBudWxsO1xuICBjb25zdCBnID0gOS44O1xuICBjb25zdCBEcCA9IChNYXRoLnBvdyhkYU0yLCAxLjI1KSAqIE1hdGguc3FydChnKSkgLyBRYU0zczsgLy8gRCdhLCBlcSAxMFxuICBjb25zdCBRcCA9IFFtM3MgLyBRYU0zczsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFEnYSwgZXEgMTFcbiAgY29uc3QgcU92ZXJEYSA9IFFtM3MgLyBkYU0yO1xuICBsZXQgdnAsIHZtcDtcbiAgaWYgKHNsb3BlID4gMC4wMDAwMSkge1xuICAgIGNvbnN0IFggPSBNYXRoLnBvdyhEcCwgMC45MTkpICogTWF0aC5wb3coUXAsIC0wLjQ2OSkgKiBNYXRoLnBvdyhzbG9wZSwgMC4xNTkpICogcU92ZXJEYTtcbiAgICB2cCA9IDAuMDk0ICsgMC4wMTQzICogWDsgICAvLyBlcSAxMlxuICAgIHZtcCA9IDAuMjUgKyAwLjAyICogWDsgICAgIC8vIGVxIDEzICg5OSUgZW52ZWxvcGUg4oCUIGZhc3Rlc3QgcHJvYmFibGUpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgWCA9IE1hdGgucG93KERwLCAwLjgyMSkgKiBNYXRoLnBvdyhRcCwgLTAuNDY1KSAqIHFPdmVyRGE7XG4gICAgdnAgPSAwLjAyMCArIDAuMDUxICogWDsgICAgLy8gZXEgMTRcbiAgICB2bXAgPSAwLjIgKyAwLjA5MyAqIFg7ICAgICAvLyBlcSAxNVxuICB9XG4gIHJldHVybiB7IHZwLCB2bXAsIHFQcmltZTogUXAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpvYnNvblBhc3NhZ2VIb3Vycyh0cEhvdXJzLCBxUHJpbWUpIHtcbiAgLy8gZXEgNyArIGVxIDE5OiBkdXJhdGlvbiBmcm9tIGxlYWRpbmcgZWRnZSB0byAxMCUtb2YtcGVhayB0cmFpbGluZyBlZGdlXG4gIGlmICghKHRwSG91cnMgPiAwKSB8fCAhKHFQcmltZSA+IDApKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3VwID0gODU3ICogTWF0aC5wb3codHBIb3VycywgLTAuNzYwKSAqIE1hdGgucG93KHFQcmltZSwgLTAuMDc5KTsgLy8gc14tMVxuICByZXR1cm4gMmU2IC8gY3VwIC8gMzYwMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcgPSB7fSkge1xuICBjb25zdCBjZmcgPSB7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcbiAgY29uc3QgbG9nID0gY2ZnLnZlcmJvc2UgPyAoLi4uYSkgPT4gY29uc29sZS5sb2coLi4uYSkgOiAoKSA9PiB7fTtcbiAgY29uc3QgeyBjb21pZCwgcml2ZXJOYW1lLCByb3dzLCBnZCwgc2l0ZVNldHMsIHJlY2VwdG9yU2V0cyB9ID0gZGF0YTtcbiAgY29uc3QgbiA9IHJvd3MubGVuZ3RoO1xuXG4gIC8vIDUuIGRpc2NoYXJnZTogaW50ZXJwb2xhdGUgYWxvbmcgdHJhY2VcbiAgLy8gbW9udGggZm9yIEVST00gbG9va3VwczogYXNfb2YgbW9udGggaWYgcGlubmVkLCBlbHNlIGN1cnJlbnRcbiAgY29uc3QgZXJvbU1vbnRoID0gZGF0YS5hc09mICYmIGRhdGEuYXNPZiAhPT0gXCJsaXZlXCJcbiAgICA/IHBhcnNlSW50KGRhdGEuYXNPZi5zbGljZSg1LCA3KSwgMTApXG4gICAgOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuXG4gIGxldCBxTWV0aG9kLCBxQ29uZmlkZW5jZTtcbiAgY29uc3QgYW5jaG9yZWQgPSBnZC5zb21lKChnKSA9PiBnLnVwc3RyZWFtX2FuY2hvcik7XG4gIGlmIChnZC5sZW5ndGggPj0gMikge1xuICAgIGNvbnN0IGZRID0gaW50ZXJwQ2xhbXBlZChnZC5tYXAoKGcpID0+IGcudHJhY2VfZGlzdCksIGdkLm1hcCgoZykgPT4gZy5kaXNjaGFyZ2UpKTtcbiAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgci5RX2NmcyA9IE1hdGgubWF4KGZRKHIuY3VtX2Rpc3QpLCAxLjApO1xuICAgIHFNZXRob2QgPSBhbmNob3JlZCA/IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvbit1cHN0cmVhbS1hbmNob3JcIiA6IFwiZ2F1Z2UtaW50ZXJwb2xhdGlvblwiO1xuICAgIHFDb25maWRlbmNlID0gXCJISUdIXCI7XG4gIH0gZWxzZSBpZiAoZ2QubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZyA9IGdkWzBdO1xuICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICByLlFfY2ZzID0gTWF0aC5tYXgoZy5kaXNjaGFyZ2UgKiAoci5kcmFpbmFnZV9hcmVhX3NxbWkgLyBnLmRyYWluYWdlX2FyZWEpLCAxLjApO1xuICAgIH1cbiAgICBxTWV0aG9kID0gYW5jaG9yZWQgPyBcInVwc3RyZWFtLWFuY2hvci1EQS1yYXRpb1wiIDogXCJzaW5nbGUtZ2F1Z2UtREEtcmF0aW9cIjtcbiAgICBxQ29uZmlkZW5jZSA9IFwiTUVESVVNXCI7XG4gICAgbG9nKFwiICAxIGdhdWdlOiBzY2FsaW5nIGJ5IGRyYWluYWdlLWFyZWEgcmF0aW9cIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gRVJPTSBwZXItcmVhY2ggbW9udGhseSBtb2RlbGVkIGZsb3cgKGdhdWdlLWFkanVzdGVkOyBjYXB0dXJlcyBzZWFzb25hbFxuICAgIC8vIHlpZWxkIOKAlCBNb250YW5hIEp1bmUgdnMgU2VwdGVtYmVyIGRpZmZlcnMgfjV4KSBiZWZvcmUgdGhlIGZsYXQgY29uc3RhbnRcbiAgICBjb25zdCBlcm9tT2sgPSByb3dzLmZpbHRlcigocikgPT4gci5xZV9tb250aGx5ICYmIHIucWVfbW9udGhseVtlcm9tTW9udGhdID4gMCkubGVuZ3RoO1xuICAgIGlmIChlcm9tT2sgPj0gcm93cy5sZW5ndGggKiAwLjgpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICAgIGNvbnN0IHFlID0gci5xZV9tb250aGx5ID8gci5xZV9tb250aGx5W2Vyb21Nb250aF0gOiBudWxsO1xuICAgICAgICByLlFfY2ZzID0gTWF0aC5tYXgocWUgPiAwID8gcWUgOiByLmRyYWluYWdlX2FyZWFfc3FtaSAqIDIuMCwgMS4wKTtcbiAgICAgIH1cbiAgICAgIHFNZXRob2QgPSBgZXJvbS1tb250aGx5IChtb250aCAke2Vyb21Nb250aH0pYDsgcUNvbmZpZGVuY2UgPSBcIk1PREVSQVRFIOKAlCBtb2RlbGVkIGZsb3csIG5vIGxpdmUgZ2F1Z2VcIjtcbiAgICAgIGxvZyhgICBOTyBnYXVnZXM6IEVST00gbW9udGhseSBtb2RlbGVkIGZsb3cgKG1vbnRoICR7ZXJvbU1vbnRofSwgJHtlcm9tT2t9LyR7cm93cy5sZW5ndGh9IHJlYWNoZXMpYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByb3dzKSByLlFfY2ZzID0gTWF0aC5tYXgoci5kcmFpbmFnZV9hcmVhX3NxbWkgKiAyLjAsIDEuMCk7XG4gICAgICBxTWV0aG9kID0gXCJkcmFpbmFnZS1hcmVhLWNvbnN0YW50XCI7IHFDb25maWRlbmNlID0gXCJMT1cgQ09ORklERU5DRSDigJQgTk8gR0FVR0VcIjtcbiAgICAgIGxvZyhcIiAgTk8gZ2F1Z2VzLCBubyBFUk9NOiBRIH4gMiBjZnMgcGVyIHNxIG1pIGRyYWluYWdlIOKAlCBMT1cgQ09ORklERU5DRVwiKTtcbiAgICB9XG4gIH1cblxuICAvLyA0LiBNYW5uaW5nJ3MgZGVwdGggcGVyIHBvaW50IChmb3JtdWxhIGZhbGxiYWNrKSwgViA9IFEvQSwgc2FmZXR5IGZhY3RvclxuICBjb25zdCBDRlNfVE9fTTNTID0gTWF0aC5wb3coMy4yODEsIDMpO1xuICBsZXQgb2sgPSAwO1xuICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgIHIuUV9tM3MgPSByLlFfY2ZzIC8gQ0ZTX1RPX00zUztcbiAgICBjb25zdCBkZXB0aEZvcm11bGEgPSBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKHIuZHJhaW5hZ2VfYXJlYV9zcW1pKVsxXTtcbiAgICBjb25zdCBkbSA9IGNhbGN1bGF0ZURlcHRoTWFubmluZyhyLlFfbTNzLCByLndpZHRoX2ZpbmFsLCByLnNsb3BlLCBjZmcubWFubmluZ04pO1xuICAgIGlmIChkbSAhPT0gbnVsbCAmJiBkbSA+IDAuMSAmJiBkbSA8IDIwKSB7IHIuZGVwdGggPSBkbTsgb2srKzsgfVxuICAgIGVsc2Ugci5kZXB0aCA9IGRlcHRoRm9ybXVsYTtcbiAgICByLmFyZWEgPSByLndpZHRoX2ZpbmFsICogci5kZXB0aDtcbiAgICByLnZlbG9jaXR5ID0gKHIuUV9tM3MgLyByLmFyZWEpICogY2ZnLnNhZmV0eUZhY3RvcjtcbiAgfVxuICBsb2coYCAgTWFubmluZydzIGRlcHRoOiAke29rfS8ke259IHBvaW50cyAoJHtNYXRoLnJvdW5kKCgxMDAgKiBvaykgLyBuKX0lKWApO1xuXG4gIC8vIDUuIGltcG91bmRtZW50IHJ1bGU6IGZsb3dsaW5lIHBhc3NlcyB0aHJvdWdoIGEgTGFrZVBvbmQvUmVzZXJ2b2lyIHdhdGVyYm9keVxuICAvLyAobWludXMga25vd24gUkVNT1ZFRCBkYW1zIHdob3NlIHdhdGVyYm9keSBmbGFncyBsaW5nZXIgaW4gTkhEUGx1cylcbiAgY29uc3QgZXhjbHVkZWQgPSBuZXcgU2V0KFsuLi5SRU1PVkVEX0lNUE9VTkRNRU5UX0NPTUlEUywgLi4uKGNmZy5pbXBvdW5kRXhjbHVkZUNvbWlkcyB8fCBbXSldKTtcbiAgbGV0IHN0b3BJZHggPSBudWxsLCBydW5NID0gMC4wO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbXAgPSAocm93c1tpXS53YmFyZWF0eXBlID09PSBcIkxha2VQb25kXCIgfHwgcm93c1tpXS53YmFyZWF0eXBlID09PSBcIlJlc2Vydm9pclwiKSAmJlxuICAgICAgIWV4Y2x1ZGVkLmhhcyhyb3dzW2ldLmNvbWlkKTtcbiAgICByb3dzW2ldLmltcG91bmRlZCA9IGltcDtcbiAgICBpZiAoaW1wKSB7XG4gICAgICBydW5NICs9IHJvd3NbaV0uZGlzdGFuY2U7XG4gICAgICBpZiAocnVuTSA+PSBjZmcuaW1wb3VuZFN0b3BLbSAqIDEwMDApIHsgc3RvcElkeCA9IGk7IGJyZWFrOyB9XG4gICAgfSBlbHNlIHJ1bk0gPSAwLjA7XG4gIH1cbiAgbGV0IGltcG91bmROb3RlID0gbnVsbDtcbiAgbGV0IGRmID0gcm93cztcbiAgaWYgKHN0b3BJZHggIT09IG51bGwpIHtcbiAgICBjb25zdCBuYW1lID0gcm93c1tzdG9wSWR4XS5nbmlzX25hbWUgfHwgXCJpbXBvdW5kbWVudFwiO1xuICAgIGltcG91bmROb3RlID1cbiAgICAgIGBUcmFjZSByZWFjaGVzIGFuIGltcG91bmRlZCByZWFjaCAoJHtuYW1lfSkgYXQgYCArXG4gICAgICBgJHsocm93c1tzdG9wSWR4XS5jdW1fZGlzdCAvIDEwMDApLnRvRml4ZWQoMSl9IGttIOKAlCB0cmF2ZWwgdGltZSBiZXlvbmQgYCArXG4gICAgICBgdGhpcyBwb2ludCBpcyBOT1QgbW9kZWxlZCAocmVzZXJ2b2lyIHRyYW5zaXQpLmA7XG4gICAgZGYgPSByb3dzLnNsaWNlKDAsIHN0b3BJZHggKyAxKTtcbiAgICBsb2coYCAgSU1QT1VORE1FTlQgU1RPUDogJHtpbXBvdW5kTm90ZX1gKTtcbiAgfVxuXG4gIC8vIDYuIHRyYXZlbCB0aW1lLCBjdXRvZmYsIGhvdXJseSBtYXJrZXJzXG4gIGNvbnN0IGpvYnNvbiA9IGNmZy50aW1pbmdNb2RlbCA9PT0gXCJqb2Jzb25cIjtcbiAgY29uc3QgQ0ZTID0gTWF0aC5wb3coMy4yODEsIDMpO1xuICBsZXQgY3VtVCA9IDAuMCwgdFBlYWsgPSAwLjAsIHRGYXN0ID0gMC4wLCBqb2Jzb25EZWdyYWRlZCA9IDA7XG4gIGZvciAoY29uc3QgciBvZiBkZikge1xuICAgIHIuc2VnX3RpbWUgPSByLmRpc3RhbmNlIC8gci52ZWxvY2l0eTtcbiAgICBjdW1UICs9IHIuc2VnX3RpbWU7XG4gICAgci5jdW1fdGltZSA9IGN1bVQgLyAzNjAwOyAvLyBoeWRyYXVsaWMgKHggc2FmZXR5KSDigJQgYWx3YXlzIGNvbXB1dGVkOyBmZWVkcyBsZWdhY3kgbW9kZVxuICAgIGlmIChqb2Jzb24pIHtcbiAgICAgIGNvbnN0IGRhTTIgPSAoci5kcmFpbmFnZV9hcmVhX2ttMiB8fCAwKSAqIDFlNjtcbiAgICAgIGNvbnN0IFFhTTNzID0gci5xZV9tYSA+IDAgPyByLnFlX21hIC8gQ0ZTIDogbnVsbDtcbiAgICAgIGNvbnN0IGp2ID0gUWFNM3MgPyBqb2Jzb25WZWxvY2l0aWVzKGRhTTIsIHIuUV9tM3MsIFFhTTNzLCByLnNsb3BlKSA6IG51bGw7XG4gICAgICBsZXQgdnAsIHZtcCwgcVByaW1lO1xuICAgICAgaWYgKGp2KSB7ICh7IHZwLCB2bXAsIHFQcmltZSB9ID0ganYpOyB9XG4gICAgICBlbHNlIHsgdnAgPSByLnZlbG9jaXR5IC8gY2ZnLnNhZmV0eUZhY3Rvcjsgdm1wID0gdnAgKiAyOyBxUHJpbWUgPSAxOyBqb2Jzb25EZWdyYWRlZCsrOyB9XG4gICAgICB0UGVhayArPSByLmRpc3RhbmNlIC8gdnA7XG4gICAgICB0RmFzdCArPSByLmRpc3RhbmNlIC8gdm1wO1xuICAgICAgci50X3BlYWsgPSB0UGVhayAvIDM2MDA7XG4gICAgICByLnRfbGVhZCA9IDAuODkwICogci50X3BlYWs7ICAgICAgICAgICAgICAvLyBlcSAxOCDigJQgbW9zdCBwcm9iYWJsZSBmaXJzdCBhcnJpdmFsXG4gICAgICByLnRfbGVhZF9taW4gPSAwLjg5MCAqICh0RmFzdCAvIDM2MDApOyAgICAvLyA5OSUgZW52ZWxvcGUg4oCUIGVhcmxpZXN0IGNyZWRpYmxlIGFycml2YWxcbiAgICAgIGNvbnN0IHRkMTAgPSBqb2Jzb25QYXNzYWdlSG91cnMoci50X3BlYWssIHFQcmltZSk7XG4gICAgICByLnRfY2xlYXIgPSB0ZDEwICE9PSBudWxsID8gci50X2xlYWQgKyB0ZDEwIDogbnVsbDsgLy8gMTAlLW9mLXBlYWsgdHJhaWxpbmcgZWRnZVxuICAgIH1cbiAgfVxuICBpZiAoam9ic29uICYmIGpvYnNvbkRlZ3JhZGVkKSBsb2coYCAgSm9ic29uOiAke2pvYnNvbkRlZ3JhZGVkfSBwb2ludHMgbGFja2VkIEVST00gUWEgKGh5ZHJhdWxpYyBmYWxsYmFjaylgKTtcbiAgY29uc3QgdGltZU9mID0gKHIpID0+IChqb2Jzb24gPyByLnRfbGVhZCA6IHIuY3VtX3RpbWUpO1xuICBkZiA9IGRmLmZpbHRlcigocikgPT4gdGltZU9mKHIpIDwgY2ZnLm1heEhvdXJzKTtcbiAgY29uc3QgbWF4Q3VtVGltZSA9IGRmLmxlbmd0aCA/IHRpbWVPZihkZltkZi5sZW5ndGggLSAxXSkgOiAwO1xuICBjb25zdCBuZWFyZXN0Um93ID0gKGZpZWxkLCB0YXJnZXQpID0+IHtcbiAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgaSA9IDA7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBkZi5sZW5ndGg7IGsrKykge1xuICAgICAgY29uc3QgZCA9IE1hdGguYWJzKGRmW2tdW2ZpZWxkXSAtIHRhcmdldCk7XG4gICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgaSA9IGs7IH0gLy8gZmlyc3Qgb2NjdXJyZW5jZSBvZiBtaW4gKHBhbmRhcyBpZHhtaW4pXG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9O1xuICBjb25zdCBob3VybHkgPSBbXTtcbiAgZm9yIChsZXQgaG91ciA9IDE7IGhvdXIgPD0gY2ZnLm1heEhvdXJzOyBob3VyKyspIHtcbiAgICBpZiAobWF4Q3VtVGltZSA8IGhvdXIgJiYgTWF0aC5hYnMobWF4Q3VtVGltZSAtIGhvdXIpID4gMC41KSBicmVhaztcbiAgICBjb25zdCBpID0gbmVhcmVzdFJvdyhqb2Jzb24gPyBcInRfbGVhZFwiIDogXCJjdW1fdGltZVwiLCBob3VyKTtcbiAgICBjb25zdCBoID0ge1xuICAgICAgaG91cixcbiAgICAgIGxhdDogZGZbaV0ubGF0LCBsb246IGRmW2ldLmxvbixcbiAgICAgIGN1bV9kaXN0X2ttOiBkZltpXS5jdW1fZGlzdCAvIDEwMDAsXG4gICAgICB2ZWxvY2l0eV9tcGg6IGRmW2ldLnZlbG9jaXR5ICogMi4yMzY5NCxcbiAgICB9O1xuICAgIGlmIChqb2Jzb24pIHtcbiAgICAgIC8vIGJhbmQgYXQgdGhpcyBob3VyOiBidWxrIChwZWFrKSBwb3NpdGlvbiAuLiBmYXJ0aGVzdCBjcmVkaWJsZSAoOTklIGxlYWRpbmcpXG4gICAgICBjb25zdCBpUGVhayA9IG5lYXJlc3RSb3coXCJ0X3BlYWtcIiwgaG91cik7XG4gICAgICBjb25zdCBpRmFyID0gbmVhcmVzdFJvdyhcInRfbGVhZF9taW5cIiwgaG91cik7XG4gICAgICBoLmJhbmQgPSB7XG4gICAgICAgIHBlYWs6IHsgaTogaVBlYWssIGxhdDogZGZbaVBlYWtdLmxhdCwgbG9uOiBkZltpUGVha10ubG9uLCBjdW1fZGlzdF9rbTogZGZbaVBlYWtdLmN1bV9kaXN0IC8gMTAwMCB9LFxuICAgICAgICBmYXN0ZXN0OiB7IGk6IGlGYXIsIGxhdDogZGZbaUZhcl0ubGF0LCBsb246IGRmW2lGYXJdLmxvbiwgY3VtX2Rpc3Rfa206IGRmW2lGYXJdLmN1bV9kaXN0IC8gMTAwMCB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgaG91cmx5LnB1c2goaCk7XG4gIH1cblxuICAvLyA3LiBzaXRlIEVUQXMgKyByZWNlcHRvciB3YXJuaW5ncyAobmVhcmVzdCB0cmFjZSBwb2ludCB3aXRoaW4gYnVmZmVyKTtcbiAgLy8gZmVhdHVyZXMgd2VyZSBwcmUtZmV0Y2hlZCBpbnRvIGRhdGEuc2l0ZVNldHMvcmVjZXB0b3JTZXRzXG4gIGZ1bmN0aW9uIHByb3hpbWl0eShzZXQpIHtcbiAgICBjb25zdCBmZWF0cyA9IHNldC5mZWF0czsgLy8gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XVxuICAgIGNvbnN0IGJ1ZiA9IHNldC5idWZmZXJfbSA/PyA0MDA7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZm9yIChjb25zdCBmIG9mIGZlYXRzKSB7XG4gICAgICBpZiAoZi5sYXQgPT09IHVuZGVmaW5lZCB8fCBmLmxvbiA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBpID0gMDtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGYubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0oZGZba10ubGF0LCBkZltrXS5sb24sIGYubGF0LCBmLmxvbik7XG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBpID0gazsgfVxuICAgICAgfVxuICAgICAgaWYgKGJlc3REIDw9IGJ1Zikge1xuICAgICAgICBjb25zdCB7IGxhdDogX2EsIGxvbjogX2IsIC4uLnJlc3QgfSA9IGY7XG4gICAgICAgIGNvbnN0IHJvdyA9IHtcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgIGV0YV9ocjogTWF0aC5yb3VuZCh0aW1lT2YoZGZbaV0pICogMTAwKSAvIDEwMCxcbiAgICAgICAgICBkaXN0X2ttOiBNYXRoLnJvdW5kKChkZltpXS5jdW1fZGlzdCAvIDEwMDApICogMTApIC8gMTAsXG4gICAgICAgICAgb2Zmc2V0X206IE1hdGgucm91bmQoYmVzdEQpLFxuICAgICAgICAgIC8vIG1vZGVsZWQgaHlkcmF1bGljcyBhdCB0aGUgc2l0ZSdzIHRyYWNlIHBvaW50IOKAlCBmZWVkcyBib29tIHNpemluZ1xuICAgICAgICAgIHJpdmVyX3dpZHRoX206IE1hdGgucm91bmQoZGZbaV0ud2lkdGhfZmluYWwgKiAxMCkgLyAxMCxcbiAgICAgICAgICB2ZWxvY2l0eV9tczogTWF0aC5yb3VuZChkZltpXS52ZWxvY2l0eSAqIDEwMDApIC8gMTAwMCxcbiAgICAgICAgICBkZXB0aF9tOiBNYXRoLnJvdW5kKGRmW2ldLmRlcHRoICogMTAwKSAvIDEwMCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGpvYnNvbikge1xuICAgICAgICAgIHJvdy5ldGFfZWFybHlfaHIgPSBNYXRoLnJvdW5kKGRmW2ldLnRfbGVhZF9taW4gKiAxMDApIC8gMTAwO1xuICAgICAgICAgIHJvdy5ldGFfcGVha19ociA9IE1hdGgucm91bmQoZGZbaV0udF9wZWFrICogMTAwKSAvIDEwMDtcbiAgICAgICAgICByb3cuY2xlYXJfaHIgPSBkZltpXS50X2NsZWFyICE9PSBudWxsID8gTWF0aC5yb3VuZChkZltpXS50X2NsZWFyICogMTAwKSAvIDEwMCA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgb3V0LnB1c2gocm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0LnNvcnQoKGEsIGIpID0+IGEuZXRhX2hyIC0gYi5ldGFfaHIpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBjb25zdCBzaXRlcyA9IFtdO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2l0ZVNldHMgfHwgW10pIHNpdGVzLnB1c2goLi4ucHJveGltaXR5KHMpKTtcbiAgc2l0ZXMuc29ydCgoYSwgYikgPT4gYS5ldGFfaHIgLSBiLmV0YV9ocik7XG4gIGNvbnN0IHdhcm5pbmdzID0gaW1wb3VuZE5vdGUgPyBbaW1wb3VuZE5vdGVdIDogW107XG4gIGlmIChxQ29uZmlkZW5jZSAhPT0gXCJISUdIXCIpIHdhcm5pbmdzLnVuc2hpZnQoYEZsb3cgZXN0aW1hdGU6ICR7cUNvbmZpZGVuY2V9ICgke3FNZXRob2R9KWApO1xuICBmb3IgKGNvbnN0IHMgb2YgcmVjZXB0b3JTZXRzIHx8IFtdKSB7XG4gICAgZm9yIChjb25zdCByIG9mIHByb3hpbWl0eShzKSkge1xuICAgICAgd2FybmluZ3MucHVzaChcbiAgICAgICAgYFJlY2VwdG9yICcke3IubmFtZX0nIH4ke3Iub2Zmc2V0X219IG0gb2ZmIHRyYWNlIGF0IGhyICR7ci5ldGFfaHJ9ICgke3IuZGlzdF9rbX0ga20gZG93bnN0cmVhbSlgLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkaXN0YW5jZUttID0gZGYubGVuZ3RoID8gZGZbZGYubGVuZ3RoIC0gMV0uY3VtX2Rpc3QgLyAxMDAwIDogMDtcbiAgY29uc3QgYXZnVmVsID0gZGYubGVuZ3RoID8gZGYucmVkdWNlKChzLCByKSA9PiBzICsgci52ZWxvY2l0eSwgMCkgLyBkZi5sZW5ndGggOiAwO1xuICBjb25zdCBnbG93TWF0Y2hlZCA9IHJvd3MuZmlsdGVyKChyKSA9PiByLndpZHRoX20gPiAwKS5sZW5ndGg7XG4gIGNvbnN0IGJyYWlkZWROID0gcm93cy5maWx0ZXIoKHIpID0+IHIuYnJhaWRlZCkubGVuZ3RoO1xuXG4gIC8vIHByb3ZlbmFuY2Ug4oCUIGVub3VnaCB0byByZWNvbnN0cnVjdCBhbnkgb3V0cHV0IGluIGFuIGFmdGVyLWFjdGlvbiByZXZpZXdcbiAgY29uc3QgcnVuUmVjb3JkID0ge1xuICAgIGVuZ2luZV92ZXJzaW9uOiBFTkdJTkVfVkVSU0lPTixcbiAgICBnZW5lcmF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBkYXRhX2ZldGNoZWRfYXQ6IGRhdGEuZmV0Y2hlZEF0IHx8IG51bGwsXG4gICAgc3BpbGxfcG9pbnQ6IHsgbGF0OiBkYXRhLmxhdCwgbG9uOiBkYXRhLmxvbiB9LFxuICAgIHNuYXA6IHsgY29taWQsIHJpdmVyOiByaXZlck5hbWUsIHNuYXBwZWRfZnJvbV9tOiBkYXRhLnNuYXBEaXN0TSAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZChkYXRhLnNuYXBEaXN0TSB8fCAwKSA6IG51bGwgfSxcbiAgICB0aW1pbmdfbW9kZWw6IGNmZy50aW1pbmdNb2RlbCxcbiAgICBzYWZldHlfZmFjdG9yOiBjZmcuc2FmZXR5RmFjdG9yLFxuICAgIG1heF9ob3VyczogY2ZnLm1heEhvdXJzLFxuICAgIGFzX29mOiBkYXRhLmFzT2YgfHwgXCJsaXZlXCIsXG4gICAgcV9tZXRob2Q6IHFNZXRob2QsXG4gICAgcV9jb25maWRlbmNlOiBxQ29uZmlkZW5jZSxcbiAgICBnYXVnZXM6IGdkLm1hcCgoZykgPT4gKHtcbiAgICAgIHN0YXRpb25faWQ6IGcuc3RhdGlvbl9pZCwgbmFtZTogZy5uYW1lLCBkaXNjaGFyZ2VfY2ZzOiBnLmRpc2NoYXJnZSwgdHJhY2Vfa206IE1hdGgucm91bmQoZy50cmFjZV9kaXN0IC8gMTAwKSAvIDEwLFxuICAgICAgLi4uKGcudXBzdHJlYW1fYW5jaG9yID8ge1xuICAgICAgICB1cHN0cmVhbV9hbmNob3I6IHRydWUsXG4gICAgICAgIGFuY2hvcl9nYXVnZV9xX2NmczogZy5hbmNob3JfZ2F1Z2VfcV9jZnMsXG4gICAgICAgIGFuY2hvcl9nYXVnZV9kYV9zcW1pOiBnLmFuY2hvcl9nYXVnZV9kYV9zcW1pLFxuICAgICAgICBhbmNob3JfdXBzdHJlYW1fa206IGcuYW5jaG9yX3Vwc3RyZWFtX20gIT09IG51bGwgPyBNYXRoLnJvdW5kKGcuYW5jaG9yX3Vwc3RyZWFtX20gLyAxMDApIC8gMTAgOiBudWxsLFxuICAgICAgfSA6IHt9KSxcbiAgICB9KSksXG4gICAgZXJvbV9tb250aDogcU1ldGhvZC5zdGFydHNXaXRoKFwiZXJvbVwiKSA/IGVyb21Nb250aCA6IG51bGwsXG4gICAgd2lkdGhfc291cmNlOiB7IGdsb3dfbWF0Y2hlZF9wb2ludHM6IGdsb3dNYXRjaGVkLCB0b3RhbF9wb2ludHM6IHJvd3MubGVuZ3RoLCBicmFpZGVkX3BvaW50c19mb3JtdWxhX3dpZHRoOiBicmFpZGVkTiB9LFxuICAgIGpvYnNvbl9kZWdyYWRlZF9wb2ludHM6IGpvYnNvbiA/IGpvYnNvbkRlZ3JhZGVkIDogbnVsbCxcbiAgICBpbXBvdW5kX2V4Y2x1c2lvbnNfYXBwbGllZDogWy4uLmV4Y2x1ZGVkXS5maWx0ZXIoKGMpID0+IHJvd3Muc29tZSgocikgPT4gci5jb21pZCA9PT0gYykpLFxuICAgIGltcG91bmRfc3RvcF9rbTogc3RvcElkeCAhPT0gbnVsbCA/IE1hdGgucm91bmQocm93c1tzdG9wSWR4XS5jdW1fZGlzdCAvIDEwMCkgLyAxMCA6IG51bGwsXG4gIH07XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJpdmVyX25hbWU6IHJpdmVyTmFtZSxcbiAgICBjb21pZCxcbiAgICBhc19vZjogZGF0YS5hc09mIHx8IFwibGl2ZVwiLFxuICAgIHNhZmV0eV9mYWN0b3I6IGNmZy5zYWZldHlGYWN0b3IsXG4gICAgdGltaW5nX21vZGVsOiBjZmcudGltaW5nTW9kZWwsXG4gICAgcV9tZXRob2Q6IHFNZXRob2QsXG4gICAgcV9jb25maWRlbmNlOiBxQ29uZmlkZW5jZSxcbiAgICBnYXVnZXNfdXNlZDogZ2QubWFwKChnKSA9PiAoe1xuICAgICAgc3RhdGlvbl9pZDogZy5zdGF0aW9uX2lkLCBuYW1lOiBnLm5hbWUsXG4gICAgICBkaXNjaGFyZ2U6IGcuZGlzY2hhcmdlLCB0cmFjZV9kaXN0OiBnLnRyYWNlX2Rpc3QsXG4gICAgfSkpLFxuICAgIGRpc3RhbmNlX2ttXzI0aDogZGlzdGFuY2VLbSxcbiAgICBhdmdfdmVsb2NpdHlfbXBoOiBhdmdWZWwgKiAyLjIzNjk0LFxuICAgIGltcG91bmRfc3RvcDogaW1wb3VuZE5vdGUsXG4gICAgaG91cmx5LFxuICAgIHNpdGVzLFxuICAgIHdhcm5pbmdzLFxuICAgIHJ1blJlY29yZCxcbiAgICB0cmFjZTogZGYsIC8vIGZ1bGwgcm93IGFycmF5IGZvciBpbnNwZWN0aW9uL2dlb2pzb24gZXhwb3J0XG4gIH07XG4gIGxvZyhcbiAgICBgICBSRVNVTFQ6ICR7ZGlzdGFuY2VLbS50b0ZpeGVkKDEpfSBrbSBpbiA8PSAke2NmZy5tYXhIb3Vyc30gaCwgYCArXG4gICAgYGF2ZyAke3Jlc3VsdC5hdmdfdmVsb2NpdHlfbXBoLnRvRml4ZWQoMil9IG1waCwgJHtzaXRlcy5sZW5ndGh9IHNpdGVzLCAke3dhcm5pbmdzLmxlbmd0aH0gd2FybmluZ3NgLFxuICApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuVHJhY2UobGF0LCBsb24sIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnKTtcbiAgcmV0dXJuIGNvbXB1dGVUcmFjZShkYXRhLCBjb25maWcpO1xufVxuXG4vKipcbiAqIEJvb20gc2l6aW5nIGZyb20gbW9kZWxlZCBoeWRyYXVsaWNzIChwbGFubmluZy1sZXZlbCwgZm9yIEdSUHMgdGhhdCBjYXJyeSBub1xuICogZXF1aXBtZW50IHF1YW50aXRpZXMpLiBTdGFuZGFyZCBjb250YWlubWVudCBydWxlOiBvaWwgZW50cmFpbnMgdW5kZXIgYSBib29tXG4gKiB3aGVuIHRoZSBmbG93IGNvbXBvbmVudCBub3JtYWwgdG8gaXQgZXhjZWVkcyB+MC4zNSBtL3MgKDAuNyBrdCksIHNvIGluXG4gKiBmYXN0ZXIgd2F0ZXIgdGhlIGJvb20gaXMgYW5nbGVkIHdpdGggc2luKHRoZXRhKSA9IGVudHJhaW5tZW50L3ZlbG9jaXR5IGFuZFxuICogdGhlIHJlcXVpcmVkIGxlbmd0aCBncm93cyB0byB3aWR0aC9zaW4odGhldGEpLiBBbmNob3Igc2V0cyBmcm9tIGxlbmd0aC5cbiAqIEFuZ2xlcyBiZWxvdyB+MTUgZGVnICh2ID4gfjEuMzUgbS9zKSBhcmUgZmxhZ2dlZDogdXNlIGNhc2NhZGVkIHNob3J0ZXIgYm9vbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZUJvb21OZWVkcyh3aWR0aE0sIHZlbG9jaXR5TXMsIG9wdHMgPSB7fSkge1xuICBjb25zdCBlbnRyYWluID0gb3B0cy5lbnRyYWlubWVudE1zID8/IDAuMzU7XG4gIGNvbnN0IHJlc2VydmVQY3QgPSBvcHRzLnJlc2VydmVQY3QgPz8gMjA7XG4gIGNvbnN0IGFuY2hvclNwYWNpbmdGdCA9IG9wdHMuYW5jaG9yU3BhY2luZ0Z0ID8/IDEwMDtcbiAgaWYgKCEod2lkdGhNID4gMCkgfHwgISh2ZWxvY2l0eU1zID49IDApKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc2luVGhldGEgPSB2ZWxvY2l0eU1zID4gZW50cmFpbiA/IGVudHJhaW4gLyB2ZWxvY2l0eU1zIDogMTtcbiAgY29uc3QgYW5nbGVEZWcgPSAoTWF0aC5hc2luKHNpblRoZXRhKSAqIDE4MCkgLyBNYXRoLlBJO1xuICBjb25zdCBsZW5ndGhGdCA9ICh3aWR0aE0gLyBzaW5UaGV0YSkgKiAzLjI4MDg0ICogKDEgKyByZXNlcnZlUGN0IC8gMTAwKTtcbiAgY29uc3QgYm9vbUZ0ID0gTWF0aC5jZWlsKGxlbmd0aEZ0IC8gNTApICogNTA7IC8vIHJvdW5kIHVwIHRvIDUwLWZ0IHN0aWNrc1xuICBjb25zdCBhbmNob3JzID0gTWF0aC5tYXgoMiwgTWF0aC5jZWlsKGJvb21GdCAvIGFuY2hvclNwYWNpbmdGdCkgKyAxKTtcbiAgcmV0dXJuIHtcbiAgICBib29tX2Z0OiBib29tRnQsXG4gICAgYm9vbV9hbmdsZV9kZWc6IE1hdGgucm91bmQoYW5nbGVEZWcpLFxuICAgIGFuY2hvcnMsXG4gICAgZGVmbGVjdGlvbjogdmVsb2NpdHlNcyA+IGVudHJhaW4sXG4gICAgY2FzY2FkZV9hZHZpc2VkOiBhbmdsZURlZyA8IDE1LCAvLyB0b28gZmFzdCBmb3IgYSBzaW5nbGUgc3dlZXAg4oCUIGNhc2NhZGUgYm9vbXNcbiAgfTtcbn1cblxuLyoqIFRyYWNlIGxpbmUgKyBob3VybHkgbWFya2VycyBhcyBhIEdlb0pTT04gRmVhdHVyZUNvbGxlY3Rpb24gKHdpZGdldCBwcmV2aWV3KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0dlb0pzb24ocmVzdWx0KSB7XG4gIGNvbnN0IGRmID0gcmVzdWx0LnRyYWNlO1xuICBjb25zdCBmYyA9IHtcbiAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBraW5kOiBcInRyYWNlXCIsIHJpdmVyOiByZXN1bHQucml2ZXJfbmFtZSxcbiAgICAgICAgICBkaXN0YW5jZV9rbV8yNGg6IHJlc3VsdC5kaXN0YW5jZV9rbV8yNGgsXG4gICAgICAgIH0sXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgdHlwZTogXCJMaW5lU3RyaW5nXCIsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IGRmLm1hcCgocikgPT4gW1xuICAgICAgICAgICAgTWF0aC5yb3VuZChyLmxvbiAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQoci5sYXQgKiAxZTYpIC8gMWU2LFxuICAgICAgICAgIF0pLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBmb3IgKGNvbnN0IGggb2YgcmVzdWx0LmhvdXJseSkge1xuICAgIGZjLmZlYXR1cmVzLnB1c2goe1xuICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7IGtpbmQ6IFwiaG91clwiLCBob3VyOiBoLmhvdXIsIGN1bV9kaXN0X2ttOiBoLmN1bV9kaXN0X2ttLCB2ZWxvY2l0eV9tcGg6IGgudmVsb2NpdHlfbXBoIH0sXG4gICAgICBnZW9tZXRyeToge1xuICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbTWF0aC5yb3VuZChoLmxvbiAqIDFlNikgLyAxZTYsIE1hdGgucm91bmQoaC5sYXQgKiAxZTYpIC8gMWU2XSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZjO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvaW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9seWxpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKlxyXG4gKiBTcGlsbCBUcmFqZWN0b3J5IHdpZGdldCDigJQgcnVudGltZS5cclxuICpcclxuICogQ2xpY2sgXCJTZXQgc3BpbGwgcG9pbnRcIiDihpIgY2xpY2sgdGhlIG1hcCDihpIgdGhlIGdvbGRlbi10ZXN0ZWQgdHJhY2UgZW5naW5lXHJcbiAqICh0cmFjZS1lbmdpbmUudHMsIHBhcml0eS12ZXJpZmllZCB2cyB0aGUgUHl0aG9uIG9yYWNsZSkgZHJhd3MgYW4gZXBoZW1lcmFsXHJcbiAqIHRpbWUtY29sb3JlZCBwbHVtZSBvbiBhIGNsaWVudC1zaWRlIEdyYXBoaWNzTGF5ZXIgd2l0aCBob3VybHkgbWFya2VycyxcclxuICogcGx1cyBhbiBFVEEtc29ydGVkIHN0cmF0ZWd5LXNpdGUgbGlzdCBhbmQgcmVjZXB0b3Igd2FybmluZ3MuXHJcbiAqIE5vdGhpbmcgaXMgcGVyc2lzdGVkIOKAlCBDbGVhciAob3Igd2lkZ2V0IHVubW91bnQpIHJlbW92ZXMgZXZlcnl0aGluZy5cclxuICovXHJcbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJ1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJ1xyXG5pbXBvcnQgUG9seWxpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2x5bGluZSdcclxuaW1wb3J0IFBvaW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9pbnQnXHJcbmltcG9ydCB7IGdlb2Rlc2ljTGVuZ3RoIH0gZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSdcclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZywgU2l0ZUxheWVyQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBmZXRjaFRyYWNlRGF0YSwgY29tcHV0ZVRyYWNlLCBlc3RpbWF0ZUJvb21OZWVkcyB9IGZyb20gJy4uL3RyYWNlLWVuZ2luZSdcclxuXHJcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9ID0gUmVhY3RcclxuXHJcbi8vIEVUQSBjb2xvciBiYW5kczogPDMgaHIgLyAz4oCTMTIgaHIgLyAxMuKAkzI0IGhyXHJcbmNvbnN0IEJBTkRfQ09MT1JTOiBBcnJheTxbbnVtYmVyLCBzdHJpbmddPiA9IFtcclxuICBbMywgJyNkNzE5MWMnXSxcclxuICBbMTIsICcjZmRhZTYxJ10sXHJcbiAgWzI0LCAnIzJjN2JiNiddLFxyXG5dXHJcbmNvbnN0IGJhbmRDb2xvciA9IChocjogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICBmb3IgKGNvbnN0IFtsaW0sIGNdIG9mIEJBTkRfQ09MT1JTKSBpZiAoaHIgPCBsaW0pIHJldHVybiBjXHJcbiAgcmV0dXJuICcjMmM3YmI2J1xyXG59XHJcbmNvbnN0IGhleFRvUmdiID0gKGhleDogc3RyaW5nKTogbnVtYmVyW10gPT4gW1xyXG4gIHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpLCBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSwgcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNiksXHJcbl1cclxuXHJcbmludGVyZmFjZSBTaXRlUm93IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBldGFfaHI6IG51bWJlclxyXG4gIGRpc3Rfa206IG51bWJlclxyXG4gIG9mZnNldF9tOiBudW1iZXJcclxuICByaXZlcl93aWR0aF9tPzogbnVtYmVyXHJcbiAgdmVsb2NpdHlfbXM/OiBudW1iZXJcclxuICBib29tPzogeyBib29tX2Z0OiBudW1iZXIsIGFuY2hvcnM6IG51bWJlciwgYm9vbV9hbmdsZV9kZWc/OiBudW1iZXIsIGNhc2NhZGVfYWR2aXNlZD86IGJvb2xlYW4sIHNvdXJjZTogJ2RyYXduJyB8ICdlc3QnIH1cclxuICBbazogc3RyaW5nXTogYW55XHJcbn1cclxuXHJcbmNvbnN0IG5vcm1HdWlkID0gKHY6IGFueSk6IHN0cmluZyA9PiBTdHJpbmcodiB8fCAnJykucmVwbGFjZSgvW3t9XS9nLCAnJykudG9Mb3dlckNhc2UoKVxyXG5cclxuLyoqIFN1bSBnZW9kZXNpYyBmZWV0IG9mIGRyYXduIGJvb20gbGluZXMgcGVyIHNpdGUga2V5IChlLmcuIFNuYWtlIEJvb21fTGluZXMpLiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERyYXduQm9vbShjZmc6IHsgdXJsOiBzdHJpbmcsIHNpdGVLZXlGaWVsZDogc3RyaW5nLCB3aGVyZT86IHN0cmluZyB9KTogUHJvbWlzZTxNYXA8c3RyaW5nLCBudW1iZXI+PiB7XHJcbiAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBjZmcudXJsIH0pXHJcbiAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcclxuICBxLndoZXJlID0gY2ZnLndoZXJlIHx8ICcxPTEnXHJcbiAgcS5vdXRGaWVsZHMgPSBbY2ZnLnNpdGVLZXlGaWVsZF1cclxuICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gIHEub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9IGFzIGFueVxyXG4gIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxyXG4gIGNvbnN0IG91dCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcclxuICBmb3IgKGNvbnN0IGYgb2YgZnMuZmVhdHVyZXMpIHtcclxuICAgIGNvbnN0IGtleSA9IG5vcm1HdWlkKGYuYXR0cmlidXRlc1tjZmcuc2l0ZUtleUZpZWxkXSlcclxuICAgIGlmICgha2V5IHx8ICFmLmdlb21ldHJ5KSBjb250aW51ZVxyXG4gICAgY29uc3QgZnQgPSBnZW9kZXNpY0xlbmd0aChmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZSwgJ2ZlZXQnKVxyXG4gICAgaWYgKGZ0ID4gMCkgb3V0LnNldChrZXksIChvdXQuZ2V0KGtleSkgfHwgMCkgKyBmdClcclxuICB9XHJcbiAgcmV0dXJuIG91dFxyXG59XHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIGNvbnN0IFtqbXYsIHNldEptdl0gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4obnVsbClcclxuICBjb25zdCBbYXJtaW5nLCBzZXRBcm1pbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3J1bm5pbmcsIHNldFJ1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdDbGljayBcIlNldCBzcGlsbCBwb2ludFwiLCB0aGVuIGNsaWNrIHRoZSByaXZlci4nKVxyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXHJcbiAgY29uc3QgW3NhZmV0eSwgc2V0U2FmZXR5XSA9IHVzZVN0YXRlPG51bWJlcj4ocHJvcHMuY29uZmlnLnNhZmV0eUZhY3RvciA/PyAxLjUpXHJcbiAgY29uc3QgW2RpYWcsIHNldERpYWddID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBsYXllclJlZiA9IHVzZVJlZjxfX2VzcmkuR3JhcGhpY3NMYXllcj4obnVsbClcclxuICBjb25zdCBjbGlja0hhbmRsZVJlZiA9IHVzZVJlZjxfX2VzcmkuSGFuZGxlPihudWxsKVxyXG4gIC8vIGNhY2hlZCBoeWRyb2xvZ3kgZm9yIHRoZSBjdXJyZW50IHNwaWxsIHBvaW50IOKAlCBzYWZldHktZmFjdG9yIGNoYW5nZXNcclxuICAvLyByZWNvbXB1dGUgZnJvbSB0aGlzIGluc3RhbnRseSBpbnN0ZWFkIG9mIHJlLWZldGNoaW5nIE5MREkvTldJU1xyXG4gIGNvbnN0IGNhY2hlUmVmID0gdXNlUmVmPHsgbGF0OiBudW1iZXIsIGxvbjogbnVtYmVyLCBkYXRhOiBhbnksIGRyYXduOiBNYXA8c3RyaW5nLCBudW1iZXI+LCBmZXRjaE5vdGVzOiBzdHJpbmdbXSB9IHwgbnVsbD4obnVsbClcclxuXHJcbiAgLy8gLS0tLSBJQ1AgbGlzdCBzeW5jIChTbmFrZSBjbG9uZSBvbmx5KTogdGludCB0aGUgYXBwJ3Mgc2l0ZS1saXN0IGNhcmRzIGJ5IEVUQVxyXG4gIC8vIGJhbmQgc28gdGhlIGxlZnQgcGFuZWwgbWlycm9ycyB0aGUgcGx1bWUgY29sb3JzLiBDYXJkIG1hdGNoaW5nIGlzIGJ5IHRoZSB2YWx1ZVxyXG4gIC8vIG9mIGNvbmZpZy5saXN0U3luY1NpdGVDb2RlRmllbGQgKG11c3QgYWxzbyBiZSBpbiB0aGUgc2l0ZSBsYXllcidzIGV4dHJhRmllbGRzKTtcclxuICAvLyB0aGUgZmllbGQncyB2YWx1ZSBtdXN0IGFwcGVhciB2ZXJiYXRpbSBpbiB0aGUgY2FyZCB0ZXh0IChzaXRlX2NvZGUgZG9lcykuXHJcbiAgY29uc3QgbGlzdFN5bmNGaWVsZDogc3RyaW5nID0gKHByb3BzLmNvbmZpZyBhcyBhbnkpLmxpc3RTeW5jU2l0ZUNvZGVGaWVsZCB8fCAnJ1xyXG4gIGNvbnN0IGxpc3RPYnNSZWYgPSB1c2VSZWY8TXV0YXRpb25PYnNlcnZlciB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgbGlzdFJvd3NSZWYgPSB1c2VSZWY8U2l0ZVJvd1tdPihbXSlcclxuICBjb25zdCBwYWludFN0YXRzUmVmID0gdXNlUmVmKCcnKVxyXG4gIGNvbnN0IFtwYWludFN0YXRzLCBzZXRQYWludFN0YXRzXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBwYWludExpc3RDYXJkcyA9ICgpID0+IHtcclxuICAgIGlmICghbGlzdFN5bmNGaWVsZCkgcmV0dXJuXHJcbiAgICBjb25zdCBtYXJrczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT4gPSBsaXN0Um93c1JlZi5jdXJyZW50XHJcbiAgICAgIC5maWx0ZXIoKHMpID0+IHNbbGlzdFN5bmNGaWVsZF0gIT0gbnVsbCAmJiBzLmV0YV9ociAhPSBudWxsKVxyXG4gICAgICAubWFwKChzKSA9PiBbU3RyaW5nKHNbbGlzdFN5bmNGaWVsZF0pLnRyaW0oKSwgYmFuZENvbG9yKHMuZXRhX2hyKV0pXHJcbiAgICAvLyB0aGUgY2FyZCBjbGFzcyBpcyBidWlsdCBkeW5hbWljYWxseSAobGlzdC1jYXJkLXZpZXdlciAvIC1lZGl0b3IgLyAtY29udGVudCk6XHJcbiAgICAvLyBtYXRjaCBhbnkgbGlzdC1jYXJkKiBlbGVtZW50IGJ1dCBwYWludCBvbmx5IHRoZSBPVVRFUk1PU1Qgb25lIHBlciBjYXJkXHJcbiAgICBjb25zdCBlbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbY2xhc3MqPVwibGlzdC1jYXJkXCJdJykpXHJcbiAgICAgIC5maWx0ZXIoKGVsKSA9PiAhZWwucGFyZW50RWxlbWVudD8uY2xvc2VzdCgnW2NsYXNzKj1cImxpc3QtY2FyZFwiXScpKVxyXG4gICAgbGV0IHBhaW50ZWQgPSAwXHJcbiAgICBlbHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgY29uc3QgdHh0ID0gZWwudGV4dENvbnRlbnQgfHwgJydcclxuICAgICAgY29uc3QgaGl0ID0gbWFya3MuZmluZCgoW2NvZGVdKSA9PiBjb2RlLmxlbmd0aCA+IDAgJiYgdHh0LmluZGV4T2YoY29kZSkgPj0gMClcclxuICAgICAgaWYgKGhpdCkge1xyXG4gICAgICAgIHBhaW50ZWQrK1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlckxlZnQgPSAnNHB4IHNvbGlkICcgKyBoaXRbMV1cclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kID0gaGl0WzFdICsgJzI2J1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlckxlZnQgPSAnJ1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmQgPSAnJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3Qgc3RhdHMgPSBtYXJrcy5sZW5ndGggPT09IDBcclxuICAgICAgPyAnJ1xyXG4gICAgICA6IGAke3BhaW50ZWR9IG9mICR7ZWxzLmxlbmd0aH0gdmlzaWJsZSBjYXJkcyBtYXJrZWQgwrcgJHttYXJrcy5sZW5ndGh9IHNpdGVzIGluIHBhdGhgXHJcbiAgICBpZiAocGFpbnRTdGF0c1JlZi5jdXJyZW50ICE9PSBzdGF0cykge1xyXG4gICAgICBwYWludFN0YXRzUmVmLmN1cnJlbnQgPSBzdGF0c1xyXG4gICAgICBzZXRQYWludFN0YXRzKHN0YXRzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJMaXN0U3luYyA9ICgpID0+IHtcclxuICAgIGlmIChsaXN0T2JzUmVmLmN1cnJlbnQpIHsgbGlzdE9ic1JlZi5jdXJyZW50LmRpc2Nvbm5lY3QoKTsgbGlzdE9ic1JlZi5jdXJyZW50ID0gbnVsbCB9XHJcbiAgICBsaXN0Um93c1JlZi5jdXJyZW50ID0gW11cclxuICAgIHBhaW50U3RhdHNSZWYuY3VycmVudCA9ICcnXHJcbiAgICBzZXRQYWludFN0YXRzKCcnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ1tjbGFzcyo9XCJsaXN0LWNhcmRcIl0nKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5zdHlsZS5ib3JkZXJMZWZ0ID0gJydcclxuICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZCA9ICcnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJtTGlzdFN5bmMgPSAocm93czogU2l0ZVJvd1tdKSA9PiB7XHJcbiAgICBpZiAoIWxpc3RTeW5jRmllbGQpIHJldHVyblxyXG4gICAgbGlzdFJvd3NSZWYuY3VycmVudCA9IHJvd3MgfHwgW11cclxuICAgIHBhaW50TGlzdENhcmRzKClcclxuICAgIGlmICghbGlzdE9ic1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIC8vIHJlLXBhaW50IHdoZW4gdGhlIGxpc3QgcmUtcmVuZGVycyAoc2Nyb2xsL2ZpbHRlci9zZWFyY2gpOyBjaGlsZExpc3Qtb25seVxyXG4gICAgICAvLyBvYnNlcnZhdGlvbiBzbyBvdXIgb3duIHN0eWxlIHdyaXRlcyBjYW5ub3QgcmUtdHJpZ2dlciBpdFxyXG4gICAgICBsZXQgcGVuZGluZyA9IGZhbHNlXHJcbiAgICAgIGNvbnN0IG9icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICBpZiAocGVuZGluZykgcmV0dXJuXHJcbiAgICAgICAgcGVuZGluZyA9IHRydWVcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyBwZW5kaW5nID0gZmFsc2U7IHBhaW50TGlzdENhcmRzKCkgfSlcclxuICAgICAgfSlcclxuICAgICAgb2JzLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcclxuICAgICAgbGlzdE9ic1JlZi5jdXJyZW50ID0gb2JzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBvbmUgZ3JhcGhpY3MgbGF5ZXIgcGVyIHdpZGdldCBsaWZldGltZTsgcmVtb3ZlZCBvbiB1bm1vdW50IChlcGhlbWVyYWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChjbGlja0hhbmRsZVJlZi5jdXJyZW50KSBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpXHJcbiAgICAgIGlmIChsYXllclJlZi5jdXJyZW50ICYmIGptdikgam12LnZpZXcubWFwLnJlbW92ZShsYXllclJlZi5jdXJyZW50KVxyXG4gICAgICBjbGVhckxpc3RTeW5jKClcclxuICAgICAgaWYgKG1heGVkUmVmLmN1cnJlbnQpIHNldE1hcE1heGltaXplZChmYWxzZSlcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbam12XSlcclxuXHJcbiAgY29uc3QgZW5zdXJlTGF5ZXIgPSAodmlldzogX19lc3JpLk1hcFZpZXcpOiBfX2VzcmkuR3JhcGhpY3NMYXllciA9PiB7XHJcbiAgICBpZiAoIWxheWVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgbGF5ZXJSZWYuY3VycmVudCA9IG5ldyBHcmFwaGljc0xheWVyKHsgdGl0bGU6ICdTcGlsbCB0cmFqZWN0b3J5IChlcGhlbWVyYWwpJywgbGlzdE1vZGU6ICdoaWRlJyB9KVxyXG4gICAgICB2aWV3Lm1hcC5hZGQobGF5ZXJSZWYuY3VycmVudClcclxuICAgIH1cclxuICAgIHJldHVybiBsYXllclJlZi5jdXJyZW50XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIHByb3ZpZGVyczogd3JhcCBjb25maWd1cmVkIGxheWVycyBmb3IgdGhlIGVuZ2luZSAtLS0tXHJcbiAgLy8gRmFpbHVyZXMgYXJlIHJlcG9ydGVkIHRvIHRoZSBkaWFnbm9zdGljcyBsaXN0IGluc3RlYWQgb2Yga2lsbGluZyB0aGUgdHJhY2UuXHJcbiAgY29uc3QgbWFrZVNpdGVQcm92aWRlciA9IChsYzogU2l0ZUxheWVyQ29uZmlnLCBkZWZhdWx0QnVmZmVyOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcsIG5vdGVzOiBzdHJpbmdbXSkgPT4gKHtcclxuICAgIGJ1ZmZlcl9tOiBsYy5idWZmZXJNID8/IGRlZmF1bHRCdWZmZXIsXHJcbiAgICBmZXRjaDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZsID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogbGMudXJsIH0pXHJcbiAgICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICBxLndoZXJlID0gbGMud2hlcmUgfHwgJzE9MSdcclxuICAgICAgICBxLm91dEZpZWxkcyA9IFtsYy5uYW1lRmllbGQsIC4uLihsYy5leHRyYUZpZWxkcyB8fCBbXSldXHJcbiAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgICBxLm91dFNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfSBhcyBhbnlcclxuICAgICAgICBjb25zdCBmcyA9IGF3YWl0IGZsLnF1ZXJ5RmVhdHVyZXMocSlcclxuICAgICAgICBjb25zdCByb3dzID0gZnMuZmVhdHVyZXNcclxuICAgICAgICAgIC5maWx0ZXIoKGYpID0+IGYuZ2VvbWV0cnkgJiYgZi5nZW9tZXRyeS50eXBlID09PSAncG9pbnQnKVxyXG4gICAgICAgICAgLm1hcCgoZikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnID0gZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcclxuICAgICAgICAgICAgY29uc3Qgcm93OiBhbnkgPSB7IG5hbWU6IGYuYXR0cmlidXRlc1tsYy5uYW1lRmllbGRdLCBsYXQ6IGcueSwgbG9uOiBnLnggfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVmIG9mIGxjLmV4dHJhRmllbGRzIHx8IFtdKSByb3dbZWZdID0gZi5hdHRyaWJ1dGVzW2VmXVxyXG4gICAgICAgICAgICByZXR1cm4gcm93XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIG5vdGVzLnB1c2goYCR7bGFiZWx9OiAke3Jvd3MubGVuZ3RofSBwb2ludCBmZWF0dXJlcyBsb2FkZWQgKGJ1ZmZlciAke2xjLmJ1ZmZlck0gPz8gZGVmYXVsdEJ1ZmZlcn0gbSlgKVxyXG4gICAgICAgIHJldHVybiByb3dzXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBub3Rlcy5wdXNoKGAke2xhYmVsfSBGQUlMRUQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDEwMCl9YClcclxuICAgICAgICByZXR1cm4gW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KVxyXG5cclxuICBjb25zdCBtYWtlV2lkdGhQcm92aWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdsID0gcHJvcHMuY29uZmlnLndpZHRoTGF5ZXJcclxuICAgIGlmICghd2wgfHwgIXdsLnVybCkgcmV0dXJuIG51bGxcclxuICAgIGNvbnN0IGZsID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogd2wudXJsIH0pXHJcbiAgICByZXR1cm4gYXN5bmMgKGVudjogeyB4bWluOiBudW1iZXIsIHltaW46IG51bWJlciwgeG1heDogbnVtYmVyLCB5bWF4OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKVxyXG4gICAgICBxLndoZXJlID0gd2wud2hlcmUgfHwgJzE9MSdcclxuICAgICAgcS5nZW9tZXRyeSA9IHsgdHlwZTogJ2V4dGVudCcsIC4uLmVudiwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSBhcyBhbnlcclxuICAgICAgcS5zcGF0aWFsUmVsYXRpb25zaGlwID0gJ2ludGVyc2VjdHMnXHJcbiAgICAgIHEub3V0RmllbGRzID0gW3dsLndpZHRoRmllbGRdXHJcbiAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICAgIHEub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9IGFzIGFueVxyXG4gICAgICBjb25zdCBmcyA9IGF3YWl0IGZsLnF1ZXJ5RmVhdHVyZXMocSlcclxuICAgICAgY29uc3QgbWlkczogQXJyYXk8eyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIHdpZHRoOiBudW1iZXIgfT4gPSBbXVxyXG4gICAgICBmb3IgKGNvbnN0IGYgb2YgZnMuZmVhdHVyZXMpIHtcclxuICAgICAgICBjb25zdCBnID0gZi5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmVcclxuICAgICAgICBpZiAoZyAmJiBnLnBhdGhzICYmIGcucGF0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb25zdCBwID0gZy5wYXRoc1swXVxyXG4gICAgICAgICAgY29uc3QgbSA9IHBbTWF0aC5mbG9vcihwLmxlbmd0aCAvIDIpXVxyXG4gICAgICAgICAgbWlkcy5wdXNoKHsgbGF0OiBtWzFdLCBsb246IG1bMF0sIHdpZHRoOiBmLmF0dHJpYnV0ZXNbd2wud2lkdGhGaWVsZF0gfHwgMCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWlkc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSBkcmF3aW5nIC0tLS1cclxuICBjb25zdCBkcmF3ID0gKHZpZXc6IF9fZXNyaS5NYXBWaWV3LCByZXM6IGFueSwgc3BpbGw6IHsgbGF0OiBudW1iZXIsIGxvbjogbnVtYmVyIH0pID0+IHtcclxuICAgIGNvbnN0IGxheWVyID0gZW5zdXJlTGF5ZXIodmlldylcclxuICAgIGxheWVyLnJlbW92ZUFsbCgpXHJcblxyXG4gICAgLy8gc3BpbGwgcG9pbnRcclxuICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XHJcbiAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogc3BpbGwubGF0LCBsb25naXR1ZGU6IHNwaWxsLmxvbiB9KSxcclxuICAgICAgc3ltYm9sOiB7XHJcbiAgICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLCBzdHlsZTogJ3gnLCBzaXplOiAxNCxcclxuICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiAnIzAwMCcsIHdpZHRoOiAzIH0sXHJcbiAgICAgIH0gYXMgYW55LFxyXG4gICAgICBwb3B1cFRlbXBsYXRlOiB7IHRpdGxlOiAnU3BpbGwgcG9pbnQnLCBjb250ZW50OiBgJHtzcGlsbC5sYXQudG9GaXhlZCg1KX0sICR7c3BpbGwubG9uLnRvRml4ZWQoNSl9YCB9IGFzIGFueSxcclxuICAgIH0pKVxyXG5cclxuICAgIC8vIHRyYWNlIHBvbHlsaW5lLCBzcGxpdCBpbnRvIEVUQSBjb2xvciBiYW5kc1xyXG4gICAgY29uc3Qgcm93czogYW55W10gPSByZXMudHJhY2VcclxuICAgIGxldCBiYW5kU3RhcnQgPSAwXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRvbmUgPSBpID09PSByb3dzLmxlbmd0aFxyXG4gICAgICBjb25zdCBiYW5kQ2hhbmdlZCA9ICFkb25lICYmIGJhbmRDb2xvcihyb3dzW2ldLmN1bV90aW1lKSAhPT0gYmFuZENvbG9yKHJvd3NbYmFuZFN0YXJ0XS5jdW1fdGltZSlcclxuICAgICAgaWYgKGRvbmUgfHwgYmFuZENoYW5nZWQpIHtcclxuICAgICAgICBjb25zdCBzZWcgPSByb3dzLnNsaWNlKGJhbmRTdGFydCwgTWF0aC5taW4oaSArIDEsIHJvd3MubGVuZ3RoKSlcclxuICAgICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5bGluZSh7IHBhdGhzOiBbc2VnLm1hcCgocikgPT4gW3IubG9uLCByLmxhdF0pXSBhcyBhbnksIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogNDMyNiB9IGFzIGFueSB9KSxcclxuICAgICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogYmFuZENvbG9yKHJvd3NbYmFuZFN0YXJ0XS5jdW1fdGltZSksIHdpZHRoOiA0IH0gYXMgYW55LFxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIGJhbmRTdGFydCA9IGlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEpvYnNvbiB1bmNlcnRhaW50eSBiYW5kczogdHJhbnNsdWNlbnQgdW5kZXJsYXkgZnJvbSBidWxrIChwZWFrKSBwb3NpdGlvblxyXG4gICAgLy8gdG8gZmFydGhlc3QgY3JlZGlibGUgKDk5JSBsZWFkaW5nKSBwb3NpdGlvbiBhdCBlYWNoIGhvdXJcclxuICAgIGZvciAoY29uc3QgaCBvZiByZXMuaG91cmx5KSB7XHJcbiAgICAgIGlmICghaC5iYW5kKSBjb250aW51ZVxyXG4gICAgICBjb25zdCBpMCA9IE1hdGgubWluKGguYmFuZC5wZWFrLmksIGguYmFuZC5mYXN0ZXN0LmkpXHJcbiAgICAgIGNvbnN0IGkxID0gTWF0aC5tYXgoaC5iYW5kLnBlYWsuaSwgaC5iYW5kLmZhc3Rlc3QuaSlcclxuICAgICAgaWYgKGkxIDw9IGkwKSBjb250aW51ZVxyXG4gICAgICBjb25zdCBzZWcgPSByb3dzLnNsaWNlKGkwLCBpMSArIDEpXHJcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2x5bGluZSh7IHBhdGhzOiBbc2VnLm1hcCgocjogYW55KSA9PiBbci5sb24sIHIubGF0XSldIGFzIGFueSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55IH0pLFxyXG4gICAgICAgIHN5bWJvbDogeyB0eXBlOiAnc2ltcGxlLWxpbmUnLCBjb2xvcjogWy4uLmhleFRvUmdiKGJhbmRDb2xvcihoLmhvdXIpKSwgMC4yOF0sIHdpZHRoOiAxNCwgY2FwOiAncm91bmQnIH0gYXMgYW55LFxyXG4gICAgICB9KSlcclxuICAgIH1cclxuICAgIC8vIGhvdXJseSBtYXJrZXJzICsgbGFiZWxzXHJcbiAgICBmb3IgKGNvbnN0IGggb2YgcmVzLmhvdXJseSkge1xyXG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogaC5sYXQsIGxvbmdpdHVkZTogaC5sb24gfSksXHJcbiAgICAgICAgc3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsIHNpemU6IDcsIGNvbG9yOiBiYW5kQ29sb3IoaC5ob3VyKSxcclxuICAgICAgICAgIG91dGxpbmU6IHsgY29sb3I6ICcjZmZmJywgd2lkdGg6IDEgfSxcclxuICAgICAgICB9IGFzIGFueSxcclxuICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XHJcbiAgICAgICAgICB0aXRsZTogYEhvdXIgJHtoLmhvdXJ9YCxcclxuICAgICAgICAgIGNvbnRlbnQ6IGAke2guY3VtX2Rpc3Rfa20udG9GaXhlZCgxKX0ga20gZG93bnN0cmVhbSDCtyAke2gudmVsb2NpdHlfbXBoLnRvRml4ZWQoMSl9IG1waGAsXHJcbiAgICAgICAgfSBhcyBhbnksXHJcbiAgICAgIH0pKVxyXG4gICAgICBsYXllci5hZGQobmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoeyBsYXRpdHVkZTogaC5sYXQsIGxvbmdpdHVkZTogaC5sb24gfSksXHJcbiAgICAgICAgc3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICB0ZXh0OiBgJHtoLmhvdXJ9IGhyYCxcclxuICAgICAgICAgIGNvbG9yOiBiYW5kQ29sb3IoaC5ob3VyKSxcclxuICAgICAgICAgIGhhbG9Db2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgaGFsb1NpemU6IDEuNSxcclxuICAgICAgICAgIHlvZmZzZXQ6IDksXHJcbiAgICAgICAgICBmb250OiB7IHNpemU6IDEwLCB3ZWlnaHQ6ICdib2xkJywgZmFtaWx5OiAnc2Fucy1zZXJpZicgfSxcclxuICAgICAgICB9IGFzIGFueSxcclxuICAgICAgfSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIG1vZGVsIGNvbmZpZyArIGVxdWlwbWVudCArIGNvbXB1dGUvcmVuZGVyIChwdXJlLCByZXVzYWJsZSBvbiBjYWNoZWQgZGF0YSkgLS0tLVxyXG4gIGNvbnN0IG1vZGVsQ2ZnID0gKHNmOiBudW1iZXIpID0+ICh7XHJcbiAgICBzYWZldHlGYWN0b3I6IHNmLFxyXG4gICAgdGltaW5nTW9kZWw6IHByb3BzLmNvbmZpZy50aW1pbmdNb2RlbCA/PyAnaHlkcmF1bGljJyxcclxuICAgIG1pblN0cmVhbU9yZGVyOiBwcm9wcy5jb25maWcubWluU3RyZWFtT3JkZXIgPz8gNCxcclxuICAgIG1heEhvdXJzOiBwcm9wcy5jb25maWcubWF4SG91cnMgPz8gMjQsXHJcbiAgICBtYXhEaXN0YW5jZUttOiBwcm9wcy5jb25maWcubWF4RGlzdGFuY2VLbSA/PyAzMDAsXHJcbiAgICB2ZXJib3NlOiBmYWxzZSxcclxuICB9KVxyXG5cclxuICBjb25zdCBhcHBseUVxdWlwbWVudCA9IChyZXM6IGFueSwgZHJhd246IE1hcDxzdHJpbmcsIG51bWJlcj4pID0+IHtcclxuICAgIGNvbnN0IGVxID0gcHJvcHMuY29uZmlnLmVxdWlwbWVudFxyXG4gICAgaWYgKGVxPy5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuXHJcbiAgICBjb25zdCBydWxlcyA9IHtcclxuICAgICAgZW50cmFpbm1lbnRNczogZXE/LmVudHJhaW5tZW50TXMgPz8gMC4zNSxcclxuICAgICAgYW5jaG9yU3BhY2luZ0Z0OiBlcT8uYW5jaG9yU3BhY2luZ0Z0ID8/IDEwMCxcclxuICAgICAgcmVzZXJ2ZVBjdDogZXE/LnJlc2VydmVQY3QgPz8gMjAsXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHMgb2YgcmVzLnNpdGVzKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IG5vcm1HdWlkKHMuR2xvYmFsSUQgPz8gcy5nbG9iYWxpZCA/PyBzLkdMT0JBTElEKVxyXG4gICAgICBjb25zdCBkcmF3bkZ0ID0ga2V5ID8gZHJhd24uZ2V0KGtleSkgOiB1bmRlZmluZWRcclxuICAgICAgaWYgKGRyYXduRnQpIHtcclxuICAgICAgICBjb25zdCBib29tRnQgPSBNYXRoLmNlaWwoZHJhd25GdCAvIDUwKSAqIDUwXHJcbiAgICAgICAgcy5ib29tID0ge1xyXG4gICAgICAgICAgYm9vbV9mdDogYm9vbUZ0LFxyXG4gICAgICAgICAgYW5jaG9yczogTWF0aC5tYXgoMiwgTWF0aC5jZWlsKGJvb21GdCAvIHJ1bGVzLmFuY2hvclNwYWNpbmdGdCkgKyAxKSxcclxuICAgICAgICAgIHNvdXJjZTogJ2RyYXduJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXN0ID0gZXN0aW1hdGVCb29tTmVlZHMocy5yaXZlcl93aWR0aF9tLCBzLnZlbG9jaXR5X21zLCBydWxlcylcclxuICAgICAgICBpZiAoZXN0KSBzLmJvb20gPSB7IC4uLmVzdCwgc291cmNlOiAnZXN0JyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVBbmRSZW5kZXIgPSAoc2Y6IG51bWJlciwgZnJvbUNhY2hlID0gZmFsc2UpID0+IHtcclxuICAgIGNvbnN0IGMgPSBjYWNoZVJlZi5jdXJyZW50XHJcbiAgICBpZiAoIWMgfHwgIWptdikgcmV0dXJuXHJcbiAgICBjb25zdCByZXMgPSBjb21wdXRlVHJhY2UoYy5kYXRhLCBtb2RlbENmZyhzZikpXHJcbiAgICBhcHBseUVxdWlwbWVudChyZXMsIGMuZHJhd24pXHJcbiAgICBkcmF3KGptdi52aWV3IGFzIF9fZXNyaS5NYXBWaWV3LCByZXMsIHsgbGF0OiBjLmxhdCwgbG9uOiBjLmxvbiB9KVxyXG4gICAgaWYgKGxheWVyUmVmLmN1cnJlbnQpIGxheWVyUmVmLmN1cnJlbnQudmlzaWJsZSA9IHRydWVcclxuICAgIHNldEhpZGRlbihmYWxzZSlcclxuICAgIHNldFJlc3VsdChyZXMpXHJcbiAgICBhcm1MaXN0U3luYyhyZXMuc2l0ZXMgfHwgW10pXHJcbiAgICBzZXREaWFnKFsuLi5jLmZldGNoTm90ZXMsIGAke3Jlcy5zaXRlcy5sZW5ndGh9IHNpdGUocykgd2l0aGluIGJ1ZmZlciBvZiB0aGUgdHJhY2UuYF0pXHJcbiAgICBzZXRTdGF0dXMoXHJcbiAgICAgIGAke3Jlcy5yaXZlcl9uYW1lIHx8ICdUcmFjZSd9IOKAlCAke3Jlcy5kaXN0YW5jZV9rbV8yNGgudG9GaXhlZCgxKX0ga20gaW4g4omkICR7cHJvcHMuY29uZmlnLm1heEhvdXJzID8/IDI0fSBoYCArXHJcbiAgICAgIChmcm9tQ2FjaGUgPyAnIMK3IHJlY29tcHV0ZWQgaW5zdGFudGx5IGZyb20gY2FjaGVkIGh5ZHJvbG9neScgOiAnJyksXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIHJ1biAtLS0tXHJcbiAgY29uc3QgYXJtQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWptdiB8fCBhcm1pbmcgfHwgcnVubmluZykgcmV0dXJuXHJcbiAgICBzZXRBcm1pbmcodHJ1ZSlcclxuICAgIHNldFN0YXR1cygnQ2xpY2sgdGhlIHNwaWxsIGxvY2F0aW9uIG9uIHRoZSBtYXDigKYnKVxyXG4gICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IGptdi52aWV3Lm9uKCdjbGljaycsIGFzeW5jIChldnQpID0+IHtcclxuICAgICAgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKVxyXG4gICAgICBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gbnVsbFxyXG4gICAgICBzZXRBcm1pbmcoZmFsc2UpXHJcbiAgICAgIGNvbnN0IG1wID0gZXZ0Lm1hcFBvaW50XHJcbiAgICAgIGNvbnN0IGxhdCA9IG1wLmxhdGl0dWRlLCBsb24gPSBtcC5sb25naXR1ZGVcclxuICAgICAgc2V0UnVubmluZyh0cnVlKVxyXG4gICAgICBzZXRSZXN1bHQobnVsbClcclxuICAgICAgc2V0RGlhZyhbXSlcclxuICAgICAgc2V0U3RhdHVzKGBUcmFjaW5nIGZyb20gJHtsYXQudG9GaXhlZCg0KX0sICR7bG9uLnRvRml4ZWQoNCl94oCmYClcclxuICAgICAgY29uc3Qgbm90ZXM6IHN0cmluZ1tdID0gW11cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjZmcgPSBwcm9wcy5jb25maWdcclxuICAgICAgICBjb25zdCBzaXRlTGF5ZXJzID0gKGNmZy5zaXRlTGF5ZXJzIHx8IFtdKSBhcyBhbnlcclxuICAgICAgICBjb25zdCByZWNlcHRvckxheWVycyA9IChjZmcucmVjZXB0b3JMYXllcnMgfHwgW10pIGFzIGFueVxyXG4gICAgICAgIGlmICghc2l0ZUxheWVycy5sZW5ndGgpIG5vdGVzLnB1c2goJ05vIHNpdGUgbGF5ZXJzIGNvbmZpZ3VyZWQg4oCUIGFkZCB0aGVtIGluIHRoZSB3aWRnZXQgc2V0dGluZ3MgKFNpdGUgbGF5ZXJzIEpTT04pLicpXHJcblxyXG4gICAgICAgIC8vIGZldGNoIGV2ZXJ5dGhpbmcgb25jZSAodHJhY2UsIGZsb3dzLCB3aWR0aHMsIHNpdGUvcmVjZXB0b3IgZmVhdHVyZXMpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCB7XHJcbiAgICAgICAgICAuLi5tb2RlbENmZyhzYWZldHkpLFxyXG4gICAgICAgICAgd2lkdGhQcm92aWRlcjogbWFrZVdpZHRoUHJvdmlkZXIoKSxcclxuICAgICAgICAgIHNpdGVQcm92aWRlcnM6IHNpdGVMYXllcnMubWFwKChsYywgaSkgPT4gbWFrZVNpdGVQcm92aWRlcihsYywgNTAwLCBgU2l0ZSBsYXllciAke2kgKyAxfWAsIG5vdGVzKSksXHJcbiAgICAgICAgICByZWNlcHRvclByb3ZpZGVyczogcmVjZXB0b3JMYXllcnMubWFwKChsYywgaSkgPT4gbWFrZVNpdGVQcm92aWRlcihsYywgODAwLCBgUmVjZXB0b3IgbGF5ZXIgJHtpICsgMX1gLCBub3RlcykpLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGRyYXduIGJvb20gbGluZXM6IHBlci1zaXRlLWxheWVyIGJvb21MYXllciAoKyBsZWdhY3kgZ2xvYmFsIGVxdWlwbWVudC5ib29tTGF5ZXIpXHJcbiAgICAgICAgY29uc3QgZHJhd24gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXHJcbiAgICAgICAgY29uc3QgZXEgPSBjZmcuZXF1aXBtZW50XHJcbiAgICAgICAgaWYgKGVxPy5lbmFibGVkICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc3QgYm9vbUNmZ3M6IGFueVtdID0gW11cclxuICAgICAgICAgIGZvciAoY29uc3QgbGMgb2Ygc2l0ZUxheWVycykgaWYgKGxjLmJvb21MYXllcj8udXJsKSBib29tQ2Zncy5wdXNoKGxjLmJvb21MYXllcilcclxuICAgICAgICAgIGlmIChlcT8uYm9vbUxheWVyPy51cmwpIGJvb21DZmdzLnB1c2goZXEuYm9vbUxheWVyKVxyXG4gICAgICAgICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpXHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGJjIG9mIGJvb21DZmdzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZyA9IGAke2JjLnVybH18JHtiYy5zaXRlS2V5RmllbGR9YFxyXG4gICAgICAgICAgICBpZiAoc2Vlbi5oYXMoc2lnKSkgY29udGludWVcclxuICAgICAgICAgICAgc2Vlbi5hZGQoc2lnKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaERyYXduQm9vbShiYyBhcyBhbnkpXHJcbiAgICAgICAgICAgICAgbS5mb3JFYWNoKCh2LCBrKSA9PiBkcmF3bi5zZXQoaywgKGRyYXduLmdldChrKSB8fCAwKSArIHYpKVxyXG4gICAgICAgICAgICAgIG5vdGVzLnB1c2goYEJvb20gbGluZXMgKCR7c2lnLnNwbGl0KCcvJykuc2xpY2UoLTIpWzBdfSk6IGRyYXduIGZvb3RhZ2UgZm9yICR7bS5zaXplfSBzaXRlKHMpYClcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgIG5vdGVzLnB1c2goYEJvb20gbGF5ZXIgRkFJTEVEOiAke1N0cmluZyhlKS5zbGljZSgwLCA5MCl9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FjaGVSZWYuY3VycmVudCA9IHsgbGF0LCBsb24sIGRhdGEsIGRyYXduLCBmZXRjaE5vdGVzOiBub3Rlcy5zbGljZSgpIH1cclxuICAgICAgICBjb21wdXRlQW5kUmVuZGVyKHNhZmV0eSlcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHNldFN0YXR1cyhgVHJhY2UgZmFpbGVkOiAke1N0cmluZyhlKS5zbGljZSgwLCAxMjApfWApXHJcbiAgICAgICAgc2V0RGlhZyhub3RlcylcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRSdW5uaW5nKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtqbXYsIGFybWluZywgcnVubmluZywgc2FmZXR5LCBwcm9wcy5jb25maWddKVxyXG5cclxuICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcclxuICAgIGlmIChjbGlja0hhbmRsZVJlZi5jdXJyZW50KSB7IGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKCk7IGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBudWxsIH1cclxuICAgIGlmIChsYXllclJlZi5jdXJyZW50KSBsYXllclJlZi5jdXJyZW50LnJlbW92ZUFsbCgpXHJcbiAgICBjbGVhckxpc3RTeW5jKClcclxuICAgIGNhY2hlUmVmLmN1cnJlbnQgPSBudWxsXHJcbiAgICBzZXRBcm1pbmcoZmFsc2UpXHJcbiAgICBzZXRSZXN1bHQobnVsbClcclxuICAgIHNldERpYWcoW10pXHJcbiAgICBzZXRIaWRkZW4oZmFsc2UpXHJcbiAgICBzZXRTdGF0dXMoJ0NsZWFyZWQuIENsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIgdG8gcnVuIGFnYWluLicpXHJcbiAgfVxyXG5cclxuICAvLyBmdWxsLXBhZ2UgbWFwOiBDU1MgbWF4aW1pemUgaW5zdGVhZCBvZiB0aGUgRnVsbHNjcmVlbiBBUEkg4oCUIGV2ZXJ5dGhpbmcgc3RheXNcclxuICAvLyBtb3VudGVkIChwbHVtZSwgcGFuZWxzLCBwb3B1cHMpIGFuZCB0aGlzIGZsb2F0aW5nIHBhbmVsIHJlbWFpbnMgb24gdG9wO1xyXG4gIC8vIEVzYyBvciB0aGUgYnV0dG9uIGV4aXRzXHJcbiAgY29uc3QgW21heGVkLCBzZXRNYXhlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBtYXhlZFJlZiA9IHVzZVJlZihmYWxzZSlcclxuICBjb25zdCBlc2NIYW5kbGVyUmVmID0gdXNlUmVmPChlOiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkPihudWxsKVxyXG4gIGNvbnN0IHNldE1hcE1heGltaXplZCA9IChvbjogYm9vbGVhbikgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcclxuICAgICAgJ1tkYXRhLXdpZGdldGlkPVwiJyArIChwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXSB8fCAnJykgKyAnXCJdJylcclxuICAgIGlmICghZWwpIHJldHVyblxyXG4gICAgaWYgKG9uKSB7XHJcbiAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICBlbC5zdHlsZS5pbnNldCA9ICcwJ1xyXG4gICAgICBlbC5zdHlsZS53aWR0aCA9ICcxMDB2dydcclxuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJ1xyXG4gICAgICBlbC5zdHlsZS56SW5kZXggPSAnOTk5J1xyXG4gICAgICBjb25zdCBlc2MgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4geyBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBzZXRNYXBNYXhpbWl6ZWQoZmFsc2UpIH1cclxuICAgICAgZXNjSGFuZGxlclJlZi5jdXJyZW50ID0gZXNjXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlc2MpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICcnXHJcbiAgICAgIGVsLnN0eWxlLmluc2V0ID0gJydcclxuICAgICAgZWwuc3R5bGUud2lkdGggPSAnJ1xyXG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSAnJ1xyXG4gICAgICBlbC5zdHlsZS56SW5kZXggPSAnJ1xyXG4gICAgICBpZiAoZXNjSGFuZGxlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY0hhbmRsZXJSZWYuY3VycmVudClcclxuICAgICAgICBlc2NIYW5kbGVyUmVmLmN1cnJlbnQgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1heGVkUmVmLmN1cnJlbnQgPSBvblxyXG4gICAgc2V0TWF4ZWQob24pXHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKVxyXG4gIH1cclxuICBjb25zdCB0b2dnbGVGdWxsTWFwID0gKCkgPT4gc2V0TWFwTWF4aW1pemVkKCFtYXhlZFJlZi5jdXJyZW50KVxyXG5cclxuICAvLyBicmllZmluZyB0b2dnbGU6IGhpZGUvc2hvdyB0aGUgdHJhamVjdG9yeSBncmFwaGljcyBXSVRIT1VUIHRvdWNoaW5nIHRoZVxyXG4gIC8vIGNhY2hlZCBydW4g4oCUIHByZXNlbnRlciBjYW4gZmxpcCB0aGUgbW9kZWwgb2ZmIGR1cmluZyBhIHNsaWRlIGFuZCBiYWNrXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgIGlmICghbGF5ZXJSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICBjb25zdCB2ID0gIWxheWVyUmVmLmN1cnJlbnQudmlzaWJsZVxyXG4gICAgbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlID0gdlxyXG4gICAgc2V0SGlkZGVuKCF2KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2l0ZXM6IFNpdGVSb3dbXSA9IHJlc3VsdD8uc2l0ZXMgfHwgW11cclxuICBjb25zdCB3YXJuaW5nczogc3RyaW5nW10gPSByZXN1bHQ/Lndhcm5pbmdzIHx8IFtdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgcGFkZGluZzogMTAsIG92ZXJmbG93OiAnYXV0bycsIGZvbnRTaXplOiAxMywgY29sb3I6ICcjZmZmJyB9fT5cclxuICAgICAge3Byb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsodikgPT4gc2V0Sm12KHYpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHshcHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjZmY4YTgwJyB9fT5TZWxlY3QgYSBNYXAgd2lkZ2V0IGluIHRoaXMgd2lkZ2V0J3Mgc2V0dGluZ3MuPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDggfX0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFqbXYgfHwgYXJtaW5nIHx8IHJ1bm5pbmd9IG9uQ2xpY2s9e2FybUNsaWNrfT5cclxuICAgICAgICAgIHthcm1pbmcgPyAnQ2xpY2sgdGhlIG1hcOKApicgOiBydW5uaW5nID8gJ1RyYWNpbmfigKYnIDogJ1NldCBzcGlsbCBwb2ludCd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD17cnVubmluZ30gb25DbGljaz17Y2xlYXJBbGx9PkNsZWFyPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIlxyXG4gICAgICAgICAgdGl0bGU9XCJUb2dnbGUgZnVsbC1wYWdlIG1hcCAocGx1bWUgc3RheXMgdmlzaWJsZTsgdGhpcyBwYW5lbCBzdGF5cyBvbiB0b3A7IEVzYyBleGl0cylcIlxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlRnVsbE1hcH0+XHJcbiAgICAgICAgICB7bWF4ZWQgPyAn4pu2IEV4aXQgZnVsbCcgOiAn4pu2IEZ1bGwgbWFwJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXshcmVzdWx0fSBvbkNsaWNrPXt0b2dnbGVWaXNpYmxlfVxyXG4gICAgICAgICAgdGl0bGU9XCJIaWRlL3Nob3cgdGhlIHRyYWplY3Rvcnkgb24gdGhlIG1hcCB3aXRob3V0IGxvc2luZyB0aGUgcnVuIChicmllZmluZ3MpXCI+XHJcbiAgICAgICAgICB7aGlkZGVuID8gJ/CfkYEgU2hvdycgOiAn8J+RgSBIaWRlJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXshcmVzdWx0fSB0aXRsZT1cIkNvcHkgcnVuIHByb3ZlbmFuY2UgcmVjb3JkIChKU09OKSBmb3IgYWZ0ZXItYWN0aW9uIGRvY3VtZW50YXRpb24g4oCUIGluY2x1ZGVzIGEgcmVwbGF5IFVSTFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0Py5ydW5SZWNvcmQgfHwgIWNhY2hlUmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgICAgICBjb25zdCByZWM6IGFueSA9IHsgLi4ucmVzdWx0LnJ1blJlY29yZCB9XHJcbiAgICAgICAgICAgIGNvbnN0IHUgPSBuZXcgVVJMKCdodHRwczovL3doaXRld2F0ZXJyZXNjdWUuZ2l0aHViLmlvL3dyaS1leGItd2lkZ2V0cy9lbWJlZC8nKVxyXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2NvbmZpZycsICdhbGwtZ3JwcycpXHJcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnbGF0JywgY2FjaGVSZWYuY3VycmVudC5sYXQudG9GaXhlZCg1KSlcclxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdsb24nLCBjYWNoZVJlZi5jdXJyZW50Lmxvbi50b0ZpeGVkKDUpKVxyXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2FzT2YnLCByZWMuYXNfb2YgIT09ICdsaXZlJyA/IHJlYy5hc19vZiA6IHJlYy5nZW5lcmF0ZWRfYXQuc2xpY2UoMCwgMTApKVxyXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ3NmJywgU3RyaW5nKHNhZmV0eSkpXHJcbiAgICAgICAgICAgIHJlYy5yZXBsYXlfdXJsID0gdS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KHJlYywgbnVsbCwgMSkpLnRoZW4oKCkgPT4gc2V0U3RhdHVzKCdSdW4gcmVjb3JkIGNvcGllZCAoaW5jbHVkZXMgcmVwbGF5X3VybCkuJykpXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIOKOmCBSZWNvcmRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDQgfX1cclxuICAgICAgICAgIHRpdGxlPVwiU2FmZXR5IGZhY3RvciDigJQgY2hhbmdpbmcgaXQgcmUtcnVucyBpbnN0YW50bHkgZnJvbSBjYWNoZWQgaHlkcm9sb2d5XCI+XHJcbiAgICAgICAgICBTRlxyXG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2FmZXR5fSBkaXNhYmxlZD17cnVubmluZ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgc2V0U2FmZXR5KHYpXHJcbiAgICAgICAgICAgICAgaWYgKGNhY2hlUmVmLmN1cnJlbnQgJiYgIXJ1bm5pbmcpIGNvbXB1dGVBbmRSZW5kZXIodiwgdHJ1ZSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuMH0+MS4wPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEuMjV9PjEuMjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS41fT4xLjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Mi4wfT4yLjA8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDgsIG1pbkhlaWdodDogMTggfX0+e3J1bm5pbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwiamltdS1zZWNvbmRhcnktbG9hZGluZ1wiIC8+fSB7c3RhdHVzfTwvZGl2PlxyXG5cclxuICAgICAge2RpYWcubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNmZmYnLCBmb250U2l6ZTogMTEsIG1hcmdpbkJvdHRvbTogOCB9fT5cclxuICAgICAgICAgIHtkaWFnLm1hcCgoZCwgaSkgPT4gPGRpdiBrZXk9e2l9PntkfTwvZGl2Pil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7d2FybmluZ3MubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2ZmZjNjZCcsIGNvbG9yOiAnIzMzMycsIGJvcmRlcjogJzFweCBzb2xpZCAjZmZlZWJhJywgcGFkZGluZzogNiwgbWFyZ2luQm90dG9tOiA4LCBib3JkZXJSYWRpdXM6IDQgfX0+XHJcbiAgICAgICAgICB7d2FybmluZ3MubWFwKCh3LCBpKSA9PiA8ZGl2IGtleT17aX0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyIH19PuKaoCB7d308L2Rpdj4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3Jlc3VsdCAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDgsIGNvbG9yOiAnI2ZmZicgfX0+XHJcbiAgICAgICAgICBFVEFzIGFyZSBlc3RpbWF0ZXMgKMKxMjAlKSwgc2FmZXR5IGZhY3RvciDDl3tyZXN1bHQuc2FmZXR5X2ZhY3Rvcn0gYXBwbGllZCDigJQgdHJlYXQgYXMgYmFuZHMsIG5vdCBhcHBvaW50bWVudHMuXHJcbiAgICAgICAgICB7cmVzdWx0LmdhdWdlc191c2VkLmxlbmd0aFxyXG4gICAgICAgICAgICA/IGAgRmxvd3M6ICR7cmVzdWx0LmdhdWdlc191c2VkLm1hcCgoZzogYW55KSA9PiBnLnN0YXRpb25faWQpLmpvaW4oJywgJyl9LmBcclxuICAgICAgICAgICAgOiAnIE5vIGxpdmUgZ2F1Z2VzIGZvdW5kIOKAlCBkcmFpbmFnZS1hcmVhIGZsb3cgZXN0aW1hdGUuJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtsaXN0U3luY0ZpZWxkICYmIHNpdGVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnNnB4IDAnLCBmb250U2l6ZTogMTIgfX0+XHJcbiAgICAgICAgICA8Yj57c2l0ZXMubGVuZ3RofSBzaXRle3NpdGVzLmxlbmd0aCA+IDEgPyAncycgOiAnJ30gaW4gdGhlIHBsdW1lIHBhdGg8L2I+IOKAlCBoaWdobGlnaHRlZCBpbiB0aGUgc2l0ZSBsaXN0IGJ5IEVUQSBiYW5kLlxyXG4gICAgICAgICAge3NpdGVzLnNvbWUoKHMpID0+IHMuYm9vbSkgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMiB9fT5cclxuICAgICAgICAgICAgICBCb29tIHRvdGFscyAoe3NpdGVzLmZpbHRlcigocykgPT4gcy5ib29tPy5zb3VyY2UgPT09ICdkcmF3bicpLmxlbmd0aH0gZHJhd24g4pyTIC97JyAnfVxyXG4gICAgICAgICAgICAgIHtzaXRlcy5maWx0ZXIoKHMpID0+IHMuYm9vbT8uc291cmNlID09PSAnZXN0JykubGVuZ3RofSBlc3QpOnsnICd9XHJcbiAgICAgICAgICAgICAge3NpdGVzLnJlZHVjZSgodCwgcykgPT4gdCArIChzLmJvb20/LmJvb21fZnQgfHwgMCksIDApLnRvTG9jYWxlU3RyaW5nKCl9IGZ0IMK3eycgJ31cclxuICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYW5jaG9ycyB8fCAwKSwgMCl9IGFuY2hvcnNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3BhaW50U3RhdHMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMiwgb3BhY2l0eTogMC43IH19Pmxpc3Qgc3luYzoge3BhaW50U3RhdHN9PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7IWxpc3RTeW5jRmllbGQgJiYgc2l0ZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHIgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjY2NjJyB9fT5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkVUQTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT5TaXRlPC90aD5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PmttPC90aD5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PkJvb208L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge3NpdGVzLm1hcCgocywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2l9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVlJyB9fT5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtzLmV0YV9lYXJseV9ociAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgZWFybGllc3QgY3JlZGlibGUgJHtzLmV0YV9lYXJseV9ocn0gaHIgwrcgZmlyc3QgYXJyaXZhbCAke3MuZXRhX2hyfSBociDCtyBwZWFrICR7cy5ldGFfcGVha19ocn0gaHIke3MuY2xlYXJfaHIgPyBgIMK3IGNsZWFyIH4ke3MuY2xlYXJfaHJ9IGhyYCA6ICcnfWBcclxuICAgICAgICAgICAgICAgICAgICA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmFuZENvbG9yKHMuZXRhX2hyKSwgbWFyZ2luUmlnaHQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIHtzLmV0YV9lYXJseV9ociAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtzLmV0YV9lYXJseV9oci50b0ZpeGVkKDEpfeKAkyR7cy5ldGFfaHIudG9GaXhlZCgxKX0gaHJgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzLmV0YV9ociA8IDEgPyBgJHtNYXRoLnJvdW5kKHMuZXRhX2hyICogNjApfSBtaW5gIDogYCR7cy5ldGFfaHIudG9GaXhlZCgxKX0gaHJgfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+e3MubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT57cy5kaXN0X2ttLnRvRml4ZWQoMSl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19IHRpdGxlPXtzLmJvb21cclxuICAgICAgICAgICAgICAgICAgPyBgJHtzLmJvb20uYW5jaG9yc30gYW5jaG9yIHNldHMke3MuYm9vbS5ib29tX2FuZ2xlX2RlZyA/IGAgwrcgJHtzLmJvb20uYm9vbV9hbmdsZV9kZWd9wrAgZGVwbG95bWVudGAgOiAnJ30ke3MuYm9vbS5jYXNjYWRlX2FkdmlzZWQgPyAnIMK3IGZhc3Qgd2F0ZXI6IGNhc2NhZGUgbXVsdGlwbGUgYm9vbXMnIDogJyd9ICgke3MuYm9vbS5zb3VyY2UgPT09ICdkcmF3bicgPyAnZnJvbSBkcmF3biBib29tIGxpbmVzJyA6ICdlc3RpbWF0ZWQgZnJvbSBtb2RlbGVkIHdpZHRoL3ZlbG9jaXR5J30pYFxyXG4gICAgICAgICAgICAgICAgICA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAge3MuYm9vbVxyXG4gICAgICAgICAgICAgICAgICAgID8gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3MuYm9vbS5ib29tX2Z0LnRvTG9jYWxlU3RyaW5nKCl9IGZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzLmJvb20uY2FzY2FkZV9hZHZpc2VkICYmICcg4pqhJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT4ge3MuYm9vbS5zb3VyY2UgPT09ICdkcmF3bicgPyAn4pyTJyA6ICdlc3QuJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICA6ICfigJQnfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICB7c2l0ZXMuc29tZSgocykgPT4gcy5ib29tKSAmJiAoXHJcbiAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyVG9wOiAnMnB4IHNvbGlkICNjY2MnLCBmb250V2VpZ2h0OiA2MDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30gc3R5bGU9e3sgcGFkZGluZzogJzNweCA0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICBUb3RhbHMgKHtzaXRlcy5maWx0ZXIoKHMpID0+IHMuYm9vbSkubGVuZ3RofSBib29tIHNpdGVzKVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnM3B4IDRweCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYm9vbV9mdCB8fCAwKSwgMCkudG9Mb2NhbGVTdHJpbmcoKX0gZnQgwrd7JyAnfVxyXG4gICAgICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYW5jaG9ycyB8fCAwKSwgMCl9IGFuY2hvcnNcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgKX1cclxuICAgICAge3Jlc3VsdCAmJiBzaXRlcy5zb21lKChzKSA9PiBzLmJvb20pICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicsIG1hcmdpblRvcDogNCB9fT5cclxuICAgICAgICAgIOKckyA9IGRyYXduIGJvb20gbGluZXMgwrcgZXN0LiA9IHNpemVkIGZyb20gbW9kZWxlZCB3aWR0aC92ZWxvY2l0eVxyXG4gICAgICAgICAgKGJvb20gYW5nbGVkIHRvIGtlZXAgbm9ybWFsIGZsb3cg4omkIHsocHJvcHMuY29uZmlnLmVxdWlwbWVudD8uZW50cmFpbm1lbnRNcyA/PyAwLjM1KX0gbS9zLFxyXG4gICAgICAgICAgK3twcm9wcy5jb25maWcuZXF1aXBtZW50Py5yZXNlcnZlUGN0ID8/IDIwfSUgcmVzZXJ2ZSkgwrcg4pqhID0gZmFzdCB3YXRlciwgY2FzY2FkZSBib29tc1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7cmVzdWx0ICYmIHNpdGVzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX0+Tm8gY29uZmlndXJlZCBzaXRlcyB3aXRoaW4gcmVhY2ggb2YgdGhpcyB0cmFjZS48L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9