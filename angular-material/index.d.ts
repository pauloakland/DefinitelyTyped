// Type definitions for Angular Material (angular.material module) 1.1.3
// Project: https://github.com/angular/material
// Definitions by: Blake Bigelow <https://github.com/blbigelow>, Peter Hajdu <https://github.com/PeterHajdu>, Davide Donadello <https://github.com/Dona278>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as angular from 'angular';

declare var _: string;
export default _;

export type IAriaProvider = angular.material.IAriaProvider;
export type IBottomSheetOptions = angular.material.IBottomSheetOptions;
export type IBottomSheetService = angular.material.IBottomSheetService;
export type IPresetDialog<T> = angular.material.IPresetDialog<T>;
export type IAlertDialog = angular.material.IAlertDialog;
export type IConfirmDialog = angular.material.IConfirmDialog;
export type IPromptDialog = angular.material.IPromptDialog;
export type IColorExpression = angular.material.IColorExpression;
export type IColorService = angular.material.IColorService;
export type IDialogOptions = angular.material.IDialogOptions;
export type IDialogService = angular.material.IDialogService;
export type IIcon = angular.material.IIcon;
export type IIconProvider = angular.material.IIconProvider;
export type IInkRippleOptions = angular.material.IInkRippleOptions;
export type IInkRippleService = angular.material.IInkRippleService;
export type IInteractionService = angular.material.IInteractionService;
export type ILiveAnnouncer = angular.material.ILiveAnnouncerService;
export type IMedia = angular.material.IMedia;
export type ISidenavObject = angular.material.ISidenavObject;
export type ISidenavService = angular.material.ISidenavService;
export type IToastPreset<T> = angular.material.IToastPreset<T>;
export type ISimpleToastPreset = angular.material.ISimpleToastPreset;
export type IToastOptions = angular.material.IToastOptions;
export type IToastService = angular.material.IToastService;
export type IPalette = angular.material.IPalette;
export type IThemeHues = angular.material.IThemeHues;
export type IThemePalette = angular.material.IThemePalette;
export type IBrowserColors = angular.material.IBrowserColors;
export type IThemeColors = angular.material.IThemeColors;
export type IThemeGrayScalePalette = angular.material.IThemeGrayScalePalette;
export type ITheme = angular.material.ITheme;
export type IThemeConfig = angular.material.IThemeConfig;
export type IThemingProvider = angular.material.IThemingProvider;
export type IDateLocaleProvider = angular.material.IDateLocaleProvider;
export type IMenuService = angular.material.IMenuService;
export type IColorPalette = angular.material.IColorPalette;
export type IPanelConfig = angular.material.IPanelConfig;
export type IPanelRef = angular.material.IPanelRef;
export type IPanelPosition = angular.material.IPanelPosition;
export type IPanelAnimation = angular.material.IPanelAnimation;
export type IPanelGroup = angular.material.IPanelGroup;
export type IPanelService = angular.material.IPanelService;
export type IPanelProvider = angular.material.IPanelProvider;
export type IProgressCircularConfig = angular.material.IProgressCircularConfig;
export type IProgressCircularProvider = angular.material.IProgressCircularProvider;
export type IStickyService = angular.material.IStickyService;

declare module 'angular' {
    export namespace material {

        interface IAriaProvider {
            disableWarnings();
        }
        interface IBottomSheetOptions {
            templateUrl?: string;
            template?: string;
            scope?: angular.IScope; // default: new child scope
            preserveScope?: boolean; // default: false
            controller?: string | Function;
            locals?: { [index: string]: any };
            clickOutsideToClose?: boolean;
            disableBackdrop?: boolean;
            escapeToClose?: boolean;
            resolve?: { [index: string]: () => angular.IPromise<any> };
            controllerAs?: string;
            parent?: Function | string | Object; // default: root node
            disableParentScroll?: boolean; // default: true
        }

