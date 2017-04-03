# MazerFaker
**NASTY** sito per persone **NASTY** 

## Versioni e Dipendenze

La versione attuale di **laravel** usata è la stabile `5.4.14`. 
Le dipendenze per far funzionare il framework sono le seguenti:
* PHP >= 5.6.4
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension


## Come è strutturato il progetto
* **APP**:
    Contiene il core del progetto. Tutta la logica dell'applicazione è 
    situata qui. I controller si trovano dentro `Http/Controllers/` ed 
    estendono la classe `Controller.php`.
    
* **BOOTSTRAP**:
    Non ha niente a che fare con il framework css javascript bootstrap. 
    Questa cartella contiene file generati e cache che serve 
    all'applicazione per startare, azzione comunemente detta bootstrapping.
    Non la toccheremo mai.
    
* **CONFIG**:
    Qui sono situate tutte le configurazioni del progetto.     
        
* **DATABASE**:
    Contiene la storia e l'inizializzazione del database. 
        
* **PUBLIC**:
    Qui deve puntare apache.
    
* **RESOURCES**:
    Contiene le viste, i componenti, il sass e altre cose che si compilano.

* **ROUTES**:
    Contiene le routes del progetto, ossia le url delle pagine 
    (file `web.php`) e gli endpoint per le chiamate rest (file `api.php`).
    La differenza tra le due è che la `web.php` è pensata per gestire le 
    sessioni, quindi ha il supporto per coockies e tutte quelle cose 
    comode quando navighi dal browser, metre la `api.php` è pensata per 
    offire endpoint per servizzi rest quindi è stateless e le 
    autenticazioni devono esser egestite tramite token, e non ha 
    accesso allo session state.
    Il file `console.php` definisce dei entry points da console per 
    l'applicazione.

* **STORAGE**:
    Contiente le cose generate dal framework.
    In app ci sono i file generati dall'applicazione. 
    In framework ci sono i file di cache e i file generati.
    In logs ovviamente i log.
    
* **TESTS**:
    Contiene i test.
    
* **VENDOR**:
    Contiene le dipendeze di composer. **NON TOCCARE**
  
   
## Impostazioni di ambiente

In laravel le impostazioni d'ambiente sono settate nel file `.env` che si
trova nella root del progetto.
Ovviamente è un file che è nel .gitingore e non viene pushato su git 
in quanto dipende dalla macchina e ogniuno ha il suo come anche i server
di produzione e sviluppo.

Il file `.env.example` è un modello sul quale fare il nostro `.env`. 
Basta compiare il file e rinominarlo in **.env** e dentro scrivere i 
nostri settaggi.
   
    
## Localization (multilingua) 

Innanzitutto bisogna dire che la localizzazione si divide in due punti 
salienti. 
1. Le label e tutto cio che sta nel codice. Esempio le scritte sui 
   bottoni, i titoli dei menu, messaggi di errore etc...

2. I contentuti che si prendono dal DataBase come il testo dentro la 
   pagina o il titolo del nostro capitolo.

La **PRIMA** categoria viene gestita da laravel attraverso dei appositi 
file dove mettiamo le traduzione delle nostre 'label'.
I file sono salvati in `resources/lang`. Ogni file è semplicemente un 
file php che fa un return di un array associativo dove a ogni etichetta 
corrisponde la suua traduzione nella lingua della directory dove è 
salvato il file.

Per esempio nel file `resources/lang/en/messages.php` ci sarà 
`return ['error' => 'ERROR']` 
e in `resources/lang/en/messages.php` ci sarà 
`return ['error' => 'ERRORE']`. Come possiamo vedere `'error'` è l'id 
della nostra lebol che useremo nel codice e a seconda della lingua 
avremmo un return diverso: ERROR in inglese e ERRORE in italiano.

Per prendere le traduzioni usiamo in php la funzione `__(nome_file.key);` 
esempio: `echo __('messages.error');` stamperà ERRORE a seconda della 
lingua selezionata.
Quando la funzione `__()` non trova la stringa ritorna la key. 

Nei file di blade di template abbiamo 2 modi per farlo:
```
{{ __('messages.error') }}

@lang('messages.error')
```

Per settare la lingua a runtime possiamo fare:
```php
Route::get('welcome/{locale}', function ($locale) {
     App::setLocale($locale);
 
     // nostro codice bla bla bla 
 });
```

Per vedere che lingua stiamo usando al momento:

```php
$locale = App::getLocale();

if (App::isLocale('en')) {
    //
}
```

