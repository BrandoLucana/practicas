import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // <--- IMPORTANTE

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()  // <--- esto da soporte a HttpClient
  ]
});
