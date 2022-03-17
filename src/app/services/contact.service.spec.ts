import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactService } from './contact.service';
import { HttpClient } from '@angular/common/http';

describe('ContactService', () => {
    let contactService: ContactService;
    let httpClient: HttpClient;
    let httpController: HttpTestingController;
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ ContactService ]
        })
        .compileComponents();
        contactService = TestBed.inject(ContactService);
        httpClient = TestBed.inject(HttpClient);
        httpController = TestBed.inject(HttpTestingController);
    });
    
    
    it('should create', () => {
        expect(contactService).toBeDefined();
    });
});
