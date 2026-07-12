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
const ENGINE_VERSION = "1.2.0";
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
function nldiDmGauges(comid, distanceKm) {
    return __awaiter(this, void 0, void 0, function* () {
        const j = yield getJson(`${NLDI_BASE}/linked-data/comid/${comid}/navigation/DM/nwissite`, {
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
        const gauges = yield nldiDmGauges(comid, cfg.maxDistanceKm);
        const ginfo = yield gaugeInfo(gauges.map((g) => g.station_id), cfg.asOf);
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
        for (const g of gd) {
            log(`  gauge ${g.station_id} ${g.name.slice(0, 38).padEnd(38)} ${String(Math.round(g.discharge)).padStart(8)} cfs @ ${(g.trace_dist / 1000).toFixed(1).padStart(6)} km`);
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
    if (gd.length >= 2) {
        const fQ = interpClamped(gd.map((g) => g.trace_dist), gd.map((g) => g.discharge));
        for (const r of rows)
            r.Q_cfs = Math.max(fQ(r.cum_dist), 1.0);
        qMethod = "gauge-interpolation";
        qConfidence = "HIGH";
    }
    else if (gd.length === 1) {
        const g = gd[0];
        for (const r of rows) {
            r.Q_cfs = Math.max(g.discharge * (r.drainage_area_sqmi / g.drainage_area), 1.0);
        }
        qMethod = "single-gauge-DA-ratio";
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
        gauges: gd.map((g) => ({ station_id: g.station_id, name: g.name, discharge_cfs: g.discharge, trace_km: Math.round(g.trace_dist / 100) / 10 })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zcGlsbC10cmFjZS1zbmFrZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUksTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDO0FBRXRDLE1BQU0sU0FBUyxHQUFHLGlDQUFpQyxDQUFDO0FBQ3BELE1BQU0sU0FBUyxHQUFHLGtEQUFrRCxDQUFDO0FBQ3JFLE1BQU0sT0FBTyxHQUFHLHlDQUF5QyxDQUFDO0FBQzFELE1BQU0sU0FBUyxHQUFHLDJDQUEyQyxDQUFDO0FBRTlEOzs7O0dBSUc7QUFDSSxNQUFNLDBCQUEwQixHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2hELDBGQUEwRjtJQUMxRixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVE7Q0FDN0IsQ0FBQyxDQUFDO0FBRUksTUFBTSxjQUFjLEdBQUc7SUFDNUIsYUFBYSxFQUFFLEdBQUc7SUFDbEIsUUFBUSxFQUFFLEVBQUU7SUFDWixXQUFXLEVBQUUsS0FBSztJQUNsQixZQUFZLEVBQUUsR0FBRztJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLGFBQWEsRUFBRSxJQUFJLEVBQVMsMkRBQTJEO0lBQ3ZGLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsaUJBQWlCLEVBQUUsR0FBRyxFQUFNLHFEQUFxRDtJQUNqRixhQUFhLEVBQUUsRUFBRTtJQUNqQixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLG9CQUFvQixFQUFFLEVBQUUsRUFBSSw2REFBNkQ7SUFDekYsV0FBVyxFQUFFLFdBQVcsRUFBSSxvRkFBb0Y7SUFDaEgsSUFBSSxF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O1lBQUMsV0FBVyxHQUFHLDJCQUEyQixDQUFDO1lBQzlFLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1FBQzdFLENBQUM7SUFDSCxDQUFDO0lBRUQsMEVBQTBFO0lBQzFFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNYLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUMvQixNQUFNLFlBQVksR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxNQUFNLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFBQyxFQUFFLEVBQUUsQ0FBQztRQUFDLENBQUM7O1lBQzFELENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3JELENBQUM7SUFDRCxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdB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Q1QsRUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RDLDBFQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxtSUFFTCxDQUFDLGlCQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsMENBQUUsYUFBYSxtQ0FBSSxJQUFJLENBQUMsYUFDakYsaUJBQUssQ0FBQyxNQUFNLENBQUMsU0FBUywwQ0FBRSxVQUFVLG1DQUFJLEVBQUUsNERBQ3RDLENBQ1AsRUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUkseUVBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxnRUFBdUQsSUFDakgsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3BpbGwtdHJhY2Utc25ha2Uvc3JjL3RyYWNlLWVuZ2luZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2ludFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2x5bGluZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3BpbGwtdHJhY2Utc25ha2Uvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xuLyoqXG4gKiB0cmFjZS1lbmdpbmUuanMg4oCUIE5hdGlvbmFsIHNwaWxsIHRyYWplY3RvcnkgZW5naW5lIChKUyBwb3J0IG9mIHNwaWxsX3RyYWNlLnB5KVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogRmFpdGhmdWwgcG9ydCBvZiB0aGUgUHl0aG9uIG9yYWNsZS4gRGVwZW5kZW5jeS1mcmVlIEVTTTogcnVucyBpbiBwbGFpbiBOb2RlXG4gKiAoPj0xOCwgZ2xvYmFsIGZldGNoKSBmb3IgZ29sZGVuIHRlc3RpbmcgYW5kIGluIHRoZSBicm93c2VyIGluc2lkZSB0aGUgRXhCXG4gKiB3aWRnZXQuIE5PIEBhcmNnaXMgaW1wb3J0cyBoZXJlIOKAlCB0aGUgd2lkZ2V0IHdyYXBzIHRoaXMgbW9kdWxlIGFuZCBzdXBwbGllc1xuICogbGF5ZXIgYWNjZXNzIHRocm91Z2ggaW5qZWN0YWJsZSBwcm92aWRlcnM6XG4gKlxuICogICBjb25maWcud2lkdGhQcm92aWRlcihlbnZlbG9wZSkgIC0+IFt7bGF0LCBsb24sIHdpZHRofV0gICAoR0xPVyBtaWRwb2ludHMgaW4gYmJveClcbiAqICAgY29uZmlnLnNpdGVQcm92aWRlcnMgICAgICAgICAgICAtPiBbe25hbWUsIGJ1ZmZlcl9tLCBmZXRjaDogYXN5bmMgKCkgPT4gW3tuYW1lLCBsYXQsIGxvbiwgLi4uZXh0cmF9XX1dXG4gKiAgIGNvbmZpZy5yZWNlcHRvclByb3ZpZGVycyAgICAgICAgLT4gc2FtZSBzaGFwZSBhcyBzaXRlUHJvdmlkZXJzXG4gKlxuICogUG9ydCBnb3RjaGFzIGhvbm9yZWQgKHNlZSBSRUFETUUpOlxuICogICAxLiBnZW9zZXJ2ZXIgQ1FMIEJCT1ggaXMgbGF0LGxvbiBheGlzIG9yZGVyIChFUFNHOjQyNjkgLyBXRlMgMi4wKVxuICogICAyLiBIUiBOSERQbHVzSUQgIT0gTVIgY29taWQg4oCUIHdpZHRocyBzYW1wbGVkIHNwYXRpYWxseSwgbmV2ZXIgSUQtam9pbmVkXG4gKiAgIDMuIGltcG91bmRtZW50ID0gd2JhcmVhdHlwZSBpbiAoTGFrZVBvbmQsIFJlc2Vydm9pcilcbiAqICAgNC4gd2lkdGggb3ZlcnJpZGUgc2FtcGxlZCBpbiB3aW5kb3dzOyBmYWlsdXJlIGRlZ3JhZGVzIHRvIGZvcm11bGEgd2lkdGhzXG4gKiAgIDUuIE5MREkvZ2Vvc2VydmVyIGVtcHR5LTIwMCAtPiByZXRyeSAzeCB3aXRoIGJhY2tvZmZcbiAqICAgNi4gc25hcCBjbGljayB0byBzdHJlYW1vcmRlID49IG1pblN0cmVhbU9yZGVyXG4gKi9cblxuZXhwb3J0IGNvbnN0IEVOR0lORV9WRVJTSU9OID0gXCIxLjIuMFwiO1xuXG5jb25zdCBOTERJX0JBU0UgPSBcImh0dHBzOi8vYXBpLndhdGVyLnVzZ3MuZ292L25sZGlcIjtcbmNvbnN0IEdFT1NFUlZFUiA9IFwiaHR0cHM6Ly9hcGkud2F0ZXIudXNncy5nb3YvZ2Vvc2VydmVyL3dtYWRhdGEvb3dzXCI7XG5jb25zdCBOV0lTX0lWID0gXCJodHRwczovL3dhdGVyc2VydmljZXMudXNncy5nb3Yvbndpcy9pdi9cIjtcbmNvbnN0IE5XSVNfU0lURSA9IFwiaHR0cHM6Ly93YXRlcnNlcnZpY2VzLnVzZ3MuZ292L253aXMvc2l0ZS9cIjtcblxuLyoqXG4gKiBOSERQbHVzIE1SIHdhdGVyYm9keSBmbGFncyBsYWcgcmVhbGl0eSDigJQgcmVhY2hlcyB0aHJvdWdoIFJFTU9WRUQgZGFtcyBzdGlsbFxuICogY2Fycnkgd2JhcmVhdHlwZSBMYWtlUG9uZCBhbmQgd291bGQgZmFsc2Utc3RvcCB0aGUgY2xvY2suIEtub3duIHJlbW92YWxzXG4gKiBhcmUgZXhjbHVkZWQgaGVyZSAoZXh0ZW5kYWJsZSBwZXItcnVuIHZpYSBjb25maWcuaW1wb3VuZEV4Y2x1ZGVDb21pZHMpLlxuICovXG5leHBvcnQgY29uc3QgUkVNT1ZFRF9JTVBPVU5ETUVOVF9DT01JRFMgPSBuZXcgU2V0KFtcbiAgLy8gTWlsbHRvd24gRGFtLCBDbGFyayBGb3JrIGF0IEJvbm5lciBNVCDigJQgcmVtb3ZlZCAyMDA4LTIwMTAgKHJlcG9ydGVkIGJ5IENvZHkgMjAyNi0wNy0wNylcbiAgMjQyOTMxMjAsIDI0MjkzMTIyLCAyNDI5MzEyNCxcbl0pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIG1heERpc3RhbmNlS206IDMwMCxcbiAgbWF4SG91cnM6IDI0LFxuICByZXNvbHV0aW9uTTogMTAwLjAsXG4gIHNhZmV0eUZhY3RvcjogMS41LFxuICBtYW5uaW5nTjogMC4wNDUsXG4gIG1pblN0cmVhbU9yZGVyOiA0LFxuICB3aWR0aFByb3ZpZGVyOiBudWxsLCAgICAgICAgLy8gYXN5bmMgKGVudiB7eG1pbix5bWluLHhtYXgseW1heH0pID0+IFt7bGF0LCBsb24sIHdpZHRofV1cbiAgd2lkdGhTYW1wbGVSYWRpdXNNOiA4MDAsXG4gIHdpZHRoV2luZG93UG9pbnRzOiAxMDAsICAgICAvLyB0cmFjZSBwb2ludHMgcGVyIG92ZXJyaWRlIHNhbXBsaW5nIHdpbmRvdyAofjEwIGttKVxuICBzaXRlUHJvdmlkZXJzOiBbXSxcbiAgcmVjZXB0b3JQcm92aWRlcnM6IFtdLFxuICBpbXBvdW5kU3RvcEttOiAyLjAsXG4gIGltcG91bmRFeGNsdWRlQ29taWRzOiBbXSwgICAvLyBleHRyYSByZW1vdmVkLWRhbSBjb21pZHMgYmV5b25kIFJFTU9WRURfSU1QT1VORE1FTlRfQ09NSURTXG4gIHRpbWluZ01vZGVsOiBcImh5ZHJhdWxpY1wiLCAgIC8vICdoeWRyYXVsaWMnIChWPVEvQSB4IHNhZmV0eSkgfCAnam9ic29uJyAoVVNHUyBXUklSIDk2LTQwMTMgZHllLXN0dWR5IHJlZ3Jlc3Npb25zKVxuICBhc09mOiBudWxsLCAgICAgICAgICAgICAgICAgLy8gJ1lZWVktTU0tREQnIGhpc3RvcmljYWwgUTsgbnVsbCA9IGxpdmVcbiAgdmVyYm9zZTogdHJ1ZSxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVyc1xuXG5jb25zdCBSX0VBUlRIID0gNjM3MTAwOC44O1xuXG5leHBvcnQgZnVuY3Rpb24gaGF2ZXJzaW5lTShsYXQxLCBsb24xLCBsYXQyLCBsb24yKSB7XG4gIGNvbnN0IHAxID0gKGxhdDEgKiBNYXRoLlBJKSAvIDE4MDtcbiAgY29uc3QgcDIgPSAobGF0MiAqIE1hdGguUEkpIC8gMTgwO1xuICBjb25zdCBkcCA9IHAyIC0gcDE7XG4gIGNvbnN0IGRsID0gKChsb24yIC0gbG9uMSkgKiBNYXRoLlBJKSAvIDE4MDtcbiAgY29uc3QgYSA9IE1hdGguc2luKGRwIC8gMikgKiogMiArIE1hdGguY29zKHAxKSAqIE1hdGguY29zKHAyKSAqIE1hdGguc2luKGRsIC8gMikgKiogMjtcbiAgcmV0dXJuIDIgKiBSX0VBUlRIICogTWF0aC5hc2luKE1hdGguc3FydChhKSk7XG59XG5cbi8qKiBQYXl0b24ncyB3aWR0aC9kZXB0aCBmb3JtdWxhcyAoZmFsbGJhY2sgd2hlbiBubyBHTE9XIGRhdGEpLiBWZXJiYXRpbS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZUdlb21ldHJ5UGF5dG9uKGRyYWluYWdlQXJlYVNxTWkpIHtcbiAgbGV0IHdpZHRoLCBkZXB0aDtcbiAgaWYgKGRyYWluYWdlQXJlYVNxTWkgPCAxMDApIHtcbiAgICB3aWR0aCA9IDEwLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAsIDAuNSk7XG4gICAgZGVwdGggPSAwLjUgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAsIDAuMyk7XG4gIH0gZWxzZSBpZiAoZHJhaW5hZ2VBcmVhU3FNaSA8IDEwMDApIHtcbiAgICB3aWR0aCA9IDUwLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwLCAwLjUpO1xuICAgIGRlcHRoID0gMS41ICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMCwgMC4zKTtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9IDE1MC4wICogTWF0aC5wb3coZHJhaW5hZ2VBcmVhU3FNaSAvIDUwMDAsIDAuNCk7XG4gICAgZGVwdGggPSAzLjAgKiBNYXRoLnBvdyhkcmFpbmFnZUFyZWFTcU1pIC8gNTAwMCwgMC4zKTtcbiAgfVxuICByZXR1cm4gW3dpZHRoLCBkZXB0aF07XG59XG5cbi8qKlxuICogTWFubmluZydzIGRlcHRoIHZpYSBiaXNlY3Rpb24gKFB5dGhvbiB1c2VkIHNjaXB5IGJyZW50cSBvbiBbMC4xLCAyMF0pLlxuICogVGhlIHJlc2lkdWFsIGlzIG1vbm90b25pY2FsbHkgaW5jcmVhc2luZyBpbiBkZXB0aCwgc28gYmlzZWN0aW9uIGNvbnZlcmdlcyB0b1xuICogdGhlIHNhbWUgcm9vdC4gUmVwbGljYXRlcyBicmVudHEncyBmYWlsdXJlIG1vZGU6IG5vIHNpZ24gY2hhbmdlIGFjcm9zcyB0aGVcbiAqIGJyYWNrZXQgLT4gbnVsbCAoY2FsbGVyIGZhbGxzIGJhY2sgdG8gZm9ybXVsYSBkZXB0aCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEZXB0aE1hbm5pbmcoUW0zcywgd2lkdGhNLCBzbG9wZSwgbiA9IDAuMDQ1KSB7XG4gIGlmIChRbTNzIDw9IDAgfHwgd2lkdGhNIDw9IDAgfHwgc2xvcGUgPD0gMC4wMDAwMSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHJlc2lkdWFsID0gKGRlcHRoKSA9PiB7XG4gICAgaWYgKGRlcHRoIDw9IDAuMDEpIHJldHVybiAtUW0zcztcbiAgICBjb25zdCBBID0gd2lkdGhNICogZGVwdGg7XG4gICAgY29uc3QgUCA9IHdpZHRoTSArIDIgKiBkZXB0aDtcbiAgICBjb25zdCBSID0gQSAvIFA7XG4gICAgcmV0dXJuICgxIC8gbikgKiBBICogTWF0aC5wb3coUiwgMiAvIDMpICogTWF0aC5zcXJ0KHNsb3BlKSAtIFFtM3M7XG4gIH07XG4gIGxldCBsbyA9IDAuMSwgaGkgPSAyMC4wO1xuICBsZXQgZmxvID0gcmVzaWR1YWwobG8pLCBmaGkgPSByZXNpZHVhbChoaSk7XG4gIGlmIChmbG8gPT09IDApIHJldHVybiBsbztcbiAgaWYgKGZoaSA9PT0gMCkgcmV0dXJuIGhpO1xuICBpZiAoZmxvICogZmhpID4gMCkgcmV0dXJuIG51bGw7IC8vIGJyZW50cSByYWlzZXMgLT4gUHl0aG9uIHJldHVybnMgTm9uZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgbWlkID0gMC41ICogKGxvICsgaGkpO1xuICAgIGNvbnN0IGZtID0gcmVzaWR1YWwobWlkKTtcbiAgICBpZiAoZm0gPT09IDAgfHwgKGhpIC0gbG8pIC8gMiA8IDFlLTEwKSByZXR1cm4gbWlkO1xuICAgIGlmIChmbG8gKiBmbSA8IDApIHsgaGkgPSBtaWQ7IGZoaSA9IGZtOyB9IGVsc2UgeyBsbyA9IG1pZDsgZmxvID0gZm07IH1cbiAgfVxuICByZXR1cm4gMC41ICogKGxvICsgaGkpO1xufVxuXG5jb25zdCBzbGVlcCA9IChtcykgPT4gbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgbXMpKTtcblxuLyoqIEdFVC9QT1NUIHdpdGggcmV0cnkg4oCUIE5MREkvZ2Vvc2VydmVyIGludGVybWl0dGVudGx5IHJldHVybiBlbXB0eSAyMDAgYm9kaWVzLiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbih1cmwsIHsgcGFyYW1zID0gbnVsbCwgZGF0YSA9IG51bGwsIHRyaWVzID0gMywgdGltZW91dE1zID0gOTAwMDAgfSA9IHt9KSB7XG4gIGxldCBsYXN0ID0gbnVsbDtcbiAgZm9yIChsZXQgYXR0ZW1wdCA9IDA7IGF0dGVtcHQgPCB0cmllczsgYXR0ZW1wdCsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN0cmwgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gY3RybC5hYm9ydCgpLCB0aW1lb3V0TXMpO1xuICAgICAgbGV0IHJlc3A7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHNpZ25hbDogY3RybC5zaWduYWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcXMgPSBwYXJhbXMgPyBcIj9cIiArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpIDogXCJcIjtcbiAgICAgICAgICByZXNwID0gYXdhaXQgZmV0Y2godXJsICsgcXMsIHsgc2lnbmFsOiBjdHJsLnNpZ25hbCB9KTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzcC5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcC5zdGF0dXN9YCk7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcC5qc29uKCk7IC8vIGVtcHR5IGJvZHkgLT4gU3ludGF4RXJyb3IgLT4gcmV0cnlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsYXN0ID0gZTtcbiAgICAgIGF3YWl0IHNsZWVwKDE1MDAgKiAoYXR0ZW1wdCArIDEpKTtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGAke3VybH0gZmFpbGVkIGFmdGVyICR7dHJpZXN9IHRyaWVzOiAke2xhc3R9YCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRleHQodXJsLCBwYXJhbXMsIHRpbWVvdXRNcyA9IDMwMDAwKSB7XG4gIGNvbnN0IGN0cmwgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjdHJsLmFib3J0KCksIHRpbWVvdXRNcyk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHVybCArIFwiP1wiICsgbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCksIHsgc2lnbmFsOiBjdHJsLnNpZ25hbCB9KTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcC50ZXh0KCk7XG4gIH0gZmluYWxseSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRhdGEgZmV0Y2hcblxuLyoqIFNuYXAgdG8gbmVhcmVzdCByZWFjaCB3aXRoIHN0cmVhbW9yZGUgPj0gbWluT3JkZXIgKGdlb3NlcnZlciBiYm94IHNlYXJjaCkuICovXG5hc3luYyBmdW5jdGlvbiBzbmFwQ29taWQobGF0LCBsb24sIG1pbk9yZGVyKSB7XG4gIGNvbnN0IGJveCA9IDAuMjtcbiAgLy8gTk9URTogRVBTRzo0MjY5IHVuZGVyIFdGUyAyLjAgdXNlcyBsYXQsbG9uIGF4aXMgb3JkZXIgaW4gQ1FMIEJCT1hcbiAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oR0VPU0VSVkVSLCB7XG4gICAgZGF0YToge1xuICAgICAgc2VydmljZTogXCJXRlNcIiwgdmVyc2lvbjogXCIyLjAuMFwiLCByZXF1ZXN0OiBcIkdldEZlYXR1cmVcIixcbiAgICAgIHR5cGVOYW1lOiBcIndtYWRhdGE6bmhkZmxvd2xpbmVfbmV0d29ya1wiLCBvdXRwdXRGb3JtYXQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgY3FsX2ZpbHRlcjpcbiAgICAgICAgYHN0cmVhbW9yZGUgPj0gJHttaW5PcmRlcn0gQU5EIEJCT1godGhlX2dlb20sYCArXG4gICAgICAgIGAke2xhdCAtIGJveH0sJHtsb24gLSBib3h9LCR7bGF0ICsgYm94fSwke2xvbiArIGJveH0pYCxcbiAgICAgIGNvdW50OiBcIjUwMFwiLFxuICAgIH0sXG4gIH0pO1xuICBsZXQgYmVzdCA9IG51bGwsIGJlc3REID0gSW5maW5pdHk7XG4gIGZvciAoY29uc3QgZiBvZiBqLmZlYXR1cmVzIHx8IFtdKSB7XG4gICAgY29uc3QgZyA9IGYuZ2VvbWV0cnk7XG4gICAgY29uc3QgcGF0aHMgPSBnLnR5cGUgPT09IFwiTGluZVN0cmluZ1wiID8gW2cuY29vcmRpbmF0ZXNdIDogZy5jb29yZGluYXRlcztcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkgKz0gMykgeyAvLyBldmVyeSAzcmQgdmVydGV4XG4gICAgICAgIGNvbnN0IHAgPSBwYXRoW2ldO1xuICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lTShsYXQsIGxvbiwgcFsxXSwgcFswXSk7XG4gICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0ID0gZi5wcm9wZXJ0aWVzOyB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChiZXN0ICE9PSBudWxsKSByZXR1cm4gW051bWJlcihiZXN0LmNvbWlkKSwgYmVzdC5nbmlzX25hbWUgPz8gbnVsbCwgYmVzdERdO1xuICByZXR1cm4gW2F3YWl0IG5sZGlQb3NpdGlvbkNvbWlkKGxhdCwgbG9uKSwgbnVsbCwgbnVsbF07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5sZGlQb3NpdGlvbkNvbWlkKGxhdCwgbG9uKSB7XG4gIGNvbnN0IGogPSBhd2FpdCBnZXRKc29uKGAke05MRElfQkFTRX0vbGlua2VkLWRhdGEvY29taWQvcG9zaXRpb25gLCB7XG4gICAgcGFyYW1zOiB7IGNvb3JkczogYFBPSU5UKCR7bG9ufSAke2xhdH0pYCB9LCB0aW1lb3V0TXM6IDMwMDAwLFxuICB9KTtcbiAgcmV0dXJuIE51bWJlcihqLmZlYXR1cmVzWzBdLnByb3BlcnRpZXMuaWRlbnRpZmllcik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5sZGlEbUZsb3dsaW5lcyhjb21pZCwgZGlzdGFuY2VLbSkge1xuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkLyR7Y29taWR9L25hdmlnYXRpb24vRE0vZmxvd2xpbmVzYCwge1xuICAgIHBhcmFtczogeyBkaXN0YW5jZTogU3RyaW5nKE1hdGgudHJ1bmMoZGlzdGFuY2VLbSkpIH0sXG4gIH0pO1xuICBjb25zdCBnZW9tcyA9IG5ldyBNYXAoKTsgLy8gY29taWQgLT4gW3BhdGhzXSAoW1tsb24sbGF0XSwuLi5dKVxuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xuICAgIGNvbnN0IGNpZCA9IE51bWJlcihmLnByb3BlcnRpZXMubmhkcGx1c19jb21pZCk7XG4gICAgY29uc3QgZyA9IGYuZ2VvbWV0cnk7XG4gICAgaWYgKGcudHlwZSA9PT0gXCJMaW5lU3RyaW5nXCIpIGdlb21zLnNldChjaWQsIFtnLmNvb3JkaW5hdGVzXSk7XG4gICAgZWxzZSBpZiAoZy50eXBlID09PSBcIk11bHRpTGluZVN0cmluZ1wiKSBnZW9tcy5zZXQoY2lkLCBnLmNvb3JkaW5hdGVzKTtcbiAgfVxuICByZXR1cm4gZ2VvbXM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5sZGlEbUdhdWdlcyhjb21pZCwgZGlzdGFuY2VLbSkge1xuICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihgJHtOTERJX0JBU0V9L2xpbmtlZC1kYXRhL2NvbWlkLyR7Y29taWR9L25hdmlnYXRpb24vRE0vbndpc3NpdGVgLCB7XG4gICAgcGFyYW1zOiB7IGRpc3RhbmNlOiBTdHJpbmcoTWF0aC50cnVuYyhkaXN0YW5jZUttKSkgfSxcbiAgfSk7XG4gIGNvbnN0IG91dCA9IFtdO1xuICBmb3IgKGNvbnN0IGYgb2Ygai5mZWF0dXJlcyB8fCBbXSkge1xuICAgIGNvbnN0IHNpZCA9IChmLnByb3BlcnRpZXMuaWRlbnRpZmllciB8fCBcIlwiKS5yZXBsYWNlKFwiVVNHUy1cIiwgXCJcIik7XG4gICAgaWYgKHNpZC5sZW5ndGggPiAxNSkgY29udGludWU7IC8vIGNvb3JkaW5hdGUtc3R5bGUgSURzIChub3RlYm9vayBydWxlKVxuICAgIG91dC5wdXNoKHtcbiAgICAgIHN0YXRpb25faWQ6IHNpZCxcbiAgICAgIG5hbWU6IGYucHJvcGVydGllcy5uYW1lIHx8IFwiVW5rbm93blwiLFxuICAgICAgbGF0OiBmLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzFdLFxuICAgICAgbG9uOiBmLmdlb21ldHJ5LmNvb3JkaW5hdGVzWzBdLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBWQUFzIGZvciBhIGxpc3Qgb2YgQ09NSURzIGZyb20gVVNHUyBnZW9zZXJ2ZXIgKGJhdGNoZWQgUE9TVCkuICovXG5hc3luYyBmdW5jdGlvbiB2YWFCYXRjaChjb21pZHMpIHtcbiAgY29uc3Qgb3V0ID0gbmV3IE1hcCgpO1xuICBjb25zdCBDSFVOSyA9IDE1MDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21pZHMubGVuZ3RoOyBpICs9IENIVU5LKSB7XG4gICAgY29uc3QgY2h1bmsgPSBjb21pZHMuc2xpY2UoaSwgaSArIENIVU5LKTtcbiAgICBjb25zdCBqID0gYXdhaXQgZ2V0SnNvbihHRU9TRVJWRVIsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VydmljZTogXCJXRlNcIiwgdmVyc2lvbjogXCIyLjAuMFwiLCByZXF1ZXN0OiBcIkdldEZlYXR1cmVcIixcbiAgICAgICAgdHlwZU5hbWU6IFwid21hZGF0YTpuaGRmbG93bGluZV9uZXR3b3JrXCIsXG4gICAgICAgIG91dHB1dEZvcm1hdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIGNxbF9maWx0ZXI6IGBjb21pZCBJTiAoJHtjaHVuay5qb2luKFwiLFwiKX0pYCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBmIG9mIGouZmVhdHVyZXMgfHwgW10pIHtcbiAgICAgIGNvbnN0IHAgPSBmLnByb3BlcnRpZXM7XG4gICAgICAvLyBFUk9NIG1vbnRobHkgbW9kZWxlZCBmbG93IChnYXVnZS1hZGp1c3RlZCwgY2ZzKSDigJQgdW5nYXVnZWQgZmFsbGJhY2sgKyBKb2Jzb24gUWFcbiAgICAgIGNvbnN0IHFlID0ge307XG4gICAgICBmb3IgKGxldCBtID0gMTsgbSA8PSAxMjsgbSsrKSB7XG4gICAgICAgIGNvbnN0IGsgPSBgcWVfJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgICAgIHFlW21dID0gcFtrXSA/PyBudWxsO1xuICAgICAgfVxuICAgICAgb3V0LnNldChOdW1iZXIocC5jb21pZCksIHtcbiAgICAgICAgaHlkcm9zZXE6IHAuaHlkcm9zZXEgPz8gbnVsbCxcbiAgICAgICAgc3RyZWFtb3JkZTogcC5zdHJlYW1vcmRlID8/IG51bGwsXG4gICAgICAgIHNsb3BlOiBwLnNsb3BlID8/IG51bGwsXG4gICAgICAgIHRvdGRhc3FrbTogcC50b3RkYXNxa20gPz8gbnVsbCxcbiAgICAgICAgZnR5cGU6IHAuZnR5cGUgPz8gbnVsbCxcbiAgICAgICAgZmNvZGU6IHAuZmNvZGUgPz8gbnVsbCxcbiAgICAgICAgZ25pc19uYW1lOiBwLmduaXNfbmFtZSA/PyBudWxsLFxuICAgICAgICAvLyBMYWtlUG9uZC9SZXNlcnZvaXIgPSBpbXBvdW5kZWQ7IFN0cmVhbVJpdmVyID0gYnJhaWRlZCBmcmVlLWZsb3dpbmdcbiAgICAgICAgd2JhcmVhdHlwZTogcC53YmFyZWF0eXBlID8/IG51bGwsXG4gICAgICAgIHZlX21hOiBwLnZlX21hID8/IG51bGwsXG4gICAgICAgIHFlX21hOiBwLnFlX21hID8/IG51bGwsICAgLy8gRVJPTSBtZWFuIGFubnVhbCBmbG93IChjZnMpIOKAlCBKb2Jzb24gUWFcbiAgICAgICAgcWVfbW9udGhseTogcWUsXG4gICAgICAgIC8vIE5IRFBsdXMgZGl2ZXJnZW5jZTogMCA9IG5vbmUsIDEgPSBtYWluIHBhdGgsIDIgPSBtaW5vciBwYXRoIG9mIGEgc3BsaXRcbiAgICAgICAgZGl2ZXJnZW5jZTogcC5kaXZlcmdlbmNlID8/IDAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIERpc2NoYXJnZSAoY2ZzKSArIGRyYWluYWdlIGFyZWEgKHNxIG1pKSBwZXIgZ2F1Z2UgdmlhIHBsYWluIE5XSVMgUkVTVC4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdhdWdlSW5mbyhzdGF0aW9uSWRzLCBhc09mID0gbnVsbCkge1xuICBjb25zdCBpbmZvID0gbmV3IE1hcCgpO1xuICBpZiAoIXN0YXRpb25JZHMubGVuZ3RoKSByZXR1cm4gaW5mbztcbiAgY29uc3Qgc2l0ZXMgPSBzdGF0aW9uSWRzLmpvaW4oXCIsXCIpO1xuXG4gIC8vIGRyYWluYWdlIGFyZWFzIChyZGIsIGV4cGFuZGVkIG91dHB1dClcbiAgdHJ5IHtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZ2V0VGV4dChOV0lTX1NJVEUsIHsgZm9ybWF0OiBcInJkYlwiLCBzaXRlcywgc2l0ZU91dHB1dDogXCJleHBhbmRlZFwiIH0pO1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5maWx0ZXIoKGwpID0+IGwgJiYgIWwuc3RhcnRzV2l0aChcIiNcIikpO1xuICAgIGlmIChsaW5lcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3QgaGRyID0gbGluZXNbMF0uc3BsaXQoXCJcXHRcIik7XG4gICAgICBjb25zdCBpU2l0ZSA9IGhkci5pbmRleE9mKFwic2l0ZV9ub1wiKTtcbiAgICAgIGNvbnN0IGlEYSA9IGhkci5pbmRleE9mKFwiZHJhaW5fYXJlYV92YVwiKTsgLy8gLTEgaWYgYWJzZW50XG4gICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMuc2xpY2UoMikpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoIDw9IE1hdGgubWF4KGlTaXRlLCBpRGEgPiAtMSA/IGlEYSA6IDApKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGRhID0gbnVsbDtcbiAgICAgICAgaWYgKGlEYSA+IC0xKSB7XG4gICAgICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQocGFydHNbaURhXSk7XG4gICAgICAgICAgZGEgPSBOdW1iZXIuaXNGaW5pdGUodikgPyB2IDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnNldChwYXJ0c1tpU2l0ZV0sIHsgZHJhaW5hZ2VfYXJlYTogZGEgfSk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHsgLyogaWdub3JlIOKAlCBtYXRjaGVzIFB5dGhvbiAqLyB9XG5cbiAgLy8gZGlzY2hhcmdlXG4gIGNvbnN0IHBhcmFtcyA9IHsgZm9ybWF0OiBcImpzb25cIiwgc2l0ZXMsIHBhcmFtZXRlckNkOiBcIjAwMDYwXCIgfTtcbiAgaWYgKGFzT2YpIHsgcGFyYW1zLnN0YXJ0RFQgPSBhc09mOyBwYXJhbXMuZW5kRFQgPSBhc09mOyB9XG4gIGVsc2UgcGFyYW1zLnBlcmlvZCA9IFwiUDFEXCI7XG4gIHRyeSB7XG4gICAgY29uc3QgaiA9IGF3YWl0IGdldEpzb24oTldJU19JViwgeyBwYXJhbXMsIHRpbWVvdXRNczogNjAwMDAsIHRyaWVzOiAxIH0pO1xuICAgIGZvciAoY29uc3QgdHMgb2Ygaj8udmFsdWU/LnRpbWVTZXJpZXMgfHwgW10pIHtcbiAgICAgIGNvbnN0IHNpZCA9IHRzLnNvdXJjZUluZm8uc2l0ZUNvZGVbMF0udmFsdWU7XG4gICAgICBjb25zdCB2YWxzID0gdHMudmFsdWVzWzBdLnZhbHVlO1xuICAgICAgaWYgKCF2YWxzIHx8ICF2YWxzLmxlbmd0aCkgY29udGludWU7XG4gICAgICBjb25zdCBxID0gcGFyc2VGbG9hdCh2YWxzW3ZhbHMubGVuZ3RoIC0gMV0udmFsdWUpO1xuICAgICAgaWYgKHEgPj0gMCkge1xuICAgICAgICBpZiAoIWluZm8uaGFzKHNpZCkpIGluZm8uc2V0KHNpZCwge30pO1xuICAgICAgICBpbmZvLmdldChzaWQpLmRpc2NoYXJnZSA9IHE7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHsgLyogaWdub3JlIOKAlCBtYXRjaGVzIFB5dGhvbiAqLyB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRyYWNlIGFzc2VtYmx5XG5cbi8qKiBPcmRlciBzZWdtZW50cyBkb3duc3RyZWFtIChoeWRyb3NlcSBkZXNjKSwgb3JpZW50LCB0cmltIHRvIHNwaWxsIHBvaW50LFxuICogIGVtaXQgfnJlc29sdXRpb25NIHNwYWNlZCBwb2ludHMgY2FycnlpbmcgVkFBIGF0dHJpYnV0ZXMuICovXG5mdW5jdGlvbiBhc3NlbWJsZVRyYWNlKGxhdCwgbG9uLCBnZW9tcywgdmFhLCByZXNvbHV0aW9uTSwgbG9nKSB7XG4gIGNvbnN0IHNlZ3MgPSBbXTtcbiAgZm9yIChjb25zdCBbY2lkLCBwYXRoc10gb2YgZ2VvbXMpIHtcbiAgICBjb25zdCB2ID0gdmFhLmdldChjaWQpO1xuICAgIGlmICghdiB8fCB2Lmh5ZHJvc2VxID09PSBudWxsIHx8IHYuaHlkcm9zZXEgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgY29uc3QgY29vcmRzID0gcGF0aHMuZmxhdCgpOyAvLyBmbGF0dGVuIG11bHRpbGluZSBpbnRvIG9uZSB2ZXJ0ZXggbGlzdFxuICAgIGlmIChjb29yZHMubGVuZ3RoIDwgMikgY29udGludWU7XG4gICAgc2Vncy5wdXNoKHsgY29taWQ6IGNpZCwgY29vcmRzLCAuLi52IH0pO1xuICB9XG4gIHNlZ3Muc29ydCgoYSwgYikgPT4gYi5oeWRyb3NlcSAtIGEuaHlkcm9zZXEpOyAvLyBkb3duc3RyZWFtID0gZGVjcmVhc2luZyBoeWRyb3NlcVxuXG4gIC8vIG9yaWVudCBlYWNoIHNlZ21lbnQgc28gaXQgZmxvd3Mgc3RhcnQtPmVuZCwgY2hhaW5pbmcgZW5kcyB0byBzdGFydHNcbiAgbGV0IHByZXZFbmQgPSBudWxsO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2Vncykge1xuICAgIGxldCBjID0gcy5jb29yZHM7XG4gICAgaWYgKHByZXZFbmQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRTdGFydCA9IGhhdmVyc2luZU0ocHJldkVuZFsxXSwgcHJldkVuZFswXSwgY1swXVsxXSwgY1swXVswXSk7XG4gICAgICBjb25zdCBkRW5kID0gaGF2ZXJzaW5lTShwcmV2RW5kWzFdLCBwcmV2RW5kWzBdLCBjW2MubGVuZ3RoIC0gMV1bMV0sIGNbYy5sZW5ndGggLSAxXVswXSk7XG4gICAgICBpZiAoZEVuZCA8IGRTdGFydCkgYyA9IGMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHMuY29vcmRzID0gYztcbiAgICBwcmV2RW5kID0gY1tjLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgLy8gdHJpbSB0aGUgZmlyc3Qgc2VnbWVudCB0byBzdGFydCBhdCB0aGUgdmVydGV4IG5lYXJlc3QgdGhlIHNwaWxsIHBvaW50XG4gIGlmIChzZWdzLmxlbmd0aCkge1xuICAgIGNvbnN0IGMwID0gc2Vnc1swXS5jb29yZHM7XG4gICAgbGV0IG1pbkkgPSAwLCBtaW5EID0gSW5maW5pdHk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjMC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0obGF0LCBsb24sIGMwW2ldWzFdLCBjMFtpXVswXSk7XG4gICAgICBpZiAoZCA8IG1pbkQpIHsgbWluRCA9IGQ7IG1pbkkgPSBpOyB9XG4gICAgfVxuICAgIGNvbnN0IHRyaW1tZWQgPSBjMC5zbGljZShtaW5JKTtcbiAgICBzZWdzWzBdLmNvb3JkcyA9IHRyaW1tZWQubGVuZ3RoID8gdHJpbW1lZCA6IFtjMFtjMC5sZW5ndGggLSAxXV07XG4gIH1cblxuICAvLyBmbGF0dGVuIHRvIGF0dHJpYnV0ZWQgcG9pbnRzLCBkb3duc2FtcGxlIHRvIHJlc29sdXRpb25NXG4gIGxldCBwdHMgPSBbXTtcbiAgZm9yIChjb25zdCBzIG9mIHNlZ3MpIHtcbiAgICBsZXQgc2xvcGUgPSBzLnNsb3BlO1xuICAgIGlmIChzbG9wZSA9PT0gbnVsbCB8fCBzbG9wZSA9PT0gdW5kZWZpbmVkIHx8IHNsb3BlIDwgMCkgc2xvcGUgPSAwLjAwMTsgLy8gLTk5OTggPSBtaXNzaW5nXG4gICAgZm9yIChjb25zdCBwIG9mIHMuY29vcmRzKSB7XG4gICAgICBwdHMucHVzaCh7XG4gICAgICAgIGxvbjogcFswXSwgbGF0OiBwWzFdLFxuICAgICAgICBkcmFpbmFnZV9hcmVhX2ttMjogcy50b3RkYXNxa20gfHwgMCxcbiAgICAgICAgc2xvcGUsXG4gICAgICAgIGZ0eXBlOiBzLmZ0eXBlLCB3YmFyZWF0eXBlOiBzLndiYXJlYXR5cGUsXG4gICAgICAgIGNvbWlkOiBzLmNvbWlkLFxuICAgICAgICBnbmlzX25hbWU6IHMuZ25pc19uYW1lLFxuICAgICAgICBxZV9tYTogcy5xZV9tYSwgcWVfbW9udGhseTogcy5xZV9tb250aGx5LFxuICAgICAgICBkaXZlcmdlbmNlOiBzLmRpdmVyZ2VuY2UgfHwgMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAocHRzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBrZWVwID0gW3B0c1swXV07XG4gICAgbGV0IGN1bSA9IDAuMDtcbiAgICBsZXQgbGFzdCA9IHB0c1swXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcCA9IHB0c1tpXTtcbiAgICAgIGN1bSArPSBoYXZlcnNpbmVNKGxhc3QubGF0LCBsYXN0LmxvbiwgcC5sYXQsIHAubG9uKTtcbiAgICAgIGxhc3QgPSBwO1xuICAgICAgaWYgKGN1bSA+PSByZXNvbHV0aW9uTSkgeyBrZWVwLnB1c2gocCk7IGN1bSA9IDAuMDsgfVxuICAgIH1cbiAgICBwdHMgPSBrZWVwO1xuICB9XG4gIGxvZyhgICB0cmFjZTogJHtzZWdzLmxlbmd0aH0gc2VnbWVudHMgLT4gJHtwdHMubGVuZ3RofSBwb2ludHMgKCR7c2Vncy5sZW5ndGggPyBzZWdzWzBdLmduaXNfbmFtZSA6IFwiP1wifSAuLi4pYCk7XG4gIHJldHVybiBbcHRzLCBzZWdzLmxlbmd0aCA/IHNlZ3NbMF0uZ25pc19uYW1lIDogbnVsbF07XG59XG5cbi8qKiBDbGFtcGVkIGxpbmVhciBpbnRlcnBvbGF0aW9uIChzY2lweSBpbnRlcnAxZCB3aXRoIGNsYW1wZWQgZmlsbF92YWx1ZSkuICovXG5mdW5jdGlvbiBpbnRlcnBDbGFtcGVkKHhzLCB5cykge1xuICByZXR1cm4gKHgpID0+IHtcbiAgICBpZiAoeCA8PSB4c1swXSkgcmV0dXJuIHlzWzBdO1xuICAgIGlmICh4ID49IHhzW3hzLmxlbmd0aCAtIDFdKSByZXR1cm4geXNbeXMubGVuZ3RoIC0gMV07XG4gICAgbGV0IGkgPSAxO1xuICAgIHdoaWxlICh4c1tpXSA8IHgpIGkrKztcbiAgICBjb25zdCB0ID0gKHggLSB4c1tpIC0gMV0pIC8gKHhzW2ldIC0geHNbaSAtIDFdKTtcbiAgICByZXR1cm4geXNbaSAtIDFdICsgdCAqICh5c1tpXSAtIHlzW2kgLSAxXSk7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWFpbiBtb2RlbFxuLy9cbi8vIFNwbGl0IGludG8gdHdvIHN0YWdlcyBzbyB0aGUgZXhwZW5zaXZlIHBhcnQgaXMgY2FjaGVhYmxlOlxuLy8gICBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnKSAg4oCUIEFMTCBuZXR3b3JrIEkvTzogdHJhY2UgZ2VvbWV0cnksIFZBQXMsXG4vLyAgICAgd2lkdGggc2FtcGxpbmcsIGdhdWdlcyArIGZsb3dzLCBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzLiBTYWZldHkgZmFjdG9yLFxuLy8gICAgIG1heCBob3VycyBldGMuIGRvIE5PVCBhZmZlY3QgdGhpcyBzdGFnZS5cbi8vICAgY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZykgICAgICAgIOKAlCBwdXJlIG1hdGg6IFEgaW50ZXJwLCBNYW5uaW5nIGRlcHRoLFxuLy8gICAgIHZlbG9jaXR5IHggc2FmZXR5LCBpbXBvdW5kbWVudCwgdHJhdmVsIHRpbWUsIGhvdXJseSBtYXJrZXJzLCBzaXRlIEVUQXMuXG4vLyAgICAgRGV0ZXJtaW5pc3RpYyBhbmQgcmUtcnVubmFibGUgb24gdGhlIHNhbWUgZGF0YSAoZmllbGRzIGFyZSBvdmVyd3JpdHRlbixcbi8vICAgICByb3dzIGFyZSBuZXZlciBzdHJ1Y3R1cmFsbHkgbXV0YXRlZCkuXG4vLyBydW5UcmFjZSgpIGNvbXBvc2VzIHRoZSB0d28g4oCUIGlkZW50aWNhbCBiZWhhdmlvciB0byB0aGUgb3JpZ2luYWwuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYWNlRGF0YShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcbiAgY29uc3QgY2ZnID0geyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XG4gIGNvbnN0IGxvZyA9IGNmZy52ZXJib3NlID8gKC4uLmEpID0+IGNvbnNvbGUubG9nKC4uLmEpIDogKCkgPT4ge307XG5cbiAgbG9nKGBmZXRjaFRyYWNlRGF0YSgke2xhdC50b0ZpeGVkKDQpfSwgJHtsb24udG9GaXhlZCg0KX0pICBhc09mPSR7Y2ZnLmFzT2YgfHwgXCJsaXZlXCJ9YCk7XG5cbiAgLy8gMS4gdHJhY2UgZ2VvbWV0cnkgKG9uZSBOTERJIGNhbGwpICsgVkFBIGJhdGNoIGpvaW5cbiAgY29uc3QgW2NvbWlkLCBzbmFwTmFtZSwgc25hcERdID0gYXdhaXQgc25hcENvbWlkKGxhdCwgbG9uLCBjZmcubWluU3RyZWFtT3JkZXIpO1xuICBsb2coYCAgQ09NSUQgJHtjb21pZH1gICsgKHNuYXBOYW1lID8gYCAoJHtzbmFwTmFtZX0sIHNuYXBwZWQgJHsoc25hcEQgLyAxMDAwKS50b0ZpeGVkKDIpfSBrbSlgIDogXCJcIikpO1xuICBjb25zdCBnZW9tcyA9IGF3YWl0IG5sZGlEbUZsb3dsaW5lcyhjb21pZCwgY2ZnLm1heERpc3RhbmNlS20pO1xuICBsb2coYCAgTkxESSBETSBmbG93bGluZXM6ICR7Z2VvbXMuc2l6ZX1gKTtcbiAgY29uc3QgdmFhID0gYXdhaXQgdmFhQmF0Y2goWy4uLmdlb21zLmtleXMoKV0pO1xuICBjb25zdCBbcHRzLCByaXZlck5hbWVdID0gYXNzZW1ibGVUcmFjZShsYXQsIGxvbiwgZ2VvbXMsIHZhYSwgY2ZnLnJlc29sdXRpb25NLCBsb2cpO1xuICBpZiAocHRzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcihcInRyYWNlIHRvbyBzaG9ydFwiKTtcblxuICAvLyBwZXItcG9pbnQgYXJyYXlzIChtaXJyb3JzIHRoZSBEYXRhRnJhbWUpXG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoO1xuICBjb25zdCByb3dzID0gcHRzLm1hcCgocCkgPT4gKHsgLi4ucCB9KSk7XG4gIHJvd3NbMF0uZGlzdGFuY2UgPSAwLjA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgcm93c1tpXS5kaXN0YW5jZSA9IGhhdmVyc2luZU0ocm93c1tpIC0gMV0ubGF0LCByb3dzW2kgLSAxXS5sb24sIHJvd3NbaV0ubGF0LCByb3dzW2ldLmxvbik7XG4gIH1cbiAgbGV0IGN1bSA9IDAuMDtcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHsgY3VtICs9IHIuZGlzdGFuY2U7IHIuY3VtX2Rpc3QgPSBjdW07IH1cbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuZHJhaW5hZ2VfYXJlYV9zcW1pID0gci5kcmFpbmFnZV9hcmVhX2ttMiAqIDAuMzg2MTAyO1xuXG4gIC8vIDIuIHdpZHRoczogZm9ybXVsYSBiYXNlbGluZSwgb3B0aW9uYWwgb3ZlcnJpZGUgcHJvdmlkZXIsIDJ4IGNhcCwgYmFja3dhcmQgc21vb3RoaW5nXG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci5mb3JtdWxhX3dpZHRoID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihyLmRyYWluYWdlX2FyZWFfc3FtaSlbMF07XG4gICAgci53aWR0aF9tID0gMC4wO1xuICB9XG4gIC8vIGJyYWlkZWQtcmVhY2ggZmxhZzogYW55IE5IRFBsdXMgZGl2ZXJnZW5jZSB3aXRoaW4gfjEga20gKDEwIHJvd3MpIOKAlCBHTE9XIHdpZHRoc1xuICAvLyB0aGVyZSBtZWFzdXJlIHRvdGFsIHdldHRlZCB3aWR0aCBhY3Jvc3MgYmFycywgaW5mbGF0aW5nIEEgYW5kIGtpbGxpbmcgdmVsb2NpdHlcbiAge1xuICAgIGNvbnN0IFcgPSAxMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgbGV0IGJyYWlkZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGsgPSBNYXRoLm1heCgwLCBpIC0gVyk7IGsgPD0gTWF0aC5taW4obiAtIDEsIGkgKyBXKTsgaysrKSB7XG4gICAgICAgIGlmIChyb3dzW2tdLmRpdmVyZ2VuY2UgPiAwKSB7IGJyYWlkZWQgPSB0cnVlOyBicmVhazsgfVxuICAgICAgfVxuICAgICAgcm93c1tpXS5icmFpZGVkID0gYnJhaWRlZDtcbiAgICB9XG4gICAgY29uc3QgbmIgPSByb3dzLmZpbHRlcigocikgPT4gci5icmFpZGVkKS5sZW5ndGg7XG4gICAgaWYgKG5iKSBsb2coYCAgYnJhaWRlZCBmbGFnOiAke25ifS8ke259IHRyYWNlIHBvaW50cyBuZWFyIGNoYW5uZWwgZGl2ZXJnZW5jZXMgKEdMT1cgb3ZlcnJpZGUgZGlzYWJsZWQgdGhlcmUpYCk7XG4gIH1cblxuICBpZiAoY2ZnLndpZHRoUHJvdmlkZXIpIHtcbiAgICAvLyBIUiBOSERQbHVzSUQgIT0gTVIgY29taWQg4oCUIHNhbXBsZSBzcGF0aWFsbHksIGluIHdpbmRvd3M7IG5ldmVyIGxldCB0aGVcbiAgICAvLyBvdmVycmlkZSBraWxsIHRoZSBydW4gKGRlZ3JhZGUgdG8gZm9ybXVsYSB3aWR0aHMpLlxuICAgIGxldCBtaWRzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFNURVAgPSBjZmcud2lkdGhXaW5kb3dQb2ludHM7XG4gICAgICBjb25zdCBwYWQgPSAwLjAzO1xuICAgICAgZm9yIChsZXQgaTAgPSAwOyBpMCA8IG47IGkwICs9IFNURVApIHtcbiAgICAgICAgY29uc3Qgd2luID0gcm93cy5zbGljZShpMCwgaTAgKyBTVEVQKTtcbiAgICAgICAgY29uc3QgZW52ID0ge1xuICAgICAgICAgIHhtaW46IE1hdGgubWluKC4uLndpbi5tYXAoKHIpID0+IHIubG9uKSkgLSBwYWQsXG4gICAgICAgICAgeW1pbjogTWF0aC5taW4oLi4ud2luLm1hcCgocikgPT4gci5sYXQpKSAtIHBhZCxcbiAgICAgICAgICB4bWF4OiBNYXRoLm1heCguLi53aW4ubWFwKChyKSA9PiByLmxvbikpICsgcGFkLFxuICAgICAgICAgIHltYXg6IE1hdGgubWF4KC4uLndpbi5tYXAoKHIpID0+IHIubGF0KSkgKyBwYWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZlYXRzID0gYXdhaXQgY2ZnLndpZHRoUHJvdmlkZXIoZW52KTsgLy8gW3tsYXQsIGxvbiwgd2lkdGh9XVxuICAgICAgICBtaWRzLnB1c2goLi4uZmVhdHMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZyhgICBXSURUSCBPVkVSUklERSBGQUlMRUQgKCR7U3RyaW5nKGUpLnNsaWNlKDAsIDgwKX0pIC0gZmFsbGluZyBiYWNrIHRvIGZvcm11bGEgd2lkdGhzYCk7XG4gICAgICBtaWRzID0gW107XG4gICAgfVxuICAgIGlmIChtaWRzLmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICAgICAgaWYgKHIuYnJhaWRlZCkgeyByLndpZHRoX20gPSAwLjA7IGNvbnRpbnVlOyB9IC8vIGZvcm11bGEgd2lkdGggb24gYnJhaWRlZCByZWFjaGVzXG4gICAgICAgIGxldCBiZXN0RCA9IEluZmluaXR5LCBiZXN0VyA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgbSBvZiBtaWRzKSB7XG4gICAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0oci5sYXQsIHIubG9uLCBtLmxhdCwgbS5sb24pO1xuICAgICAgICAgIGlmIChkIDwgYmVzdEQpIHsgYmVzdEQgPSBkOyBiZXN0VyA9IG0ud2lkdGggfHwgMDsgfVxuICAgICAgICB9XG4gICAgICAgIHIud2lkdGhfbSA9IGJlc3REIDw9IGNmZy53aWR0aFNhbXBsZVJhZGl1c00gPyBiZXN0VyA6IDAuMDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hdGNoZWQgPSByb3dzLmZpbHRlcigocikgPT4gci53aWR0aF9tID4gMCkubGVuZ3RoO1xuICAgICAgbG9nKGAgIEdMT1cgc3BhdGlhbCBzYW1wbGU6ICR7bWlkcy5sZW5ndGh9IEhSIHNlZ21lbnRzLCB3aWR0aHMgbWF0Y2hlZCBhdCAke21hdGNoZWR9LyR7bn0gdHJhY2UgcG9pbnRzYCk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgci53aWR0aF9maW5hbF9yYXcgPVxuICAgICAgci53aWR0aF9tID4gMCAmJiByLndpZHRoX20gPD0gci5mb3JtdWxhX3dpZHRoICogMi4wID8gci53aWR0aF9tIDogci5mb3JtdWxhX3dpZHRoO1xuICB9XG4gIC8vIHBhbmRhcyByb2xsaW5nKHdpbmRvdz01MSwgbWluX3BlcmlvZHM9MSkubWVhbigpIOKAlCB0cmFpbGluZyB3aW5kb3dcbiAge1xuICAgIGNvbnN0IFcgPSA1MTtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgc3VtICs9IHJvd3NbaV0ud2lkdGhfZmluYWxfcmF3O1xuICAgICAgaWYgKGkgPj0gVykgc3VtIC09IHJvd3NbaSAtIFddLndpZHRoX2ZpbmFsX3JhdztcbiAgICAgIHJvd3NbaV0ud2lkdGhfZmluYWwgPSBzdW0gLyBNYXRoLm1pbihpICsgMSwgVyk7XG4gICAgfVxuICB9XG5cbiAgLy8gMy4gZGlzY2hhcmdlIGlucHV0czogTkxESSBkb3duc3RyZWFtIGdhdWdlcyAtPiBOV0lTIFEgKCtEQSksIGxvY2F0ZWQgb24gdHJhY2VcbiAgY29uc3QgZ2F1Z2VzID0gYXdhaXQgbmxkaURtR2F1Z2VzKGNvbWlkLCBjZmcubWF4RGlzdGFuY2VLbSk7XG4gIGNvbnN0IGdpbmZvID0gYXdhaXQgZ2F1Z2VJbmZvKGdhdWdlcy5tYXAoKGcpID0+IGcuc3RhdGlvbl9pZCksIGNmZy5hc09mKTtcbiAgY29uc3QgZ2QgPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdhdWdlcykge1xuICAgIGNvbnN0IGkgPSBnaW5mby5nZXQoZy5zdGF0aW9uX2lkKSB8fCB7fTtcbiAgICBpZiAoaS5kaXNjaGFyZ2UgPT09IHVuZGVmaW5lZCB8fCAhaS5kcmFpbmFnZV9hcmVhKSBjb250aW51ZTtcbiAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgaWR4ID0gMDtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgY29uc3QgZCA9IGhhdmVyc2luZU0ocm93c1trXS5sYXQsIHJvd3Nba10ubG9uLCBnLmxhdCwgZy5sb24pO1xuICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGlkeCA9IGs7IH1cbiAgICB9XG4gICAgaWYgKGJlc3REID4gNTAwMCkgY29udGludWU7IC8vIGdhdWdlIG5vdCBvbiBvdXIgdHJhY2UgY29ycmlkb3JcbiAgICBjb25zdCBbdywgZGVwXSA9IGVzdGltYXRlR2VvbWV0cnlQYXl0b24oaS5kcmFpbmFnZV9hcmVhKTtcbiAgICBnZC5wdXNoKHtcbiAgICAgIC4uLmcsIGRpc2NoYXJnZTogaS5kaXNjaGFyZ2UsIGRyYWluYWdlX2FyZWE6IGkuZHJhaW5hZ2VfYXJlYSxcbiAgICAgIGFyZWE6IHcgKiBkZXAsIHRyYWNlX2Rpc3Q6IHJvd3NbaWR4XS5jdW1fZGlzdCxcbiAgICB9KTtcbiAgfVxuICBnZC5zb3J0KChhLCBiKSA9PiBhLnRyYWNlX2Rpc3QgLSBiLnRyYWNlX2Rpc3QpO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2QpIHtcbiAgICBsb2coYCAgZ2F1Z2UgJHtnLnN0YXRpb25faWR9ICR7Zy5uYW1lLnNsaWNlKDAsIDM4KS5wYWRFbmQoMzgpfSAke1N0cmluZyhNYXRoLnJvdW5kKGcuZGlzY2hhcmdlKSkucGFkU3RhcnQoOCl9IGNmcyBAICR7KGcudHJhY2VfZGlzdCAvIDEwMDApLnRvRml4ZWQoMSkucGFkU3RhcnQoNil9IGttYCk7XG4gIH1cblxuICAvLyA0LiBzaXRlL3JlY2VwdG9yIGZlYXR1cmVzIChmZXRjaGVkIGluIHBhcmFsbGVsOyBqb2luZWQgaW4gY29tcHV0ZVRyYWNlKVxuICBjb25zdCBmZXRjaFNldHMgPSBhc3luYyAocHJvdmlkZXJzKSA9PiBQcm9taXNlLmFsbChcbiAgICAocHJvdmlkZXJzIHx8IFtdKS5tYXAoYXN5bmMgKHApID0+ICh7XG4gICAgICBidWZmZXJfbTogcC5idWZmZXJfbSA/PyA0MDAsXG4gICAgICBmZWF0czogYXdhaXQgcC5mZXRjaCgpLCAvLyBbe25hbWUsIGxhdCwgbG9uLCAuLi5leHRyYX1dXG4gICAgfSkpLFxuICApO1xuICBjb25zdCBbc2l0ZVNldHMsIHJlY2VwdG9yU2V0c10gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBbZmV0Y2hTZXRzKGNmZy5zaXRlUHJvdmlkZXJzKSwgZmV0Y2hTZXRzKGNmZy5yZWNlcHRvclByb3ZpZGVycyldLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbGF0LCBsb24sIGNvbWlkLCBzbmFwTmFtZSwgc25hcERpc3RNOiBzbmFwRCwgcml2ZXJOYW1lLFxuICAgIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzLFxuICAgIGFzT2Y6IGNmZy5hc09mIHx8IFwibGl2ZVwiLFxuICAgIGZldGNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEpvYnNvbiAoVVNHUyBXUklSIDk2LTQwMTMpXG4vL1xuLy8gRHllLXRyYWNlciByZWdyZXNzaW9ucyBmcm9tIH45ODAgc3VicmVhY2hlcyAvIH45MCBVUyByaXZlcnMuIFVuaXRzOiBEYSBtXjIsXG4vLyBRICYgUWEgbV4zL3MsIFMgZGltZW5zaW9ubGVzcywgdmVsb2NpdGllcyBtL3MuIEVxIDEyLzEzICh3aXRoIHNsb3BlKSBvclxuLy8gMTQvMTUgKHdpdGhvdXQpLiBMZWFkaW5nIGVkZ2UgVGwgPSAwLjg5MCB4IFRwIChlcSAxOCkuIFBhc3NhZ2U6IHVuaXQtcGVha1xuLy8gY29uY2VudHJhdGlvbiBDdXAgPSA4NTcgeCBUcF4tMC43NjAgeCBRJ2FeLTAuMDc5IChUcCBob3VycywgZXEgNyksIGFuZFxuLy8gVGQxMCA9IDJlNiAvIEN1cCBzZWNvbmRzIChlcSAxOSkgPSBsZWFkaW5nIGVkZ2UgLT4gMTAlLW9mLXBlYWsgdHJhaWxpbmcuXG5leHBvcnQgZnVuY3Rpb24gam9ic29uVmVsb2NpdGllcyhkYU0yLCBRbTNzLCBRYU0zcywgc2xvcGUpIHtcbiAgaWYgKCEoZGFNMiA+IDApIHx8ICEoUW0zcyA+IDApIHx8ICEoUWFNM3MgPiAwKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGcgPSA5Ljg7XG4gIGNvbnN0IERwID0gKE1hdGgucG93KGRhTTIsIDEuMjUpICogTWF0aC5zcXJ0KGcpKSAvIFFhTTNzOyAvLyBEJ2EsIGVxIDEwXG4gIGNvbnN0IFFwID0gUW0zcyAvIFFhTTNzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUSdhLCBlcSAxMVxuICBjb25zdCBxT3ZlckRhID0gUW0zcyAvIGRhTTI7XG4gIGxldCB2cCwgdm1wO1xuICBpZiAoc2xvcGUgPiAwLjAwMDAxKSB7XG4gICAgY29uc3QgWCA9IE1hdGgucG93KERwLCAwLjkxOSkgKiBNYXRoLnBvdyhRcCwgLTAuNDY5KSAqIE1hdGgucG93KHNsb3BlLCAwLjE1OSkgKiBxT3ZlckRhO1xuICAgIHZwID0gMC4wOTQgKyAwLjAxNDMgKiBYOyAgIC8vIGVxIDEyXG4gICAgdm1wID0gMC4yNSArIDAuMDIgKiBYOyAgICAgLy8gZXEgMTMgKDk5JSBlbnZlbG9wZSDigJQgZmFzdGVzdCBwcm9iYWJsZSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBYID0gTWF0aC5wb3coRHAsIDAuODIxKSAqIE1hdGgucG93KFFwLCAtMC40NjUpICogcU92ZXJEYTtcbiAgICB2cCA9IDAuMDIwICsgMC4wNTEgKiBYOyAgICAvLyBlcSAxNFxuICAgIHZtcCA9IDAuMiArIDAuMDkzICogWDsgICAgIC8vIGVxIDE1XG4gIH1cbiAgcmV0dXJuIHsgdnAsIHZtcCwgcVByaW1lOiBRcCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9ic29uUGFzc2FnZUhvdXJzKHRwSG91cnMsIHFQcmltZSkge1xuICAvLyBlcSA3ICsgZXEgMTk6IGR1cmF0aW9uIGZyb20gbGVhZGluZyBlZGdlIHRvIDEwJS1vZi1wZWFrIHRyYWlsaW5nIGVkZ2VcbiAgaWYgKCEodHBIb3VycyA+IDApIHx8ICEocVByaW1lID4gMCkpIHJldHVybiBudWxsO1xuICBjb25zdCBjdXAgPSA4NTcgKiBNYXRoLnBvdyh0cEhvdXJzLCAtMC43NjApICogTWF0aC5wb3cocVByaW1lLCAtMC4wNzkpOyAvLyBzXi0xXG4gIHJldHVybiAyZTYgLyBjdXAgLyAzNjAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGNmZyA9IHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICBjb25zdCBsb2cgPSBjZmcudmVyYm9zZSA/ICguLi5hKSA9PiBjb25zb2xlLmxvZyguLi5hKSA6ICgpID0+IHt9O1xuICBjb25zdCB7IGNvbWlkLCByaXZlck5hbWUsIHJvd3MsIGdkLCBzaXRlU2V0cywgcmVjZXB0b3JTZXRzIH0gPSBkYXRhO1xuICBjb25zdCBuID0gcm93cy5sZW5ndGg7XG5cbiAgLy8gNS4gZGlzY2hhcmdlOiBpbnRlcnBvbGF0ZSBhbG9uZyB0cmFjZVxuICAvLyBtb250aCBmb3IgRVJPTSBsb29rdXBzOiBhc19vZiBtb250aCBpZiBwaW5uZWQsIGVsc2UgY3VycmVudFxuICBjb25zdCBlcm9tTW9udGggPSBkYXRhLmFzT2YgJiYgZGF0YS5hc09mICE9PSBcImxpdmVcIlxuICAgID8gcGFyc2VJbnQoZGF0YS5hc09mLnNsaWNlKDUsIDcpLCAxMClcbiAgICA6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG5cbiAgbGV0IHFNZXRob2QsIHFDb25maWRlbmNlO1xuICBpZiAoZ2QubGVuZ3RoID49IDIpIHtcbiAgICBjb25zdCBmUSA9IGludGVycENsYW1wZWQoZ2QubWFwKChnKSA9PiBnLnRyYWNlX2Rpc3QpLCBnZC5tYXAoKGcpID0+IGcuZGlzY2hhcmdlKSk7XG4gICAgZm9yIChjb25zdCByIG9mIHJvd3MpIHIuUV9jZnMgPSBNYXRoLm1heChmUShyLmN1bV9kaXN0KSwgMS4wKTtcbiAgICBxTWV0aG9kID0gXCJnYXVnZS1pbnRlcnBvbGF0aW9uXCI7IHFDb25maWRlbmNlID0gXCJISUdIXCI7XG4gIH0gZWxzZSBpZiAoZ2QubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZyA9IGdkWzBdO1xuICAgIGZvciAoY29uc3QgciBvZiByb3dzKSB7XG4gICAgICByLlFfY2ZzID0gTWF0aC5tYXgoZy5kaXNjaGFyZ2UgKiAoci5kcmFpbmFnZV9hcmVhX3NxbWkgLyBnLmRyYWluYWdlX2FyZWEpLCAxLjApO1xuICAgIH1cbiAgICBxTWV0aG9kID0gXCJzaW5nbGUtZ2F1Z2UtREEtcmF0aW9cIjsgcUNvbmZpZGVuY2UgPSBcIk1FRElVTVwiO1xuICAgIGxvZyhcIiAgMSBnYXVnZTogc2NhbGluZyBieSBkcmFpbmFnZS1hcmVhIHJhdGlvXCIpO1xuICB9IGVsc2Uge1xuICAgIC8vIEVST00gcGVyLXJlYWNoIG1vbnRobHkgbW9kZWxlZCBmbG93IChnYXVnZS1hZGp1c3RlZDsgY2FwdHVyZXMgc2Vhc29uYWxcbiAgICAvLyB5aWVsZCDigJQgTW9udGFuYSBKdW5lIHZzIFNlcHRlbWJlciBkaWZmZXJzIH41eCkgYmVmb3JlIHRoZSBmbGF0IGNvbnN0YW50XG4gICAgY29uc3QgZXJvbU9rID0gcm93cy5maWx0ZXIoKHIpID0+IHIucWVfbW9udGhseSAmJiByLnFlX21vbnRobHlbZXJvbU1vbnRoXSA+IDApLmxlbmd0aDtcbiAgICBpZiAoZXJvbU9rID49IHJvd3MubGVuZ3RoICogMC44KSB7XG4gICAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykge1xuICAgICAgICBjb25zdCBxZSA9IHIucWVfbW9udGhseSA/IHIucWVfbW9udGhseVtlcm9tTW9udGhdIDogbnVsbDtcbiAgICAgICAgci5RX2NmcyA9IE1hdGgubWF4KHFlID4gMCA/IHFlIDogci5kcmFpbmFnZV9hcmVhX3NxbWkgKiAyLjAsIDEuMCk7XG4gICAgICB9XG4gICAgICBxTWV0aG9kID0gYGVyb20tbW9udGhseSAobW9udGggJHtlcm9tTW9udGh9KWA7IHFDb25maWRlbmNlID0gXCJNT0RFUkFURSDigJQgbW9kZWxlZCBmbG93LCBubyBsaXZlIGdhdWdlXCI7XG4gICAgICBsb2coYCAgTk8gZ2F1Z2VzOiBFUk9NIG1vbnRobHkgbW9kZWxlZCBmbG93IChtb250aCAke2Vyb21Nb250aH0sICR7ZXJvbU9rfS8ke3Jvd3MubGVuZ3RofSByZWFjaGVzKWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHIgb2Ygcm93cykgci5RX2NmcyA9IE1hdGgubWF4KHIuZHJhaW5hZ2VfYXJlYV9zcW1pICogMi4wLCAxLjApO1xuICAgICAgcU1ldGhvZCA9IFwiZHJhaW5hZ2UtYXJlYS1jb25zdGFudFwiOyBxQ29uZmlkZW5jZSA9IFwiTE9XIENPTkZJREVOQ0Ug4oCUIE5PIEdBVUdFXCI7XG4gICAgICBsb2coXCIgIE5PIGdhdWdlcywgbm8gRVJPTTogUSB+IDIgY2ZzIHBlciBzcSBtaSBkcmFpbmFnZSDigJQgTE9XIENPTkZJREVOQ0VcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gNC4gTWFubmluZydzIGRlcHRoIHBlciBwb2ludCAoZm9ybXVsYSBmYWxsYmFjayksIFYgPSBRL0EsIHNhZmV0eSBmYWN0b3JcbiAgY29uc3QgQ0ZTX1RPX00zUyA9IE1hdGgucG93KDMuMjgxLCAzKTtcbiAgbGV0IG9rID0gMDtcbiAgZm9yIChjb25zdCByIG9mIHJvd3MpIHtcbiAgICByLlFfbTNzID0gci5RX2NmcyAvIENGU19UT19NM1M7XG4gICAgY29uc3QgZGVwdGhGb3JtdWxhID0gZXN0aW1hdGVHZW9tZXRyeVBheXRvbihyLmRyYWluYWdlX2FyZWFfc3FtaSlbMV07XG4gICAgY29uc3QgZG0gPSBjYWxjdWxhdGVEZXB0aE1hbm5pbmcoci5RX20zcywgci53aWR0aF9maW5hbCwgci5zbG9wZSwgY2ZnLm1hbm5pbmdOKTtcbiAgICBpZiAoZG0gIT09IG51bGwgJiYgZG0gPiAwLjEgJiYgZG0gPCAyMCkgeyByLmRlcHRoID0gZG07IG9rKys7IH1cbiAgICBlbHNlIHIuZGVwdGggPSBkZXB0aEZvcm11bGE7XG4gICAgci5hcmVhID0gci53aWR0aF9maW5hbCAqIHIuZGVwdGg7XG4gICAgci52ZWxvY2l0eSA9IChyLlFfbTNzIC8gci5hcmVhKSAqIGNmZy5zYWZldHlGYWN0b3I7XG4gIH1cbiAgbG9nKGAgIE1hbm5pbmcncyBkZXB0aDogJHtva30vJHtufSBwb2ludHMgKCR7TWF0aC5yb3VuZCgoMTAwICogb2spIC8gbil9JSlgKTtcblxuICAvLyA1LiBpbXBvdW5kbWVudCBydWxlOiBmbG93bGluZSBwYXNzZXMgdGhyb3VnaCBhIExha2VQb25kL1Jlc2Vydm9pciB3YXRlcmJvZHlcbiAgLy8gKG1pbnVzIGtub3duIFJFTU9WRUQgZGFtcyB3aG9zZSB3YXRlcmJvZHkgZmxhZ3MgbGluZ2VyIGluIE5IRFBsdXMpXG4gIGNvbnN0IGV4Y2x1ZGVkID0gbmV3IFNldChbLi4uUkVNT1ZFRF9JTVBPVU5ETUVOVF9DT01JRFMsIC4uLihjZmcuaW1wb3VuZEV4Y2x1ZGVDb21pZHMgfHwgW10pXSk7XG4gIGxldCBzdG9wSWR4ID0gbnVsbCwgcnVuTSA9IDAuMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW1wID0gKHJvd3NbaV0ud2JhcmVhdHlwZSA9PT0gXCJMYWtlUG9uZFwiIHx8IHJvd3NbaV0ud2JhcmVhdHlwZSA9PT0gXCJSZXNlcnZvaXJcIikgJiZcbiAgICAgICFleGNsdWRlZC5oYXMocm93c1tpXS5jb21pZCk7XG4gICAgcm93c1tpXS5pbXBvdW5kZWQgPSBpbXA7XG4gICAgaWYgKGltcCkge1xuICAgICAgcnVuTSArPSByb3dzW2ldLmRpc3RhbmNlO1xuICAgICAgaWYgKHJ1bk0gPj0gY2ZnLmltcG91bmRTdG9wS20gKiAxMDAwKSB7IHN0b3BJZHggPSBpOyBicmVhazsgfVxuICAgIH0gZWxzZSBydW5NID0gMC4wO1xuICB9XG4gIGxldCBpbXBvdW5kTm90ZSA9IG51bGw7XG4gIGxldCBkZiA9IHJvd3M7XG4gIGlmIChzdG9wSWR4ICE9PSBudWxsKSB7XG4gICAgY29uc3QgbmFtZSA9IHJvd3Nbc3RvcElkeF0uZ25pc19uYW1lIHx8IFwiaW1wb3VuZG1lbnRcIjtcbiAgICBpbXBvdW5kTm90ZSA9XG4gICAgICBgVHJhY2UgcmVhY2hlcyBhbiBpbXBvdW5kZWQgcmVhY2ggKCR7bmFtZX0pIGF0IGAgK1xuICAgICAgYCR7KHJvd3Nbc3RvcElkeF0uY3VtX2Rpc3QgLyAxMDAwKS50b0ZpeGVkKDEpfSBrbSDigJQgdHJhdmVsIHRpbWUgYmV5b25kIGAgK1xuICAgICAgYHRoaXMgcG9pbnQgaXMgTk9UIG1vZGVsZWQgKHJlc2Vydm9pciB0cmFuc2l0KS5gO1xuICAgIGRmID0gcm93cy5zbGljZSgwLCBzdG9wSWR4ICsgMSk7XG4gICAgbG9nKGAgIElNUE9VTkRNRU5UIFNUT1A6ICR7aW1wb3VuZE5vdGV9YCk7XG4gIH1cblxuICAvLyA2LiB0cmF2ZWwgdGltZSwgY3V0b2ZmLCBob3VybHkgbWFya2Vyc1xuICBjb25zdCBqb2Jzb24gPSBjZmcudGltaW5nTW9kZWwgPT09IFwiam9ic29uXCI7XG4gIGNvbnN0IENGUyA9IE1hdGgucG93KDMuMjgxLCAzKTtcbiAgbGV0IGN1bVQgPSAwLjAsIHRQZWFrID0gMC4wLCB0RmFzdCA9IDAuMCwgam9ic29uRGVncmFkZWQgPSAwO1xuICBmb3IgKGNvbnN0IHIgb2YgZGYpIHtcbiAgICByLnNlZ190aW1lID0gci5kaXN0YW5jZSAvIHIudmVsb2NpdHk7XG4gICAgY3VtVCArPSByLnNlZ190aW1lO1xuICAgIHIuY3VtX3RpbWUgPSBjdW1UIC8gMzYwMDsgLy8gaHlkcmF1bGljICh4IHNhZmV0eSkg4oCUIGFsd2F5cyBjb21wdXRlZDsgZmVlZHMgbGVnYWN5IG1vZGVcbiAgICBpZiAoam9ic29uKSB7XG4gICAgICBjb25zdCBkYU0yID0gKHIuZHJhaW5hZ2VfYXJlYV9rbTIgfHwgMCkgKiAxZTY7XG4gICAgICBjb25zdCBRYU0zcyA9IHIucWVfbWEgPiAwID8gci5xZV9tYSAvIENGUyA6IG51bGw7XG4gICAgICBjb25zdCBqdiA9IFFhTTNzID8gam9ic29uVmVsb2NpdGllcyhkYU0yLCByLlFfbTNzLCBRYU0zcywgci5zbG9wZSkgOiBudWxsO1xuICAgICAgbGV0IHZwLCB2bXAsIHFQcmltZTtcbiAgICAgIGlmIChqdikgeyAoeyB2cCwgdm1wLCBxUHJpbWUgfSA9IGp2KTsgfVxuICAgICAgZWxzZSB7IHZwID0gci52ZWxvY2l0eSAvIGNmZy5zYWZldHlGYWN0b3I7IHZtcCA9IHZwICogMjsgcVByaW1lID0gMTsgam9ic29uRGVncmFkZWQrKzsgfVxuICAgICAgdFBlYWsgKz0gci5kaXN0YW5jZSAvIHZwO1xuICAgICAgdEZhc3QgKz0gci5kaXN0YW5jZSAvIHZtcDtcbiAgICAgIHIudF9wZWFrID0gdFBlYWsgLyAzNjAwO1xuICAgICAgci50X2xlYWQgPSAwLjg5MCAqIHIudF9wZWFrOyAgICAgICAgICAgICAgLy8gZXEgMTgg4oCUIG1vc3QgcHJvYmFibGUgZmlyc3QgYXJyaXZhbFxuICAgICAgci50X2xlYWRfbWluID0gMC44OTAgKiAodEZhc3QgLyAzNjAwKTsgICAgLy8gOTklIGVudmVsb3BlIOKAlCBlYXJsaWVzdCBjcmVkaWJsZSBhcnJpdmFsXG4gICAgICBjb25zdCB0ZDEwID0gam9ic29uUGFzc2FnZUhvdXJzKHIudF9wZWFrLCBxUHJpbWUpO1xuICAgICAgci50X2NsZWFyID0gdGQxMCAhPT0gbnVsbCA/IHIudF9sZWFkICsgdGQxMCA6IG51bGw7IC8vIDEwJS1vZi1wZWFrIHRyYWlsaW5nIGVkZ2VcbiAgICB9XG4gIH1cbiAgaWYgKGpvYnNvbiAmJiBqb2Jzb25EZWdyYWRlZCkgbG9nKGAgIEpvYnNvbjogJHtqb2Jzb25EZWdyYWRlZH0gcG9pbnRzIGxhY2tlZCBFUk9NIFFhIChoeWRyYXVsaWMgZmFsbGJhY2spYCk7XG4gIGNvbnN0IHRpbWVPZiA9IChyKSA9PiAoam9ic29uID8gci50X2xlYWQgOiByLmN1bV90aW1lKTtcbiAgZGYgPSBkZi5maWx0ZXIoKHIpID0+IHRpbWVPZihyKSA8IGNmZy5tYXhIb3Vycyk7XG4gIGNvbnN0IG1heEN1bVRpbWUgPSBkZi5sZW5ndGggPyB0aW1lT2YoZGZbZGYubGVuZ3RoIC0gMV0pIDogMDtcbiAgY29uc3QgbmVhcmVzdFJvdyA9IChmaWVsZCwgdGFyZ2V0KSA9PiB7XG4gICAgbGV0IGJlc3REID0gSW5maW5pdHksIGkgPSAwO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGYubGVuZ3RoOyBrKyspIHtcbiAgICAgIGNvbnN0IGQgPSBNYXRoLmFicyhkZltrXVtmaWVsZF0gLSB0YXJnZXQpO1xuICAgICAgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGkgPSBrOyB9IC8vIGZpcnN0IG9jY3VycmVuY2Ugb2YgbWluIChwYW5kYXMgaWR4bWluKVxuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfTtcbiAgY29uc3QgaG91cmx5ID0gW107XG4gIGZvciAobGV0IGhvdXIgPSAxOyBob3VyIDw9IGNmZy5tYXhIb3VyczsgaG91cisrKSB7XG4gICAgaWYgKG1heEN1bVRpbWUgPCBob3VyICYmIE1hdGguYWJzKG1heEN1bVRpbWUgLSBob3VyKSA+IDAuNSkgYnJlYWs7XG4gICAgY29uc3QgaSA9IG5lYXJlc3RSb3coam9ic29uID8gXCJ0X2xlYWRcIiA6IFwiY3VtX3RpbWVcIiwgaG91cik7XG4gICAgY29uc3QgaCA9IHtcbiAgICAgIGhvdXIsXG4gICAgICBsYXQ6IGRmW2ldLmxhdCwgbG9uOiBkZltpXS5sb24sXG4gICAgICBjdW1fZGlzdF9rbTogZGZbaV0uY3VtX2Rpc3QgLyAxMDAwLFxuICAgICAgdmVsb2NpdHlfbXBoOiBkZltpXS52ZWxvY2l0eSAqIDIuMjM2OTQsXG4gICAgfTtcbiAgICBpZiAoam9ic29uKSB7XG4gICAgICAvLyBiYW5kIGF0IHRoaXMgaG91cjogYnVsayAocGVhaykgcG9zaXRpb24gLi4gZmFydGhlc3QgY3JlZGlibGUgKDk5JSBsZWFkaW5nKVxuICAgICAgY29uc3QgaVBlYWsgPSBuZWFyZXN0Um93KFwidF9wZWFrXCIsIGhvdXIpO1xuICAgICAgY29uc3QgaUZhciA9IG5lYXJlc3RSb3coXCJ0X2xlYWRfbWluXCIsIGhvdXIpO1xuICAgICAgaC5iYW5kID0ge1xuICAgICAgICBwZWFrOiB7IGk6IGlQZWFrLCBsYXQ6IGRmW2lQZWFrXS5sYXQsIGxvbjogZGZbaVBlYWtdLmxvbiwgY3VtX2Rpc3Rfa206IGRmW2lQZWFrXS5jdW1fZGlzdCAvIDEwMDAgfSxcbiAgICAgICAgZmFzdGVzdDogeyBpOiBpRmFyLCBsYXQ6IGRmW2lGYXJdLmxhdCwgbG9uOiBkZltpRmFyXS5sb24sIGN1bV9kaXN0X2ttOiBkZltpRmFyXS5jdW1fZGlzdCAvIDEwMDAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGhvdXJseS5wdXNoKGgpO1xuICB9XG5cbiAgLy8gNy4gc2l0ZSBFVEFzICsgcmVjZXB0b3Igd2FybmluZ3MgKG5lYXJlc3QgdHJhY2UgcG9pbnQgd2l0aGluIGJ1ZmZlcik7XG4gIC8vIGZlYXR1cmVzIHdlcmUgcHJlLWZldGNoZWQgaW50byBkYXRhLnNpdGVTZXRzL3JlY2VwdG9yU2V0c1xuICBmdW5jdGlvbiBwcm94aW1pdHkoc2V0KSB7XG4gICAgY29uc3QgZmVhdHMgPSBzZXQuZmVhdHM7IC8vIFt7bmFtZSwgbGF0LCBsb24sIC4uLmV4dHJhfV1cbiAgICBjb25zdCBidWYgPSBzZXQuYnVmZmVyX20gPz8gNDAwO1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGZvciAoY29uc3QgZiBvZiBmZWF0cykge1xuICAgICAgaWYgKGYubGF0ID09PSB1bmRlZmluZWQgfHwgZi5sb24gPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgICBsZXQgYmVzdEQgPSBJbmZpbml0eSwgaSA9IDA7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGRmLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmVNKGRmW2tdLmxhdCwgZGZba10ubG9uLCBmLmxhdCwgZi5sb24pO1xuICAgICAgICBpZiAoZCA8IGJlc3REKSB7IGJlc3REID0gZDsgaSA9IGs7IH1cbiAgICAgIH1cbiAgICAgIGlmIChiZXN0RCA8PSBidWYpIHtcbiAgICAgICAgY29uc3QgeyBsYXQ6IF9hLCBsb246IF9iLCAuLi5yZXN0IH0gPSBmO1xuICAgICAgICBjb25zdCByb3cgPSB7XG4gICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICBldGFfaHI6IE1hdGgucm91bmQodGltZU9mKGRmW2ldKSAqIDEwMCkgLyAxMDAsXG4gICAgICAgICAgZGlzdF9rbTogTWF0aC5yb3VuZCgoZGZbaV0uY3VtX2Rpc3QgLyAxMDAwKSAqIDEwKSAvIDEwLFxuICAgICAgICAgIG9mZnNldF9tOiBNYXRoLnJvdW5kKGJlc3REKSxcbiAgICAgICAgICAvLyBtb2RlbGVkIGh5ZHJhdWxpY3MgYXQgdGhlIHNpdGUncyB0cmFjZSBwb2ludCDigJQgZmVlZHMgYm9vbSBzaXppbmdcbiAgICAgICAgICByaXZlcl93aWR0aF9tOiBNYXRoLnJvdW5kKGRmW2ldLndpZHRoX2ZpbmFsICogMTApIC8gMTAsXG4gICAgICAgICAgdmVsb2NpdHlfbXM6IE1hdGgucm91bmQoZGZbaV0udmVsb2NpdHkgKiAxMDAwKSAvIDEwMDAsXG4gICAgICAgICAgZGVwdGhfbTogTWF0aC5yb3VuZChkZltpXS5kZXB0aCAqIDEwMCkgLyAxMDAsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChqb2Jzb24pIHtcbiAgICAgICAgICByb3cuZXRhX2Vhcmx5X2hyID0gTWF0aC5yb3VuZChkZltpXS50X2xlYWRfbWluICogMTAwKSAvIDEwMDtcbiAgICAgICAgICByb3cuZXRhX3BlYWtfaHIgPSBNYXRoLnJvdW5kKGRmW2ldLnRfcGVhayAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgcm93LmNsZWFyX2hyID0gZGZbaV0udF9jbGVhciAhPT0gbnVsbCA/IE1hdGgucm91bmQoZGZbaV0udF9jbGVhciAqIDEwMCkgLyAxMDAgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG91dC5wdXNoKHJvdyk7XG4gICAgICB9XG4gICAgfVxuICAgIG91dC5zb3J0KChhLCBiKSA9PiBhLmV0YV9ociAtIGIuZXRhX2hyKTtcbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgY29uc3Qgc2l0ZXMgPSBbXTtcbiAgZm9yIChjb25zdCBzIG9mIHNpdGVTZXRzIHx8IFtdKSBzaXRlcy5wdXNoKC4uLnByb3hpbWl0eShzKSk7XG4gIHNpdGVzLnNvcnQoKGEsIGIpID0+IGEuZXRhX2hyIC0gYi5ldGFfaHIpO1xuICBjb25zdCB3YXJuaW5ncyA9IGltcG91bmROb3RlID8gW2ltcG91bmROb3RlXSA6IFtdO1xuICBpZiAocUNvbmZpZGVuY2UgIT09IFwiSElHSFwiKSB3YXJuaW5ncy51bnNoaWZ0KGBGbG93IGVzdGltYXRlOiAke3FDb25maWRlbmNlfSAoJHtxTWV0aG9kfSlgKTtcbiAgZm9yIChjb25zdCBzIG9mIHJlY2VwdG9yU2V0cyB8fCBbXSkge1xuICAgIGZvciAoY29uc3QgciBvZiBwcm94aW1pdHkocykpIHtcbiAgICAgIHdhcm5pbmdzLnB1c2goXG4gICAgICAgIGBSZWNlcHRvciAnJHtyLm5hbWV9JyB+JHtyLm9mZnNldF9tfSBtIG9mZiB0cmFjZSBhdCBociAke3IuZXRhX2hyfSAoJHtyLmRpc3Rfa219IGttIGRvd25zdHJlYW0pYCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGlzdGFuY2VLbSA9IGRmLmxlbmd0aCA/IGRmW2RmLmxlbmd0aCAtIDFdLmN1bV9kaXN0IC8gMTAwMCA6IDA7XG4gIGNvbnN0IGF2Z1ZlbCA9IGRmLmxlbmd0aCA/IGRmLnJlZHVjZSgocywgcikgPT4gcyArIHIudmVsb2NpdHksIDApIC8gZGYubGVuZ3RoIDogMDtcbiAgY29uc3QgZ2xvd01hdGNoZWQgPSByb3dzLmZpbHRlcigocikgPT4gci53aWR0aF9tID4gMCkubGVuZ3RoO1xuICBjb25zdCBicmFpZGVkTiA9IHJvd3MuZmlsdGVyKChyKSA9PiByLmJyYWlkZWQpLmxlbmd0aDtcblxuICAvLyBwcm92ZW5hbmNlIOKAlCBlbm91Z2ggdG8gcmVjb25zdHJ1Y3QgYW55IG91dHB1dCBpbiBhbiBhZnRlci1hY3Rpb24gcmV2aWV3XG4gIGNvbnN0IHJ1blJlY29yZCA9IHtcbiAgICBlbmdpbmVfdmVyc2lvbjogRU5HSU5FX1ZFUlNJT04sXG4gICAgZ2VuZXJhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgZGF0YV9mZXRjaGVkX2F0OiBkYXRhLmZldGNoZWRBdCB8fCBudWxsLFxuICAgIHNwaWxsX3BvaW50OiB7IGxhdDogZGF0YS5sYXQsIGxvbjogZGF0YS5sb24gfSxcbiAgICBzbmFwOiB7IGNvbWlkLCByaXZlcjogcml2ZXJOYW1lLCBzbmFwcGVkX2Zyb21fbTogZGF0YS5zbmFwRGlzdE0gIT09IHVuZGVmaW5lZCA/IE1hdGgucm91bmQoZGF0YS5zbmFwRGlzdE0gfHwgMCkgOiBudWxsIH0sXG4gICAgdGltaW5nX21vZGVsOiBjZmcudGltaW5nTW9kZWwsXG4gICAgc2FmZXR5X2ZhY3RvcjogY2ZnLnNhZmV0eUZhY3RvcixcbiAgICBtYXhfaG91cnM6IGNmZy5tYXhIb3VycyxcbiAgICBhc19vZjogZGF0YS5hc09mIHx8IFwibGl2ZVwiLFxuICAgIHFfbWV0aG9kOiBxTWV0aG9kLFxuICAgIHFfY29uZmlkZW5jZTogcUNvbmZpZGVuY2UsXG4gICAgZ2F1Z2VzOiBnZC5tYXAoKGcpID0+ICh7IHN0YXRpb25faWQ6IGcuc3RhdGlvbl9pZCwgbmFtZTogZy5uYW1lLCBkaXNjaGFyZ2VfY2ZzOiBnLmRpc2NoYXJnZSwgdHJhY2Vfa206IE1hdGgucm91bmQoZy50cmFjZV9kaXN0IC8gMTAwKSAvIDEwIH0pKSxcbiAgICBlcm9tX21vbnRoOiBxTWV0aG9kLnN0YXJ0c1dpdGgoXCJlcm9tXCIpID8gZXJvbU1vbnRoIDogbnVsbCxcbiAgICB3aWR0aF9zb3VyY2U6IHsgZ2xvd19tYXRjaGVkX3BvaW50czogZ2xvd01hdGNoZWQsIHRvdGFsX3BvaW50czogcm93cy5sZW5ndGgsIGJyYWlkZWRfcG9pbnRzX2Zvcm11bGFfd2lkdGg6IGJyYWlkZWROIH0sXG4gICAgam9ic29uX2RlZ3JhZGVkX3BvaW50czogam9ic29uID8gam9ic29uRGVncmFkZWQgOiBudWxsLFxuICAgIGltcG91bmRfZXhjbHVzaW9uc19hcHBsaWVkOiBbLi4uZXhjbHVkZWRdLmZpbHRlcigoYykgPT4gcm93cy5zb21lKChyKSA9PiByLmNvbWlkID09PSBjKSksXG4gICAgaW1wb3VuZF9zdG9wX2ttOiBzdG9wSWR4ICE9PSBudWxsID8gTWF0aC5yb3VuZChyb3dzW3N0b3BJZHhdLmN1bV9kaXN0IC8gMTAwKSAvIDEwIDogbnVsbCxcbiAgfTtcblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgcml2ZXJfbmFtZTogcml2ZXJOYW1lLFxuICAgIGNvbWlkLFxuICAgIGFzX29mOiBkYXRhLmFzT2YgfHwgXCJsaXZlXCIsXG4gICAgc2FmZXR5X2ZhY3RvcjogY2ZnLnNhZmV0eUZhY3RvcixcbiAgICB0aW1pbmdfbW9kZWw6IGNmZy50aW1pbmdNb2RlbCxcbiAgICBxX21ldGhvZDogcU1ldGhvZCxcbiAgICBxX2NvbmZpZGVuY2U6IHFDb25maWRlbmNlLFxuICAgIGdhdWdlc191c2VkOiBnZC5tYXAoKGcpID0+ICh7XG4gICAgICBzdGF0aW9uX2lkOiBnLnN0YXRpb25faWQsIG5hbWU6IGcubmFtZSxcbiAgICAgIGRpc2NoYXJnZTogZy5kaXNjaGFyZ2UsIHRyYWNlX2Rpc3Q6IGcudHJhY2VfZGlzdCxcbiAgICB9KSksXG4gICAgZGlzdGFuY2Vfa21fMjRoOiBkaXN0YW5jZUttLFxuICAgIGF2Z192ZWxvY2l0eV9tcGg6IGF2Z1ZlbCAqIDIuMjM2OTQsXG4gICAgaW1wb3VuZF9zdG9wOiBpbXBvdW5kTm90ZSxcbiAgICBob3VybHksXG4gICAgc2l0ZXMsXG4gICAgd2FybmluZ3MsXG4gICAgcnVuUmVjb3JkLFxuICAgIHRyYWNlOiBkZiwgLy8gZnVsbCByb3cgYXJyYXkgZm9yIGluc3BlY3Rpb24vZ2VvanNvbiBleHBvcnRcbiAgfTtcbiAgbG9nKFxuICAgIGAgIFJFU1VMVDogJHtkaXN0YW5jZUttLnRvRml4ZWQoMSl9IGttIGluIDw9ICR7Y2ZnLm1heEhvdXJzfSBoLCBgICtcbiAgICBgYXZnICR7cmVzdWx0LmF2Z192ZWxvY2l0eV9tcGgudG9GaXhlZCgyKX0gbXBoLCAke3NpdGVzLmxlbmd0aH0gc2l0ZXMsICR7d2FybmluZ3MubGVuZ3RofSB3YXJuaW5nc2AsXG4gICk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5UcmFjZShsYXQsIGxvbiwgY29uZmlnID0ge30pIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVHJhY2VEYXRhKGxhdCwgbG9uLCBjb25maWcpO1xuICByZXR1cm4gY29tcHV0ZVRyYWNlKGRhdGEsIGNvbmZpZyk7XG59XG5cbi8qKlxuICogQm9vbSBzaXppbmcgZnJvbSBtb2RlbGVkIGh5ZHJhdWxpY3MgKHBsYW5uaW5nLWxldmVsLCBmb3IgR1JQcyB0aGF0IGNhcnJ5IG5vXG4gKiBlcXVpcG1lbnQgcXVhbnRpdGllcykuIFN0YW5kYXJkIGNvbnRhaW5tZW50IHJ1bGU6IG9pbCBlbnRyYWlucyB1bmRlciBhIGJvb21cbiAqIHdoZW4gdGhlIGZsb3cgY29tcG9uZW50IG5vcm1hbCB0byBpdCBleGNlZWRzIH4wLjM1IG0vcyAoMC43IGt0KSwgc28gaW5cbiAqIGZhc3RlciB3YXRlciB0aGUgYm9vbSBpcyBhbmdsZWQgd2l0aCBzaW4odGhldGEpID0gZW50cmFpbm1lbnQvdmVsb2NpdHkgYW5kXG4gKiB0aGUgcmVxdWlyZWQgbGVuZ3RoIGdyb3dzIHRvIHdpZHRoL3Npbih0aGV0YSkuIEFuY2hvciBzZXRzIGZyb20gbGVuZ3RoLlxuICogQW5nbGVzIGJlbG93IH4xNSBkZWcgKHYgPiB+MS4zNSBtL3MpIGFyZSBmbGFnZ2VkOiB1c2UgY2FzY2FkZWQgc2hvcnRlciBib29tcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlQm9vbU5lZWRzKHdpZHRoTSwgdmVsb2NpdHlNcywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGVudHJhaW4gPSBvcHRzLmVudHJhaW5tZW50TXMgPz8gMC4zNTtcbiAgY29uc3QgcmVzZXJ2ZVBjdCA9IG9wdHMucmVzZXJ2ZVBjdCA/PyAyMDtcbiAgY29uc3QgYW5jaG9yU3BhY2luZ0Z0ID0gb3B0cy5hbmNob3JTcGFjaW5nRnQgPz8gMTAwO1xuICBpZiAoISh3aWR0aE0gPiAwKSB8fCAhKHZlbG9jaXR5TXMgPj0gMCkpIHJldHVybiBudWxsO1xuICBjb25zdCBzaW5UaGV0YSA9IHZlbG9jaXR5TXMgPiBlbnRyYWluID8gZW50cmFpbiAvIHZlbG9jaXR5TXMgOiAxO1xuICBjb25zdCBhbmdsZURlZyA9IChNYXRoLmFzaW4oc2luVGhldGEpICogMTgwKSAvIE1hdGguUEk7XG4gIGNvbnN0IGxlbmd0aEZ0ID0gKHdpZHRoTSAvIHNpblRoZXRhKSAqIDMuMjgwODQgKiAoMSArIHJlc2VydmVQY3QgLyAxMDApO1xuICBjb25zdCBib29tRnQgPSBNYXRoLmNlaWwobGVuZ3RoRnQgLyA1MCkgKiA1MDsgLy8gcm91bmQgdXAgdG8gNTAtZnQgc3RpY2tzXG4gIGNvbnN0IGFuY2hvcnMgPSBNYXRoLm1heCgyLCBNYXRoLmNlaWwoYm9vbUZ0IC8gYW5jaG9yU3BhY2luZ0Z0KSArIDEpO1xuICByZXR1cm4ge1xuICAgIGJvb21fZnQ6IGJvb21GdCxcbiAgICBib29tX2FuZ2xlX2RlZzogTWF0aC5yb3VuZChhbmdsZURlZyksXG4gICAgYW5jaG9ycyxcbiAgICBkZWZsZWN0aW9uOiB2ZWxvY2l0eU1zID4gZW50cmFpbixcbiAgICBjYXNjYWRlX2FkdmlzZWQ6IGFuZ2xlRGVnIDwgMTUsIC8vIHRvbyBmYXN0IGZvciBhIHNpbmdsZSBzd2VlcCDigJQgY2FzY2FkZSBib29tc1xuICB9O1xufVxuXG4vKiogVHJhY2UgbGluZSArIGhvdXJseSBtYXJrZXJzIGFzIGEgR2VvSlNPTiBGZWF0dXJlQ29sbGVjdGlvbiAod2lkZ2V0IHByZXZpZXcpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvR2VvSnNvbihyZXN1bHQpIHtcbiAgY29uc3QgZGYgPSByZXN1bHQudHJhY2U7XG4gIGNvbnN0IGZjID0ge1xuICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICBmZWF0dXJlczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGtpbmQ6IFwidHJhY2VcIiwgcml2ZXI6IHJlc3VsdC5yaXZlcl9uYW1lLFxuICAgICAgICAgIGRpc3RhbmNlX2ttXzI0aDogcmVzdWx0LmRpc3RhbmNlX2ttXzI0aCxcbiAgICAgICAgfSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcbiAgICAgICAgICBjb29yZGluYXRlczogZGYubWFwKChyKSA9PiBbXG4gICAgICAgICAgICBNYXRoLnJvdW5kKHIubG9uICogMWU2KSAvIDFlNiwgTWF0aC5yb3VuZChyLmxhdCAqIDFlNikgLyAxZTYsXG4gICAgICAgICAgXSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGZvciAoY29uc3QgaCBvZiByZXN1bHQuaG91cmx5KSB7XG4gICAgZmMuZmVhdHVyZXMucHVzaCh7XG4gICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgIHByb3BlcnRpZXM6IHsga2luZDogXCJob3VyXCIsIGhvdXI6IGguaG91ciwgY3VtX2Rpc3Rfa206IGguY3VtX2Rpc3Rfa20sIHZlbG9jaXR5X21waDogaC52ZWxvY2l0eV9tcGggfSxcbiAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IFtNYXRoLnJvdW5kKGgubG9uICogMWU2KSAvIDFlNiwgTWF0aC5yb3VuZChoLmxhdCAqIDFlNikgLyAxZTZdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZmM7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9pbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2x5bGluZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqXHJcbiAqIFNwaWxsIFRyYWplY3Rvcnkgd2lkZ2V0IOKAlCBydW50aW1lLlxyXG4gKlxyXG4gKiBDbGljayBcIlNldCBzcGlsbCBwb2ludFwiIOKGkiBjbGljayB0aGUgbWFwIOKGkiB0aGUgZ29sZGVuLXRlc3RlZCB0cmFjZSBlbmdpbmVcclxuICogKHRyYWNlLWVuZ2luZS50cywgcGFyaXR5LXZlcmlmaWVkIHZzIHRoZSBQeXRob24gb3JhY2xlKSBkcmF3cyBhbiBlcGhlbWVyYWxcclxuICogdGltZS1jb2xvcmVkIHBsdW1lIG9uIGEgY2xpZW50LXNpZGUgR3JhcGhpY3NMYXllciB3aXRoIGhvdXJseSBtYXJrZXJzLFxyXG4gKiBwbHVzIGFuIEVUQS1zb3J0ZWQgc3RyYXRlZ3ktc2l0ZSBsaXN0IGFuZCByZWNlcHRvciB3YXJuaW5ncy5cclxuICogTm90aGluZyBpcyBwZXJzaXN0ZWQg4oCUIENsZWFyIChvciB3aWRnZXQgdW5tb3VudCkgcmVtb3ZlcyBldmVyeXRoaW5nLlxyXG4gKi9cclxuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInXHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnXHJcbmltcG9ydCBQb2x5bGluZSBmcm9tICdlc3JpL2dlb21ldHJ5L1BvbHlsaW5lJ1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCdcclxuaW1wb3J0IHsgZ2VvZGVzaWNMZW5ndGggfSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJ1xyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnLCBTaXRlTGF5ZXJDb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IGZldGNoVHJhY2VEYXRhLCBjb21wdXRlVHJhY2UsIGVzdGltYXRlQm9vbU5lZWRzIH0gZnJvbSAnLi4vdHJhY2UtZW5naW5lJ1xyXG5cclxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gPSBSZWFjdFxyXG5cclxuLy8gRVRBIGNvbG9yIGJhbmRzOiA8MyBociAvIDPigJMxMiBociAvIDEy4oCTMjQgaHJcclxuY29uc3QgQkFORF9DT0xPUlM6IEFycmF5PFtudW1iZXIsIHN0cmluZ10+ID0gW1xyXG4gIFszLCAnI2Q3MTkxYyddLFxyXG4gIFsxMiwgJyNmZGFlNjEnXSxcclxuICBbMjQsICcjMmM3YmI2J10sXHJcbl1cclxuY29uc3QgYmFuZENvbG9yID0gKGhyOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gIGZvciAoY29uc3QgW2xpbSwgY10gb2YgQkFORF9DT0xPUlMpIGlmIChociA8IGxpbSkgcmV0dXJuIGNcclxuICByZXR1cm4gJyMyYzdiYjYnXHJcbn1cclxuY29uc3QgaGV4VG9SZ2IgPSAoaGV4OiBzdHJpbmcpOiBudW1iZXJbXSA9PiBbXHJcbiAgcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksIHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpLCBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KSxcclxuXVxyXG5cclxuaW50ZXJmYWNlIFNpdGVSb3cge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGV0YV9ocjogbnVtYmVyXHJcbiAgZGlzdF9rbTogbnVtYmVyXHJcbiAgb2Zmc2V0X206IG51bWJlclxyXG4gIHJpdmVyX3dpZHRoX20/OiBudW1iZXJcclxuICB2ZWxvY2l0eV9tcz86IG51bWJlclxyXG4gIGJvb20/OiB7IGJvb21fZnQ6IG51bWJlciwgYW5jaG9yczogbnVtYmVyLCBib29tX2FuZ2xlX2RlZz86IG51bWJlciwgY2FzY2FkZV9hZHZpc2VkPzogYm9vbGVhbiwgc291cmNlOiAnZHJhd24nIHwgJ2VzdCcgfVxyXG4gIFtrOiBzdHJpbmddOiBhbnlcclxufVxyXG5cclxuY29uc3Qgbm9ybUd1aWQgPSAodjogYW55KTogc3RyaW5nID0+IFN0cmluZyh2IHx8ICcnKS5yZXBsYWNlKC9be31dL2csICcnKS50b0xvd2VyQ2FzZSgpXHJcblxyXG4vKiogU3VtIGdlb2Rlc2ljIGZlZXQgb2YgZHJhd24gYm9vbSBsaW5lcyBwZXIgc2l0ZSBrZXkgKGUuZy4gU25ha2UgQm9vbV9MaW5lcykuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRHJhd25Cb29tKGNmZzogeyB1cmw6IHN0cmluZywgc2l0ZUtleUZpZWxkOiBzdHJpbmcsIHdoZXJlPzogc3RyaW5nIH0pOiBQcm9taXNlPE1hcDxzdHJpbmcsIG51bWJlcj4+IHtcclxuICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IGNmZy51cmwgfSlcclxuICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKVxyXG4gIHEud2hlcmUgPSBjZmcud2hlcmUgfHwgJzE9MSdcclxuICBxLm91dEZpZWxkcyA9IFtjZmcuc2l0ZUtleUZpZWxkXVxyXG4gIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XHJcbiAgY29uc3QgZnMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXHJcbiAgY29uc3Qgb3V0ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxyXG4gIGZvciAoY29uc3QgZiBvZiBmcy5mZWF0dXJlcykge1xyXG4gICAgY29uc3Qga2V5ID0gbm9ybUd1aWQoZi5hdHRyaWJ1dGVzW2NmZy5zaXRlS2V5RmllbGRdKVxyXG4gICAgaWYgKCFrZXkgfHwgIWYuZ2VvbWV0cnkpIGNvbnRpbnVlXHJcbiAgICBjb25zdCBmdCA9IGdlb2Rlc2ljTGVuZ3RoKGYuZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lLCAnZmVldCcpXHJcbiAgICBpZiAoZnQgPiAwKSBvdXQuc2V0KGtleSwgKG91dC5nZXQoa2V5KSB8fCAwKSArIGZ0KVxyXG4gIH1cclxuICByZXR1cm4gb3V0XHJcbn1cclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgY29uc3QgW2ptdiwgc2V0Sm12XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PihudWxsKVxyXG4gIGNvbnN0IFthcm1pbmcsIHNldEFybWluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcnVubmluZywgc2V0UnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ0NsaWNrIFwiU2V0IHNwaWxsIHBvaW50XCIsIHRoZW4gY2xpY2sgdGhlIHJpdmVyLicpXHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPGFueT4obnVsbClcclxuICBjb25zdCBbc2FmZXR5LCBzZXRTYWZldHldID0gdXNlU3RhdGU8bnVtYmVyPihwcm9wcy5jb25maWcuc2FmZXR5RmFjdG9yID8/IDEuNSlcclxuICBjb25zdCBbZGlhZywgc2V0RGlhZ10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXHJcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGxheWVyUmVmID0gdXNlUmVmPF9fZXNyaS5HcmFwaGljc0xheWVyPihudWxsKVxyXG4gIGNvbnN0IGNsaWNrSGFuZGxlUmVmID0gdXNlUmVmPF9fZXNyaS5IYW5kbGU+KG51bGwpXHJcbiAgLy8gY2FjaGVkIGh5ZHJvbG9neSBmb3IgdGhlIGN1cnJlbnQgc3BpbGwgcG9pbnQg4oCUIHNhZmV0eS1mYWN0b3IgY2hhbmdlc1xyXG4gIC8vIHJlY29tcHV0ZSBmcm9tIHRoaXMgaW5zdGFudGx5IGluc3RlYWQgb2YgcmUtZmV0Y2hpbmcgTkxESS9OV0lTXHJcbiAgY29uc3QgY2FjaGVSZWYgPSB1c2VSZWY8eyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIGRhdGE6IGFueSwgZHJhd246IE1hcDxzdHJpbmcsIG51bWJlcj4sIGZldGNoTm90ZXM6IHN0cmluZ1tdIH0gfCBudWxsPihudWxsKVxyXG5cclxuICAvLyAtLS0tIElDUCBsaXN0IHN5bmMgKFNuYWtlIGNsb25lIG9ubHkpOiB0aW50IHRoZSBhcHAncyBzaXRlLWxpc3QgY2FyZHMgYnkgRVRBXHJcbiAgLy8gYmFuZCBzbyB0aGUgbGVmdCBwYW5lbCBtaXJyb3JzIHRoZSBwbHVtZSBjb2xvcnMuIENhcmQgbWF0Y2hpbmcgaXMgYnkgdGhlIHZhbHVlXHJcbiAgLy8gb2YgY29uZmlnLmxpc3RTeW5jU2l0ZUNvZGVGaWVsZCAobXVzdCBhbHNvIGJlIGluIHRoZSBzaXRlIGxheWVyJ3MgZXh0cmFGaWVsZHMpO1xyXG4gIC8vIHRoZSBmaWVsZCdzIHZhbHVlIG11c3QgYXBwZWFyIHZlcmJhdGltIGluIHRoZSBjYXJkIHRleHQgKHNpdGVfY29kZSBkb2VzKS5cclxuICBjb25zdCBsaXN0U3luY0ZpZWxkOiBzdHJpbmcgPSAocHJvcHMuY29uZmlnIGFzIGFueSkubGlzdFN5bmNTaXRlQ29kZUZpZWxkIHx8ICcnXHJcbiAgY29uc3QgbGlzdE9ic1JlZiA9IHVzZVJlZjxNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBsaXN0Um93c1JlZiA9IHVzZVJlZjxTaXRlUm93W10+KFtdKVxyXG4gIGNvbnN0IHBhaW50U3RhdHNSZWYgPSB1c2VSZWYoJycpXHJcbiAgY29uc3QgW3BhaW50U3RhdHMsIHNldFBhaW50U3RhdHNdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IHBhaW50TGlzdENhcmRzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFsaXN0U3luY0ZpZWxkKSByZXR1cm5cclxuICAgIGNvbnN0IG1hcmtzOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPiA9IGxpc3RSb3dzUmVmLmN1cnJlbnRcclxuICAgICAgLmZpbHRlcigocykgPT4gc1tsaXN0U3luY0ZpZWxkXSAhPSBudWxsICYmIHMuZXRhX2hyICE9IG51bGwpXHJcbiAgICAgIC5tYXAoKHMpID0+IFtTdHJpbmcoc1tsaXN0U3luY0ZpZWxkXSkudHJpbSgpLCBiYW5kQ29sb3Iocy5ldGFfaHIpXSlcclxuICAgIC8vIHRoZSBjYXJkIGNsYXNzIGlzIGJ1aWx0IGR5bmFtaWNhbGx5IChsaXN0LWNhcmQtdmlld2VyIC8gLWVkaXRvciAvIC1jb250ZW50KTpcclxuICAgIC8vIG1hdGNoIGFueSBsaXN0LWNhcmQqIGVsZW1lbnQgYnV0IHBhaW50IG9ubHkgdGhlIE9VVEVSTU9TVCBvbmUgcGVyIGNhcmRcclxuICAgIGNvbnN0IGVscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ1tjbGFzcyo9XCJsaXN0LWNhcmRcIl0nKSlcclxuICAgICAgLmZpbHRlcigoZWwpID0+ICFlbC5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KCdbY2xhc3MqPVwibGlzdC1jYXJkXCJdJykpXHJcbiAgICBsZXQgcGFpbnRlZCA9IDBcclxuICAgIGVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBjb25zdCB0eHQgPSBlbC50ZXh0Q29udGVudCB8fCAnJ1xyXG4gICAgICBjb25zdCBoaXQgPSBtYXJrcy5maW5kKChbY29kZV0pID0+IGNvZGUubGVuZ3RoID4gMCAmJiB0eHQuaW5kZXhPZihjb2RlKSA+PSAwKVxyXG4gICAgICBpZiAoaGl0KSB7XHJcbiAgICAgICAgcGFpbnRlZCsrXHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyTGVmdCA9ICc0cHggc29saWQgJyArIGhpdFsxXVxyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmQgPSBoaXRbMV0gKyAnMjYnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyTGVmdCA9ICcnXHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZCA9ICcnXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBzdGF0cyA9IG1hcmtzLmxlbmd0aCA9PT0gMFxyXG4gICAgICA/ICcnXHJcbiAgICAgIDogYCR7cGFpbnRlZH0gb2YgJHtlbHMubGVuZ3RofSB2aXNpYmxlIGNhcmRzIG1hcmtlZCDCtyAke21hcmtzLmxlbmd0aH0gc2l0ZXMgaW4gcGF0aGBcclxuICAgIGlmIChwYWludFN0YXRzUmVmLmN1cnJlbnQgIT09IHN0YXRzKSB7XHJcbiAgICAgIHBhaW50U3RhdHNSZWYuY3VycmVudCA9IHN0YXRzXHJcbiAgICAgIHNldFBhaW50U3RhdHMoc3RhdHMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhckxpc3RTeW5jID0gKCkgPT4ge1xyXG4gICAgaWYgKGxpc3RPYnNSZWYuY3VycmVudCkgeyBsaXN0T2JzUmVmLmN1cnJlbnQuZGlzY29ubmVjdCgpOyBsaXN0T2JzUmVmLmN1cnJlbnQgPSBudWxsIH1cclxuICAgIGxpc3RSb3dzUmVmLmN1cnJlbnQgPSBbXVxyXG4gICAgcGFpbnRTdGF0c1JlZi5jdXJyZW50ID0gJydcclxuICAgIHNldFBhaW50U3RhdHMoJycpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignW2NsYXNzKj1cImxpc3QtY2FyZFwiXScpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLnN0eWxlLmJvcmRlckxlZnQgPSAnJ1xyXG4gICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kID0gJydcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBhcm1MaXN0U3luYyA9IChyb3dzOiBTaXRlUm93W10pID0+IHtcclxuICAgIGlmICghbGlzdFN5bmNGaWVsZCkgcmV0dXJuXHJcbiAgICBsaXN0Um93c1JlZi5jdXJyZW50ID0gcm93cyB8fCBbXVxyXG4gICAgcGFpbnRMaXN0Q2FyZHMoKVxyXG4gICAgaWYgKCFsaXN0T2JzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgLy8gcmUtcGFpbnQgd2hlbiB0aGUgbGlzdCByZS1yZW5kZXJzIChzY3JvbGwvZmlsdGVyL3NlYXJjaCk7IGNoaWxkTGlzdC1vbmx5XHJcbiAgICAgIC8vIG9ic2VydmF0aW9uIHNvIG91ciBvd24gc3R5bGUgd3JpdGVzIGNhbm5vdCByZS10cmlnZ2VyIGl0XHJcbiAgICAgIGxldCBwZW5kaW5nID0gZmFsc2VcclxuICAgICAgY29uc3Qgb2JzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwZW5kaW5nKSByZXR1cm5cclxuICAgICAgICBwZW5kaW5nID0gdHJ1ZVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHBlbmRpbmcgPSBmYWxzZTsgcGFpbnRMaXN0Q2FyZHMoKSB9KVxyXG4gICAgICB9KVxyXG4gICAgICBvYnMub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KVxyXG4gICAgICBsaXN0T2JzUmVmLmN1cnJlbnQgPSBvYnNcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIG9uZSBncmFwaGljcyBsYXllciBwZXIgd2lkZ2V0IGxpZmV0aW1lOyByZW1vdmVkIG9uIHVubW91bnQgKGVwaGVtZXJhbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQpIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQucmVtb3ZlKClcclxuICAgICAgaWYgKGxheWVyUmVmLmN1cnJlbnQgJiYgam12KSBqbXYudmlldy5tYXAucmVtb3ZlKGxheWVyUmVmLmN1cnJlbnQpXHJcbiAgICAgIGNsZWFyTGlzdFN5bmMoKVxyXG4gICAgICBpZiAobWF4ZWRSZWYuY3VycmVudCkgc2V0TWFwTWF4aW1pemVkKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtqbXZdKVxyXG5cclxuICBjb25zdCBlbnN1cmVMYXllciA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldyk6IF9fZXNyaS5HcmFwaGljc0xheWVyID0+IHtcclxuICAgIGlmICghbGF5ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICBsYXllclJlZi5jdXJyZW50ID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyB0aXRsZTogJ1NwaWxsIHRyYWplY3RvcnkgKGVwaGVtZXJhbCknLCBsaXN0TW9kZTogJ2hpZGUnIH0pXHJcbiAgICAgIHZpZXcubWFwLmFkZChsYXllclJlZi5jdXJyZW50KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxheWVyUmVmLmN1cnJlbnRcclxuICB9XHJcblxyXG4gIC8vIC0tLS0gcHJvdmlkZXJzOiB3cmFwIGNvbmZpZ3VyZWQgbGF5ZXJzIGZvciB0aGUgZW5naW5lIC0tLS1cclxuICAvLyBGYWlsdXJlcyBhcmUgcmVwb3J0ZWQgdG8gdGhlIGRpYWdub3N0aWNzIGxpc3QgaW5zdGVhZCBvZiBraWxsaW5nIHRoZSB0cmFjZS5cclxuICBjb25zdCBtYWtlU2l0ZVByb3ZpZGVyID0gKGxjOiBTaXRlTGF5ZXJDb25maWcsIGRlZmF1bHRCdWZmZXI6IG51bWJlciwgbGFiZWw6IHN0cmluZywgbm90ZXM6IHN0cmluZ1tdKSA9PiAoe1xyXG4gICAgYnVmZmVyX206IGxjLmJ1ZmZlck0gPz8gZGVmYXVsdEJ1ZmZlcixcclxuICAgIGZldGNoOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiBsYy51cmwgfSlcclxuICAgICAgICBjb25zdCBxID0gZmwuY3JlYXRlUXVlcnkoKVxyXG4gICAgICAgIHEud2hlcmUgPSBsYy53aGVyZSB8fCAnMT0xJ1xyXG4gICAgICAgIHEub3V0RmllbGRzID0gW2xjLm5hbWVGaWVsZCwgLi4uKGxjLmV4dHJhRmllbGRzIHx8IFtdKV1cclxuICAgICAgICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICAgIHEub3V0U3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9IGFzIGFueVxyXG4gICAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBmcy5mZWF0dXJlc1xyXG4gICAgICAgICAgLmZpbHRlcigoZikgPT4gZi5nZW9tZXRyeSAmJiBmLmdlb21ldHJ5LnR5cGUgPT09ICdwb2ludCcpXHJcbiAgICAgICAgICAubWFwKChmKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxyXG4gICAgICAgICAgICBjb25zdCByb3c6IGFueSA9IHsgbmFtZTogZi5hdHRyaWJ1dGVzW2xjLm5hbWVGaWVsZF0sIGxhdDogZy55LCBsb246IGcueCB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWYgb2YgbGMuZXh0cmFGaWVsZHMgfHwgW10pIHJvd1tlZl0gPSBmLmF0dHJpYnV0ZXNbZWZdXHJcbiAgICAgICAgICAgIHJldHVybiByb3dcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgbm90ZXMucHVzaChgJHtsYWJlbH06ICR7cm93cy5sZW5ndGh9IHBvaW50IGZlYXR1cmVzIGxvYWRlZCAoYnVmZmVyICR7bGMuYnVmZmVyTSA/PyBkZWZhdWx0QnVmZmVyfSBtKWApXHJcbiAgICAgICAgcmV0dXJuIHJvd3NcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIG5vdGVzLnB1c2goYCR7bGFiZWx9IEZBSUxFRDogJHtTdHJpbmcoZSkuc2xpY2UoMCwgMTAwKX1gKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG1ha2VXaWR0aFByb3ZpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2wgPSBwcm9wcy5jb25maWcud2lkdGhMYXllclxyXG4gICAgaWYgKCF3bCB8fCAhd2wudXJsKSByZXR1cm4gbnVsbFxyXG4gICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHsgdXJsOiB3bC51cmwgfSlcclxuICAgIHJldHVybiBhc3luYyAoZW52OiB7IHhtaW46IG51bWJlciwgeW1pbjogbnVtYmVyLCB4bWF4OiBudW1iZXIsIHltYXg6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHEgPSBmbC5jcmVhdGVRdWVyeSgpXHJcbiAgICAgIHEud2hlcmUgPSB3bC53aGVyZSB8fCAnMT0xJ1xyXG4gICAgICBxLmdlb21ldHJ5ID0geyB0eXBlOiAnZXh0ZW50JywgLi4uZW52LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSB9IGFzIGFueVxyXG4gICAgICBxLnNwYXRpYWxSZWxhdGlvbnNoaXAgPSAnaW50ZXJzZWN0cydcclxuICAgICAgcS5vdXRGaWVsZHMgPSBbd2wud2lkdGhGaWVsZF1cclxuICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgcS5vdXRTcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0MzI2IH0gYXMgYW55XHJcbiAgICAgIGNvbnN0IGZzID0gYXdhaXQgZmwucXVlcnlGZWF0dXJlcyhxKVxyXG4gICAgICBjb25zdCBtaWRzOiBBcnJheTx7IGxhdDogbnVtYmVyLCBsb246IG51bWJlciwgd2lkdGg6IG51bWJlciB9PiA9IFtdXHJcbiAgICAgIGZvciAoY29uc3QgZiBvZiBmcy5mZWF0dXJlcykge1xyXG4gICAgICAgIGNvbnN0IGcgPSBmLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZVxyXG4gICAgICAgIGlmIChnICYmIGcucGF0aHMgJiYgZy5wYXRocy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IHAgPSBnLnBhdGhzWzBdXHJcbiAgICAgICAgICBjb25zdCBtID0gcFtNYXRoLmZsb29yKHAubGVuZ3RoIC8gMildXHJcbiAgICAgICAgICBtaWRzLnB1c2goeyBsYXQ6IG1bMV0sIGxvbjogbVswXSwgd2lkdGg6IGYuYXR0cmlidXRlc1t3bC53aWR0aEZpZWxkXSB8fCAwIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtaWRzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tIGRyYXdpbmcgLS0tLVxyXG4gIGNvbnN0IGRyYXcgPSAodmlldzogX19lc3JpLk1hcFZpZXcsIHJlczogYW55LCBzcGlsbDogeyBsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBlbnN1cmVMYXllcih2aWV3KVxyXG4gICAgbGF5ZXIucmVtb3ZlQWxsKClcclxuXHJcbiAgICAvLyBzcGlsbCBwb2ludFxyXG4gICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcclxuICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBzcGlsbC5sYXQsIGxvbmdpdHVkZTogc3BpbGwubG9uIH0pLFxyXG4gICAgICBzeW1ib2w6IHtcclxuICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsIHN0eWxlOiAneCcsIHNpemU6IDE0LFxyXG4gICAgICAgIG91dGxpbmU6IHsgY29sb3I6ICcjMDAwJywgd2lkdGg6IDMgfSxcclxuICAgICAgfSBhcyBhbnksXHJcbiAgICAgIHBvcHVwVGVtcGxhdGU6IHsgdGl0bGU6ICdTcGlsbCBwb2ludCcsIGNvbnRlbnQ6IGAke3NwaWxsLmxhdC50b0ZpeGVkKDUpfSwgJHtzcGlsbC5sb24udG9GaXhlZCg1KX1gIH0gYXMgYW55LFxyXG4gICAgfSkpXHJcblxyXG4gICAgLy8gdHJhY2UgcG9seWxpbmUsIHNwbGl0IGludG8gRVRBIGNvbG9yIGJhbmRzXHJcbiAgICBjb25zdCByb3dzOiBhbnlbXSA9IHJlcy50cmFjZVxyXG4gICAgbGV0IGJhbmRTdGFydCA9IDBcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZG9uZSA9IGkgPT09IHJvd3MubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGJhbmRDaGFuZ2VkID0gIWRvbmUgJiYgYmFuZENvbG9yKHJvd3NbaV0uY3VtX3RpbWUpICE9PSBiYW5kQ29sb3Iocm93c1tiYW5kU3RhcnRdLmN1bV90aW1lKVxyXG4gICAgICBpZiAoZG9uZSB8fCBiYW5kQ2hhbmdlZCkge1xyXG4gICAgICAgIGNvbnN0IHNlZyA9IHJvd3Muc2xpY2UoYmFuZFN0YXJ0LCBNYXRoLm1pbihpICsgMSwgcm93cy5sZW5ndGgpKVxyXG4gICAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgICBnZW9tZXRyeTogbmV3IFBvbHlsaW5lKHsgcGF0aHM6IFtzZWcubWFwKChyKSA9PiBbci5sb24sIHIubGF0XSldIGFzIGFueSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gYXMgYW55IH0pLFxyXG4gICAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBiYW5kQ29sb3Iocm93c1tiYW5kU3RhcnRdLmN1bV90aW1lKSwgd2lkdGg6IDQgfSBhcyBhbnksXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgYmFuZFN0YXJ0ID0gaVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSm9ic29uIHVuY2VydGFpbnR5IGJhbmRzOiB0cmFuc2x1Y2VudCB1bmRlcmxheSBmcm9tIGJ1bGsgKHBlYWspIHBvc2l0aW9uXHJcbiAgICAvLyB0byBmYXJ0aGVzdCBjcmVkaWJsZSAoOTklIGxlYWRpbmcpIHBvc2l0aW9uIGF0IGVhY2ggaG91clxyXG4gICAgZm9yIChjb25zdCBoIG9mIHJlcy5ob3VybHkpIHtcclxuICAgICAgaWYgKCFoLmJhbmQpIGNvbnRpbnVlXHJcbiAgICAgIGNvbnN0IGkwID0gTWF0aC5taW4oaC5iYW5kLnBlYWsuaSwgaC5iYW5kLmZhc3Rlc3QuaSlcclxuICAgICAgY29uc3QgaTEgPSBNYXRoLm1heChoLmJhbmQucGVhay5pLCBoLmJhbmQuZmFzdGVzdC5pKVxyXG4gICAgICBpZiAoaTEgPD0gaTApIGNvbnRpbnVlXHJcbiAgICAgIGNvbnN0IHNlZyA9IHJvd3Muc2xpY2UoaTAsIGkxICsgMSlcclxuICAgICAgbGF5ZXIuYWRkKG5ldyBHcmFwaGljKHtcclxuICAgICAgICBnZW9tZXRyeTogbmV3IFBvbHlsaW5lKHsgcGF0aHM6IFtzZWcubWFwKChyOiBhbnkpID0+IFtyLmxvbiwgci5sYXRdKV0gYXMgYW55LCBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfSBhcyBhbnkgfSksXHJcbiAgICAgICAgc3ltYm9sOiB7IHR5cGU6ICdzaW1wbGUtbGluZScsIGNvbG9yOiBbLi4uaGV4VG9SZ2IoYmFuZENvbG9yKGguaG91cikpLCAwLjI4XSwgd2lkdGg6IDE0LCBjYXA6ICdyb3VuZCcgfSBhcyBhbnksXHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG4gICAgLy8gaG91cmx5IG1hcmtlcnMgKyBsYWJlbHNcclxuICAgIGZvciAoY29uc3QgaCBvZiByZXMuaG91cmx5KSB7XHJcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBoLmxhdCwgbG9uZ2l0dWRlOiBoLmxvbiB9KSxcclxuICAgICAgICBzeW1ib2w6IHtcclxuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJywgc2l6ZTogNywgY29sb3I6IGJhbmRDb2xvcihoLmhvdXIpLFxyXG4gICAgICAgICAgb3V0bGluZTogeyBjb2xvcjogJyNmZmYnLCB3aWR0aDogMSB9LFxyXG4gICAgICAgIH0gYXMgYW55LFxyXG4gICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcclxuICAgICAgICAgIHRpdGxlOiBgSG91ciAke2guaG91cn1gLFxyXG4gICAgICAgICAgY29udGVudDogYCR7aC5jdW1fZGlzdF9rbS50b0ZpeGVkKDEpfSBrbSBkb3duc3RyZWFtIMK3ICR7aC52ZWxvY2l0eV9tcGgudG9GaXhlZCgxKX0gbXBoYCxcclxuICAgICAgICB9IGFzIGFueSxcclxuICAgICAgfSkpXHJcbiAgICAgIGxheWVyLmFkZChuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBoLmxhdCwgbG9uZ2l0dWRlOiBoLmxvbiB9KSxcclxuICAgICAgICBzeW1ib2w6IHtcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgIHRleHQ6IGAke2guaG91cn0gaHJgLFxyXG4gICAgICAgICAgY29sb3I6IGJhbmRDb2xvcihoLmhvdXIpLFxyXG4gICAgICAgICAgaGFsb0NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICBoYWxvU2l6ZTogMS41LFxyXG4gICAgICAgICAgeW9mZnNldDogOSxcclxuICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTAsIHdlaWdodDogJ2JvbGQnLCBmYW1pbHk6ICdzYW5zLXNlcmlmJyB9LFxyXG4gICAgICAgIH0gYXMgYW55LFxyXG4gICAgICB9KSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIC0tLS0gbW9kZWwgY29uZmlnICsgZXF1aXBtZW50ICsgY29tcHV0ZS9yZW5kZXIgKHB1cmUsIHJldXNhYmxlIG9uIGNhY2hlZCBkYXRhKSAtLS0tXHJcbiAgY29uc3QgbW9kZWxDZmcgPSAoc2Y6IG51bWJlcikgPT4gKHtcclxuICAgIHNhZmV0eUZhY3Rvcjogc2YsXHJcbiAgICB0aW1pbmdNb2RlbDogcHJvcHMuY29uZmlnLnRpbWluZ01vZGVsID8/ICdoeWRyYXVsaWMnLFxyXG4gICAgbWluU3RyZWFtT3JkZXI6IHByb3BzLmNvbmZpZy5taW5TdHJlYW1PcmRlciA/PyA0LFxyXG4gICAgbWF4SG91cnM6IHByb3BzLmNvbmZpZy5tYXhIb3VycyA/PyAyNCxcclxuICAgIG1heERpc3RhbmNlS206IHByb3BzLmNvbmZpZy5tYXhEaXN0YW5jZUttID8/IDMwMCxcclxuICAgIHZlcmJvc2U6IGZhbHNlLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGFwcGx5RXF1aXBtZW50ID0gKHJlczogYW55LCBkcmF3bjogTWFwPHN0cmluZywgbnVtYmVyPikgPT4ge1xyXG4gICAgY29uc3QgZXEgPSBwcm9wcy5jb25maWcuZXF1aXBtZW50XHJcbiAgICBpZiAoZXE/LmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm5cclxuICAgIGNvbnN0IHJ1bGVzID0ge1xyXG4gICAgICBlbnRyYWlubWVudE1zOiBlcT8uZW50cmFpbm1lbnRNcyA/PyAwLjM1LFxyXG4gICAgICBhbmNob3JTcGFjaW5nRnQ6IGVxPy5hbmNob3JTcGFjaW5nRnQgPz8gMTAwLFxyXG4gICAgICByZXNlcnZlUGN0OiBlcT8ucmVzZXJ2ZVBjdCA/PyAyMCxcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgcyBvZiByZXMuc2l0ZXMpIHtcclxuICAgICAgY29uc3Qga2V5ID0gbm9ybUd1aWQocy5HbG9iYWxJRCA/PyBzLmdsb2JhbGlkID8/IHMuR0xPQkFMSUQpXHJcbiAgICAgIGNvbnN0IGRyYXduRnQgPSBrZXkgPyBkcmF3bi5nZXQoa2V5KSA6IHVuZGVmaW5lZFxyXG4gICAgICBpZiAoZHJhd25GdCkge1xyXG4gICAgICAgIGNvbnN0IGJvb21GdCA9IE1hdGguY2VpbChkcmF3bkZ0IC8gNTApICogNTBcclxuICAgICAgICBzLmJvb20gPSB7XHJcbiAgICAgICAgICBib29tX2Z0OiBib29tRnQsXHJcbiAgICAgICAgICBhbmNob3JzOiBNYXRoLm1heCgyLCBNYXRoLmNlaWwoYm9vbUZ0IC8gcnVsZXMuYW5jaG9yU3BhY2luZ0Z0KSArIDEpLFxyXG4gICAgICAgICAgc291cmNlOiAnZHJhd24nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBlc3QgPSBlc3RpbWF0ZUJvb21OZWVkcyhzLnJpdmVyX3dpZHRoX20sIHMudmVsb2NpdHlfbXMsIHJ1bGVzKVxyXG4gICAgICAgIGlmIChlc3QpIHMuYm9vbSA9IHsgLi4uZXN0LCBzb3VyY2U6ICdlc3QnIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcHV0ZUFuZFJlbmRlciA9IChzZjogbnVtYmVyLCBmcm9tQ2FjaGUgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgYyA9IGNhY2hlUmVmLmN1cnJlbnRcclxuICAgIGlmICghYyB8fCAham12KSByZXR1cm5cclxuICAgIGNvbnN0IHJlcyA9IGNvbXB1dGVUcmFjZShjLmRhdGEsIG1vZGVsQ2ZnKHNmKSlcclxuICAgIGFwcGx5RXF1aXBtZW50KHJlcywgYy5kcmF3bilcclxuICAgIGRyYXcoam12LnZpZXcgYXMgX19lc3JpLk1hcFZpZXcsIHJlcywgeyBsYXQ6IGMubGF0LCBsb246IGMubG9uIH0pXHJcbiAgICBpZiAobGF5ZXJSZWYuY3VycmVudCkgbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlID0gdHJ1ZVxyXG4gICAgc2V0SGlkZGVuKGZhbHNlKVxyXG4gICAgc2V0UmVzdWx0KHJlcylcclxuICAgIGFybUxpc3RTeW5jKHJlcy5zaXRlcyB8fCBbXSlcclxuICAgIHNldERpYWcoWy4uLmMuZmV0Y2hOb3RlcywgYCR7cmVzLnNpdGVzLmxlbmd0aH0gc2l0ZShzKSB3aXRoaW4gYnVmZmVyIG9mIHRoZSB0cmFjZS5gXSlcclxuICAgIHNldFN0YXR1cyhcclxuICAgICAgYCR7cmVzLnJpdmVyX25hbWUgfHwgJ1RyYWNlJ30g4oCUICR7cmVzLmRpc3RhbmNlX2ttXzI0aC50b0ZpeGVkKDEpfSBrbSBpbiDiiaQgJHtwcm9wcy5jb25maWcubWF4SG91cnMgPz8gMjR9IGhgICtcclxuICAgICAgKGZyb21DYWNoZSA/ICcgwrcgcmVjb21wdXRlZCBpbnN0YW50bHkgZnJvbSBjYWNoZWQgaHlkcm9sb2d5JyA6ICcnKSxcclxuICAgIClcclxuICB9XHJcblxyXG4gIC8vIC0tLS0gcnVuIC0tLS1cclxuICBjb25zdCBhcm1DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICgham12IHx8IGFybWluZyB8fCBydW5uaW5nKSByZXR1cm5cclxuICAgIHNldEFybWluZyh0cnVlKVxyXG4gICAgc2V0U3RhdHVzKCdDbGljayB0aGUgc3BpbGwgbG9jYXRpb24gb24gdGhlIG1hcOKApicpXHJcbiAgICBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gam12LnZpZXcub24oJ2NsaWNrJywgYXN5bmMgKGV2dCkgPT4ge1xyXG4gICAgICBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpXHJcbiAgICAgIGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQgPSBudWxsXHJcbiAgICAgIHNldEFybWluZyhmYWxzZSlcclxuICAgICAgY29uc3QgbXAgPSBldnQubWFwUG9pbnRcclxuICAgICAgY29uc3QgbGF0ID0gbXAubGF0aXR1ZGUsIGxvbiA9IG1wLmxvbmdpdHVkZVxyXG4gICAgICBzZXRSdW5uaW5nKHRydWUpXHJcbiAgICAgIHNldFJlc3VsdChudWxsKVxyXG4gICAgICBzZXREaWFnKFtdKVxyXG4gICAgICBzZXRTdGF0dXMoYFRyYWNpbmcgZnJvbSAke2xhdC50b0ZpeGVkKDQpfSwgJHtsb24udG9GaXhlZCg0KX3igKZgKVxyXG4gICAgICBjb25zdCBub3Rlczogc3RyaW5nW10gPSBbXVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNmZyA9IHByb3BzLmNvbmZpZ1xyXG4gICAgICAgIGNvbnN0IHNpdGVMYXllcnMgPSAoY2ZnLnNpdGVMYXllcnMgfHwgW10pIGFzIGFueVxyXG4gICAgICAgIGNvbnN0IHJlY2VwdG9yTGF5ZXJzID0gKGNmZy5yZWNlcHRvckxheWVycyB8fCBbXSkgYXMgYW55XHJcbiAgICAgICAgaWYgKCFzaXRlTGF5ZXJzLmxlbmd0aCkgbm90ZXMucHVzaCgnTm8gc2l0ZSBsYXllcnMgY29uZmlndXJlZCDigJQgYWRkIHRoZW0gaW4gdGhlIHdpZGdldCBzZXR0aW5ncyAoU2l0ZSBsYXllcnMgSlNPTikuJylcclxuXHJcbiAgICAgICAgLy8gZmV0Y2ggZXZlcnl0aGluZyBvbmNlICh0cmFjZSwgZmxvd3MsIHdpZHRocywgc2l0ZS9yZWNlcHRvciBmZWF0dXJlcylcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hUcmFjZURhdGEobGF0LCBsb24sIHtcclxuICAgICAgICAgIC4uLm1vZGVsQ2ZnKHNhZmV0eSksXHJcbiAgICAgICAgICB3aWR0aFByb3ZpZGVyOiBtYWtlV2lkdGhQcm92aWRlcigpLFxyXG4gICAgICAgICAgc2l0ZVByb3ZpZGVyczogc2l0ZUxheWVycy5tYXAoKGxjLCBpKSA9PiBtYWtlU2l0ZVByb3ZpZGVyKGxjLCA1MDAsIGBTaXRlIGxheWVyICR7aSArIDF9YCwgbm90ZXMpKSxcclxuICAgICAgICAgIHJlY2VwdG9yUHJvdmlkZXJzOiByZWNlcHRvckxheWVycy5tYXAoKGxjLCBpKSA9PiBtYWtlU2l0ZVByb3ZpZGVyKGxjLCA4MDAsIGBSZWNlcHRvciBsYXllciAke2kgKyAxfWAsIG5vdGVzKSksXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gZHJhd24gYm9vbSBsaW5lczogcGVyLXNpdGUtbGF5ZXIgYm9vbUxheWVyICgrIGxlZ2FjeSBnbG9iYWwgZXF1aXBtZW50LmJvb21MYXllcilcclxuICAgICAgICBjb25zdCBkcmF3biA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcclxuICAgICAgICBjb25zdCBlcSA9IGNmZy5lcXVpcG1lbnRcclxuICAgICAgICBpZiAoZXE/LmVuYWJsZWQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zdCBib29tQ2ZnczogYW55W10gPSBbXVxyXG4gICAgICAgICAgZm9yIChjb25zdCBsYyBvZiBzaXRlTGF5ZXJzKSBpZiAobGMuYm9vbUxheWVyPy51cmwpIGJvb21DZmdzLnB1c2gobGMuYm9vbUxheWVyKVxyXG4gICAgICAgICAgaWYgKGVxPy5ib29tTGF5ZXI/LnVybCkgYm9vbUNmZ3MucHVzaChlcS5ib29tTGF5ZXIpXHJcbiAgICAgICAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KClcclxuICAgICAgICAgIGZvciAoY29uc3QgYmMgb2YgYm9vbUNmZ3MpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lnID0gYCR7YmMudXJsfXwke2JjLnNpdGVLZXlGaWVsZH1gXHJcbiAgICAgICAgICAgIGlmIChzZWVuLmhhcyhzaWcpKSBjb250aW51ZVxyXG4gICAgICAgICAgICBzZWVuLmFkZChzaWcpXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbSA9IGF3YWl0IGZldGNoRHJhd25Cb29tKGJjIGFzIGFueSlcclxuICAgICAgICAgICAgICBtLmZvckVhY2goKHYsIGspID0+IGRyYXduLnNldChrLCAoZHJhd24uZ2V0KGspIHx8IDApICsgdikpXHJcbiAgICAgICAgICAgICAgbm90ZXMucHVzaChgQm9vbSBsaW5lcyAoJHtzaWcuc3BsaXQoJy8nKS5zbGljZSgtMilbMF19KTogZHJhd24gZm9vdGFnZSBmb3IgJHttLnNpemV9IHNpdGUocylgKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgbm90ZXMucHVzaChgQm9vbSBsYXllciBGQUlMRUQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDkwKX1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWNoZVJlZi5jdXJyZW50ID0geyBsYXQsIGxvbiwgZGF0YSwgZHJhd24sIGZldGNoTm90ZXM6IG5vdGVzLnNsaWNlKCkgfVxyXG4gICAgICAgIGNvbXB1dGVBbmRSZW5kZXIoc2FmZXR5KVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgc2V0U3RhdHVzKGBUcmFjZSBmYWlsZWQ6ICR7U3RyaW5nKGUpLnNsaWNlKDAsIDEyMCl9YClcclxuICAgICAgICBzZXREaWFnKG5vdGVzKVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldFJ1bm5pbmcoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW2ptdiwgYXJtaW5nLCBydW5uaW5nLCBzYWZldHksIHByb3BzLmNvbmZpZ10pXHJcblxyXG4gIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xyXG4gICAgaWYgKGNsaWNrSGFuZGxlUmVmLmN1cnJlbnQpIHsgY2xpY2tIYW5kbGVSZWYuY3VycmVudC5yZW1vdmUoKTsgY2xpY2tIYW5kbGVSZWYuY3VycmVudCA9IG51bGwgfVxyXG4gICAgaWYgKGxheWVyUmVmLmN1cnJlbnQpIGxheWVyUmVmLmN1cnJlbnQucmVtb3ZlQWxsKClcclxuICAgIGNsZWFyTGlzdFN5bmMoKVxyXG4gICAgY2FjaGVSZWYuY3VycmVudCA9IG51bGxcclxuICAgIHNldEFybWluZyhmYWxzZSlcclxuICAgIHNldFJlc3VsdChudWxsKVxyXG4gICAgc2V0RGlhZyhbXSlcclxuICAgIHNldEhpZGRlbihmYWxzZSlcclxuICAgIHNldFN0YXR1cygnQ2xlYXJlZC4gQ2xpY2sgXCJTZXQgc3BpbGwgcG9pbnRcIiB0byBydW4gYWdhaW4uJylcclxuICB9XHJcblxyXG4gIC8vIGZ1bGwtcGFnZSBtYXA6IENTUyBtYXhpbWl6ZSBpbnN0ZWFkIG9mIHRoZSBGdWxsc2NyZWVuIEFQSSDigJQgZXZlcnl0aGluZyBzdGF5c1xyXG4gIC8vIG1vdW50ZWQgKHBsdW1lLCBwYW5lbHMsIHBvcHVwcykgYW5kIHRoaXMgZmxvYXRpbmcgcGFuZWwgcmVtYWlucyBvbiB0b3A7XHJcbiAgLy8gRXNjIG9yIHRoZSBidXR0b24gZXhpdHNcclxuICBjb25zdCBbbWF4ZWQsIHNldE1heGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IG1heGVkUmVmID0gdXNlUmVmKGZhbHNlKVxyXG4gIGNvbnN0IGVzY0hhbmRsZXJSZWYgPSB1c2VSZWY8KGU6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ+KG51bGwpXHJcbiAgY29uc3Qgc2V0TWFwTWF4aW1pemVkID0gKG9uOiBib29sZWFuKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAnW2RhdGEtd2lkZ2V0aWQ9XCInICsgKHByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdIHx8ICcnKSArICdcIl0nKVxyXG4gICAgaWYgKCFlbCkgcmV0dXJuXHJcbiAgICBpZiAob24pIHtcclxuICAgICAgZWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgIGVsLnN0eWxlLmluc2V0ID0gJzAnXHJcbiAgICAgIGVsLnN0eWxlLndpZHRoID0gJzEwMHZ3J1xyXG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnXHJcbiAgICAgIGVsLnN0eWxlLnpJbmRleCA9ICc5OTknXHJcbiAgICAgIGNvbnN0IGVzYyA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7IGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHNldE1hcE1heGltaXplZChmYWxzZSkgfVxyXG4gICAgICBlc2NIYW5kbGVyUmVmLmN1cnJlbnQgPSBlc2NcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzYylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJydcclxuICAgICAgZWwuc3R5bGUuaW5zZXQgPSAnJ1xyXG4gICAgICBlbC5zdHlsZS53aWR0aCA9ICcnXHJcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9ICcnXHJcbiAgICAgIGVsLnN0eWxlLnpJbmRleCA9ICcnXHJcbiAgICAgIGlmIChlc2NIYW5kbGVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjSGFuZGxlclJlZi5jdXJyZW50KVxyXG4gICAgICAgIGVzY0hhbmRsZXJSZWYuY3VycmVudCA9IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWF4ZWRSZWYuY3VycmVudCA9IG9uXHJcbiAgICBzZXRNYXhlZChvbilcclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpXHJcbiAgfVxyXG4gIGNvbnN0IHRvZ2dsZUZ1bGxNYXAgPSAoKSA9PiBzZXRNYXBNYXhpbWl6ZWQoIW1heGVkUmVmLmN1cnJlbnQpXHJcblxyXG4gIC8vIGJyaWVmaW5nIHRvZ2dsZTogaGlkZS9zaG93IHRoZSB0cmFqZWN0b3J5IGdyYXBoaWNzIFdJVEhPVVQgdG91Y2hpbmcgdGhlXHJcbiAgLy8gY2FjaGVkIHJ1biDigJQgcHJlc2VudGVyIGNhbiBmbGlwIHRoZSBtb2RlbCBvZmYgZHVyaW5nIGEgc2xpZGUgYW5kIGJhY2tcclxuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFsYXllclJlZi5jdXJyZW50KSByZXR1cm5cclxuICAgIGNvbnN0IHYgPSAhbGF5ZXJSZWYuY3VycmVudC52aXNpYmxlXHJcbiAgICBsYXllclJlZi5jdXJyZW50LnZpc2libGUgPSB2XHJcbiAgICBzZXRIaWRkZW4oIXYpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaXRlczogU2l0ZVJvd1tdID0gcmVzdWx0Py5zaXRlcyB8fCBbXVxyXG4gIGNvbnN0IHdhcm5pbmdzOiBzdHJpbmdbXSA9IHJlc3VsdD8ud2FybmluZ3MgfHwgW11cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXRcIiBzdHlsZT17eyBwYWRkaW5nOiAxMCwgb3ZlcmZsb3c6ICdhdXRvJywgZm9udFNpemU6IDEzLCBjb2xvcjogJyNmZmYnIH19PlxyXG4gICAgICB7cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyh2KSA9PiBzZXRKbXYodil9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgeyFwcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNmZjhhODAnIH19PlNlbGVjdCBhIE1hcCB3aWRnZXQgaW4gdGhpcyB3aWRnZXQncyBzZXR0aW5ncy48L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogOCB9fT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBkaXNhYmxlZD17IWptdiB8fCBhcm1pbmcgfHwgcnVubmluZ30gb25DbGljaz17YXJtQ2xpY2t9PlxyXG4gICAgICAgICAge2FybWluZyA/ICdDbGljayB0aGUgbWFw4oCmJyA6IHJ1bm5pbmcgPyAnVHJhY2luZ+KApicgOiAnU2V0IHNwaWxsIHBvaW50J31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPXtydW5uaW5nfSBvbkNsaWNrPXtjbGVhckFsbH0+Q2xlYXI8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXHJcbiAgICAgICAgICB0aXRsZT1cIlRvZ2dsZSBmdWxsLXBhZ2UgbWFwIChwbHVtZSBzdGF5cyB2aXNpYmxlOyB0aGlzIHBhbmVsIHN0YXlzIG9uIHRvcDsgRXNjIGV4aXRzKVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVGdWxsTWFwfT5cclxuICAgICAgICAgIHttYXhlZCA/ICfim7YgRXhpdCBmdWxsJyA6ICfim7YgRnVsbCBtYXAnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFyZXN1bHR9IG9uQ2xpY2s9e3RvZ2dsZVZpc2libGV9XHJcbiAgICAgICAgICB0aXRsZT1cIkhpZGUvc2hvdyB0aGUgdHJhamVjdG9yeSBvbiB0aGUgbWFwIHdpdGhvdXQgbG9zaW5nIHRoZSBydW4gKGJyaWVmaW5ncylcIj5cclxuICAgICAgICAgIHtoaWRkZW4gPyAn8J+RgSBTaG93JyA6ICfwn5GBIEhpZGUnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9eyFyZXN1bHR9IHRpdGxlPVwiQ29weSBydW4gcHJvdmVuYW5jZSByZWNvcmQgKEpTT04pIGZvciBhZnRlci1hY3Rpb24gZG9jdW1lbnRhdGlvbiDigJQgaW5jbHVkZXMgYSByZXBsYXkgVVJMXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQ/LnJ1blJlY29yZCB8fCAhY2FjaGVSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlYzogYW55ID0geyAuLi5yZXN1bHQucnVuUmVjb3JkIH1cclxuICAgICAgICAgICAgY29uc3QgdSA9IG5ldyBVUkwoJ2h0dHBzOi8vd2hpdGV3YXRlcnJlc2N1ZS5naXRodWIuaW8vd3JpLWV4Yi13aWRnZXRzL2VtYmVkLycpXHJcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnY29uZmlnJywgJ2FsbC1ncnBzJylcclxuICAgICAgICAgICAgdS5zZWFyY2hQYXJhbXMuc2V0KCdsYXQnLCBjYWNoZVJlZi5jdXJyZW50LmxhdC50b0ZpeGVkKDUpKVxyXG4gICAgICAgICAgICB1LnNlYXJjaFBhcmFtcy5zZXQoJ2xvbicsIGNhY2hlUmVmLmN1cnJlbnQubG9uLnRvRml4ZWQoNSkpXHJcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnYXNPZicsIHJlYy5hc19vZiAhPT0gJ2xpdmUnID8gcmVjLmFzX29mIDogcmVjLmdlbmVyYXRlZF9hdC5zbGljZSgwLCAxMCkpXHJcbiAgICAgICAgICAgIHUuc2VhcmNoUGFyYW1zLnNldCgnc2YnLCBTdHJpbmcoc2FmZXR5KSlcclxuICAgICAgICAgICAgcmVjLnJlcGxheV91cmwgPSB1LnRvU3RyaW5nKClcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoSlNPTi5zdHJpbmdpZnkocmVjLCBudWxsLCAxKSkudGhlbigoKSA9PiBzZXRTdGF0dXMoJ1J1biByZWNvcmQgY29waWVkIChpbmNsdWRlcyByZXBsYXlfdXJsKS4nKSlcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAg4o6YIFJlY29yZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCB9fVxyXG4gICAgICAgICAgdGl0bGU9XCJTYWZldHkgZmFjdG9yIOKAlCBjaGFuZ2luZyBpdCByZS1ydW5zIGluc3RhbnRseSBmcm9tIGNhY2hlZCBoeWRyb2xvZ3lcIj5cclxuICAgICAgICAgIFNGXHJcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzYWZldHl9IGRpc2FibGVkPXtydW5uaW5nfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB2ID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICBzZXRTYWZldHkodilcclxuICAgICAgICAgICAgICBpZiAoY2FjaGVSZWYuY3VycmVudCAmJiAhcnVubmluZykgY29tcHV0ZUFuZFJlbmRlcih2LCB0cnVlKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS4wfT4xLjA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MS4yNX0+MS4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxLjV9PjEuNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyLjB9PjIuMDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCwgbWluSGVpZ2h0OiAxOCB9fT57cnVubmluZyAmJiA8c3BhbiBjbGFzc05hbWU9XCJqaW11LXNlY29uZGFyeS1sb2FkaW5nXCIgLz59IHtzdGF0dXN9PC9kaXY+XHJcblxyXG4gICAgICB7ZGlhZy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicsIGZvbnRTaXplOiAxMSwgbWFyZ2luQm90dG9tOiA4IH19PlxyXG4gICAgICAgICAge2RpYWcubWFwKChkLCBpKSA9PiA8ZGl2IGtleT17aX0+e2R9PC9kaXY+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHt3YXJuaW5ncy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmM2NkJywgY29sb3I6ICcjMzMzJywgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmVlYmEnLCBwYWRkaW5nOiA2LCBtYXJnaW5Cb3R0b206IDgsIGJvcmRlclJhZGl1czogNCB9fT5cclxuICAgICAgICAgIHt3YXJuaW5ncy5tYXAoKHcsIGkpID0+IDxkaXYga2V5PXtpfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIgfX0+4pqgIHt3fTwvZGl2Pil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7cmVzdWx0ICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCwgY29sb3I6ICcjZmZmJyB9fT5cclxuICAgICAgICAgIEVUQXMgYXJlIGVzdGltYXRlcyAowrEyMCUpLCBzYWZldHkgZmFjdG9yIMOXe3Jlc3VsdC5zYWZldHlfZmFjdG9yfSBhcHBsaWVkIOKAlCB0cmVhdCBhcyBiYW5kcywgbm90IGFwcG9pbnRtZW50cy5cclxuICAgICAgICAgIHtyZXN1bHQuZ2F1Z2VzX3VzZWQubGVuZ3RoXHJcbiAgICAgICAgICAgID8gYCBGbG93czogJHtyZXN1bHQuZ2F1Z2VzX3VzZWQubWFwKChnOiBhbnkpID0+IGcuc3RhdGlvbl9pZCkuam9pbignLCAnKX0uYFxyXG4gICAgICAgICAgICA6ICcgTm8gbGl2ZSBnYXVnZXMgZm91bmQg4oCUIGRyYWluYWdlLWFyZWEgZmxvdyBlc3RpbWF0ZS4nfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2xpc3RTeW5jRmllbGQgJiYgc2l0ZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICc2cHggMCcsIGZvbnRTaXplOiAxMiB9fT5cclxuICAgICAgICAgIDxiPntzaXRlcy5sZW5ndGh9IHNpdGV7c2l0ZXMubGVuZ3RoID4gMSA/ICdzJyA6ICcnfSBpbiB0aGUgcGx1bWUgcGF0aDwvYj4g4oCUIGhpZ2hsaWdodGVkIGluIHRoZSBzaXRlIGxpc3QgYnkgRVRBIGJhbmQuXHJcbiAgICAgICAgICB7c2l0ZXMuc29tZSgocykgPT4gcy5ib29tKSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyIH19PlxyXG4gICAgICAgICAgICAgIEJvb20gdG90YWxzICh7c2l0ZXMuZmlsdGVyKChzKSA9PiBzLmJvb20/LnNvdXJjZSA9PT0gJ2RyYXduJykubGVuZ3RofSBkcmF3biDinJMgL3snICd9XHJcbiAgICAgICAgICAgICAge3NpdGVzLmZpbHRlcigocykgPT4gcy5ib29tPy5zb3VyY2UgPT09ICdlc3QnKS5sZW5ndGh9IGVzdCk6eycgJ31cclxuICAgICAgICAgICAgICB7c2l0ZXMucmVkdWNlKCh0LCBzKSA9PiB0ICsgKHMuYm9vbT8uYm9vbV9mdCB8fCAwKSwgMCkudG9Mb2NhbGVTdHJpbmcoKX0gZnQgwrd7JyAnfVxyXG4gICAgICAgICAgICAgIHtzaXRlcy5yZWR1Y2UoKHQsIHMpID0+IHQgKyAocy5ib29tPy5hbmNob3JzIHx8IDApLCAwKX0gYW5jaG9yc1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cGFpbnRTdGF0cyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyLCBvcGFjaXR5OiAwLjcgfX0+bGlzdCBzeW5jOiB7cGFpbnRTdGF0c308L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHshbGlzdFN5bmNGaWVsZCAmJiBzaXRlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScgfX0+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0ciBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNjY2MnIH19PlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+RVRBPC90aD5cclxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PlNpdGU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+a208L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnMnB4IDRweCcgfX0+Qm9vbTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7c2l0ZXMubWFwKChzLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnIH19PlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3MuZXRhX2Vhcmx5X2hyICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IGBlYXJsaWVzdCBjcmVkaWJsZSAke3MuZXRhX2Vhcmx5X2hyfSBociDCtyBmaXJzdCBhcnJpdmFsICR7cy5ldGFfaHJ9IGhyIMK3IHBlYWsgJHtzLmV0YV9wZWFrX2hyfSBociR7cy5jbGVhcl9ociA/IGAgwrcgY2xlYXIgfiR7cy5jbGVhcl9ocn0gaHJgIDogJyd9YFxyXG4gICAgICAgICAgICAgICAgICAgIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogMTAsIGhlaWdodDogMTAsIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYW5kQ29sb3Iocy5ldGFfaHIpLCBtYXJnaW5SaWdodDogNCxcclxuICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAge3MuZXRhX2Vhcmx5X2hyICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IGAke3MuZXRhX2Vhcmx5X2hyLnRvRml4ZWQoMSl94oCTJHtzLmV0YV9oci50b0ZpeGVkKDEpfSBocmBcclxuICAgICAgICAgICAgICAgICAgICA6IHMuZXRhX2hyIDwgMSA/IGAke01hdGgucm91bmQocy5ldGFfaHIgKiA2MCl9IG1pbmAgOiBgJHtzLmV0YV9oci50b0ZpeGVkKDEpfSBocmB9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4JyB9fT57cy5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzJweCA0cHgnIH19PntzLmRpc3Rfa20udG9GaXhlZCgxKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICcycHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0gdGl0bGU9e3MuYm9vbVxyXG4gICAgICAgICAgICAgICAgICA/IGAke3MuYm9vbS5hbmNob3JzfSBhbmNob3Igc2V0cyR7cy5ib29tLmJvb21fYW5nbGVfZGVnID8gYCDCtyAke3MuYm9vbS5ib29tX2FuZ2xlX2RlZ33CsCBkZXBsb3ltZW50YCA6ICcnfSR7cy5ib29tLmNhc2NhZGVfYWR2aXNlZCA/ICcgwrcgZmFzdCB3YXRlcjogY2FzY2FkZSBtdWx0aXBsZSBib29tcycgOiAnJ30gKCR7cy5ib29tLnNvdXJjZSA9PT0gJ2RyYXduJyA/ICdmcm9tIGRyYXduIGJvb20gbGluZXMnIDogJ2VzdGltYXRlZCBmcm9tIG1vZGVsZWQgd2lkdGgvdmVsb2NpdHknfSlgXHJcbiAgICAgICAgICAgICAgICAgIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICB7cy5ib29tXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cy5ib29tLmJvb21fZnQudG9Mb2NhbGVTdHJpbmcoKX0gZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAge3MuYm9vbS5jYXNjYWRlX2FkdmlzZWQgJiYgJyDimqEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PiB7cy5ib29tLnNvdXJjZSA9PT0gJ2RyYXduJyA/ICfinJMnIDogJ2VzdC4nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogJ+KAlCd9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIHtzaXRlcy5zb21lKChzKSA9PiBzLmJvb20pICYmIChcclxuICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJUb3A6ICcycHggc29saWQgI2NjYycsIGZvbnRXZWlnaHQ6IDYwMCB9fT5cclxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSBzdHlsZT17eyBwYWRkaW5nOiAnM3B4IDRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFRvdGFscyAoe3NpdGVzLmZpbHRlcigocykgPT4gcy5ib29tKS5sZW5ndGh9IGJvb20gc2l0ZXMpXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICczcHggNHB4Jywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtzaXRlcy5yZWR1Y2UoKHQsIHMpID0+IHQgKyAocy5ib29tPy5ib29tX2Z0IHx8IDApLCAwKS50b0xvY2FsZVN0cmluZygpfSBmdCDCt3snICd9XHJcbiAgICAgICAgICAgICAgICAgIHtzaXRlcy5yZWR1Y2UoKHQsIHMpID0+IHQgKyAocy5ib29tPy5hbmNob3JzIHx8IDApLCAwKX0gYW5jaG9yc1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICApfVxyXG4gICAgICB7cmVzdWx0ICYmIHNpdGVzLnNvbWUoKHMpID0+IHMuYm9vbSkgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjZmZmJywgbWFyZ2luVG9wOiA0IH19PlxyXG4gICAgICAgICAg4pyTID0gZHJhd24gYm9vbSBsaW5lcyDCtyBlc3QuID0gc2l6ZWQgZnJvbSBtb2RlbGVkIHdpZHRoL3ZlbG9jaXR5XHJcbiAgICAgICAgICAoYm9vbSBhbmdsZWQgdG8ga2VlcCBub3JtYWwgZmxvdyDiiaQgeyhwcm9wcy5jb25maWcuZXF1aXBtZW50Py5lbnRyYWlubWVudE1zID8/IDAuMzUpfSBtL3MsXHJcbiAgICAgICAgICAre3Byb3BzLmNvbmZpZy5lcXVpcG1lbnQ/LnJlc2VydmVQY3QgPz8gMjB9JSByZXNlcnZlKSDCtyDimqEgPSBmYXN0IHdhdGVyLCBjYXNjYWRlIGJvb21zXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtyZXN1bHQgJiYgc2l0ZXMubGVuZ3RoID09PSAwICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT5ObyBjb25maWd1cmVkIHNpdGVzIHdpdGhpbiByZWFjaCBvZiB0aGlzIHRyYWNlLjwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=