**Aggiungere una nuova lingua:**
* aggiungere la sigla all'array `languages` nel file `config/lang.php`.
* creare una cartella nominata come la sigla della lingua in 
  `resources/lang/{ISO-CODE}`, es: `resources/lang/de` per il tedesco. 
* **[NEL CASO NON SI USCINO QUELLE DI BOOTSTRAP]** aggiungere l'icona 
  della lingua in `public/img/{ISO-CODE}-flang.png`.

Per maggiori info vedi [qui][7]

    
## Frontend

### Template in Blade

Perche usare blade per fare i template? Perche blade, a differenza di 
molti altri meccanismi di template PHP non impedisce l'uso del puro php 
all'interno dei suoi file.
Inoltre i template vengono compilati e salvati in cache finche non 
vengono modificati.
Di conseguenza l'impatto di blade sull'efficenza è quasi zero. 

I template in blade vengono chiamati `nome_file.blade.php` e vengono 
salvati in `resources/views`.

Due cose fighe fighissime di blade sono i **l'ereditarietà dei template** 
e le **sezioni**.
Ci sono due modi per fare i componenti in blade, 
**sezzioni** - **layouts** e **componenti** - **slots**
I componenti sono comodi per creari pezzi da riutilizzare dopo in piu 
posti, come per esempio un alert.


* Per **fare echo del codice PHP** bisogna buttarlo dentro 
  `{{ la_mia_bella_funzione_in_php() }}` per prevenire attacchi 
  XSS (Cross-site scripting). 

* Per **ereditare** basta mettere `@extends('cartella.nomefile')`

* Per **creare una sezione** 
    
    ```blade
    @section('lamiasezione')
      <h1>Ciao</h>
    @endsection
    ```
    Per crearla e visualizzarla immediatamente:
    
    ```blade
    @section('nome')
      <p>La mia bella sezione</p>
    @show
    ```
    Possiamo anche estendere una sezione aggiungendo cose:

    ```blade
    @section('nome')
        @parent      
        <p>Questo sarà messo sotto alla sezione 'nome' del padre</p>
    @endsection
    ```
    Se vogliamo creare una sezione per usarla dopo allora:
    
    ```blade
    @section('titolone', 'TITOLO DELLA MIA PAGINA')
    ```
* Per **usare una sezione** `@yield('titolone'')`

* Per **creare un componente** creiamo un file, per esempio 
  `resources/views/alert.blade.php`, 
  e dentro ci mettiamo in nostro alert con uno **slot**. 
  La variabile slot conterra il contenuto che verra poi buttato 
  dentro l'alert.

    ```blade
    <div class="nostre belle classi di stile">
      <div class="titolone">{{ $titolo }}</div>
      {{ $slot }}
    </div>
    ```
    
* Per **usare il componente** usiamo la direttiva `@component` di blade
  
    ```blade
    @component('alert')
        @slot('titolo')
          UN BEL TITOLO IN GRANDE
        @endslot
        
        <strong>OOOPS! errore</strong>
    @endcomponent
    ```
  
* Per **passare dati aggiuntivi** al componente posso passare alla 
  direttiva `@component` e questi saranno disponibili come variabili 
  di nome uguale alla chiave
    
    ```blade
    @component('alert', ['chiave' => 'valore'])
    ...
    @endcomponent
    ```
  puoi anche passare i parametri direttamente nel metodo di render 
  `return view('la.mia.vista', ['nome' => 'valore'])`


**Ci sono moltissime altre cose belle in blade, per saperne di piu 
  consiglio vivamente di leggere la [documentazione][8]**

### SASS, CSS e JavaScript

[Documentazione][9]


## Database

Laravel usa un framework di nome **[Eloquent ORM][10]**. 

In pratica per fare una tabella nel db abbiamo bisogno di due cose:
 
* Un **Modello** che rappresenta la nostra tabella.
  I modelli sono salvati di default nella cartella `App`.
  Per crearne uno nuovo entriamo nella root del progetto dalla shell e 
  digitiamo il seguente comando 
  **`php artisan make:model NomeDelModello -m`**. 
  Questo comando genererà un modello (Il nome deve essere al singolare)
  nella cartella `app` e grazie alla opzione `-m` creerà il 
  corrispettivo file di migration del db nella cartella 
  `database/migrations/`. Quest'ultimo file serve per poi andare 
  effettivamente a creare la tabella nel db.
  Per maggiori info consultiamo la [documentazione][10]

