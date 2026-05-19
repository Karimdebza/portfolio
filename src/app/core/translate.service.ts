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

