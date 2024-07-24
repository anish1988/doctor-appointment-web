(() => {
    var __webpack_modules__ = {
        83660: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => B });
            var r = n(88094),
                i = n(22358),
                o = n(68020),
                a = n(93187),
                s = n(84536),
                l = n(25801),
                c = n(81921),
                u = n(52928),
                d = n(2667),
                p = n.n(d),
                h = n(39964),
                f = n(13253),
                m = n(28595),
                v = n(86358),
                g = n(64940),
                y = n(76236),
                b = n(29479),
                _ = n(4481),
                A = n(41082),
                x = n(26317),
                C = n(33040),
                w = n(13162),
                S = n(82439),
                E = n(86095),
                I = n(68747),
                T = n(36162),
                O = n(29600),
                N = n(75263),
                k = n(51265),
                D = n(79723),
                P = n(82796);
            var R = n(48212),
                M = n(15174);
            const L = {
                messageContainer: "patient-list_messageContainer__lGm+G",
                snackMessage: "patient-list_snackMessage__tuokA",
                iconButton: "patient-list_iconButton__y9ipr",
                cardCtnGrid: "patient-list_cardCtnGrid__D16ju",
                userInfo: "patient-list_userInfo__81+xV",
                menuImageActive: "patient-list_menuImageActive__WP3lE",
                dotImage: "patient-list_dotImage__KkSQj",
                popOver: "patient-list_popOver__W+yLb",
                "MuiPaper-root": "patient-list_MuiPaper-root__Z3Q-o",
                threeDotMenu: "patient-list_threeDotMenu__xvndm",
                "MuiPaper-elevation8": "patient-list_MuiPaper-elevation8__LL4si",
                startConsultationIconClass: "patient-list_startConsultationIconClass__8+RB+",
                "startConsultationIconClass--scmd-disabled": "patient-list_startConsultationIconClass--scmd-disabled__qeBEB",
                rescheduleIcon: "patient-list_rescheduleIcon__xoR+z",
                "rescheduleIcon--scmd-disabled": "patient-list_rescheduleIcon--scmd-disabled__4GzHz",
                changeConsultationIconClass: "patient-list_changeConsultationIconClass__78PTa",
                "changeConsultationIconClass--scmd-disabled": "patient-list_changeConsultationIconClass--scmd-disabled__AI33M",
                editPatientIcon: "patient-list_editPatientIcon__mFI9U",
                "editPatientIcon--scmd-disabled": "patient-list_editPatientIcon--scmd-disabled__GxUsa",
                uploadDocumentIconclass: "patient-list_uploadDocumentIconclass__JIaon",
                "uploadDocumentIconclass--scmd-disabled": "patient-list_uploadDocumentIconclass--scmd-disabled__+VZcP",
                markAsComplete: "patient-list_markAsComplete__pPAuz",
                "markAsComplete--scmd-disabled": "patient-list_markAsComplete--scmd-disabled__7-EAY",
                cancelIcon: "patient-list_cancelIcon__Hfztd",
                "cancelIcon--scmd-disabled": "patient-list_cancelIcon--scmd-disabled__airQS",
                sharePatientIconClass: "patient-list_sharePatientIconClass__gFKDD",
                "sharePatientIconClass--scmd-disabled": "patient-list_sharePatientIconClass--scmd-disabled__0zC9S",
                deletePatientIconClass: "patient-list_deletePatientIconClass__RUxwn",
                "deletePatientIconClass--scmd-disabled": "patient-list_deletePatientIconClass--scmd-disabled__-5pq+",
                menuItemLabelNew: "patient-list_menuItemLabelNew__m-QU+",
                paperShadow: "patient-list_paperShadow__PRVDE",
                AtoZContainer: "patient-list_AtoZContainer__eJJYV",
                AtoZGrid: "patient-list_AtoZGrid__rAW06",
                AtoZContainerScrollThumb: "patient-list_AtoZContainerScrollThumb__JbmIq",
                card_Bounds: "patient-list_card_Bounds__0V3ES",
                userNameLabel: "patient-list_userNameLabel__x+ZBq",
                badgeText: "patient-list_badgeText__aQNgM",
                avatarImage: "patient-list_avatarImage__UT7+r",
            };
            var j = n(70012),
                F = n(8708),
                H = n(15678);
            const U = (e) => {
                    var t;
                    const n = (0, i.d4)((e) => (null === e || void 0 === e ? void 0 : e.user)),
                        d = (0, i.d4)((e) => (null === e || void 0 === e ? void 0 : e.notification)),
                        U = null === n || void 0 === n || null === (t = n.data) || void 0 === t ? void 0 : t.DL_DoctorID,
                        [B, V] = (0, r.useState)(null),
                        [z, W] = (0, r.useState)(),
                        [G, Y] = (0, r.useState)(),
                        [q, K] = (0, r.useState)(""),
                        [X, Z] = (0, r.useState)(!1),
                        [Q, J] = (0, r.useState)(),
                        [$, ee] = (0, r.useState)(!1),
                        [te, ne] = (0, r.useState)(!1),
                        [re, ie] = (0, r.useState)(!1),
                        [oe, ae] = (0, r.useState)(null),
                        [se, le] = (0, r.useState)(null),
                        [ce, ue] = (0, r.useState)(!1),
                        de = (0, r.useRef)(),
                        { DoctorProfile: pe } = (0, w.Wh)(U) || {},
                        { startTracking: he } = (0, I.L)(),
                        fe = (0, w.PR)(),
                        me = (0, k.U4)(),
                        ve = (() => {
                            const { invokeMutation: e } = (0, P.y)({ apiEndPoint: N.J0Z });
                            return e;
                        })(),
                        ge = (0, i.wA)(),
                        { invalidateActiveAPIs: ye } = (0, O.K)(),
                        be = () => {
                            V(null), Y(null), W(null), K(""), J(null);
                        },
                        _e = (e) => {
                            var t;
                            be(),
                                (t = null === e || void 0 === e ? void 0 : e.ID),
                                K(t),
                                (0, E.pushGaNavigationEvent)({ eventCategory: E.gaSource.patientListPage, eventAction: E.gaSource.pageOpen, eventLabel: "right_side_menu", eventLabel2: "edit_patient" });
                        },
                        Ae = (e, t, n) => {
                            if (null !== e && void 0 !== e && e.ID) {
                                var r, i, o, a, s, l, c, u;
                                const d = {
                                    isOpenModal: !0,
                                    apptMode: n,
                                    firstName: null !== (r = null === e || void 0 === e ? void 0 : e.FirstName) && void 0 !== r ? r : "",
                                    lastName: null !== (i = null === e || void 0 === e ? void 0 : e.LastName) && void 0 !== i ? i : "",
                                    phoneNumber: null !== (o = null === e || void 0 === e ? void 0 : e.PhoneNumber) && void 0 !== o ? o : "",
                                    gender: null !== (a = null === e || void 0 === e || null === (s = e.Gender) || void 0 === s || null === (l = s.charAt(0)) || void 0 === l ? void 0 : l.toUpperCase()) && void 0 !== a ? a : "",
                                    dateOfBirth: ((null === e || void 0 === e ? void 0 : e.DateOfBirth) && p()(null === e || void 0 === e ? void 0 : e.DateOfBirth).format()) || "",
                                    emailAddress: null !== (c = null === e || void 0 === e ? void 0 : e.EmailAddress) && void 0 !== c ? c : "",
                                    customerId: null !== (u = null === e || void 0 === e ? void 0 : e.ID) && void 0 !== u ? u : "",
                                };
                                me({ ...d }), he("add_appointment", { source: t ? "Patient_mini_card" : "Patient_list" }), be();
                            }
                            (0, E.pushGaNavigationEvent)({ eventCategory: E.gaSource.patientListPage, eventAction: E.gaSource.pageOpen, eventLabel: "right_side_menu", eventLabel2: "add_appointment" });
                        },
                        xe = (() => {
                            const { invokeMutation: e } = (0, P.y)({ apiEndPoint: N.xfz });
                            return e;
                        })(),
                        Ce = () => {
                            Z(!1);
                        },
                        we = () => {
                            const { ID: t, AppointmentID: n, Name: r, AppointmentStatus: i } = Q;
                            fe({
                                payload: { CustomerID: t, AppointmentID: n, Name: r, Status: "CAN", AppointmentStatus: i },
                                mutateOption: {
                                    onSuccess: (t) => {
                                        if ((Z(!1), "True" === (null === t || void 0 === t ? void 0 : t.IStatusUpdated))) {
                                            const t = { messageType: j.A.snackBarVariant.success, message: "Appointment cancelled successfully" };
                                            e.constantTypeAction.ShowSnackbarMessage(t), be(), e.handleTabChange("", e.index);
                                        } else {
                                            const t = { messageType: j.A.snackBarVariant.error, message: "Failed to cancel appointment, please try again later" };
                                            e.constantTypeAction.ShowSnackbarMessage(t);
                                        }
                                    },
                                    onError: () => {
                                        const t = { messageType: j.A.snackBarVariant.error, message: "Failed to cancel appointment, please try again later" };
                                        e.constantTypeAction.ShowSnackbarMessage(t);
                                    },
                                },
                            });
                        },
                        Se = (0, r.useRef)(),
                        Ee = () => {
                            clearTimeout(Se.current), ae(null), le(null);
                        };
                    (0, r.useEffect)(
                        () => () => {
                            Se.current && clearTimeout(Se.current);
                        },
                        []
                    );
                    const Ie = (t, n) => {
                            (0, S.NJ)("patient") &&
                                (e.goToPatientPastVisitHandler(t, n), (0, E.pushGaNavigationEvent)({ eventCategory: E.gaSource.patientListPage, eventAction: E.gaSource.pageOpen, eventLabel: "patient_profile_click" }));
                        },
                        Te = (e) =>
                            (0, H.jsxs)("div", {
                                style: { marginLeft: 16, display: "flex", alignItems: "center" },
                                children: [
                                    (0, H.jsx)("img", { src: b.A, height: 32, width: 32, style: { marginTop: 2 } }),
                                    (0, H.jsx)("span", { style: { marginLeft: 4, fontWeight: 600, fontSize: 13, color: "var(--scarlet-gum)" }, children: e.healthAddress }),
                                ],
                            });
                    return (0, H.jsxs)(o.Ay, {
                        container: !0,
                        children: [
                            (0, H.jsxs)(o.Ay, {
                                xs: 1,
                                item: !0,
                                className: "".concat(L.AtoZGrid, " ").concat(L.AtoZContainer),
                                ref: de,
                                children: [
                                    (0, H.jsx)("div", {
                                        className: "".concat(L.AtoZContainerScrollThumb, " Top"),
                                        children: (0, H.jsx)(a.A, {
                                            onClick: () => {
                                                de.current && (de.current.scrollTop -= 50);
                                            },
                                            children: (0, H.jsx)(h.A, { className: L.iconButton }),
                                        }),
                                    }),
                                    (0, H.jsx)(R.PD, { alphabetsOnClickHandle: e.alphabetsOnClickHandle, activeAlphabet: e.activeAlphabet }),
                                    (0, H.jsx)("div", {
                                        className: "".concat(L.AtoZContainerScrollThumb, " Bottom"),
                                        children: (0, H.jsx)(a.A, {
                                            onClick: () => {
                                                de.current && (de.current.scrollTop += 50);
                                            },
                                            children: (0, H.jsx)(f.A, { className: L.iconButton }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, H.jsxs)(o.Ay, {
                                xs: 11,
                                md: 11,
                                lg: 11,
                                item: !0,
                                className: L.cardCtnGrid,
                                children: [
                                    e.patientList.length
                                        ? e.patientList.map((e, t) =>
                                              (0, H.jsx)(
                                                  R.Zp,
                                                  {
                                                      "data-testid": "test_patientCard",
                                                      className: "".concat(L.card_Bounds),
                                                      onClick: () => Ie(e, t),
                                                      children: (0, H.jsxs)(o.Ay, {
                                                          "container-fluid": "true",
                                                          style: { display: "flex" },
                                                          children: [
                                                              (0, H.jsxs)(o.Ay, {
                                                                  item: !0,
                                                                  xs: 8,
                                                                  style: { display: "flex" },
                                                                  children: [
                                                                      (0, H.jsx)("div", { children: (0, H.jsx)("div", { children: (0, H.jsx)("img", { src: (0, M._F)(e), className: "".concat(L.avatarImage) }) }) }),
                                                                      (0, H.jsxs)("div", {
                                                                          style: { flex: 1, justifyContent: "start" },
                                                                          children: [
                                                                              (0, H.jsxs)("div", {
                                                                                  style: { display: "inline-flex" },
                                                                                  onMouseOver: (t) => {
                                                                                      oe !== e.ID &&
                                                                                          ((e, t) => {
                                                                                              const n = e.currentTarget;
                                                                                              clearTimeout(Se.current),
                                                                                                  (Se.current = setTimeout(() => {
                                                                                                      le(n), ae(t);
                                                                                                  }, 300));
                                                                                          })(t, e.ID);
                                                                                  },
                                                                                  onClick: (e) => {
                                                                                      e.stopPropagation();
                                                                                  },
                                                                                  onMouseLeave: Ee,
                                                                                  children: [
                                                                                      (0, H.jsx)("label", {
                                                                                          className: "".concat(L.userNameLabel),
                                                                                          onClick: () => {
                                                                                              Ie(e, t);
                                                                                          },
                                                                                          children: e.Name.charAt(0).toUpperCase() + e.Name.slice(1),
                                                                                      }),
                                                                                      e.ID === oe &&
                                                                                          (0, H.jsx)(R.LY, { anchorEl: se, patientDetails: e, placement: "right-start", user: n, isFooterShow: !0, handleScheduleFollowUpClick: Ae }),
                                                                                  ],
                                                                              }),
                                                                              (0, H.jsxs)("div", {
                                                                                  style: { display: "flex" },
                                                                                  children: [
                                                                                      (0, H.jsx)("div", {
                                                                                          className: L.userInfo,
                                                                                          children: (0, H.jsx)(R.sp, { Gender: e.Gender, DateOfBirth: e.DateOfBirth, PhoneNumber: e.PhoneNumber }),
                                                                                      }),
                                                                                      (null === e || void 0 === e ? void 0 : e.healthAddress) && Te(e),
                                                                                  ],
                                                                              }),
                                                                          ],
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, H.jsx)(o.Ay, {
                                                                  item: !0,
                                                                  xs: 4,
                                                                  style: { marginTop: 4 },
                                                                  children: (0, H.jsx)("div", {
                                                                      style: { flex: 1, justifyContent: "start" },
                                                                      children: (0, H.jsx)("div", {
                                                                          className: "displayFlex",
                                                                          children: (0, H.jsx)("div", {
                                                                              style: { display: "flex" },
                                                                              children: (0, H.jsx)("div", { children: (0, H.jsx)("label", { className: "".concat(L.badgeText), children: null === e || void 0 === e ? void 0 : e.UHID }) }),
                                                                          }),
                                                                      }),
                                                                  }),
                                                              }),
                                                              (0, H.jsx)(o.Ay, {
                                                                  style: { marginTop: 4, height: 25 },
                                                                  children: (0, H.jsx)("div", {
                                                                      "data-testid": "test_patientThreeDots",
                                                                      id: e.UHID,
                                                                      className: "".concat(G === e.UHID ? L.menuImageActive : L.dotImage),
                                                                      onClick: (t) => {
                                                                          ((e, t) => {
                                                                              (0, M.bo)(e), Y(t.UHID), V(e.currentTarget), W(t);
                                                                          })(t, e);
                                                                      },
                                                                  }),
                                                              }),
                                                          ],
                                                      }),
                                                  },
                                                  e.ID
                                              )
                                          )
                                        : (0, H.jsx)(R.ko, { setAddPatientModalOpen: ue }),
                                    Boolean(B) &&
                                        (0, H.jsx)(s.Ay, {
                                            keepMounted: !0,
                                            id: "patientAdditionalAction",
                                            anchorEl: B,
                                            className: L.popOver,
                                            open: Boolean(B),
                                            anchorOrigin: { vertical: "center", horizontal: "left" },
                                            disablePortal: !0,
                                            transformOrigin: { vertical: "center", horizontal: "right" },
                                            onClose: be,
                                            PaperProps: { className: L.threeDotMenu },
                                            children: (0, H.jsx)(l.A, {
                                                onClickAway: be,
                                                children: (0, H.jsxs)(c.A, {
                                                    classes: { elevation1: L.paperShadow },
                                                    square: !0,
                                                    elevation: 1,
                                                    style: { width: 195, border: "1px solid transparent" },
                                                    children: [
                                                        (0, H.jsxs)(u.A, {
                                                            className: L["rescheduleIcon".concat((0, S.u8)("appointment"))],
                                                            style: { paddingLeft: "2%" },
                                                            onClick: () => {
                                                                Ae(z, !1, "");
                                                            },
                                                            children: [(0, H.jsx)("img", { src: _.A, id: "rescheduleIconNormal" }), (0, H.jsx)(R.EY, { variant: "size12", className: L.menuItemLabelNew, children: "Add Appointment" })],
                                                        }),
                                                        (0, H.jsxs)(u.A, {
                                                            className: L["editPatientIcon".concat((0, S.u8)("patient", U, (null === z || void 0 === z ? void 0 : z.healthAddress) && "--scmd-disabled"))],
                                                            style: { paddingLeft: "2%" },
                                                            onClick: () => {
                                                                _e(z);
                                                            },
                                                            children: [(0, H.jsx)("img", { src: A.A, id: "editPatientIconNormal" }), (0, H.jsx)(R.EY, { variant: "size12", className: L.menuItemLabelNew, children: "Edit Patient" })],
                                                        }),
                                                        (0, H.jsxs)(u.A, {
                                                            className: L["uploadDocumentIconclass".concat((0, S.u8)("patient"))],
                                                            style: { paddingLeft: "2%" },
                                                            onClick: () => {
                                                                W(z),
                                                                    ne(!0),
                                                                    (0, E.pushGaNavigationEvent)({
                                                                        eventCategory: E.gaSource.patientListPage,
                                                                        eventAction: E.gaSource.pageOpen,
                                                                        eventLabel: "right_side_menu",
                                                                        eventLabel2: "upload_documents",
                                                                    });
                                                            },
                                                            children: [
                                                                (0, H.jsx)("img", { src: x.A, id: "uploadDocumentIconclassNormal" }),
                                                                (0, H.jsx)(R.EY, { variant: "size12", className: L.menuItemLabelNew, children: "Upload Documents" }),
                                                            ],
                                                        }),
                                                        (null === pe || void 0 === pe ? void 0 : pe.optForListing) &&
                                                            (0, H.jsxs)(u.A, {
                                                                onClick: () => (
                                                                    (0, E.pushGaNavigationEvent)({ eventCategory: E.gaSource.patientListPage, eventAction: E.gaSource.pageOpen, eventLabel: "share_profile_link", eventLabel2: "send" }),
                                                                    ee(!0),
                                                                    void be()
                                                                ),
                                                                className: L["sharePatientIconClass".concat((0, S.u8)("patient"))],
                                                                style: { paddingLeft: "2%" },
                                                                children: [
                                                                    (0, H.jsx)("img", { src: C.A, id: "sharePatientIconClassNormal" }),
                                                                    (0, H.jsx)(R.EY, { variant: "size12", className: L.menuItemLabelNew, children: "Share profile link" }),
                                                                ],
                                                            }),
                                                        !Number(null === z || void 0 === z ? void 0 : z.IsPastVisit) &&
                                                            (0, H.jsxs)(u.A, {
                                                                onClick: () => ie(!0),
                                                                className: L["deletePatientIconClass".concat((0, S.u8)("patient"))],
                                                                style: { paddingLeft: "2%" },
                                                                children: [(0, H.jsx)("img", { src: y.A, id: "deletePatientIconClassNormal" }), (0, H.jsx)(R.EY, { variant: "size12", className: L.menuItemLabelNew, children: "Delete" })],
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    !!q &&
                                        (0, H.jsx)(v.A, {
                                            visible: !!q,
                                            onClose: () => {
                                                K("");
                                            },
                                            appointment: { CustomerID: q },
                                            refetchPatientList: e.refetchPatientList,
                                            customGetPatientAPICall: !0,
                                        }),
                                    X && (0, H.jsx)(R.bp, { noClickHandler: Ce, yesClickHandler: we, setIsCancelAppointment: Z }),
                                    $ &&
                                        (0, H.jsx)(m.A, {
                                            closeShareProfileModal: () => {
                                                ee(!1);
                                            },
                                            isShareProfileModalOpen: $,
                                            DL_DoctorID: n.data.DL_DoctorID,
                                            DoctorName: n.data.Name,
                                        }),
                                    te && (0, H.jsx)(F.d, { isOpen: te, setIsAttachmentPopUpOpen: ne, patientDetails: z }),
                                    re &&
                                        (0, H.jsx)(R.C4, {
                                            showDeletePatientModal: re,
                                            setShowDeletePatientModal: ie,
                                            deletePatientOnClickHandler: () => {
                                                const t = { PatientData: { DoctorID: n.data.DoctorID, CustomerID: null === z || void 0 === z ? void 0 : z.ID } };
                                                xe({
                                                    payload: t,
                                                    mutateOption: {
                                                        onSuccess: () => {
                                                            var n;
                                                            let r;
                                                            (r = (null === e || void 0 === e || null === (n = e.patientList) || void 0 === n ? void 0 : n.length) > 1 ? e.activeAlphabet : "A-Z"),
                                                                ge((0, T.setRefreshPatientList)(!0)),
                                                                ye(N.JHd),
                                                                ye(N.CXE),
                                                                e.handleTabChange("", e.index, r);
                                                            const i = {
                                                                messageType: j.A.snackBarVariant.success,
                                                                message: (0, H.jsx)("div", {
                                                                    children: (0, H.jsxs)("div", {
                                                                        style: { display: "flex" },
                                                                        children: [
                                                                            (0, H.jsxs)("div", {
                                                                                className: L.messageContainer,
                                                                                children: [
                                                                                    "Patient ",
                                                                                    (0, H.jsx)("span", { style: { color: "var(--scampi)" }, children: null === z || void 0 === z ? void 0 : z.Name }),
                                                                                    " ",
                                                                                    "has been deleted successfully",
                                                                                    " ",
                                                                                ],
                                                                            }),
                                                                            (0, H.jsx)("div", {
                                                                                className: L.snackMessage,
                                                                                children: (0, H.jsx)("button", {
                                                                                    className: "btn-anchor-snackbar-msg-patient",
                                                                                    type: "button",
                                                                                    name: "undoSnackbarButton",
                                                                                    onClick: () => {
                                                                                        ((t) => {
                                                                                            const n = { PatientData: { DoctorID: t.DoctorID, CustomerID: t.CustomerID } };
                                                                                            ve({
                                                                                                payload: n,
                                                                                                mutateOption: {
                                                                                                    onSuccess: (t) => {
                                                                                                        t.PatientFlag && (e.handleTabChange("", e.index), e.refetchPatientList());
                                                                                                    },
                                                                                                },
                                                                                            });
                                                                                        })(t.PatientData);
                                                                                    },
                                                                                    children: "Undo",
                                                                                }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            };
                                                            e.constantTypeAction.ShowSnackbarMessage(i), !d.notificationRefetch && ge((0, D.setNotificationRefetch)(!0));
                                                        },
                                                    },
                                                }),
                                                    be(),
                                                    ie(!1),
                                                    (0, E.pushGaNavigationEvent)({ eventCategory: E.gaSource.patientListPage, eventAction: E.gaSource.pageOpen, eventLabel: "right_side_menu", eventLabel2: "delete" });
                                            },
                                        }),
                                    ce &&
                                        (0, H.jsxs)(H.Fragment, {
                                            children: [
                                                he("add_patient", { source: "patient_list" }),
                                                (0, H.jsx)(g.default, {
                                                    isOpen: ce,
                                                    setOpenAddPatientModal: (e) => {
                                                        ue(e);
                                                    },
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    });
                },
                B = (0, r.memo)(U);
        }

    };
})();