import { CommonWindowsInstallerConfiguration } from "../.."
import { TargetSpecificOptions } from "../../core"

export interface CustomNsisBinary {
  /**
   * @default https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z
   */
  readonly url: string | null

  /**
   * @default VKMiizYdmNdJOWpRGz4trl4lD++BvYP2irAXpMilheUP0pc93iKlWAoP843Vlraj8YG19CVn0j+dCo/hURz9+Q==
   */
  readonly checksum?: string | null

  /**
   * @default 3.0.4.1
   */
  readonly version?: string | null

  /**
   * Whether or not to enable NSIS logging for debugging.
   * Note: Requires a debug-enabled NSIS build.
   * electron-builder's included `makensis` does not natively support debug-enabled NSIS installers currently, you must supply your own via `customNsisBinary?: CustomNsisBinary`
   * In your custom nsis scripts, you can leverage this functionality via `LogSet` and `LogText`
   */
  readonly debugLogging?: boolean | null
}
export interface CustomNsisResources {
  /**
   * @default https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z
   */
  readonly url: string

  /**
   * @default Dqd6g+2buwwvoG1Vyf6BHR1b+25QMmPcwZx40atOT57gH27rkjOei1L0JTldxZu4NFoEmW4kJgZ3DlSWVON3+Q==
   */
  readonly checksum: string

  /**
   * @default 3.4.1
   */
  readonly version: string
}
export interface CommonNsisOptions {
  /**
   * Whether to create [Unicode installer](http://nsis.sourceforge.net/Docs/Chapter1.html#intro-unicode).
   * @default true
   */
  readonly unicode?: boolean

  /**
   * See [GUID vs Application Name](./nsis.md#guid-vs-application-name).
   */
  readonly guid?: string | null

  /**
   * If `warningsAsErrors` is `true` (default): NSIS will treat warnings as errors. If `warningsAsErrors` is `false`: NSIS will allow warnings.
   * @default true
   */
  readonly warningsAsErrors?: boolean

  /**
   * @private
   * @default false
   */
  readonly useZip?: boolean

  /**
   * Allows you to provide your own `makensis`, such as one with support for debug logging via LogSet and LogText. (Logging also requires option `debugLogging = true`)
   */
  readonly customNsisBinary?: CustomNsisBinary | null

  /**
   * Allows you to provide your own `nsis-resources`
   */
  readonly customNsisResources?: CustomNsisResources | null
}

export interface NsisOptions extends CommonNsisOptions, CommonWindowsInstallerConfiguration, TargetSpecificOptions {
  /**
   * Whether to create one-click installer or assisted.
   * @default true
   */
  readonly oneClick?: boolean

  /**
   * Whether to show install mode installer page (choice per-machine or per-user) for assisted installer. Or whether installation always per all users (per-machine).
   *
   * If `oneClick` is `true` (default): Whether to install per all users (per-machine).
   *
   * If `oneClick` is `false` and `perMachine` is `true`: no install mode installer page, always install per-machine.
   *
   * If `oneClick` is `false` and `perMachine` is `false` (default): install mode installer page.
   * @default false
   */
  readonly perMachine?: boolean

  /**
   * Whether to set per-machine or per-user installation as default selection on the install mode installer page.
   *
   * @default false
   */
  readonly selectPerMachineByDefault?: boolean

  /**
   * *assisted installer only.* Allow requesting for elevation. If false, user will have to restart installer with elevated permissions.
   * @default true
   */
  readonly allowElevation?: boolean

  /**
   * *assisted installer only.* Allows the user to choose whether to create desktop and/or start menu shortcuts during installation (e.g. via checkboxes).
   * By default, both shortcuts are created automatically.
   * If enabled, the user can opt-in or opt-out at install time.
   * @default false
   */
  readonly allowToAddShortcut?: boolean

  /**
   * *assisted installer only.* Whether to allow user to change installation directory.
   * @default false
   */
  readonly allowToChangeInstallationDirectory?: boolean

