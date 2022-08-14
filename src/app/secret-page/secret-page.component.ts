import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrls: ['./secret-page.component.css']
})
export class SecretPageComponent implements OnInit {
  name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // NOTE: Only use this method when the component doesn't need to update after initiated. Use method below instead.
    this.name = this.route.snapshot.params['name'];

    // Use this method most of the times! :)
    this.route.params.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    )
  }

}
