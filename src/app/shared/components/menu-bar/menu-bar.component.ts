import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {Avatar} from 'primeng/avatar';
import {Badge} from 'primeng/badge';
import {NgClass, NgIf} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {Ripple} from 'primeng/ripple';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-menu-bar',
  imports: [
    Menubar,
    Avatar,
    Badge,
    NgClass,
    Ripple,
    NgIf,
    InputText
  ],
  templateUrl: './menu-bar.component.html',
  standalone: true,
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      },
    ];
  }
}