  /**
   * *assisted installer only.* remove the default uninstall welcome page.
   * @default false
   */
  readonly removeDefaultUninstallWelcomePage?: boolean

  /**
   * The path to installer icon, relative to the [build resources](./contents.md#extraresources) or to the project directory.
   * Defaults to `build/installerIcon.ico` or application icon.
   */
  readonly installerIcon?: string | null
  /**
   * The path to uninstaller icon, relative to the [build resources](./contents.md#extraresources) or to the project directory.
   * Defaults to `build/uninstallerIcon.ico` or application icon.
   */
  readonly uninstallerIcon?: string | null
  /**
   * *assisted installer only.* `MUI_HEADERIMAGE`, relative to the [build resources](./contents.md#extraresources) or to the project directory.
   * @default build/installerHeader.bmp
   */
  readonly installerHeader?: string | null
  /**
   * *one-click installer only.* The path to header icon (above the progress bar), relative to the [build resources](./contents.md#extraresources) or to the project directory.
   * Defaults to `build/installerHeaderIcon.ico` or application icon.
   */
  readonly installerHeaderIcon?: string | null
  /**
   * *assisted installer only.* `MUI_WELCOMEFINISHPAGE_BITMAP`, relative to the [build resources](./contents.md#extraresources) or to the project directory.
   * Defaults to `build/installerSidebar.bmp` or `${NSISDIR}\\Contrib\\Graphics\\Wizard\\nsis3-metro.bmp`. Image size 164 × 314 pixels.
   */
  readonly installerSidebar?: string | null
  /**
   * *assisted installer only.* `MUI_UNWELCOMEFINISHPAGE_BITMAP`, relative to the [build resources](./contents.md#extraresources) or to the project directory.
   * Defaults to `installerSidebar` option or `build/uninstallerSidebar.bmp` or `build/installerSidebar.bmp` or `${NSISDIR}\\Contrib\\Graphics\\Wizard\\nsis3-metro.bmp`
   */
  readonly uninstallerSidebar?: string | null
  /**
   * The uninstaller display name in the control panel.
   * @default ${productName} ${version}
   */
  readonly uninstallDisplayName?: string | null
  /**
   * The URL to the uninstaller help page in the control panel. Defaults to [homepage](./configuration.md#homepage) from application package.json.
   */
  readonly uninstallUrlHelp?: string | null
  /**
   * The URL to the uninstaller info about page in the control panel. Defaults to [homepage](./configuration.md#homepage) from application package.json.
   */
  readonly uninstallUrlInfoAbout?: string | null
  /**
   * The URL to the uninstaller update info page in the control panel. Defaults to [homepage](./configuration.md#homepage) from application package.json.
   */
  readonly uninstallUrlUpdateInfo?: string | null
  /**
   * The URL to the uninstaller readme page in the control panel. Defaults to [homepage](./configuration.md#homepage) from application package.json.
   */
  readonly uninstallUrlReadme?: string | null

  /**
   * The path to NSIS include script to customize installer. Defaults to `build/installer.nsh`. See [Custom NSIS script](#custom-nsis-script).
   */
  readonly include?: string | null
  /**
   * The path to NSIS script to customize installer. Defaults to `build/installer.nsi`. See [Custom NSIS script](#custom-nsis-script).
   */
  readonly script?: string | null

  /**
   * The path to EULA license file. Defaults to `license.txt` or `eula.txt` (or uppercase variants). In addition to `txt`, `rtf` and `html` supported (don't forget to use `target="_blank"` for links).
   *
   * Multiple license files in different languages are supported — use lang postfix (e.g. `_de`, `_ru`). For example, create files `license_de.txt` and `license_en.txt` in the build resources.
   * If OS language is german, `license_de.txt` will be displayed. See map of [language code to name](https://github.com/meikidd/iso-639-1/blob/master/src/data.js).
   *
   * Appropriate license file will be selected by user OS language.
   */
  readonly license?: string | null

