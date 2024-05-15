import {Component, OnInit} from '@angular/core';
import {encapsulateStyle} from "@angular/compiler";
import {environment} from "../../../../../environment";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseCreationFormService} from "../../services/course-creation-form.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-publish-page',
    templateUrl: './publish-page.component.html',
    styleUrl: './publish-page.component.css'
})
export class PublishPageComponent implements OnInit {

    id!: number;

    constructor(private route: ActivatedRoute, private courseCreationService: CourseCreationFormService,private toasterService:ToastrService,private router:Router) {
    }

    protected readonly encapsulateStyle = encapsulateStyle;
    protected readonly environment = environment;


    ngOnInit() {

        this.route.params.subscribe(params => {
                this.id = params['id'];
            }
        );




    }

    publishCourse() {
        this.courseCreationService.publishCourse(this.id).subscribe(
            data => {
                this.router.navigate(['/']);
                this.toasterService.success("Course published successfully");
            },
            error => {
                this.toasterService.error(error.error.message)
            }
        );
    }
}
