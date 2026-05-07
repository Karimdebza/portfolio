// ─── 1. src/app/core/services/translate.service.ts ──────────────────────────
// Service wrapper pour ngx-translate — gère le switch de langue

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LangService {

  private readonly STORAGE_KEY = 'portfolio_lang';
  currentLang: 'fr' | 'en' = 'fr';

  constructor(private translate: TranslateService) {}

  init(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY) as 'fr' | 'en' | null;
    const lang = saved ?? 'fr';
    this.translate.setDefaultLang('fr');
    this.use(lang);
  }

  use(lang: 'fr' | 'en'): void {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  toggle(): void {
    this.use(this.currentLang === 'fr' ? 'en' : 'fr');
  }
}


// ─── 2. src/app/app.config.ts ────────────────────────────────────────────────
// Ajoute TranslateModule à ta config existante

/*
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: 'fr',
      })
    ),
  ],
};
*/


// ─── 3. Dans chaque composant — ajoute TranslateModule aux imports ────────────
/*
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, TranslateModule],   // ← ajoute TranslateModule
  ...
})
*/