        interface IBottomSheetService {
            show(options: IBottomSheetOptions): angular.IPromise<any>;
            hide(response?: any): void;
            cancel(response?: any): void;
        }

        interface IPresetDialog<T> {
            title(title: string): T;
            textContent(textContent: string): T;
            htmlContent(htmlContent: string): T;
            ok(ok: string): T;
            theme(theme: string): T;
            templateUrl(templateUrl?: string): T;
            template(template?: string): T;
            targetEvent(targetEvent?: MouseEvent): T;
            scope(scope?: angular.IScope): T; // default: new child scope
            preserveScope(preserveScope?: boolean): T; // default: false
            disableParentScroll(disableParentScroll?: boolean): T; // default: true
            hasBackdrop(hasBackdrop?: boolean): T; // default: true
            clickOutsideToClose(clickOutsideToClose?: boolean): T; // default: false
            escapeToClose(escapeToClose?: boolean): T; // default: true
            focusOnOpen(focusOnOpen?: boolean): T; // default: true
            controller(controller?: string | Function): T;
            locals(locals?: { [index: string]: any }): T;
            bindToController(bindToController?: boolean): T; // default: false
            resolve(resolve?: { [index: string]: () => angular.IPromise<any> }): T;
            controllerAs(controllerAs?: string): T;
            parent(parent?: string | Element | JQuery): T; // default: root node
            onComplete(onComplete?: Function): T;
            ariaLabel(ariaLabel: string): T;
        }

        interface IAlertDialog extends IPresetDialog<IAlertDialog> {
        }

        interface IConfirmDialog extends IPresetDialog<IConfirmDialog> {
            cancel(cancel: string): IConfirmDialog;
        }

        interface IPromptDialog extends IPresetDialog<IPromptDialog> {
            cancel(cancel: string): IPromptDialog;
            placeholder(placeholder: string): IPromptDialog;
            initialValue(initialValue: string): IPromptDialog;
        }

        interface IColorExpression {
            [cssPropertyName: string]: string;
        }

        interface IColorService {
            applyThemeColors(element: Element | JQuery, colorExpression: IColorExpression): void;
            getThemeColor(expression: string): string;
            hasTheme(): boolean;
        }

        interface IDialogOptions {
            templateUrl?: string;
            template?: string;
            contentElement?: string | Element;
            autoWrap?: boolean; // default: true
            targetEvent?: MouseEvent;
            openFrom?: any;
            closeTo?: any;
            scope?: angular.IScope; // default: new child scope
            preserveScope?: boolean; // default: false
            disableParentScroll?: boolean; // default: true
            hasBackdrop?: boolean; // default: true
            clickOutsideToClose?: boolean; // default: false
            escapeToClose?: boolean; // default: true
            focusOnOpen?: boolean; // default: true
            controller?: string | Function;
            locals?: { [index: string]: any };
            bindToController?: boolean; // default: false
            resolve?: { [index: string]: () => angular.IPromise<any> }
            controllerAs?: string;
            parent?: string | Element | JQuery; // default: root node
            onShowing?: Function;
            onComplete?: Function;
            onRemoving?: Function;
            skipHide?: boolean;
            multiple?: boolean;
            fullscreen?: boolean; // default: false
        }

        interface IDialogService {
            show(dialog: IDialogOptions | IAlertDialog | IConfirmDialog | IPromptDialog): angular.IPromise<any>;
            confirm(): IConfirmDialog;
            alert(): IAlertDialog;
            prompt(): IPromptDialog;
            hide(response?: any): angular.IPromise<any>;
            cancel(response?: any): void;
        }

        interface IIcon {
            (id: string): angular.IPromise<Element>; // id is a unique ID or URL
        }

