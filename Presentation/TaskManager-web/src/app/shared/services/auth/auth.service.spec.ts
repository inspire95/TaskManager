import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";

import { AuthComponent } from "src/app/auth/auth.component";

describe("AuthService", () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        })
    );

    it("should be created", () => {
        const service: AuthService = TestBed.get(AuthService);
        expect(service).toBeTruthy();
    });

    it("should be logged in", () => {
        const service: AuthService = TestBed.get(AuthService);
        
        const auth = {
            email: "root@root.pl",
            password: "123"
        };

        service.signin(auth).subscribe((res) => {
            // expect(service.signin(auth)).toBeTruthy();
            expect(res.id).toBeDefined();
        });
    });
});