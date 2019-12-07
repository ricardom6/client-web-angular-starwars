import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavComponent, AsideComponent, SectionComponent, ArticleComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[NavComponent, AsideComponent, SectionComponent, ArticleComponent, FooterComponent]
})
export class SharedModuleModule { }