* Un **Database Migration** che mantine la storia delle modifiche fatte 
  al db. Ogni volta che dobbiamo alterare la struttura del DB creeremo 
  un migration file con il comando 
  **`php artisan make:migration nome_del_evento`** che creera il 
  corrispettivo file nella cartella `database/migrations`.
  Il file conterra due metodi importanti: `up` e `down` nei quali 
  definiremo le modifiche da apportare al db. Modifiche del tipo
  crea tabella, aggiungi colonna a una tabella. elimina colonna, 
  rinomina etc etc etc. La [guida][12] è ben fatta.
  
**Si raccomanda vivamente di non creare a mano questi componenti ma 
di usare i rispettivi comandi artisan**

[Documentazione][11]


## Debug

Per fare debug ho incluso nel nostro bel **composer.json**, nelle 
dipendenze di sviluppo, `"raveren/kint": "*"` ossia l'ultima versione 
del tool **[KINT][5]**. Che è molto piu bello del solito 
`var_dump($qualcosa);`. Per la documentazione completa guarda 
il [loro github][5], ma basta invocare la funzione 
`d($variabile_da_stamapre_a_video);` per farlo funzionare. 


## Composer, cos'è e come si cucina

Composer è un tool per gestire le dipendenze in php. 
Tutto quello che ti serve per installarlo sul computer è scaricare il 
file composer.phar (`.phar` è un archivio php) e poi lancire i suoi 
comandi con `php path/al/file/composer.phar [comando]`. 
Questo però è un modo brutto di farlo,
questo è il [modo piu elegante][3]. Per tutte le info guarda [qui][4].

Il File piu importante di composer è **composer.json**. In qiesto file 
si dicchiarano le nostre dipendenze.
Una volta scritte le nostre dipendenze dentro composer.json 
lanciamo il comando `composer install`. 
Se invece abbiamo solo aggiunta una dipendenza a un progetto 
gia esistente lanciamo `composer update`.
Dopo l'esecuzione composer creerà la cartella **vendor** con dentro 
le sue cose e le nostre librerie.
Ora dentro i nostri file php basta scrivere 
`require 'vendor/autoload.php';` e possiamo usare le nostre librerie. 

**NOTA BENE** dentro laravel non serve fare 
`require 'vendor/autoload.php';` in quanto gia ci pensa il framework 
a farlo.


## Artisan

[Artisan][6] è una interfaccia da linea di comando inclusa con il 
framework **Laravel** che ci aiuta a sviluppare in laravel.
Per avere la lista dei comandi di artisan basta lanciare il comando 
`php artisan list`. Inoltre ogni comando ha un help, 
basta far precedere la parlora `help` prima del comando in questione. 
Per esempio `php artisan help serve`.
Uno dei comandi migliori di artisan è sicuramente il comando `make`. 

**MAKE** crea gli scheletri delle classi risparmiandoci un sacco di lavoro.
Per esempio se vogliamo scrivere un nostro nuovo comando basta laniare 
`php artisan make:command SendEmails`
e lui creerà lo scheletro della classe e noi dovremmo solo scriverne 
l'implementazione.

In aggiunta ai comandi base di artisan puoi scrivere dei propri. 
Di solito sono scritti in `app/Console/Commands`.


## Comandi utili

### Pulire la chache
* `php artisan cache:clear` 
* `php artisan config:clear`
* `php artisan view:clear` 



## Link utili

* [Laravel cheatsheet][1]: un foglio con tutti i comandi da dare a 
  laravel e molto piu. Da guardare :) 
* [Composer guide][2]: Breve guida su che cosa è composer e come usarlo.





<br/>
<br/>
<br/>

# Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, queueing, and caching.

Laravel is accessible, yet powerful, providing tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the framework can be found on the [Laravel website](http://laravel.com/docs).

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).


[1]: http://cheats.jesse-obrien.ca
[2]: https://www.dev-metal.com/composer-tutorial/
[3]: https://www.dev-metal.com/install-update-composer-windows-7-ubuntu-debian-centos
[4]: https://getcomposer.org/doc/00-intro.md
[5]: https://github.com/raveren/kint
[6]: https://laravel.com/docs/5.4/artisan
[7]: https://laravel.com/docs/5.4/localization
[8]: https://laravel.com/docs/5.4/blade
[9]: https://laravel.com/docs/5.4/mix
[10]: https://laravel.com/docs/5.4/eloquent
[11]: https://laravel.com/docs/5.4/database
[12]: https://laravel.com/docs/5.4/migrations