  /**
   * The [artifact file name template](./configuration.md#artifact-file-name-template). Defaults to `${productName} Setup ${version}.${ext}`.
   */
  readonly artifactName?: string | null

  /**
   * *one-click installer only.* Whether to delete app data on uninstall.
   * @default false
   */
  readonly deleteAppDataOnUninstall?: boolean

  /**
   * @private
   */
  differentialPackage?: boolean

  /**
   * Whether to display a language selection dialog. Not recommended (by default will be detected using OS language).
   * @default false
   */
  readonly displayLanguageSelector?: boolean
  /**
   * The installer languages (e.g. `en_US`, `de_DE`). Change only if you understand what do you do and for what.
   */
  readonly installerLanguages?: Array<string> | string | null
  /**
   * [LCID Dec](https://msdn.microsoft.com/en-au/goglobal/bb964664.aspx), defaults to `1033`(`English - United States`).
   */
  readonly language?: string | null
  /**
   * Whether to create multi-language installer. Defaults to `unicode` option value.
   */
  readonly multiLanguageInstaller?: boolean
  /**
   * Whether to pack the elevate executable (required for electron-updater if per-machine installer used or can be used in the future). Ignored if `perMachine` is set to `true`.
   * @default true
   */
  readonly packElevateHelper?: boolean

  /**
   * The file extension of files that will be not compressed. Applicable only for `extraResources` and `extraFiles` files.
   * @default [".avi", ".mov", ".m4v", ".mp4", ".m4p", ".qt", ".mkv", ".webm", ".vmdk"]
   */
  readonly preCompressedFileExtensions?: Array<string> | string | null

  /**
   * Disable building an universal installer of the archs specified in the target configuration
   * *Not supported for nsis-web*
   * @default true
   */
  readonly buildUniversalInstaller?: boolean
}

/**
 * Portable options.
 */
export interface PortableOptions extends TargetSpecificOptions, CommonNsisOptions {
  /**
   * The [requested execution level](http://nsis.sourceforge.net/Reference/RequestExecutionLevel) for Windows.
   * @default user
   */
  readonly requestExecutionLevel?: "user" | "highest" | "admin"

  /**
   * The unpack directory for the portable app resources.
   *
   * If set to a string, it will be the name in [TEMP](https://www.askvg.com/where-does-windows-store-temporary-files-and-how-to-change-temp-folder-location/) directory
   * If set explicitly to `false`, it will use the Windows temp directory ($PLUGINSDIR) that is unique to each launch of the portable application.
   *
   * Defaults to [uuid](https://github.com/segmentio/ksuid) of build (changed on each build of portable executable).
   */
  readonly unpackDirName?: string | boolean

  /**
   * The image to show while the portable executable is extracting. This image must be a bitmap (`.bmp`) image.
   */
  readonly splashImage?: string | null

  /**
   * Disable building an universal installer of the archs specified in the target configuration
   * @default true
   */
  readonly buildUniversalInstaller?: boolean
}

/**
 * Web Installer options.
 */
export interface NsisWebOptions extends NsisOptions {
  /**
   * The application package download URL. Optional — by default computed using publish configuration.
   *
   * URL like `https://example.com/download/latest` allows web installer to be version independent (installer will download latest application package).
   * Please note — it is [full URL](https://github.com/electron-userland/electron-builder/issues/1810#issuecomment-317650878).
   *
   * Custom `X-Arch` http header is set to `32` or `64`.
   */
  readonly appPackageUrl?: string | null

  /**
   * The [artifact file name template](./configuration.md#artifact-file-name-template). Defaults to `${productName} Web Setup ${version}.${ext}`.
   */
  readonly artifactName?: string | null

  /**
   * Override for `NsisOptions.buildUniversalInstaller`. nsis-web requires universal installer
   * @default true
   */
  readonly buildUniversalInstaller?: true
}