        interface IIconProvider {
            icon(id: string, url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
            iconSet(id: string, url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
            defaultIconSet(url: string, viewBoxSize?: number): IIconProvider; // viewBoxSize default: 24
            defaultViewBoxSize(viewBoxSize: number): IIconProvider; // default: 24
            defaultFontSet(name: string): IIconProvider;
        }
        interface IInkRippleOptions {
            center?:boolean;
            dimBackgorund?:boolean;
            colorElement?: Element;
            fitRipple?:boolean;
        }
        interface IInkRippleService {
            attach(scope:IScope, element:Element, options?:IInkRippleOptions);
            disableInkRipple(): void; //config-time method that disables ripples globally;
        }
        interface IInteractionService {
            getLastInteractionType(): string | null;
            isUserInvoked(checkDelay:number): boolean;
        }
        interface ILiveAnnouncerService {
            announce(message:string, politeness:string); //politeness param {'off'|'polite'|'assertive'};
        }

        interface IMedia {
            (media: string): boolean;
        }

        interface ISidenavObject {
            toggle(): angular.IPromise<void>;
            open(): angular.IPromise<void>;
            close(): angular.IPromise<void>;
            isOpen(): boolean;
            isLockedOpen(): boolean;
            onClose(onClose: Function): void;
        }

        interface ISidenavService {
            (component: string, enableWait: boolean): angular.IPromise<ISidenavObject>;
            (component: string): ISidenavObject;
        }

        interface IToastPreset<T> {
            textContent(content: string): T;
            action(action: string): T;
            highlightAction(highlightAction: boolean): T;
            highlightClass(highlightClass: string): T;
            capsule(capsule: boolean): T;
            theme(theme: string): T;
            hideDelay(delay: number | false): T;
            position(position: string): T;
            parent(parent?: string | Element | JQuery): T; // default: root node
            toastClass(toastClass: string): T;
        }

        interface ISimpleToastPreset extends IToastPreset<ISimpleToastPreset> {
        }

        interface IToastOptions {
            templateUrl?: string;
            template?: string;
            autoWrap?: boolean;
            scope?: angular.IScope; // default: new child scope
            preserveScope?: boolean; // default: false
            hideDelay?: number | false; // default (ms): 3000
            position?: string; // any combination of 'bottom'/'left'/'top'/'right'/'fit'; default: 'bottom left'
            toastClass?: string;
            controller?: string | Function;
            locals?: { [index: string]: any };
            bindToController?: boolean; // default: false
            resolve?: { [index: string]: () => angular.IPromise<any> }
            controllerAs?: string;
            parent?: string | Element | JQuery; // default: root node
        }

        interface IToastService {
            show(optionsOrPreset: IToastOptions | IToastPreset<any>): angular.IPromise<any>;
            showSimple(content: string): angular.IPromise<any>;
            simple(): ISimpleToastPreset;
            build(): IToastPreset<any>;
            updateContent(newContent: string): void;
            updateTextContent(newContent: string): void;
            hide(response?: any): void;
            cancel(response?: any): void;
        }

        interface IPalette {
            0?: string;
            50?: string;
            100?: string;
            200?: string;
            300?: string;
            400?: string;
            500?: string;
            600?: string;
            700?: string;
            800?: string;
            900?: string;
            A100?: string;
            A200?: string;
            A400?: string;
            A700?: string;
            contrastDefaultColor?: string;
            contrastDarkColors?: string | string[];
            contrastLightColors?: string | string[];
        }

        interface IThemeHues {
            default?: string;
            'hue-1'?: string;
            'hue-2'?: string;
            'hue-3'?: string;
        }

        interface IThemePalette {
            name: string;
            hues: IThemeHues;
        }

        interface IBrowserColors {
            theme: string;
            palette: string;
            hue: string;
        }

        interface IThemeColors {
            accent: IThemePalette;
            background: IThemePalette;
            primary: IThemePalette;
            warn: IThemePalette;
        }

        interface IThemeGrayScalePalette {
            1: string;
            2: string;
            3: string;
            4: string;
            name: string;
        }

        interface ITheme {
            name: string;
            isDark: boolean;
            colors: IThemeColors;
            foregroundPalette: IThemeGrayScalePalette;
            foregroundShadow: string;
            accentPalette(name: string, hues?: IThemeHues): ITheme;
            primaryPalette(name: string, hues?: IThemeHues): ITheme;
            warnPalette(name: string, hues?: IThemeHues): ITheme;
            backgroundPalette(name: string, hues?: IThemeHues): ITheme;
            dark(isDark?: boolean): ITheme;
        }

        interface IThemeConfig {
            disableTheming: boolean;
            generateOnDemand: boolean;
            nonce: string;
            defaultTheme: string;
            alwaysWatchTheme: boolean;
            registeredStyles: Array<string>;
        }

        interface IThemingProvider {
            alwaysWatchTheme(alwaysWatch: boolean): void;
            definePalette(name: string, palette: IPalette): IThemingProvider;
            enableBrowserColor(browserColors: IBrowserColors): Function;
            extendPalette(name: string, palette: IPalette): IPalette;
            registerStyles(styles: String): void;
            setDefaultTheme(theme: string): void;
            setNonce(nonce: string): void;
            theme(name: string, inheritFrom?: string): ITheme;
            generateThemesOnDemand(onDemand: boolean): void;
            disableTheming(isDisabled?: boolean): void;
            configuration(): IThemeConfig;
        }

        interface IDateLocaleProvider {
            months: string[];
            shortMonths: string[];
            days: string[];
            shortDays: string[];
            dates: string[];
            firstDayOfWeek: number;
            parseDate(dateString: string): Date;
            formatDate(date: Date): string;
            monthHeaderFormatter(date: Date): string;
            weekNumberFormatter(weekNumber: number): string;
            msgCalendar: string;
            msgOpenCalendar: string;
            firstRenderableDate: Date; //defaults to January 1st 1880 if minimum date is not set
            lastRenderableDate: Date; //defaults to January 1st 2130 if maximum date is not set
        }

        interface IMenuService {
            hide(response?: any, options?: any): angular.IPromise<any>;
        }

        interface IColorPalette {
            red: IPalette;
            pink: IPalette;
            'deep-purple': IPalette;
            indigo: IPalette;
            blue: IPalette;
            'light-blue': IPalette;
            cyan: IPalette;
            teal: IPalette;
            green: IPalette;
            'light-green': IPalette;
            lime: IPalette;
            yellow: IPalette;
            amber: IPalette;
            orange: IPalette;
            'deep-orange': IPalette;
            brown: IPalette;
            grey: IPalette;
            'blue-grey': IPalette;
        }

        interface IPanelConfig {
            id?: string;
            template?: string;
            templateUrl?: string;
            contentElement?: string | JQuery | Element;
            controller?: string | Function;
            controllerAs?: string;
            bindToController?: boolean; // default: true
            locals?: { [index: string]: any };
            resolve?: { [index: string]: () => angular.IPromise<any> }
            attachTo?: string | JQuery | Element;
            propagateContainerEvents?: boolean;
            panelClass?: string;
            zIndex?: number; // default: 80
            position?: IPanelPosition;
            clickOutsideToClose?: boolean; // default: false
            escapeToClose?: boolean; // default: false
            trapFocus?: boolean; // default: false
            focusOnOpen?: boolean; // default: true
            fullscreen?: boolean; // default: false
            animation?: IPanelAnimation;
            hasBackdrop?: boolean; // default: false
            disableParentScroll?: boolean; // default: false
            onDomAdded?: Function;
            onOpenComplete?: Function;
            onRemoving?: Function;
            onDomRemoved?: Function;
            origin?: string | JQuery | Element;
            onCloseSuccess?: ((panel: IPanelRef, closeReason: string) => any);
            groupName?:string | string[];

        }

        interface IPanelRef {
            id: string;
            config: IPanelConfig;
            isAttached: boolean;
            panelContainer: JQuery;
            panelEl: JQuery;
            open(): angular.IPromise<any>;
            close(): angular.IPromise<any>;
            attach(): angular.IPromise<any>;
            detach(): angular.IPromise<any>;
            show(): angular.IPromise<any>;
            hide(): angular.IPromise<any>;
            destroy(): void;
            addClass(newClass: string): void;
            removeClass(oldClass: string): void;
            toggleClass(toggleClass: string): void;
            updatePosition(position: IPanelPosition): void;
            addToGroup(groupName:string): void;
            removeFromGroup(groupName:string): void;
            registerInterceptor(type: string, callback: () => angular.IPromise<any>): IPanelRef;
            removeInterceptor(type: string, callback: () => angular.IPromise<any>): IPanelRef;
            removeAllInterceptors(type?: string): IPanelRef;
            updateAnimation(animation:IPanelAnimation): void;
        }

        interface IPanelPosition {
            absolute(): IPanelPosition;
            relativeTo(someElement: string | JQuery | Element): IPanelPosition;
            top(top?: string): IPanelPosition; // default: '0'
            bottom(bottom?: string): IPanelPosition; // default: '0'
            start(start?: string): IPanelPosition; // default: '0'
            end(end?: string): IPanelPosition; // default: '0'
            left(left?: string): IPanelPosition; // default: '0'
            right(right?: string): IPanelPosition; // default: '0'
            centerHorizontally(): IPanelPosition;
            centerVertically(): IPanelPosition;
            center(): IPanelPosition;
            addPanelPosition(xPosition: string, yPosition: string): IPanelPosition;
            withOffsetX(offsetX: string | ((panel: IPanelPosition) => string)): IPanelPosition;
            withOffsetY(offsetY: string | ((panel: IPanelPosition) => string)): IPanelPosition;
        }

        interface IPanelAnimation {
            openFrom(from: string | Element | Event | { top: number, left: number }): IPanelAnimation;
            closeTo(to: string | Element | { top: number, left: number }): IPanelAnimation;
            withAnimation(cssClass: string | { open: string, close: string }): IPanelAnimation;
            duration(open:number, close:number);
        }
        interface IPanelGroup {
            panels:IPanelRef[];
            openPanels:IPanelRef[];
            maxOpen:number;
        }

        interface IPanelService {
            create(opt_config: IPanelConfig): IPanelRef;
            open(opt_config: IPanelConfig): angular.IPromise<IPanelRef>;
            newPanelPosition(): IPanelPosition;
            newPanelAnimation(): IPanelAnimation;
            newPanelGroup(groupName:string, config?:{maxOpen:number}): IPanelGroup;
            setGroupMaxOpen(groupName:string, maxOpen:number);

            xPosition: {
                CENTER: string,
                ALIGN_START: string,
                ALIGN_END: string,
                OFFSET_START: string,
                OFFSET_END: string,
            };
            yPosition: {
                CENTER: string,
                ALIGN_TOPS: string,
                ALIGN_BOTTOMS: string,
                ABOVE: string,
                BELOW: string,
            };
            animation: {
                SLIDE: string,
                SCALE: string,
                FADE: string,
            };
            interceptorTypes: {
                CLOSE: string,
            };
            closeReasons: {
                CLICK_OUTSIDE: string,
                ESCAPE: string,
            };
            absPosition: {
                TOP: string,
                RIGHT: string,
                BOTTOM: string,
                LEFT: string,
            };
        }
        interface IPanelProvider {
            definePreset(name:string, preset:IPanelConfig);
        }
        interface IProgressCircularConfig {
            progressSize?: number;
            strokeWidth?: number;
            duration?: number;
            easeFn?: Function;
            durationIndeterminate?: number;
            startIndeterminate?: number;
            endIndeterminate?: number;
            easeFnIndeterminate?: Function;
        }

        interface IProgressCircularProvider {
            configure(options: IProgressCircularConfig): void;
        }
        interface IStickyService {
            (scope:IScope, element:JQuery, elementClone?:JQuery): void;
        }
    }
}
