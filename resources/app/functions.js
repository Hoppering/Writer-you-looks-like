String.prototype.replaceAll = function(search, replace, ignoreCase) {
  if (ignoreCase) {
    var result = [];
    var _string = this.toLowerCase();
    var _search = search.toLowerCase();
    var start = 0, match, length = _search.length;
    while ((match = _string.indexOf(_search, start)) >= 0) {
      result.push(this.slice(start, match));
      start = match + length;
    }
    result.push(this.slice(start));
  } else {
    result = this.split(search);
  }
  return result.join(replace);
}

var genre="";
document.getElementById('btn_1').onclick= function ()
{
 if(document.getElementById('check_1').checked)
{
    genre="Фантастика";
    document.getElementById('block_1').style.display="none";
    document.getElementById('block_2').style.display="block";
}

if(document.getElementById('check_2').checked)
{
 genre="Детективы";
 document.getElementById('block_1').style.display="none";
 document.getElementById('block_2').style.display="block";
}

if(document.getElementById('check_3').checked)
{
 genre="Приключения";
 document.getElementById('block_1').style.display="none";
 document.getElementById('block_2').style.display="block";
}

if(document.getElementById('check_4').checked)
{
 genre="Стихи";
 document.getElementById('block_1').style.display="none";
 document.getElementById('block_2').style.display="block";
}

if(document.getElementById('check_5').checked)
{
 genre="Русская классика";
 document.getElementById('block_1').style.display="none";
 document.getElementById('block_2').style.display="block";
}

}

document.getElementById('btn_2').onclick=function()
{
 document.getElementById('btn_3').style.display="block";
 document.getElementById('warning').style.display="block";

 var word_input=document.getElementById('input_text').value;
       word_input=word_input.toLowerCase();

       word_input=word_input.replaceAll(',',' ');
       word_input=word_input.replaceAll('.',' ');
       word_input=word_input.replaceAll(';',' ');
       word_input=word_input.replaceAll(':',' ');
       word_input=word_input.replaceAll('-',' ');
       word_input=word_input.replaceAll('!',' ');
       word_input=word_input.replaceAll('?',' ');
       word_input=word_input.replaceAll('(',' ');
       word_input=word_input.replaceAll(')',' ');
       word_input=word_input.replaceAll('-',' ');
       word_input=word_input.replaceAll('&mdash',' ');
       word_input=word_input.replaceAll('...',' ');
       word_input=word_input.replaceAll('&prime;',' ');
       word_input=word_input.replaceAll('&Prime;',' ');
       word_input=word_input.replaceAll('&lsquo;',' ');
       word_input=word_input.replaceAll('&rsquo;',' ');
       word_input=word_input.replaceAll('&sbquo;',' ');
       word_input=word_input.replaceAll('&ldquo;',' ');
       word_input=word_input.replaceAll('&rdquo;',' ');
       word_input=word_input.replaceAll('&bdquo;',' ');
       word_input=word_input.replaceAll('—',' ');
       word_input=word_input.replaceAll('«',' ');
       word_input=word_input.replaceAll('»',' ');
       word_input=word_input.replaceAll('–',' ');
       word_input=word_input.replaceAll('0',' ');
       word_input=word_input.replaceAll('1',' ');
       word_input=word_input.replaceAll('2',' ');
       word_input=word_input.replaceAll('3',' ');
       word_input=word_input.replaceAll('4',' ');
       word_input=word_input.replaceAll('5',' ');
       word_input=word_input.replaceAll('6',' ');
       word_input=word_input.replaceAll('7',' ');
       word_input=word_input.replaceAll('8',' ');
       word_input=word_input.replaceAll('9',' ');
       word_input=word_input.replaceAll('_',' ');
       word_input=word_input.replace(new RegExp("\\r?\\n", "g"), " ");

       window.word_stop=[];
       word_stop[0]="вам";
       word_stop[1]="вами";
       word_stop[2]="вас";
       word_stop[3]="вот";
       word_stop[4]="все";
       word_stop[5]="всё";
       word_stop[6]="всего";
       word_stop[7]="всей";
       word_stop[8]="всем";
       word_stop[9]="всём";
       word_stop[10]="всеми";
       word_stop[11]="всему";
       word_stop[12]="всех";
       word_stop[13]="всею";
       word_stop[14]="всю";
       word_stop[15]="вся";
       word_stop[16]="для";
       word_stop[17]="его";
       word_stop[18]="ему";
       word_stop[19]="если";
       word_stop[20]="ещё";
       word_stop[21]="еще";
       word_stop[22]="или";
       word_stop[23]="ими";
       word_stop[24]="как";
       word_stop[25]="кем";
       word_stop[26]="когда";
       word_stop[27]="кого";
       word_stop[28]="ком";
       word_stop[29]="кому";
       word_stop[30]="которая";
       word_stop[31]="которого";
       word_stop[32]="которое";
       word_stop[33]="которой";
       word_stop[34]="котором";
       word_stop[35]="которому";
       word_stop[36]="которою";
       word_stop[37]="которую";
       word_stop[38]="которые";
       word_stop[39]="который";
       word_stop[40]="которым";
       word_stop[41]="которыми";
       word_stop[42]="которых";
       word_stop[43]="кто";
       word_stop[44]="меня";
       word_stop[45]="мне";
       word_stop[46]="мной";
       word_stop[47]="мною";
       word_stop[48]="мое";
       word_stop[49]="моё";
       word_stop[50]="моего";
       word_stop[51]="моей";
       word_stop[52]="моему";
       word_stop[53]="моём";
       word_stop[54]="мои";
       word_stop[55]="мой";
       word_stop[56]="мою";
       word_stop[57]="моим";
       word_stop[58]="моими";
       word_stop[59]="моих";
       word_stop[60]="мою";
       word_stop[61]="моя";
       word_stop[62]="нам";
       word_stop[63]="нами";
       word_stop[64]="нас";
       word_stop[65]="наш";
       word_stop[66]="наша";
       word_stop[67]="наше";
       word_stop[68]="нашего";
       word_stop[69]="нашей";
       word_stop[70]="нашем";
       word_stop[71]="нашему";
       word_stop[72]="нашею";
       word_stop[73]="наши";
       word_stop[74]="нашим";
       word_stop[75]="наших";
       word_stop[76]="нашу";
       word_stop[77]="него";
       word_stop[78]="нее";
       word_stop[79]="неё";
       word_stop[80]="ней";
       word_stop[81]="нём";
       word_stop[82]="нему";
       word_stop[83]="нет";
       word_stop[84]="нею";
       word_stop[85]="ним";
       word_stop[86]="ними";
       word_stop[87]="них";
       word_stop[88]="он";
       word_stop[89]="она";
       word_stop[90]="оно";
       word_stop[91]="они";
       word_stop[92]="при";
       word_stop[93]="сам";
       word_stop[94]="сама";
       word_stop[95]="сами";
       word_stop[96]="самим";
       word_stop[97]="самих";
       word_stop[98]="само";
       word_stop[99]="самому";
       word_stop[100]="саму";
       word_stop[101]="свое";
       word_stop[102]="своё";
       word_stop[103]="своего";
       word_stop[104]="своей";
       word_stop[105]="своем";
       word_stop[106]="своём";
       word_stop[107]="своему";
       word_stop[108]="своею";
       word_stop[109]="свои";
       word_stop[110]="свой";
       word_stop[111]="своим";
       word_stop[112]="своими";
       word_stop[113]="своих";
       word_stop[114]="свою";
       word_stop[115]="своя";
       word_stop[116]="себе";
       word_stop[117]="себя";
       word_stop[118]="собой";
       word_stop[119]="собою";
       word_stop[120]="так";
       word_stop[121]="такая";
       word_stop[122]="такие";
       word_stop[123]="таким";
       word_stop[124]="таких";
       word_stop[125]="такими";
       word_stop[126]="таких";
       word_stop[127]="такого";
       word_stop[128]="такое";
       word_stop[129]="такой";
       word_stop[130]="таком";
       word_stop[131]="такому";
       word_stop[132]="такою";
       word_stop[133]="такую";
       word_stop[134]="тебе";
       word_stop[135]="тебя";
       word_stop[136]="тем";
       word_stop[137]="теми";
       word_stop[138]="тех";
       word_stop[139]="тобой";
       word_stop[140]="тобою";
       word_stop[141]="того";
       word_stop[142]="той";
       word_stop[143]="только";
       word_stop[144]="том";
       word_stop[145]="тому";
       word_stop[146]="тот";
       word_stop[147]="тою";
       word_stop[148]="уже";
       word_stop[149]="чего";
       word_stop[150]="чем";
       word_stop[151]="чём";
       word_stop[152]="чему";
       word_stop[153]="что";
       word_stop[154]="чтобы";
       word_stop[155]="эта";
       word_stop[156]="эти";
       word_stop[157]="этим";
       word_stop[158]="этих";
       word_stop[159]="это";
       word_stop[160]="этого";
       word_stop[161]="этой";
       word_stop[162]="этом";
       word_stop[163]="этому";
       word_stop[164]="этот";
       word_stop[165]="этою";
       word_stop[166]="никаким";
       word_stop[167]="никому";
       word_stop[168]="никакому";
       word_stop[169]="никакой";
       word_stop[170]="никакого";
       word_stop[171]="никаким";
       word_stop[172]="никаком";
       word_stop[173]="никакая";
       word_stop[174]="никакую";
       word_stop[175]="никакое";
       word_stop[176]="никакие";
       word_stop[177]="никаких";
       word_stop[178]="никакими";
       word_stop[179]="никаких";
       word_stop[180]="какой";
       word_stop[181]="нибудь";
       word_stop[182]="вроде";
       word_stop[183]="либо";
       word_stop[184]="какое";
       word_stop[185]="над";
       word_stop[186]="там";
       word_stop[187]="где";
       word_stop[188]="через";
       word_stop[189]="тут";
       word_stop[190]="про";
       word_stop[191]="далее";
       word_stop[192]="каждую";
       word_stop[193]="твои";
       word_stop[194]="более";
       word_stop[195]="причем";
       word_stop[196]="причём";
       word_stop[197]="зато";
       word_stop[198]="потому";
       word_stop[199]="около";
       word_stop[200]="вдруг";
       word_stop[201]="цыц";
       word_stop[202]="даже";
       word_stop[203]="столько";
       word_stop[204]="зачем";
       word_stop[205]="после";
       word_stop[206]="какую";
       word_stop[207]="без";
       word_stop[208]="чтоб";
       word_stop[209]="изо";
       word_stop[210]="теперь";
       word_stop[211]="насколько";
       word_stop[212]="будто";
       word_stop[213]="оттуда";
       word_stop[214]="чей";
       word_stop[215]="чье";
       word_stop[216]="чьё";
       word_stop[217]="сначала";
       word_stop[218]="какие";
       word_stop[219]="под";
       word_stop[220]="потом";


       window.word_user=word_input.split(" ");

       alert("У Вас:"+word_user.length+" слов");
}

var level=0;
document.getElementById('btn_3').onclick=function()
{
 if(document.getElementById('check_6').checked)
       {
           level=1;
           document.getElementById('block_2').style.display="none";
       }

       if(document.getElementById('check_7').checked)
       {
           level=2;
           document.getElementById('block_2').style.display="none";
       }

       if(document.getElementById('check_8').checked)
       {
           level=3;
           document.getElementById('block_2').style.display="none";
       }

       for(i=0;i<word_user.length;i++)
       {
         if(word_user[i].length<=2)
         {
           word_user[i]="";
         }
         for(j=0;j<word_stop.length;j++)
         {
           if(word_user[i]==word_stop[j])
           {
             word_user[i]=""
           }
         }
       }



       var word_user_num=[];
       for (i=0;i<word_user.length;i++)
       {
         word_user_num[i]=0;
       }

 


       for (i=0; i<word_user.length;i++)
       {
         for(j=0;j<word_user.length;j++)
         {
           if (word_user[i]==word_user[j])
           {
             word_user_num[i]++;
           }
         }
       }

       var word_collect=[];

       for(i=0;i<word_user.length;i++)
       {
         word_collect[i]=
         {
           name:word_user[i],
           value:word_user_num[i]
         };
       }

       var mas= new Set(word_user);
       var mas_1=[...mas];

       var hope=[];

       for(i=0;i<word_user.length;i++)
       {
         for(j=0;j<word_user.length;j++)
         {
           if(mas_1[i]==word_collect[j].name)
           {
             hope[i]= 
             {
               name:mas_1[i],
               value:word_collect[j].value
             };
           }
         }
       }

       var result_name=[];
       var result_value=[];

       for(i=0;i<mas_1.length;i++)
       {
         result_name[i]=hope[i].name;
         result_value[i]=hope[i].value;
       }

       window.kop=[];
       var max=[];
       for(i=0;i<60;i++)
       {
         max[i]=0;
       }

       for(i=0;i<60;i++)
       {
         for(j=0;j<mas_1.length;j++)
         {
           if(i==0)
           {
             if(result_name[j]!="")
             {
               if(result_value[j]>max[0])
               {
                 max[0]=result_value[j];
                 kop[0]=result_name[j];
               }
             }
           }
           else
           {

               if(result_value[j]<max[i-1])
             {
               if(result_value[j]>max[i])
               {
                 max[i]=result_value[j];
                 kop[i]=result_name[j];
               }
             }
             
             
           }
         }
       }
if (level==1)
{
 if(genre=="Фантастика")
{
    

 var remisov=[];
var remisov_num=0;

remisov[0]="было";
remisov[1]="окно"; 
remisov[2]="коля";
remisov[3]="сердце";
remisov[4]="просто";
remisov[5]="николай";
remisov[6]="хотелось";
remisov[7]="глаза";
remisov[8]="был"; 
remisov[9]="сердца";
remisov[10]="весь";
remisov[11]="перед";
remisov[12]="голос";
remisov[13]="жизнь";
remisov[14]="куда";
remisov[15]="руки";
remisov[16]="словно";
remisov[17]="варенька";
remisov[18]="финогеновы";
remisov[19]="один";
remisov[20]="саша";
remisov[21]="ночь";
remisov[22]="дом";
remisov[23]="больше";
remisov[24]="коля";
remisov[25]="опять";
remisov[26]="дома";
remisov[27]="петя";
remisov[28]="друга";
remisov[29]="знал";
remisov[30]="лицо";
remisov[31]="надо";
remisov[32]="тогда";
remisov[33]="гавриил";
remisov[34]="прасковья";
remisov[35]="колю";
remisov[36]="стало";
remisov[37]="казалось";
remisov[38]="быть";
remisov[39]="дети";
remisov[40]="финогеновых";
remisov[41]="сказал";
remisov[42]="много";
remisov[43]="долго";
remisov[44]="были";
remisov[45]="может";
remisov[46]="арсений";
remisov[47]="николая";
remisov[48]="ноги";
remisov[49]="какая";
remisov[50]="хотел";
remisov[51]="жизни";
remisov[52]="тихо";
remisov[53]="люди";
remisov[54]="мог";
remisov[55]="стоял";
remisov[56]="будет";
remisov[57]="красный";
remisov[58]="всегда";
remisov[59]="слова";

var lavkraft=[];
var kavkraft_num=0;

lavkraft[0]="было";
lavkraft[1]="хотя";
lavkraft[2]="был";
lavkraft[3]="были";
lavkraft[4]="также";
lavkraft[5]="однако";
lavkraft[6]="здесь";
lavkraft[7]="лишь";
lavkraft[8]="была";
lavkraft[9]="довольно";
lavkraft[10]="города";
lavkraft[11]="несколько";
lavkraft[12]="можно";
lavkraft[13]="тогда";
lavkraft[14]="почти";
lavkraft[15]="раз";
lavkraft[16]="могли";
lavkraft[17]="лейка";
lavkraft[18]="стрит";
lavkraft[19]="очень";
lavkraft[20]="мог";
lavkraft[21]="перед";
lavkraft[22]="времени";
lavkraft[23]="футов";
lavkraft[24]="вновь";
lavkraft[25]="стороны";
lavkraft[26]="ведь";
lavkraft[27]="никогда";
lavkraft[28]="некоторые";
lavkraft[29]="явно";
lavkraft[30]="столь";
lavkraft[31]="основательно";
lavkraft[32]="сразу";
lavkraft[33]="несмотря";
lavkraft[34]="конечно";
lavkraft[35]="место";
lavkraft[36]="других";
lavkraft[37]="моря";
lavkraft[38]="могло";
lavkraft[39]="самые";
lavkraft[40]="пэбоди";
lavkraft[41]="гор";
lavkraft[42]="горы";
lavkraft[43]="впрочем";
lavkraft[44]="несомненно";
lavkraft[45]="хотелось";
lavkraft[46]="собак";
lavkraft[47]="одной";
lavkraft[48]="виде";
lavkraft[49]="могут";
lavkraft[50]="другой";
lavkraft[51]="сохранились";
lavkraft[52]="мере";
lavkraft[53]="года";
lavkraft[54]="большой";
lavkraft[55]="работы";
lavkraft[56]="лед";
lavkraft[57]="души";
lavkraft[58]="сомнения";
lavkraft[59]="рассказ";

var king=[];
var king_num=0;
king[0]="было";
king[1]="был";
king[2]="сказал";
king[3]="была";
king[4]="раз";
king[5]="были";
king[6]="роки";
king[7]="просто";
king[8]="время";
king[9]="глаза";
king[10]="сифкиц";
king[11]="может";
king[12]="снова";
king[13]="больше";
king[14]="отто";
king[15]="ничего";
king[16]="спросил";
king[17]="увидел";
king[18]="почти";
king[19]="руки";
king[20]="перед";
king[21]="лет";
king[22]="очень";
king[23]="подумал";
king[24]="дверь";
king[25]="сейчас";
king[26]="два";
king[27]="гарольд";
king[28]="конечно";
king[29]="можно";
king[30]="надо";
king[31]="знал";
king[32]="день";
king[33]="начал";
king[34]="сделал";
king[35]="думал";
king[36]="возможно";
king[37]="слишком";
king[38]="никогда";
king[39]="чуть";
king[40]="дело";
king[41]="сказать";
king[42]="ноги";
king[43]="конце";
king[44]="двадцать";
king[45]="руке";
king[46]="совсем";
king[47]="жена";
king[48]="труди";
king[49]="пять";
king[50]="долго";
king[51]="вероятно";
king[52]="достаточно";
king[53]="никто";
king[54]="место";
king[55]="нью";
king[56]="делать";
king[57]="рот";
king[58]="нельзя";
king[59]="ральф";

var strugazkie=[];
var strugazkie_num=0;
strugazkie[0]="сказал";
strugazkie[1]="хлебовводов";
strugazkie[2]="федотович";
strugazkie[3]="лавр";
strugazkie[4]="было";
strugazkie[5]="фарфуркис";
strugazkie[6]="комендант";
strugazkie[7]="эдик";
strugazkie[8]="был";
strugazkie[9]="товарищ";
strugazkie[10]="есть";
strugazkie[11]="дело";
strugazkie[12]="быть";
strugazkie[13]="может";
strugazkie[14]="спросил";
strugazkie[15]="время";
strugazkie[16]="здесь";
strugazkie[17]="выбегалло";
strugazkie[18]="роман";
strugazkie[19]="произнес";
strugazkie[20]="зубо";
strugazkie[21]="были";
strugazkie[22]="тоже";
strugazkie[23]="федя";
strugazkie[24]="говорун";
strugazkie[25]="будет";
strugazkie[26]="очень";
strugazkie[27]="перед";
strugazkie[28]="говорил";
strugazkie[29]="сейчас";
strugazkie[30]="ничего";
strugazkie[31]="витька";
strugazkie[32]="надо";
strugazkie[33]="однако";
strugazkie[34]="принялся";
strugazkie[35]="тогда";
strugazkie[36]="можно";
strugazkie[37]="пока";
strugazkie[38]="между";
strugazkie[39]="раз";
strugazkie[40]="конечно";
strugazkie[41]="федотовича";
strugazkie[42]="лавра";
strugazkie[43]="была";
strugazkie[44]="наконец";
strugazkie[45]="глаза";
strugazkie[46]="хорошо";
strugazkie[47]="ведь";
strugazkie[48]="совсем";
strugazkie[49]="почему";
strugazkie[50]="дела";
strugazkie[51]="место";
strugazkie[52]="старичок";
strugazkie[53]="сказать";
strugazkie[54]="снова";
strugazkie[55]="руки";
strugazkie[56]="много";
strugazkie[57]="голову";
strugazkie[58]="коменданта";
strugazkie[59]="посмотрел";

var azimov=[];
var azimov_num=0;
azimov[0]="бейли";
azimov[1]="был";
azimov[2]="было";
azimov[3]="байрон";
azimov[4]="сказал";
azimov[5]="робот";
azimov[6]="дэниел";
azimov[7]="ответил";
azimov[8]="может";
azimov[9]="люди";
azimov[10]="была";
azimov[11]="ничего";
azimov[12]="сейчас";
azimov[13]="были";
azimov[14]="быть";
azimov[15]="здесь";
azimov[16]="дельмар";
azimov[17]="спросил";
azimov[18]="назад";
azimov[19]="гладия";
azimov[20]="конечно";
azimov[21]="солярии";
azimov[22]="ведь";
azimov[23]="будет";
azimov[24]="заметил";
azimov[25]="почему";
azimov[26]="джилберт";
azimov[27]="знаю";
azimov[28]="один";
azimov[29]="земли";
azimov[30]=" нет";
azimov[31]="человек";
azimov[32]="должен";
azimov[33]="именно";
azimov[34]="лет";
azimov[35]="быстро";
azimov[36]="глаза";
azimov[37]="думаю";
azimov[38]="земле";
azimov[39]="могу";
azimov[40]="возможно";
azimov[41]="несколько";
azimov[42]="пока";
azimov[43]="можно";
azimov[44]="человека";
azimov[45]="голос";
azimov[46]="слишком";
azimov[47]="раз";
azimov[48]="никогда";
azimov[49]="доктор";
azimov[50]="артемида";
azimov[51]="знал";
azimov[52]="сделать";
azimov[53]="снова";
azimov[54]="поэтому";
azimov[55]="совершенно";
azimov[56]="дело";
azimov[57]="жизнь";
azimov[58]="людей";
azimov[59]="слова";

for(i=0;i<60;i++)
         {
             for(j=0;j<60;j++)
             {
                 if(kop[i]==remisov[j])
                 {
                     remisov_num++;
                 }

                 if(kop[i]==lavkraft[j])
                 {
                     lavkraft_num++;
                 }

                 if(kop[i]==king[j])
                 {
                     king_num++;
                 }

                 if(kop[i]==strugazkie[j])
                 {
                     strugazkie_num++;
                 }

                 if(kop[i]==azimov[j])
                 {
                     azimov_num++;
                 }
                 
             }
         }

         window.max_1=remisov_num;
         window.max_2=lavkraft_num;
         window.max_3=king_num;
         window.max_4=strugazkie_num;
         window.max_5=azimov_num;

         window.max_1_name="Алексей Михайлович Ремизов";
         window.max_2_name="Говард Филлипс Лавкрафт";
         window.max_3_name="Стивен Кинг";
         window.max_4_name="Братья Стругацкие";
         window.max_5_name="Айзек Азимов";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

         document.getElementById('block_4').style.display="block";
         document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Детективы")
{

 //Сэр Артур Игнейгус Конан Дойл
var doil=[];
var doil_num=0;
doil[0]="холмс";
doil[1]="было";
doil[2]="был";
doil[3]="сказал";
doil[4]="видел";
doil[5]="мистер";
doil[6]="очень";
doil[7]="дело";
doil[8]="человек";
doil[9]="здесь";
doil[10]="может";
doil[11]="ничего";
doil[12]="были";
doil[13]="говорил";
doil[14]="время";
doil[15]="быть";
doil[16]="раз";
doil[17]="уотсон";
doil[18]="была";
doil[19]="один";
doil[20]="ддействительно";
doil[21]="слишком";
doil[22]="минуту";
doil[23]="несколько";
doil[24]="будет";
doil[25]="мог";
doil[26]="можно";
doil[27]="конечно";
doil[28]="мисс";
doil[29]="лицо";
doil[30]="никогда";
doil[31]="спросил";
doil[32]="пока";
doil[33]="нем";
doil[34]="дверь";
doil[35]="почему";
doil[36]="могу";
doil[37]="больше";
doil[38]="человека";
doil[39]="хотя";
doil[40]="однако";
doil[41]="день";
doil[42]="два";
doil[43]="стал";
doil[44]="сказать";
doil[45]="шерлок";
doil[46]="знаю";
doil[47]="стороны";
doil[48]="доме";
doil[49]="значит";
doil[50]="думаю";
doil[51]="затем";
doil[52]="сразу";
doil[53]="письмо";
doil[54]="против";
doil[55]="никто";
doil[56]="должны";
doil[57]="образом";
doil[58]="увидел";
doil[59]="людей";

//Эдгар Аллан По
var po=[];
var po_num=0;
po[0]="было";
po[1]="был";
po[2]="были";
po[3]="была";
po[4]="очень";
po[5]="лишь";
po[6]="несколько";
po[7]="однако";
po[8]="время";
po[9]="люди";
po[10]="раз";
po[11]="здесь";
po[12]="мог";
po[13]="весьма";
po[14]="разве";
po[15]="мистер";
po[16]="говорил";
po[17]="хотя";
po[18]="сказал";
po[19]="быть";
po[20]="может";
po[21]="два";
po[22]="наконец";
po[23]="пока";
po[24]="можно";
po[25]="также";
po[26]="снова";
po[27]="ничего";
po[28]="три";
po[29]="совершенно";
po[30]="затем";
po[31]="большой";
po[32]="слова";
po[33]="перед";
po[34]="больше";
po[35]="много";
po[36]="человек";
po[37]="совсем";
po[38]="между";
po[39]="слишком";
po[40]="сразу";
po[41]="менее";
po[42]="конечно";
po[43]="вместе";
po[44]="часто";
po[45]="жизни";
po[46]="одного";
po[47]="нем";
po[48]="глаза";
po[49]="времени";
po[50]="видел";
po[51]="мере";
po[52]="человека";
po[53]="вскоре";
po[54]="пути";
po[55]="души";
po[56]="скорее";
po[57]="поэтому";
po[58]="долго";
po[59]="смерти";

//Уилки Коллинз
var uilki=[];
var uilki_num=0;
uilki[0]="мисс";
uilki[1]="было";
uilki[2]="женщины";
uilki[3]="сказала";
uilki[4]="была";
uilki[5]="был";
uilki[6]="человека";
uilki[7]="персиваль";
uilki[8]="мистер";
uilki[9]="сказал";
uilki[10]="миссис";
uilki[11]="дальше";
uilki[12]="время";
uilki[13]="очень";
uilki[14]="больше";
uilki[15]="граф";
uilki[16]="будет";
uilki[17]="достаточно";
uilki[18]="персиваля";
uilki[19]="ничего";
uilki[20]="снова";
uilki[21]="образом";
uilki[22]="быть";
uilki[23]="может";
uilki[24]="слова";
uilki[25]="начала";
uilki[26]="голову";
uilki[27]="раз";
uilki[28]="сказать";
uilki[29]="могу";
uilki[30]="глаза";
uilki[31]="сейчас";
uilki[32]="мистера";
uilki[33]="мог";
uilki[34]="слово";
uilki[35]="здесь";
uilki[36]="друг";
uilki[37]="конечно";
uilki[38]="леди";
uilki[39]="руку";
uilki[40]="день";
uilki[41]="эту";
uilki[42]="знаю";
uilki[43]="спросила";
uilki[44]="человек";
uilki[45]="женщина";
uilki[46]="руки";
uilki[47]="прежде";
uilki[48]="есть";
uilki[49]="один";
uilki[50]="сердце";
uilki[51]="сделать";
uilki[52]="именно";
uilki[53]="всегда";
uilki[54]="лучше";
uilki[55]="ответ";
uilki[56]="хочу";
uilki[57]="дверь";
uilki[58]="два";
uilki[59]="вместе";

//Гильберт Кийт Честертон
var kit=[];
var kit_num=0;
kit[0]="был";
kit[1]="сказал";
kit[2]="было";
kit[3]="браун";
kit[4]="фламбо";
kit[5]="отец";
kit[6]="священник";
kit[7]="словно";
kit[8]="серебряной";
kit[9]="были";
kit[10]="была";
kit[11]="спросил";
kit[12]="быть";
kit[13]="ответил";
kit[14]="доктор";
kit[15]="может";
kit[16]="раз";
kit[17]="здесь";
kit[18]="человека";
kit[19]="очень";
kit[20]="голову";
kit[21]="ничего";
kit[22]="продолжал";
kit[23]="лицо";
kit[24]="мистер";
kit[25]="один";
kit[26]="есть";
kit[27]="быстро";
kit[28]="дело";
kit[29]="наконец";
kit[30]="совсем";
kit[31]="дверь";
kit[32]="никто";
kit[33]="много";
kit[34]="глаза";
kit[35]="нем";
kit[36]="просто";
kit[37]="слова";
kit[38]="куда";
kit[39]="большой";
kit[40]="людей";
kit[41]="конечно";
kit[42]="именно";
kit[43]="чуть";
kit[44]="знал";
kit[45]="голова";
kit[46]="должен";
kit[47]="сюда";
kit[48]="хотел";
kit[49]="между";
kit[50]="туда";
kit[51]="лет";
kit[52]="смерти";
kit[53]="хуже";
kit[54]="англии";
kit[55]="крест";
kit[56]="сигару";
kit[57]="внимания";
kit[58]="берегу";
kit[59]="ничто";

//Агата Кристи
var kristi=[];
var kristi_num=0;
kristi[0]="пуаро";
kristi[1]="было";
kristi[2]="был";
kristi[3]="сказал";
kristi[4]="очень";
kristi[5]="миссис";
kristi[6]="была";
kristi[7]="мистер";
kristi[8]="сказала";
kristi[9]="быть";
kristi[10]="сэр";
kristi[11]="время";
kristi[12]="взгляд";
kristi[13]="конечно";
kristi[14]="были";
kristi[15]="ничего";
kristi[16]="может";
kristi[17]="леди";
kristi[18]="мисс";
kristi[19]="раз";
kristi[20]="будет";
kristi[21]="месье";
kristi[22]="минут";
kristi[23]="ведь";
kristi[24]="всегда";
kristi[25]="просто";
kristi[26]="здесь";
kristi[27]="есть";
kristi[28]="мог";
kristi[29]="совершенно";
kristi[30]="хорошо";
kristi[31]="именно";
kristi[32]="думаю";
kristi[33]="один";
kristi[34]="сейчас";
kristi[35]="сказать";
kristi[36]="больше";
kristi[37]="посмотрел";
kristi[38]="инспектор";
kristi[39]="дело";
kristi[40]="почему";
kristi[41]="снова";
kristi[42]="могу";
kristi[43]="тоже";
kristi[44]="бриджит";
kristi[45]="должен";
kristi[46]="произнес";
kristi[47]="глаза";
kristi[48]="деле";
kristi[49]="перед";
kristi[50]="слишком";
kristi[51]="сегодня";
kristi[52]="сразу";
kristi[53]="самом";
kristi[54]="комнату";
kristi[55]="тогда";
kristi[56]="голос";
kristi[57]="спросила";
kristi[58]="два";
kristi[59]="головой";


for(i=0;i<60;i++)
         {
             for(j=0;j<60;j++)
             {
                 if(kop[i]==doil[j])
                 {
                 doil_num++;
                 }

                 if(kop[i]==po[j])
                 {
                 po_num++;
                 }

                 if(kop[i]==uilki[j])
                 {
                 uilki_num++;
                 }

                 if(kop[i]==kit[j])
                 {
                 kit_num++;
                 }

                 if(kop[i]==kristi[j])
                 {
                 kristi_num++;
                 }
             }
         
         }

         window.max_1=doil_num;
         window.max_2=po_num;
         window.max_3=uilki_num;
         window.max_4=kit_num;
         window.max_5=kristi_num;

         window.max_1_name="Сэр Артур Игнейгус Конан Дойл";
         window.max_2_name="Эдгар Аллан По";
         window.max_3_name="Уилки Коллинз";
         window.max_4_name="Гильберт Кийт Честертон";
         window.max_5_name="Агата Кристи";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Приключения")
{

 //Александр Дюма
var duma=[];
var duma_num=0;

duma[0]="сказал";
duma[1]="вышел";
duma[2]="граф";
duma[3]="разве";
duma[4]="был";
duma[5]="было";
duma[6]="взял";
duma[7]="буду";
duma[8]="спросил";
duma[9]="отвечал";
duma[10]="быть";
duma[11]="человек";
duma[12]="раз";
duma[13]="были";
duma[14]="может";
duma[15]="очень";
duma[16]="четыре";
duma[17]="между";
duma[18]="была";
duma[19]="остров";
duma[20]="будет";
duma[21]="один";
duma[22]="времени";
duma[23]="видите";
duma[24]="графа";
duma[25]="два";
duma[26]="ваша";
duma[27]="время";
duma[28]="слышал";
duma[29]="милость";
duma[30]="дорогой";
duma[31]="три";
duma[32]="воскликнул";
duma[33]="хозяин";
duma[34]="франца";
duma[35]="есть";
duma[36]="шесть";
duma[37]="несколько";
duma[38]="друг";
duma[39]="ничего";
duma[40]="случае";
duma[41]="человека";
duma[42]="тогда";
duma[43]="перед";
duma[44]="надо";
duma[45]="какого";
duma[46]="эту";
duma[47]="продолжал";
duma[48]="люди";
duma[49]="дело";
duma[50]="риме";
duma[51]="первый";
duma[52]="весь";
duma[53]="просто";
duma[54]="наконец";
duma[55]="почему";
duma[56]="руки";
duma[57]="снова";
duma[58]="пока";
duma[59]="впрочем";

//Александр Степанович Грин
var grin=[];
var grin_num=0;

grin[0]="сказал";
grin[1]="почему";
grin[2]="был";
grin[3]="было";
grin[4]="куда";
grin[5]="очень";
grin[6]="быть";
grin[7]="человек";
grin[8]="ничего";
grin[9]="всегда";
grin[10]="против";
grin[11]="были";
grin[12]="сказала";
grin[13]="знал";
grin[14]="будет";
grin[15]="была";
grin[16]="дело";
grin[17]="мог";
grin[18]="есть";
grin[19]="скоро";
grin[20]="ответил";
grin[21]="глаза";
grin[22]="может";
grin[23]="руку";
grin[24]="стал";
grin[25]="кроме";
grin[26]="лицо";
grin[27]="затем";
grin[28]="дверь";
grin[29]="раз";
grin[30]="едва";
grin[31]="знаю";
grin[32]="случае";
grin[33]="руки";
grin[34]="лет";
grin[35]="человека";
grin[36]="голос";
grin[37]="увидел";
grin[38]="лишь";
grin[39]="один";
grin[40]="тогда";
grin[41]="день";
grin[42]="пока";
grin[43]="между";
grin[44]="два";
grin[45]="можно";
grin[46]="перед";
grin[47]="лицом";
grin[48]="вокруг";
grin[49]="говорить";
grin[50]="больше";
grin[51]="никогда";
grin[52]="место";
grin[53]="рой";
grin[54]="много";
grin[55]="снова";
grin[56]="также";
grin[57]="хотел";
grin[58]="иногда";
grin[59]="слова";

//Жюль Верн
var vern=[];
var vern_num=0;

vern[0]="сына";
vern[1]="знал";
vern[2]="день";
vern[3]="улыбнулся";
vern[4]="взглянул";
vern[5]="произошло";
vern[6]="тогда";
vern[7]="было";
vern[8]="значит";
vern[9]="была";
vern[10]="был";
vern[11]="глаза";
vern[12]="сказал";
vern[13]="руки";
vern[14]="сказала";
vern[15]="пока";
vern[16]="ответил";
vern[17]="может";
vern[18]="барри";
vern[19]="просто";
vern[20]="руку";
vern[21]="были";
vern[22]="раз";
vern[23]="ничего";
vern[24]="больше";
vern[25]="мог";
vern[26]="будет";
vern[27]="знаю";
vern[28]="ответила";
vern[29]="голос";
vern[30]="быть";
vern[31]="время";
vern[32]="дело";
vern[33]="здесь";
vern[34]="сейчас";
vern[35]="один";
vern[36]="стала";
vern[37]="словно";
vern[38]="перед";
vern[39]="хотел";
vern[40]="доктор";
vern[41]="могу";
vern[42]="можно";
vern[43]="спросил";
vern[44]="дверь";
vern[45]="взгляд";
vern[46]="сказать";
vern[47]="лет";
vern[48]="слова";
vern[49]="всегда";
vern[50]="улыбнулась";
vern[51]="поэтому";
vern[52]="хочу";
vern[53]="очень";
vern[54]="дочь";
vern[55]="деле";
vern[56]="крисом";
vern[57]="могла";
vern[58]="нужно";
vern[59]="самом";

//Скот Вальтер
var valter=[];
var valter_num=0;

valter[0]="сказал";
valter[1]="было";
valter[2]="рыцарь";
valter[3]="был";
valter[4]="были";
valter[5]="пор";
valter[6]="отвечал";
valter[7]="скорее";
valter[8]="будет";
valter[9]="может";
valter[10]="ради";
valter[11]="время";
valter[12]="имя";
valter[13]="быть";
valter[14]="была";
valter[15]="времени";
valter[16]="принц";
valter[17]="один";
valter[18]="однако";
valter[19]="другой";
valter[20]="перед";
valter[21]="могу";
valter[22]="одного";
valter[23]="сэр";
valter[24]="хотя";
valter[25]="рыцаря";
valter[26]="храмовник";
valter[27]="есть";
valter[28]="мог";
valter[29]="кроме";
valter[30]="сказала";
valter[31]="больше";
valter[32]="пока";
valter[33]="леди";
valter[34]="дело";
valter[35]="тогда";
valter[36]="можно";
valter[37]="лицо";
valter[38]="святого";
valter[39]="минуту";
valter[40]="монах";
valter[41]="между";
valter[42]="здесь";
valter[43]="гораздо";
valter[44]="эту";
valter[45]="друг";
valter[46]="людей";
valter[47]="довольно";
valter[48]="спросил";
valter[49]="ордена";
valter[50]="против";
valter[51]="лишь";
valter[52]="хоть";
valter[53]="ведь";
valter[54]="гроссмейстер";
valter[55]="отшельник";
valter[56]="ничего";
valter[57]="продолжал";
valter[58]="несколько";
valter[59]="стороны";

//Марк Твен
var tven=[];
var tven_num=0;

tven[0]="было";
tven[1]="говорит";
tven[2]="сказал";
tven[3]="думал";
tven[4]="ничего";
tven[5]="был";
tven[6]="говорю";
tven[7]="однако";
tven[8]="тоже";
tven[9]="раз";
tven[10]="пока";
tven[11]="больше";
tven[12]="время";
tven[13]="тогда";
tven[14]="есть";
tven[15]="просто";
tven[16]="король";
tven[17]="дело";
tven[18]="может";
tven[19]="ведь";
tven[20]="лучше";
tven[21]="очень";
tven[22]="один";
tven[23]="стал";
tven[24]="была";
tven[25]="снова";
tven[26]="были";
tven[27]="конечно";
tven[28]="мог";
tven[29]="день";
tven[30]="понял";
tven[31]="времени";
tven[32]="сразу";
tven[33]="три";
tven[34]="здесь";
tven[35]="хорошо";
tven[36]="опять";
tven[37]="деньги";
tven[38]="видел";
tven[39]="сюда";
tven[40]="надо";
tven[41]="сказать";
tven[42]="скоро";
tven[43]="сказала";
tven[44]="решил";
tven[45]="человек";
tven[46]="почти";
tven[47]="голову";
tven[48]="общем";
tven[49]="немного";
tven[50]="быть";
tven[51]="придется";
tven[52]="говорил";
tven[53]="джиму";
tven[54]="всегда";
tven[55]="правда";
tven[56]="другой";
tven[57]="долларов";
tven[58]="негра";
tven[59]="каждый";

 for(i=0;i<60;i++)
         {
             for(j=0;j<60;j++)
             {
                 if(kop[i]==duma[j])
                 {
                     duma_num++;
                 }

                 if(kop[i]==grin[j])
                 {
                     grin_num++;
                 }

                 if(kop[i]==vern[j])
                 {
                     vern_num++;
                 }

                 if(kop[i]==valter[j])
                 {
                     valter_num++;
                 }

                 if(kop[i]==tven[j])
                 {
                     tven_num++;
                 }
             
             }
         }

         window.max_1=duma_num;
         window.max_2=grin_num;
         window.max_3=vern_num;
         window.max_4=valter_num;
         window.max_5=tven_num;

         window.max_1_name="Александр Дюма";
         window.max_2_name="Александр Степанович Грин";
         window.max_3_name="Жюль Верн";
         window.max_4_name="Скотт Вальтер";
         window.max_5_name="Марк Твен";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Стихи")
{
 var pushkin=[];
 var pushkin_num=0;

pushkin[0]="все";
pushkin[1]="уже";
pushkin[2]="счастья";
pushkin[3]="радости";
pushkin[4]="нежный";
pushkin[5]="люблю";
pushkin[6]="монах";
pushkin[7]="увы";
pushkin[8]="стихотворения";
pushkin[9]="гром";
pushkin[10]="вино";
pushkin[11]="любезный";
pushkin[12]="мрак";
pushkin[13]="друг";
pushkin[14]="святой";
pushkin[15]="надежды";
pushkin[16]="был";
pushkin[17]="твой";
pushkin[18]="всё";
pushkin[19]="любовью";
pushkin[20]="милый";
pushkin[21]="милая";
pushkin[22]="день";
pushkin[23]="пред";
pushkin[24]="любви";
pushkin[25]="жизни";
pushkin[26]="вновь";
pushkin[27]="может";
pushkin[28]="любовь";
pushkin[29]="час";
pushkin[30]="свет";
pushkin[31]="увы";
pushkin[32]="сердце";
pushkin[33]="лишь";
pushkin[34]="иль";
pushkin[35]="здесь";
pushkin[36]="бедный";
pushkin[37]="ночи";
pushkin[38]="сердца";
pushkin[39]="поэт";
pushkin[40]="тень";
pushkin[41]="твоей";
pushkin[42]="быть";
pushkin[43]="пускай";
pushkin[44]="сказать";
pushkin[45]="глас";
pushkin[46]="иль";
pushkin[47]="вижу";
pushkin[48]="сей";
pushkin[49]="рукой";
pushkin[50]="раз";
pushkin[51]="здесь";
pushkin[52]="время";
pushkin[53]="тебя";
pushkin[54]="грудь";
pushkin[55]="один";
pushkin[56]="очи";
pushkin[57]="руку";
pushkin[58]="груди";
pushkin[59]="лишь";

//Михаил Юрьевич Лермонтов
var lermontov=[];
var lermontov_num=0;

lermontov[0]="был";
lermontov[1]="лишь";
lermontov[2]="сердце";
lermontov[3]="хоть";
lermontov[4]="один";
lermontov[5]="любви";
lermontov[6]="твой";
lermontov[7]="быть";
lermontov[8]="нем";
lermontov[9]="меж";
lermontov[10]="людей";
lermontov[11]="может";
lermontov[12]="тогда";
lermontov[13]="жизнь";
lermontov[14]="лет";
lermontov[15]="любовь";
lermontov[16]="вновь";
lermontov[17]="пред";
lermontov[18]="дней";
lermontov[19]="звук";
lermontov[20]="друг";
lermontov[21]="свет";
lermontov[22]="душе";
lermontov[23]="любил";
lermontov[24]="долго";
lermontov[25]="день";
lermontov[26]="души";
lermontov[27]="мечты";
lermontov[28]="опять";
lermontov[29]="сей";
lermontov[30]="средь";
lermontov[31]="сон";
lermontov[32]="время";
lermontov[33]="бог";
lermontov[34]="всегда";
lermontov[35]="прах";
lermontov[36]="сердца";
lermontov[37]="другой";
lermontov[38]="одна";
lermontov[39]="пор";
lermontov[40]="кругом";
lermontov[41]="гор";
lermontov[42]="путь";
lermontov[43]="огонь";
lermontov[44]="уста";
lermontov[45]="девы";
lermontov[46]="счастья";
lermontov[47]="скоро";
lermontov[48]="туман";
lermontov[49]="любит";
lermontov[50]="сквозь";
lermontov[51]="бедный";
lermontov[52]="дитя";
lermontov[53]="говорит";
lermontov[54]="поле";
lermontov[55]="ваш";
lermontov[56]="безумный";
lermontov[57]="месяц";
lermontov[58]="лучей";
lermontov[59]="летят";

//Александр Сергеевич Есенин
var esenin=[];
var esenin_num=0;

esenin[0]="сердце";
esenin[1]="лишь";
esenin[2]="есть";
esenin[3]="жизнь";
esenin[4]="твой";
esenin[5]="был";
esenin[6]="словно";
esenin[7]="русь";
esenin[8]="свет";
esenin[9]="глаза";
esenin[10]="много";
esenin[11]="тихо";
esenin[12]="поле";
esenin[13]="вижу";
esenin[14]="ведь";
esenin[15]="поэт";
esenin[16]="иль";
esenin[17]="душу";
esenin[18]="твоих";
esenin[19]="лет";
esenin[20]="звезды";
esenin[21]="будет";
esenin[22]="любовь";
esenin[23]="поет";
esenin[24]="солнце";
esenin[25]="ночь";
esenin[26]="снег";
esenin[27]="жизни";
esenin[28]="песню";
esenin[29]="час";
esenin[30]="душе";
esenin[31]="думы";
esenin[32]="грудь";
esenin[33]="лес";
esenin[34]="время";
esenin[35]="нем";
esenin[36]="путь";
esenin[37]="души";
esenin[38]="стихотворения";
esenin[39]="кровь";
esenin[40]="дня";
esenin[41]="радости";
esenin[42]="звуки";
esenin[43]="веселый";
esenin[44]="горит";
esenin[45]="душ";
esenin[46]="день";
esenin[47]="дум";
esenin[48]="сила";
esenin[49]="страшный";
esenin[50]="время";
esenin[51]="времени";
esenin[52]="самого";
esenin[53]="школьной";
esenin[54]="полное";
esenin[55]="список";
esenin[56]="немного";
esenin[57]="были";
esenin[58]="школьного";
esenin[59]="самой";

//Владимир Владимирович Маяковский
var mayakovski=[];
var mayakovski_num=0;

mayakovski[0]="надо";
mayakovski[1]="будет";
mayakovski[2]="день";
mayakovski[3]="товарищ";
mayakovski[4]="сегодня";
mayakovski[5]="жизнь";
mayakovski[6]="глаза";
mayakovski[7]="быть";
mayakovski[8]="есть";
mayakovski[9]="может";
mayakovski[10]="ленин";
mayakovski[11]="каждый";
mayakovski[12]="здесь";
mayakovski[13]="был";
mayakovski[14]="люди";
mayakovski[15]="весь";
mayakovski[16]="сердце";
mayakovski[17]="пусть";
mayakovski[18]="солнце";
mayakovski[19]="глаз";
mayakovski[20]="время";
mayakovski[21]="перед";
mayakovski[22]="много";
mayakovski[23]="хоть";
mayakovski[24]="город";
mayakovski[25]="опять";
mayakovski[26]="было";
mayakovski[27]="земля";
mayakovski[28]="дома";
mayakovski[29]="жизни";
mayakovski[30]="души";
mayakovski[31]="рядом";
mayakovski[32]="земли";
mayakovski[33]="стал";
mayakovski[34]="довольно";
mayakovski[35]="солнца";
mayakovski[36]="дни";
mayakovski[37]="была";
mayakovski[38]="любовь";
mayakovski[39]="хорошо";
mayakovski[40]="смотрите";
mayakovski[41]="голову";
mayakovski[42]="ветер";
mayakovski[43]="улица";
mayakovski[44]="дон";
mayakovski[45]="цветы";
mayakovski[46]="моем";
mayakovski[47]="этажа";
mayakovski[48]="неправда";
mayakovski[49]="любимая";
mayakovski[50]="три";
mayakovski[51]="тоже";
mayakovski[52]="голос";
mayakovski[53]="место";
mayakovski[54]="мама";
mayakovski[55]="театр";
mayakovski[56]="слова";
mayakovski[57]="другие";
mayakovski[58]="новое";
mayakovski[59]="дать";

//Марина Ивановна Цветаева
var cvetaeva=[];
var cvetaeva_num=0;
cvetaeva[0]="час";
cvetaeva[1]="руки";
cvetaeva[2]="бог";
cvetaeva[3]="ночь";
cvetaeva[4]="быть";
cvetaeva[5]="твой";
cvetaeva[6]="глаза";
cvetaeva[7]="был";
cvetaeva[8]="есть";
cvetaeva[9]="мая";
cvetaeva[10]="любовь";
cvetaeva[11]="здесь";
cvetaeva[12]="будет";
cvetaeva[13]="июля";
cvetaeva[14]="дом";
cvetaeva[15]="души";
cvetaeva[16]="сон";
cvetaeva[17]="ночи";
cvetaeva[18]="жизнь";
cvetaeva[19]="надо";
cvetaeva[20]="кровь";
cvetaeva[21]="лишь";
cvetaeva[22]="грудь";
cvetaeva[23]="июня";
cvetaeva[24]="один";
cvetaeva[25]="меж";
cvetaeva[26]="глаз";
cvetaeva[27]="рук";
cvetaeva[28]="мир";
cvetaeva[29]="голос";
cvetaeva[30]="октября";
cvetaeva[31]="каждый";
cvetaeva[32]="пусть";
cvetaeva[33]="смерть";
cvetaeva[34]="небо";
cvetaeva[35]="была";
cvetaeva[36]="одно";
cvetaeva[37]="лет";
cvetaeva[38]="ветер";
cvetaeva[39]="руку";
cvetaeva[40]="сквозь";
cvetaeva[41]="ведь";
cvetaeva[42]="одна";
cvetaeva[43]="буду";
cvetaeva[44]="солнце";
cvetaeva[45]="мама";
cvetaeva[46]="дети";
cvetaeva[47]="опять";
cvetaeva[48]="сегодня";
cvetaeva[49]="уст";
cvetaeva[50]="много";
cvetaeva[51]="тени";
cvetaeva[52]="слова";
cvetaeva[53]="сколько";
cvetaeva[54]="вечер";
cvetaeva[55]="спи";
cvetaeva[56]="чуть";
cvetaeva[57]="сердца";
cvetaeva[58]="жизни";
cvetaeva[59]="завтра";

     for(i=0;i<60;i++)
         {
             for(j=0;j<60;j++)
             {
                 if(kop[i]==pushkin[j])
                 {
                     pushkin_num++;
                 }

                 if(kop[i]==lermontov[j])
                 {   
                     lermontov_num++;
                 }

                 if(kop[i]==esenin[j])
                 {
                     esenin_num++;
                 }

                 if(kop[i]==mayakovski[j])
                 {
                     mayakovski_num++;
                 }

                 if(kop[i]==cvetaeva[j])
                 {
                     cvetaeva_num++;
                 }
             }
         }

         window.max_1=pushkin_num;
         window.max_2=lermontov_num;
         window.max_3=esenin_num;
         window.max_4=mayakovski_num;
         window.max_5=cvetaeva_num;

         window.max_1_name="Александр Сергеевич Пушкин";
         window.max_2_name="Михаил Юрьевич Лермонтов";
         window.max_3_name="Сергей Александрович Есенин";
         window.max_4_name="Владимир Владимирович Маяковский";
         window.max_5_name="Марина Ивановна Цветаева";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Русская классика")
{

 //Фёдор Михайлович Достоевский
var dostoevski=[];
var dostoevski_num=0;

dostoevski[0]="было";
dostoevski[1]="хорошо";
dostoevski[2]="ведь";
dostoevski[3]="быть";
dostoevski[4]="был";
dostoevski[5]="очень";
dostoevski[6]="опять";
dostoevski[7]="мысль";
dostoevski[8]="может";
dostoevski[9]="есть";
dostoevski[10]="была";
dostoevski[11]="раз";
dostoevski[12]="тоже";
dostoevski[13]="совсем";
dostoevski[14]="человек";
dostoevski[15]="ничего";
dostoevski[16]="надо";
dostoevski[17]="дело";
dostoevski[18]="впрочем";
dostoevski[19]="один";
dostoevski[20]="тогда";
dostoevski[21]="минуту";
dostoevski[22]="хоть";
dostoevski[23]="молодой";
dostoevski[24]="улицу";
dostoevski[25]="стал";
dostoevski[26]="почти";
dostoevski[27]="время";
dostoevski[28]="кажется";
dostoevski[29]="сейчас";
dostoevski[30]="стало";
dostoevski[31]="эту";
dostoevski[32]="ясно";
dostoevski[33]="два";
dostoevski[34]="точно";
dostoevski[35]="наконец";
dostoevski[36]="всегда";
dostoevski[37]="несколько";
dostoevski[38]="можно";
dostoevski[39]="дверь";
dostoevski[40]="прямо";
dostoevski[41]="совершенно";
dostoevski[42]="действительно";
dostoevski[43]="больше";
dostoevski[44]="руки";
dostoevski[45]="несмотря";
dostoevski[46]="хотя";
dostoevski[47]="лучше";
dostoevski[48]="сказать";
dostoevski[49]="пошел";
dostoevski[50]="проговорил";
dostoevski[51]="день";
dostoevski[52]="продолжал";
dostoevski[53]="много";
dostoevski[54]="подумал";
dostoevski[55]="хотел";
dostoevski[56]="слова";
dostoevski[57]="слишком";
dostoevski[58]="куда";
dostoevski[59]="непременно";

//Михаил Афанасьевич Булгаков
var bulgakov=[];
var bulgakov_num=0;

bulgakov[0]="было";
bulgakov[1]="сказал";
bulgakov[2]="иван";
bulgakov[3]="был";
bulgakov[4]="глаза";
bulgakov[5]="очень";
bulgakov[6]="ответил";
bulgakov[7]="сейчас";
bulgakov[8]="ничего";
bulgakov[9]="спросил";
bulgakov[10]="человек";
bulgakov[11]="подумал";
bulgakov[12]="смерти";
bulgakov[13]="может";
bulgakov[14]="лицо";
bulgakov[15]="глава";
bulgakov[16]="раз";
bulgakov[17]="профессор";
bulgakov[18]="время";
bulgakov[19]="нужно";
bulgakov[20]="была";
bulgakov[21]="почему";
bulgakov[22]="совершенно";
bulgakov[23]="женщина";
bulgakov[24]="руки";
bulgakov[25]="есть";
bulgakov[26]="первую";
bulgakov[27]="доктор";
bulgakov[28]="дело";
bulgakov[29]="голосом";
bulgakov[30]="голову";
bulgakov[31]="надо";
bulgakov[32]="отозвался";
bulgakov[33]="куда";
bulgakov[34]="больше";
bulgakov[35]="кроме";
bulgakov[36]="николаевич";
bulgakov[37]="какая";
bulgakov[38]="перед";
bulgakov[39]="поэт";
bulgakov[40]="черт";
bulgakov[41]="именно";
bulgakov[42]="эту";
bulgakov[43]="глаз";
bulgakov[44]="тотчас";
bulgakov[45]="никогда";
bulgakov[46]="пилата";
bulgakov[47]="второй";
bulgakov[48]="гражданин";
bulgakov[49]="никто";
bulgakov[50]="первый";
bulgakov[51]="сказала";
bulgakov[52]="чуть";
bulgakov[53]="зубы";
bulgakov[54]="мастер";
bulgakov[55]="блистательный";
bulgakov[56]="рот";
bulgakov[57]="час";
bulgakov[58]="черной";
bulgakov[59]="следует";

//Лев Николаевич Толстой
var tolstoi=[];
var tolstoi_num=0;

tolstoi[0]="было";
tolstoi[1]="сказал";
tolstoi[2]="несмотря";
tolstoi[3]="разговор";
tolstoi[4]="сказала";
tolstoi[5]="была";
tolstoi[6]="был";
tolstoi[7]="видел";
tolstoi[8]="другой";
tolstoi[9]="быть";
tolstoi[10]="очень";
tolstoi[11]="есть";
tolstoi[12]="приехал";
tolstoi[13]="ничего";
tolstoi[14]="были";
tolstoi[15]="говорил";
tolstoi[16]="опять";
tolstoi[17]="время";
tolstoi[18]="может";
tolstoi[19]="всегда";
tolstoi[20]="княгиня";
tolstoi[21]="можно";
tolstoi[22]="лицо";
tolstoi[23]="именно";
tolstoi[24]="раз";
tolstoi[25]="брат";
tolstoi[26]="мог";
tolstoi[27]="надо";
tolstoi[28]="много";
tolstoi[29]="хорошо";
tolstoi[30]="знаю";
tolstoi[31]="здесь";
tolstoi[32]="говорить";
tolstoi[33]="будет";
tolstoi[34]="пред";
tolstoi[35]="сказать";
tolstoi[36]="никогда";
tolstoi[37]="глаза";
tolstoi[38]="тотчас";
tolstoi[39]="один";
tolstoi[40]="человек";
tolstoi[41]="больше";
tolstoi[42]="жизнь";
tolstoi[43]="отвечал";
tolstoi[44]="хотел";
tolstoi[45]="дело";
tolstoi[46]="эту";
tolstoi[47]="улыбкой";
tolstoi[48]="нынче";
tolstoi[49]="голову";
tolstoi[50]="между";
tolstoi[51]="чувствовал";
tolstoi[52]="глядя";
tolstoi[53]="особенно";
tolstoi[54]="сделать";
tolstoi[55]="чувство";
tolstoi[56]="хотя";
tolstoi[57]="каждый";
tolstoi[58]="день";
tolstoi[59]="одно";

//Антон Павлович Чехов
var chehov=[];
var chehov_num=0;

chehov[0]="было";
chehov[1]="был";
chehov[2]="сказал";
chehov[3]="говорит";
chehov[4]="человек";
chehov[5]="быть";
chehov[6]="ничего";
chehov[7]="есть";
chehov[8]="раз";
chehov[9]="ведь";
chehov[10]="лицо";
chehov[11]="ваше";
chehov[12]="будет";
chehov[13]="дело";
chehov[14]="ежели";
chehov[15]="черт";
chehov[16]="была";
chehov[17]="время";
chehov[18]="один";
chehov[19]="хоть";
chehov[20]="очень";
chehov[21]="можно";
chehov[22]="может";
chehov[23]="день";
chehov[24]="два";
chehov[25]="нужно";
chehov[26]="здесь";
chehov[27]="глазами";
chehov[28]="больше";
chehov[29]="знает";
chehov[30]="лет";
chehov[31]="оба";
chehov[32]="руку";
chehov[33]="лучше";
chehov[34]="сейчас";
chehov[35]="стоит";
chehov[36]="бог";
chehov[37]="отец";
chehov[38]="брат";
chehov[39]="хорошо";
chehov[40]="три";
chehov[41]="стал";
chehov[42]="сказать";
chehov[43]="сидит";
chehov[44]="господа";
chehov[45]="надо";
chehov[46]="одно";
chehov[47]="человека";
chehov[48]="одной";
chehov[49]="руками";
chehov[50]="ночь";
chehov[51]="одного";
chehov[52]="знаете";
chehov[53]="друг";
chehov[54]="нельзя";
chehov[55]="знаешь";
chehov[56]="разве";
chehov[57]="женщина";
chehov[58]="делать";
chehov[59]="жизнь";

//Николай Васильевич Гоголь
var gogol=[];
var gogol_num=0;

gogol[0]="есть";
gogol[1]="ведь";
gogol[2]="яичница";
gogol[3]="быть";
gogol[4]="было";
gogol[5]="уходит";
gogol[6]="городничий";
gogol[7]="нужно";
gogol[8]="может";
gogol[9]="человек";
gogol[10]="ничего";
gogol[11]="подколесин";
gogol[12]="дело";
gogol[13]="будет";
gogol[14]="был";
gogol[15]="один";
gogol[16]="несколько";
gogol[17]="также";
gogol[18]="хотя";
gogol[19]="люди";
gogol[20]="всегда";
gogol[21]="явление";
gogol[22]="совершенно";
gogol[23]="время";
gogol[24]="говорит";
gogol[25]="очень";
gogol[26]="просто";
gogol[27]="человека";
gogol[28]="черт";
gogol[29]="больше";
gogol[30]="души";
gogol[31]="слово";
gogol[32]="много";
gogol[33]="сих";
gogol[34]="здесь";
gogol[35]="право";
gogol[36]="сказать";
gogol[37]="бог";
gogol[38]="перед";
gogol[39]="прежде";
gogol[40]="руки";
gogol[41]="сделать";
gogol[42]="совсем";
gogol[43]="нельзя";
gogol[44]="тоже";
gogol[45]="людей";
gogol[46]="сторону";
gogol[47]="господа";
gogol[48]="весь";
gogol[49]="самого";
gogol[50]="раз";
gogol[51]="слуга";
gogol[52]="других";
gogol[53]="брат";
gogol[54]="должен";
gogol[55]="прошу";
gogol[56]="думаю";
gogol[57]="хоть";
gogol[58]="слова";
gogol[59]="почтмейстер";

 for(i=0;i<60;i++)
{
 for(j=0;j<60;j++)
 {
   if(kop[i]==dostoevski[j])
   {
     dostoevski_num++;
   }

   if(kop[i]==bulgakov[j])
   {
     bulgakov_num++;
   }

   if(kop[i]==tolstoi[j])
   {
     tolstoi_num++;
   }

   if(kop[i]==chehov[j])
   {
     chehov_num++;
   }

   if(kop[i]==gogol[j])
   {
     gogol_num++;
   }
 }
}

window.max_1=dostoevski_num;
window.max_2=bulgakov_num;
window.max_3=tolstoi_num;
window.max_4=chehov_num;
window.max_5=gogol_num;

window.max_1_name="Фёдор Михайлович Достоевский";
window.max_2_name="Михаил Афанасьевич Булгаков";
window.max_3_name="Лев Николаевич Толстой";
window.max_4_name="Антон Павлович Чехов";
window.max_5_name="Николай Васильевич Гоголь";

if(max_1<max_2)
{
      max_1=max_2;
      max_1_name=max_2_name;   
}

if(max_3<max_4)
{
 max_3=max_4;
 max_3_name=max_4_name;
}

if(max_1<max_3)
{
 max_1=max_3;
 max_1_name=max_3_name;
}

if(max_1<max_5)
{
 max_1=max_5;
 max_1_name=max_5_name;
}

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}
}
if (level==2)
{
 if(genre=="Фантастика")
{

 var remisov=[];
var remisov_num=0;

remisov[0]="было";
remisov[1]="окно"; 
remisov[2]="коля";
remisov[3]="сердце";
remisov[4]="просто";
remisov[5]="николай";
remisov[6]="хотелось";
remisov[7]="глаза";
remisov[8]="был"; 
remisov[9]="сердца";
remisov[10]="весь";
remisov[11]="перед";
remisov[12]="голос";
remisov[13]="жизнь";
remisov[14]="куда";
remisov[15]="руки";
remisov[16]="словно";
remisov[17]="варенька";
remisov[18]="финогеновы";
remisov[19]="один";
remisov[20]="саша";
remisov[21]="ночь";
remisov[22]="дом";
remisov[23]="больше";
remisov[24]="коля";
remisov[25]="опять";
remisov[26]="дома";
remisov[27]="петя";
remisov[28]="друга";
remisov[29]="знал";
remisov[30]="лицо";
remisov[31]="надо";
remisov[32]="тогда";
remisov[33]="гавриил";
remisov[34]="прасковья";
remisov[35]="колю";
remisov[36]="стало";
remisov[37]="казалось";
remisov[38]="быть";
remisov[39]="дети";
remisov[40]="финогеновых";
remisov[41]="сказал";
remisov[42]="много";
remisov[43]="долго";
remisov[44]="были";
remisov[45]="может";
remisov[46]="арсений";
remisov[47]="николая";
remisov[48]="ноги";
remisov[49]="какая";
remisov[50]="хотел";
remisov[51]="жизни";
remisov[52]="тихо";
remisov[53]="люди";
remisov[54]="мог";
remisov[55]="стоял";
remisov[56]="будет";
remisov[57]="красный";
remisov[58]="всегда";
remisov[59]="слова";

var lavkraft=[];
var kavkraft_num=0;

lavkraft[0]="было";
lavkraft[1]="хотя";
lavkraft[2]="был";
lavkraft[3]="были";
lavkraft[4]="также";
lavkraft[5]="однако";
lavkraft[6]="здесь";
lavkraft[7]="лишь";
lavkraft[8]="была";
lavkraft[9]="довольно";
lavkraft[10]="города";
lavkraft[11]="несколько";
lavkraft[12]="можно";
lavkraft[13]="тогда";
lavkraft[14]="почти";
lavkraft[15]="раз";
lavkraft[16]="могли";
lavkraft[17]="лейка";
lavkraft[18]="стрит";
lavkraft[19]="очень";
lavkraft[20]="мог";
lavkraft[21]="перед";
lavkraft[22]="времени";
lavkraft[23]="футов";
lavkraft[24]="вновь";
lavkraft[25]="стороны";
lavkraft[26]="ведь";
lavkraft[27]="никогда";
lavkraft[28]="некоторые";
lavkraft[29]="явно";
lavkraft[30]="столь";
lavkraft[31]="основательно";
lavkraft[32]="сразу";
lavkraft[33]="несмотря";
lavkraft[34]="конечно";
lavkraft[35]="место";
lavkraft[36]="других";
lavkraft[37]="моря";
lavkraft[38]="могло";
lavkraft[39]="самые";
lavkraft[40]="пэбоди";
lavkraft[41]="гор";
lavkraft[42]="горы";
lavkraft[43]="впрочем";
lavkraft[44]="несомненно";
lavkraft[45]="хотелось";
lavkraft[46]="собак";
lavkraft[47]="одной";
lavkraft[48]="виде";
lavkraft[49]="могут";
lavkraft[50]="другой";
lavkraft[51]="сохранились";
lavkraft[52]="мере";
lavkraft[53]="года";
lavkraft[54]="большой";
lavkraft[55]="работы";
lavkraft[56]="лед";
lavkraft[57]="души";
lavkraft[58]="сомнения";
lavkraft[59]="рассказ";

var king=[];
var king_num=0;
king[0]="было";
king[1]="был";
king[2]="сказал";
king[3]="была";
king[4]="раз";
king[5]="были";
king[6]="роки";
king[7]="просто";
king[8]="время";
king[9]="глаза";
king[10]="сифкиц";
king[11]="может";
king[12]="снова";
king[13]="больше";
king[14]="отто";
king[15]="ничего";
king[16]="спросил";
king[17]="увидел";
king[18]="почти";
king[19]="руки";
king[20]="перед";
king[21]="лет";
king[22]="очень";
king[23]="подумал";
king[24]="дверь";
king[25]="сейчас";
king[26]="два";
king[27]="гарольд";
king[28]="конечно";
king[29]="можно";
king[30]="надо";
king[31]="знал";
king[32]="день";
king[33]="начал";
king[34]="сделал";
king[35]="думал";
king[36]="возможно";
king[37]="слишком";
king[38]="никогда";
king[39]="чуть";
king[40]="дело";
king[41]="сказать";
king[42]="ноги";
king[43]="конце";
king[44]="двадцать";
king[45]="руке";
king[46]="совсем";
king[47]="жена";
king[48]="труди";
king[49]="пять";
king[50]="долго";
king[51]="вероятно";
king[52]="достаточно";
king[53]="никто";
king[54]="место";
king[55]="нью";
king[56]="делать";
king[57]="рот";
king[58]="нельзя";
king[59]="ральф";

var strugazkie=[];
var strugazkie_num=0;
strugazkie[0]="сказал";
strugazkie[1]="хлебовводов";
strugazkie[2]="федотович";
strugazkie[3]="лавр";
strugazkie[4]="было";
strugazkie[5]="фарфуркис";
strugazkie[6]="комендант";
strugazkie[7]="эдик";
strugazkie[8]="был";
strugazkie[9]="товарищ";
strugazkie[10]="есть";
strugazkie[11]="дело";
strugazkie[12]="быть";
strugazkie[13]="может";
strugazkie[14]="спросил";
strugazkie[15]="время";
strugazkie[16]="здесь";
strugazkie[17]="выбегалло";
strugazkie[18]="роман";
strugazkie[19]="произнес";
strugazkie[20]="зубо";
strugazkie[21]="были";
strugazkie[22]="тоже";
strugazkie[23]="федя";
strugazkie[24]="говорун";
strugazkie[25]="будет";
strugazkie[26]="очень";
strugazkie[27]="перед";
strugazkie[28]="говорил";
strugazkie[29]="сейчас";
strugazkie[30]="ничего";
strugazkie[31]="витька";
strugazkie[32]="надо";
strugazkie[33]="однако";
strugazkie[34]="принялся";
strugazkie[35]="тогда";
strugazkie[36]="можно";
strugazkie[37]="пока";
strugazkie[38]="между";
strugazkie[39]="раз";
strugazkie[40]="конечно";
strugazkie[41]="федотовича";
strugazkie[42]="лавра";
strugazkie[43]="была";
strugazkie[44]="наконец";
strugazkie[45]="глаза";
strugazkie[46]="хорошо";
strugazkie[47]="ведь";
strugazkie[48]="совсем";
strugazkie[49]="почему";
strugazkie[50]="дела";
strugazkie[51]="место";
strugazkie[52]="старичок";
strugazkie[53]="сказать";
strugazkie[54]="снова";
strugazkie[55]="руки";
strugazkie[56]="много";
strugazkie[57]="голову";
strugazkie[58]="коменданта";
strugazkie[59]="посмотрел";

var azimov=[];
var azimov_num=0;
azimov[0]="бейли";
azimov[1]="был";
azimov[2]="было";
azimov[3]="байрон";
azimov[4]="сказал";
azimov[5]="робот";
azimov[6]="дэниел";
azimov[7]="ответил";
azimov[8]="может";
azimov[9]="люди";
azimov[10]="была";
azimov[11]="ничего";
azimov[12]="сейчас";
azimov[13]="были";
azimov[14]="быть";
azimov[15]="здесь";
azimov[16]="дельмар";
azimov[17]="спросил";
azimov[18]="назад";
azimov[19]="гладия";
azimov[20]="конечно";
azimov[21]="солярии";
azimov[22]="ведь";
azimov[23]="будет";
azimov[24]="заметил";
azimov[25]="почему";
azimov[26]="джилберт";
azimov[27]="знаю";
azimov[28]="один";
azimov[29]="земли";
azimov[30]=" нет";
azimov[31]="человек";
azimov[32]="должен";
azimov[33]="именно";
azimov[34]="лет";
azimov[35]="быстро";
azimov[36]="глаза";
azimov[37]="думаю";
azimov[38]="земле";
azimov[39]="могу";
azimov[40]="возможно";
azimov[41]="несколько";
azimov[42]="пока";
azimov[43]="можно";
azimov[44]="человека";
azimov[45]="голос";
azimov[46]="слишком";
azimov[47]="раз";
azimov[48]="никогда";
azimov[49]="доктор";
azimov[50]="артемида";
azimov[51]="знал";
azimov[52]="сделать";
azimov[53]="снова";
azimov[54]="поэтому";
azimov[55]="совершенно";
azimov[56]="дело";
azimov[57]="жизнь";
azimov[58]="людей";
azimov[59]="слова";

for(i=0;i<40;i++)
         {
             for(j=0;j<40;j++)
             {
                 if(kop[i]==remisov[j])
                 {
                     remisov_num++;
                 }

                 if(kop[i]==lavkraft[j])
                 {
                     lavkraft_num++;
                 }

                 if(kop[i]==king[j])
                 {
                     king_num++;
                 }

                 if(kop[i]==strugazkie[j])
                 {
                     strugazkie_num++;
                 }

                 if(kop[i]==azimov[j])
                 {
                     azimov_num++;
                 }
                 
             }
         }

         window.max_1=remisov_num;
         window.max_2=lavkraft_num;
         window.max_3=king_num;
         window.max_4=strugazkie_num;
         window.max_5=azimov_num;

         window.max_1_name="Алексей Михайлович Ремизов";
         window.max_2_name="Говард Филлипс Лавкрафт";
         window.max_3_name="Стивен Кинг";
         window.max_4_name="Братья Стругацкие";
         window.max_5_name="Айзек Азимов";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }
    

         document.getElementById('block_4').style.display="block";
         document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Детективы")
{

  //Сэр Артур Игнейгус Конан Дойл
var doil=[];
var doil_num=0;
doil[0]="холмс";
doil[1]="было";
doil[2]="был";
doil[3]="сказал";
doil[4]="видел";
doil[5]="мистер";
doil[6]="очень";
doil[7]="дело";
doil[8]="человек";
doil[9]="здесь";
doil[10]="может";
doil[11]="ничего";
doil[12]="были";
doil[13]="говорил";
doil[14]="время";
doil[15]="быть";
doil[16]="раз";
doil[17]="уотсон";
doil[18]="была";
doil[19]="один";
doil[20]="ддействительно";
doil[21]="слишком";
doil[22]="минуту";
doil[23]="несколько";
doil[24]="будет";
doil[25]="мог";
doil[26]="можно";
doil[27]="конечно";
doil[28]="мисс";
doil[29]="лицо";
doil[30]="никогда";
doil[31]="спросил";
doil[32]="пока";
doil[33]="нем";
doil[34]="дверь";
doil[35]="почему";
doil[36]="могу";
doil[37]="больше";
doil[38]="человека";
doil[39]="хотя";
doil[40]="однако";
doil[41]="день";
doil[42]="два";
doil[43]="стал";
doil[44]="сказать";
doil[45]="шерлок";
doil[46]="знаю";
doil[47]="стороны";
doil[48]="доме";
doil[49]="значит";
doil[50]="думаю";
doil[51]="затем";
doil[52]="сразу";
doil[53]="письмо";
doil[54]="против";
doil[55]="никто";
doil[56]="должны";
doil[57]="образом";
doil[58]="увидел";
doil[59]="людей";

//Эдгар Аллан По
var po=[];
var po_num=0;
po[0]="было";
po[1]="был";
po[2]="были";
po[3]="была";
po[4]="очень";
po[5]="лишь";
po[6]="несколько";
po[7]="однако";
po[8]="время";
po[9]="люди";
po[10]="раз";
po[11]="здесь";
po[12]="мог";
po[13]="весьма";
po[14]="разве";
po[15]="мистер";
po[16]="говорил";
po[17]="хотя";
po[18]="сказал";
po[19]="быть";
po[20]="может";
po[21]="два";
po[22]="наконец";
po[23]="пока";
po[24]="можно";
po[25]="также";
po[26]="снова";
po[27]="ничего";
po[28]="три";
po[29]="совершенно";
po[30]="затем";
po[31]="большой";
po[32]="слова";
po[33]="перед";
po[34]="больше";
po[35]="много";
po[36]="человек";
po[37]="совсем";
po[38]="между";
po[39]="слишком";
po[40]="сразу";
po[41]="менее";
po[42]="конечно";
po[43]="вместе";
po[44]="часто";
po[45]="жизни";
po[46]="одного";
po[47]="нем";
po[48]="глаза";
po[49]="времени";
po[50]="видел";
po[51]="мере";
po[52]="человека";
po[53]="вскоре";
po[54]="пути";
po[55]="души";
po[56]="скорее";
po[57]="поэтому";
po[58]="долго";
po[59]="смерти";

//Уилки Коллинз
var uilki=[];
var uilki_num=0;
uilki[0]="мисс";
uilki[1]="было";
uilki[2]="женщины";
uilki[3]="сказала";
uilki[4]="была";
uilki[5]="был";
uilki[6]="человека";
uilki[7]="персиваль";
uilki[8]="мистер";
uilki[9]="сказал";
uilki[10]="миссис";
uilki[11]="дальше";
uilki[12]="время";
uilki[13]="очень";
uilki[14]="больше";
uilki[15]="граф";
uilki[16]="будет";
uilki[17]="достаточно";
uilki[18]="персиваля";
uilki[19]="ничего";
uilki[20]="снова";
uilki[21]="образом";
uilki[22]="быть";
uilki[23]="может";
uilki[24]="слова";
uilki[25]="начала";
uilki[26]="голову";
uilki[27]="раз";
uilki[28]="сказать";
uilki[29]="могу";
uilki[30]="глаза";
uilki[31]="сейчас";
uilki[32]="мистера";
uilki[33]="мог";
uilki[34]="слово";
uilki[35]="здесь";
uilki[36]="друг";
uilki[37]="конечно";
uilki[38]="леди";
uilki[39]="руку";
uilki[40]="день";
uilki[41]="эту";
uilki[42]="знаю";
uilki[43]="спросила";
uilki[44]="человек";
uilki[45]="женщина";
uilki[46]="руки";
uilki[47]="прежде";
uilki[48]="есть";
uilki[49]="один";
uilki[50]="сердце";
uilki[51]="сделать";
uilki[52]="именно";
uilki[53]="всегда";
uilki[54]="лучше";
uilki[55]="ответ";
uilki[56]="хочу";
uilki[57]="дверь";
uilki[58]="два";
uilki[59]="вместе";

//Гильберт Кийт Честертон
var kit=[];
var kit_num=0;
kit[0]="был";
kit[1]="сказал";
kit[2]="было";
kit[3]="браун";
kit[4]="фламбо";
kit[5]="отец";
kit[6]="священник";
kit[7]="словно";
kit[8]="серебряной";
kit[9]="были";
kit[10]="была";
kit[11]="спросил";
kit[12]="быть";
kit[13]="ответил";
kit[14]="доктор";
kit[15]="может";
kit[16]="раз";
kit[17]="здесь";
kit[18]="человека";
kit[19]="очень";
kit[20]="голову";
kit[21]="ничего";
kit[22]="продолжал";
kit[23]="лицо";
kit[24]="мистер";
kit[25]="один";
kit[26]="есть";
kit[27]="быстро";
kit[28]="дело";
kit[29]="наконец";
kit[30]="совсем";
kit[31]="дверь";
kit[32]="никто";
kit[33]="много";
kit[34]="глаза";
kit[35]="нем";
kit[36]="просто";
kit[37]="слова";
kit[38]="куда";
kit[39]="большой";
kit[40]="людей";
kit[41]="конечно";
kit[42]="именно";
kit[43]="чуть";
kit[44]="знал";
kit[45]="голова";
kit[46]="должен";
kit[47]="сюда";
kit[48]="хотел";
kit[49]="между";
kit[50]="туда";
kit[51]="лет";
kit[52]="смерти";
kit[53]="хуже";
kit[54]="англии";
kit[55]="крест";
kit[56]="сигару";
kit[57]="внимания";
kit[58]="берегу";
kit[59]="ничто";

//Агата Кристи
var kristi=[];
var kristi_num=0;
kristi[0]="пуаро";
kristi[1]="было";
kristi[2]="был";
kristi[3]="сказал";
kristi[4]="очень";
kristi[5]="миссис";
kristi[6]="была";
kristi[7]="мистер";
kristi[8]="сказала";
kristi[9]="быть";
kristi[10]="сэр";
kristi[11]="время";
kristi[12]="взгляд";
kristi[13]="конечно";
kristi[14]="были";
kristi[15]="ничего";
kristi[16]="может";
kristi[17]="леди";
kristi[18]="мисс";
kristi[19]="раз";
kristi[20]="будет";
kristi[21]="месье";
kristi[22]="минут";
kristi[23]="ведь";
kristi[24]="всегда";
kristi[25]="просто";
kristi[26]="здесь";
kristi[27]="есть";
kristi[28]="мог";
kristi[29]="совершенно";
kristi[30]="хорошо";
kristi[31]="именно";
kristi[32]="думаю";
kristi[33]="один";
kristi[34]="сейчас";
kristi[35]="сказать";
kristi[36]="больше";
kristi[37]="посмотрел";
kristi[38]="инспектор";
kristi[39]="дело";
kristi[40]="почему";
kristi[41]="снова";
kristi[42]="могу";
kristi[43]="тоже";
kristi[44]="бриджит";
kristi[45]="должен";
kristi[46]="произнес";
kristi[47]="глаза";
kristi[48]="деле";
kristi[49]="перед";
kristi[50]="слишком";
kristi[51]="сегодня";
kristi[52]="сразу";
kristi[53]="самом";
kristi[54]="комнату";
kristi[55]="тогда";
kristi[56]="голос";
kristi[57]="спросила";
kristi[58]="два";
kristi[59]="головой";


for(i=0;i<60;i++)
         {
             for(j=0;j<60;j++)
             {
                 if(kop[i]==doil[j])
                 {
                 doil_num++;
                 }

                 if(kop[i]==po[j])
                 {
                 po_num++;
                 }

                 if(kop[i]==uilki[j])
                 {
                 uilki_num++;
                 }

                 if(kop[i]==kit[j])
                 {
                 kit_num++;
                 }

                 if(kop[i]==kristi[j])
                 {
                 kristi_num++;
                 }
             }
         
         }

         window.max_1=doil_num;
         window.max_2=po_num;
         window.max_3=uilki_num;
         window.max_4=kit_num;
         window.max_5=kristi_num;

         window.max_1_name="Сэр Артур Игнейгус Конан Дойл";
         window.max_2_name="Эдгар Аллан По";
         window.max_3_name="Уилки Коллинз";
         window.max_4_name="Гильберт Кийт Честертон";
         window.max_5_name="Агата Кристи";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Приключения")
{

 //Александр Дюма
var duma=[];
var duma_num=0;

duma[0]="сказал";
duma[1]="вышел";
duma[2]="граф";
duma[3]="разве";
duma[4]="был";
duma[5]="было";
duma[6]="взял";
duma[7]="буду";
duma[8]="спросил";
duma[9]="отвечал";
duma[10]="быть";
duma[11]="человек";
duma[12]="раз";
duma[13]="были";
duma[14]="может";
duma[15]="очень";
duma[16]="четыре";
duma[17]="между";
duma[18]="была";
duma[19]="остров";
duma[20]="будет";
duma[21]="один";
duma[22]="времени";
duma[23]="видите";
duma[24]="графа";
duma[25]="два";
duma[26]="ваша";
duma[27]="время";
duma[28]="слышал";
duma[29]="милость";
duma[30]="дорогой";
duma[31]="три";
duma[32]="воскликнул";
duma[33]="хозяин";
duma[34]="франца";
duma[35]="есть";
duma[36]="шесть";
duma[37]="несколько";
duma[38]="друг";
duma[39]="ничего";
duma[40]="случае";
duma[41]="человека";
duma[42]="тогда";
duma[43]="перед";
duma[44]="надо";
duma[45]="какого";
duma[46]="эту";
duma[47]="продолжал";
duma[48]="люди";
duma[49]="дело";
duma[50]="риме";
duma[51]="первый";
duma[52]="весь";
duma[53]="просто";
duma[54]="наконец";
duma[55]="почему";
duma[56]="руки";
duma[57]="снова";
duma[58]="пока";
duma[59]="впрочем";

//Александр Степанович Грин
var grin=[];
var grin_num=0;

grin[0]="сказал";
grin[1]="почему";
grin[2]="был";
grin[3]="было";
grin[4]="куда";
grin[5]="очень";
grin[6]="быть";
grin[7]="человек";
grin[8]="ничего";
grin[9]="всегда";
grin[10]="против";
grin[11]="были";
grin[12]="сказала";
grin[13]="знал";
grin[14]="будет";
grin[15]="была";
grin[16]="дело";
grin[17]="мог";
grin[18]="есть";
grin[19]="скоро";
grin[20]="ответил";
grin[21]="глаза";
grin[22]="может";
grin[23]="руку";
grin[24]="стал";
grin[25]="кроме";
grin[26]="лицо";
grin[27]="затем";
grin[28]="дверь";
grin[29]="раз";
grin[30]="едва";
grin[31]="знаю";
grin[32]="случае";
grin[33]="руки";
grin[34]="лет";
grin[35]="человека";
grin[36]="голос";
grin[37]="увидел";
grin[38]="лишь";
grin[39]="один";
grin[40]="тогда";
grin[41]="день";
grin[42]="пока";
grin[43]="между";
grin[44]="два";
grin[45]="можно";
grin[46]="перед";
grin[47]="лицом";
grin[48]="вокруг";
grin[49]="говорить";
grin[50]="больше";
grin[51]="никогда";
grin[52]="место";
grin[53]="рой";
grin[54]="много";
grin[55]="снова";
grin[56]="также";
grin[57]="хотел";
grin[58]="иногда";
grin[59]="слова";

//Жюль Верн
var vern=[];
var vern_num=0;

vern[0]="сына";
vern[1]="знал";
vern[2]="день";
vern[3]="улыбнулся";
vern[4]="взглянул";
vern[5]="произошло";
vern[6]="тогда";
vern[7]="было";
vern[8]="значит";
vern[9]="была";
vern[10]="был";
vern[11]="глаза";
vern[12]="сказал";
vern[13]="руки";
vern[14]="сказала";
vern[15]="пока";
vern[16]="ответил";
vern[17]="может";
vern[18]="барри";
vern[19]="просто";
vern[20]="руку";
vern[21]="были";
vern[22]="раз";
vern[23]="ничего";
vern[24]="больше";
vern[25]="мог";
vern[26]="будет";
vern[27]="знаю";
vern[28]="ответила";
vern[29]="голос";
vern[30]="быть";
vern[31]="время";
vern[32]="дело";
vern[33]="здесь";
vern[34]="сейчас";
vern[35]="один";
vern[36]="стала";
vern[37]="словно";
vern[38]="перед";
vern[39]="хотел";
vern[40]="доктор";
vern[41]="могу";
vern[42]="можно";
vern[43]="спросил";
vern[44]="дверь";
vern[45]="взгляд";
vern[46]="сказать";
vern[47]="лет";
vern[48]="слова";
vern[49]="всегда";
vern[50]="улыбнулась";
vern[51]="поэтому";
vern[52]="хочу";
vern[53]="очень";
vern[54]="дочь";
vern[55]="деле";
vern[56]="крисом";
vern[57]="могла";
vern[58]="нужно";
vern[59]="самом";

//Скот Вальтер
var valter=[];
var valter_num=0;

valter[0]="сказал";
valter[1]="было";
valter[2]="рыцарь";
valter[3]="был";
valter[4]="были";
valter[5]="пор";
valter[6]="отвечал";
valter[7]="скорее";
valter[8]="будет";
valter[9]="может";
valter[10]="ради";
valter[11]="время";
valter[12]="имя";
valter[13]="быть";
valter[14]="была";
valter[15]="времени";
valter[16]="принц";
valter[17]="один";
valter[18]="однако";
valter[19]="другой";
valter[20]="перед";
valter[21]="могу";
valter[22]="одного";
valter[23]="сэр";
valter[24]="хотя";
valter[25]="рыцаря";
valter[26]="храмовник";
valter[27]="есть";
valter[28]="мог";
valter[29]="кроме";
valter[30]="сказала";
valter[31]="больше";
valter[32]="пока";
valter[33]="леди";
valter[34]="дело";
valter[35]="тогда";
valter[36]="можно";
valter[37]="лицо";
valter[38]="святого";
valter[39]="минуту";
valter[40]="монах";
valter[41]="между";
valter[42]="здесь";
valter[43]="гораздо";
valter[44]="эту";
valter[45]="друг";
valter[46]="людей";
valter[47]="довольно";
valter[48]="спросил";
valter[49]="ордена";
valter[50]="против";
valter[51]="лишь";
valter[52]="хоть";
valter[53]="ведь";
valter[54]="гроссмейстер";
valter[55]="отшельник";
valter[56]="ничего";
valter[57]="продолжал";
valter[58]="несколько";
valter[59]="стороны";

//Марк Твен
var tven=[];
var tven_num=0;

tven[0]="было";
tven[1]="говорит";
tven[2]="сказал";
tven[3]="думал";
tven[4]="ничего";
tven[5]="был";
tven[6]="говорю";
tven[7]="однако";
tven[8]="тоже";
tven[9]="раз";
tven[10]="пока";
tven[11]="больше";
tven[12]="время";
tven[13]="тогда";
tven[14]="есть";
tven[15]="просто";
tven[16]="король";
tven[17]="дело";
tven[18]="может";
tven[19]="ведь";
tven[20]="лучше";
tven[21]="очень";
tven[22]="один";
tven[23]="стал";
tven[24]="была";
tven[25]="снова";
tven[26]="были";
tven[27]="конечно";
tven[28]="мог";
tven[29]="день";
tven[30]="понял";
tven[31]="времени";
tven[32]="сразу";
tven[33]="три";
tven[34]="здесь";
tven[35]="хорошо";
tven[36]="опять";
tven[37]="деньги";
tven[38]="видел";
tven[39]="сюда";
tven[40]="надо";
tven[41]="сказать";
tven[42]="скоро";
tven[43]="сказала";
tven[44]="решил";
tven[45]="человек";
tven[46]="почти";
tven[47]="голову";
tven[48]="общем";
tven[49]="немного";
tven[50]="быть";
tven[51]="придется";
tven[52]="говорил";
tven[53]="джиму";
tven[54]="всегда";
tven[55]="правда";
tven[56]="другой";
tven[57]="долларов";
tven[58]="негра";
tven[59]="каждый";

 for(i=0;i<40;i++)
         {
             for(j=0;j<40;j++)
             {
                 if(kop[i]==duma[j])
                 {
                     duma_num++;
                 }

                 if(kop[i]==grin[j])
                 {
                     grin_num++;
                 }

                 if(kop[i]==vern[j])
                 {
                     vern_num++;
                 }

                 if(kop[i]==valter[j])
                 {
                     valter_num++;
                 }

                 if(kop[i]==tven[j])
                 {
                     tven_num++;
                 }
             
             }
         }

         window.max_1=duma_num;
         window.max_2=grin_num;
         window.max_3=vern_num;
         window.max_4=valter_num;
         window.max_5=tven_num;

         window.max_1_name="Александр Дюма";
         window.max_2_name="Александр Степанович Грин";
         window.max_3_name="Жюль Верн";
         window.max_4_name="Скотт Вальтер";
         window.max_5_name="Марк Твен";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Стихи")
{
 var pushkin=[];
 var pushkin_num=0;

pushkin[0]="все";
pushkin[1]="уже";
pushkin[2]="счастья";
pushkin[3]="радости";
pushkin[4]="нежный";
pushkin[5]="люблю";
pushkin[6]="монах";
pushkin[7]="увы";
pushkin[8]="стихотворения";
pushkin[9]="гром";
pushkin[10]="вино";
pushkin[11]="любезный";
pushkin[12]="мрак";
pushkin[13]="друг";
pushkin[14]="святой";
pushkin[15]="надежды";
pushkin[16]="был";
pushkin[17]="твой";
pushkin[18]="всё";
pushkin[19]="любовью";
pushkin[20]="милый";
pushkin[21]="милая";
pushkin[22]="день";
pushkin[23]="пред";
pushkin[24]="любви";
pushkin[25]="жизни";
pushkin[26]="вновь";
pushkin[27]="может";
pushkin[28]="любовь";
pushkin[29]="час";
pushkin[30]="свет";
pushkin[31]="увы";
pushkin[32]="сердце";
pushkin[33]="лишь";
pushkin[34]="иль";
pushkin[35]="здесь";
pushkin[36]="бедный";
pushkin[37]="ночи";
pushkin[38]="сердца";
pushkin[39]="поэт";
pushkin[40]="тень";
pushkin[41]="твоей";
pushkin[42]="быть";
pushkin[43]="пускай";
pushkin[44]="сказать";
pushkin[45]="глас";
pushkin[46]="иль";
pushkin[47]="вижу";
pushkin[48]="сей";
pushkin[49]="рукой";
pushkin[50]="раз";
pushkin[51]="здесь";
pushkin[52]="время";
pushkin[53]="тебя";
pushkin[54]="грудь";
pushkin[55]="один";
pushkin[56]="очи";
pushkin[57]="руку";
pushkin[58]="груди";
pushkin[59]="лишь";

//Михаил Юрьевич Лермонтов
var lermontov=[];
var lermontov_num=0;

lermontov[0]="был";
lermontov[1]="лишь";
lermontov[2]="сердце";
lermontov[3]="хоть";
lermontov[4]="один";
lermontov[5]="любви";
lermontov[6]="твой";
lermontov[7]="быть";
lermontov[8]="нем";
lermontov[9]="меж";
lermontov[10]="людей";
lermontov[11]="может";
lermontov[12]="тогда";
lermontov[13]="жизнь";
lermontov[14]="лет";
lermontov[15]="любовь";
lermontov[16]="вновь";
lermontov[17]="пред";
lermontov[18]="дней";
lermontov[19]="звук";
lermontov[20]="друг";
lermontov[21]="свет";
lermontov[22]="душе";
lermontov[23]="любил";
lermontov[24]="долго";
lermontov[25]="день";
lermontov[26]="души";
lermontov[27]="мечты";
lermontov[28]="опять";
lermontov[29]="сей";
lermontov[30]="средь";
lermontov[31]="сон";
lermontov[32]="время";
lermontov[33]="бог";
lermontov[34]="всегда";
lermontov[35]="прах";
lermontov[36]="сердца";
lermontov[37]="другой";
lermontov[38]="одна";
lermontov[39]="пор";
lermontov[40]="кругом";
lermontov[41]="гор";
lermontov[42]="путь";
lermontov[43]="огонь";
lermontov[44]="уста";
lermontov[45]="девы";
lermontov[46]="счастья";
lermontov[47]="скоро";
lermontov[48]="туман";
lermontov[49]="любит";
lermontov[50]="сквозь";
lermontov[51]="бедный";
lermontov[52]="дитя";
lermontov[53]="говорит";
lermontov[54]="поле";
lermontov[55]="ваш";
lermontov[56]="безумный";
lermontov[57]="месяц";
lermontov[58]="лучей";
lermontov[59]="летят";

//Александр Сергеевич Есенин
var esenin=[];
var esenin_num=0;

esenin[0]="сердце";
esenin[1]="лишь";
esenin[2]="есть";
esenin[3]="жизнь";
esenin[4]="твой";
esenin[5]="был";
esenin[6]="словно";
esenin[7]="русь";
esenin[8]="свет";
esenin[9]="глаза";
esenin[10]="много";
esenin[11]="тихо";
esenin[12]="поле";
esenin[13]="вижу";
esenin[14]="ведь";
esenin[15]="поэт";
esenin[16]="иль";
esenin[17]="душу";
esenin[18]="твоих";
esenin[19]="лет";
esenin[20]="звезды";
esenin[21]="будет";
esenin[22]="любовь";
esenin[23]="поет";
esenin[24]="солнце";
esenin[25]="ночь";
esenin[26]="снег";
esenin[27]="жизни";
esenin[28]="песню";
esenin[29]="час";
esenin[30]="душе";
esenin[31]="думы";
esenin[32]="грудь";
esenin[33]="лес";
esenin[34]="время";
esenin[35]="нем";
esenin[36]="путь";
esenin[37]="души";
esenin[38]="стихотворения";
esenin[39]="кровь";
esenin[40]="дня";
esenin[41]="радости";
esenin[42]="звуки";
esenin[43]="веселый";
esenin[44]="горит";
esenin[45]="душ";
esenin[46]="день";
esenin[47]="дум";
esenin[48]="сила";
esenin[49]="страшный";
esenin[50]="время";
esenin[51]="времени";
esenin[52]="самого";
esenin[53]="школьной";
esenin[54]="полное";
esenin[55]="список";
esenin[56]="немного";
esenin[57]="были";
esenin[58]="школьного";
esenin[59]="самой";

//Владимир Владимирович Маяковский
var mayakovski=[];
var mayakovski_num=0;

mayakovski[0]="надо";
mayakovski[1]="будет";
mayakovski[2]="день";
mayakovski[3]="товарищ";
mayakovski[4]="сегодня";
mayakovski[5]="жизнь";
mayakovski[6]="глаза";
mayakovski[7]="быть";
mayakovski[8]="есть";
mayakovski[9]="может";
mayakovski[10]="ленин";
mayakovski[11]="каждый";
mayakovski[12]="здесь";
mayakovski[13]="был";
mayakovski[14]="люди";
mayakovski[15]="весь";
mayakovski[16]="сердце";
mayakovski[17]="пусть";
mayakovski[18]="солнце";
mayakovski[19]="глаз";
mayakovski[20]="время";
mayakovski[21]="перед";
mayakovski[22]="много";
mayakovski[23]="хоть";
mayakovski[24]="город";
mayakovski[25]="опять";
mayakovski[26]="было";
mayakovski[27]="земля";
mayakovski[28]="дома";
mayakovski[29]="жизни";
mayakovski[30]="души";
mayakovski[31]="рядом";
mayakovski[32]="земли";
mayakovski[33]="стал";
mayakovski[34]="довольно";
mayakovski[35]="солнца";
mayakovski[36]="дни";
mayakovski[37]="была";
mayakovski[38]="любовь";
mayakovski[39]="хорошо";
mayakovski[40]="смотрите";
mayakovski[41]="голову";
mayakovski[42]="ветер";
mayakovski[43]="улица";
mayakovski[44]="дон";
mayakovski[45]="цветы";
mayakovski[46]="моем";
mayakovski[47]="этажа";
mayakovski[48]="неправда";
mayakovski[49]="любимая";
mayakovski[50]="три";
mayakovski[51]="тоже";
mayakovski[52]="голос";
mayakovski[53]="место";
mayakovski[54]="мама";
mayakovski[55]="театр";
mayakovski[56]="слова";
mayakovski[57]="другие";
mayakovski[58]="новое";
mayakovski[59]="дать";

//Марина Ивановна Цветаева
var cvetaeva=[];
var cvetaeva_num=0;
cvetaeva[0]="час";
cvetaeva[1]="руки";
cvetaeva[2]="бог";
cvetaeva[3]="ночь";
cvetaeva[4]="быть";
cvetaeva[5]="твой";
cvetaeva[6]="глаза";
cvetaeva[7]="был";
cvetaeva[8]="есть";
cvetaeva[9]="мая";
cvetaeva[10]="любовь";
cvetaeva[11]="здесь";
cvetaeva[12]="будет";
cvetaeva[13]="июля";
cvetaeva[14]="дом";
cvetaeva[15]="души";
cvetaeva[16]="сон";
cvetaeva[17]="ночи";
cvetaeva[18]="жизнь";
cvetaeva[19]="надо";
cvetaeva[20]="кровь";
cvetaeva[21]="лишь";
cvetaeva[22]="грудь";
cvetaeva[23]="июня";
cvetaeva[24]="один";
cvetaeva[25]="меж";
cvetaeva[26]="глаз";
cvetaeva[27]="рук";
cvetaeva[28]="мир";
cvetaeva[29]="голос";
cvetaeva[30]="октября";
cvetaeva[31]="каждый";
cvetaeva[32]="пусть";
cvetaeva[33]="смерть";
cvetaeva[34]="небо";
cvetaeva[35]="была";
cvetaeva[36]="одно";
cvetaeva[37]="лет";
cvetaeva[38]="ветер";
cvetaeva[39]="руку";
cvetaeva[40]="сквозь";
cvetaeva[41]="ведь";
cvetaeva[42]="одна";
cvetaeva[43]="буду";
cvetaeva[44]="солнце";
cvetaeva[45]="мама";
cvetaeva[46]="дети";
cvetaeva[47]="опять";
cvetaeva[48]="сегодня";
cvetaeva[49]="уст";
cvetaeva[50]="много";
cvetaeva[51]="тени";
cvetaeva[52]="слова";
cvetaeva[53]="сколько";
cvetaeva[54]="вечер";
cvetaeva[55]="спи";
cvetaeva[56]="чуть";
cvetaeva[57]="сердца";
cvetaeva[58]="жизни";
cvetaeva[59]="завтра";

for(i=0;i<40;i++)
         {
             for(j=0;j<40;j++)
             {
                 if(kop[i]==pushkin[j])
                 {
                     pushkin_num++;
                 }

                 if(kop[i]==lermontov[j])
                 {   
                     lermontov_num++;
                 }

                 if(kop[i]==esenin[j])
                 {
                     esenin_num++;
                 }

                 if(kop[i]==mayakovski[j])
                 {
                     mayakovski_num++;
                 }

                 if(kop[i]==cvetaeva[j])
                 {
                     cvetaeva_num++;
                 }
             }
         }

         window.max_1=pushkin_num;
         window.max_2=lermontov_num;
         window.max_3=esenin_num;
         window.max_4=mayakovski_num;
         window.max_5=cvetaeva_num;

         window.max_1_name="Александр Сергеевич Пушкин";
         window.max_2_name="Михаил Юрьевич Лермонтов";
         window.max_3_name="Сергей Александрович Есенин";
         window.max_4_name="Владимир Владимирович Маяковский";
         window.max_5_name="Марина Ивановна Цветаева";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }



 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Русская классика")
{

 //Фёдор Михайлович Достоевский
var dostoevski=[];
var dostoevski_num=0;

dostoevski[0]="было";
dostoevski[1]="хорошо";
dostoevski[2]="ведь";
dostoevski[3]="быть";
dostoevski[4]="был";
dostoevski[5]="очень";
dostoevski[6]="опять";
dostoevski[7]="мысль";
dostoevski[8]="может";
dostoevski[9]="есть";
dostoevski[10]="была";
dostoevski[11]="раз";
dostoevski[12]="тоже";
dostoevski[13]="совсем";
dostoevski[14]="человек";
dostoevski[15]="ничего";
dostoevski[16]="надо";
dostoevski[17]="дело";
dostoevski[18]="впрочем";
dostoevski[19]="один";
dostoevski[20]="тогда";
dostoevski[21]="минуту";
dostoevski[22]="хоть";
dostoevski[23]="молодой";
dostoevski[24]="улицу";
dostoevski[25]="стал";
dostoevski[26]="почти";
dostoevski[27]="время";
dostoevski[28]="кажется";
dostoevski[29]="сейчас";
dostoevski[30]="стало";
dostoevski[31]="эту";
dostoevski[32]="ясно";
dostoevski[33]="два";
dostoevski[34]="точно";
dostoevski[35]="наконец";
dostoevski[36]="всегда";
dostoevski[37]="несколько";
dostoevski[38]="можно";
dostoevski[39]="дверь";
dostoevski[40]="прямо";
dostoevski[41]="совершенно";
dostoevski[42]="действительно";
dostoevski[43]="больше";
dostoevski[44]="руки";
dostoevski[45]="несмотря";
dostoevski[46]="хотя";
dostoevski[47]="лучше";
dostoevski[48]="сказать";
dostoevski[49]="пошел";
dostoevski[50]="проговорил";
dostoevski[51]="день";
dostoevski[52]="продолжал";
dostoevski[53]="много";
dostoevski[54]="подумал";
dostoevski[55]="хотел";
dostoevski[56]="слова";
dostoevski[57]="слишком";
dostoevski[58]="куда";
dostoevski[59]="непременно";

//Михаил Афанасьевич Булгаков
var bulgakov=[];
var bulgakov_num=0;

bulgakov[0]="было";
bulgakov[1]="сказал";
bulgakov[2]="иван";
bulgakov[3]="был";
bulgakov[4]="глаза";
bulgakov[5]="очень";
bulgakov[6]="ответил";
bulgakov[7]="сейчас";
bulgakov[8]="ничего";
bulgakov[9]="спросил";
bulgakov[10]="человек";
bulgakov[11]="подумал";
bulgakov[12]="смерти";
bulgakov[13]="может";
bulgakov[14]="лицо";
bulgakov[15]="глава";
bulgakov[16]="раз";
bulgakov[17]="профессор";
bulgakov[18]="время";
bulgakov[19]="нужно";
bulgakov[20]="была";
bulgakov[21]="почему";
bulgakov[22]="совершенно";
bulgakov[23]="женщина";
bulgakov[24]="руки";
bulgakov[25]="есть";
bulgakov[26]="первую";
bulgakov[27]="доктор";
bulgakov[28]="дело";
bulgakov[29]="голосом";
bulgakov[30]="голову";
bulgakov[31]="надо";
bulgakov[32]="отозвался";
bulgakov[33]="куда";
bulgakov[34]="больше";
bulgakov[35]="кроме";
bulgakov[36]="николаевич";
bulgakov[37]="какая";
bulgakov[38]="перед";
bulgakov[39]="поэт";
bulgakov[40]="черт";
bulgakov[41]="именно";
bulgakov[42]="эту";
bulgakov[43]="глаз";
bulgakov[44]="тотчас";
bulgakov[45]="никогда";
bulgakov[46]="пилата";
bulgakov[47]="второй";
bulgakov[48]="гражданин";
bulgakov[49]="никто";
bulgakov[50]="первый";
bulgakov[51]="сказала";
bulgakov[52]="чуть";
bulgakov[53]="зубы";
bulgakov[54]="мастер";
bulgakov[55]="блистательный";
bulgakov[56]="рот";
bulgakov[57]="час";
bulgakov[58]="черной";
bulgakov[59]="следует";

//Лев Николаевич Толстой
var tolstoi=[];
var tolstoi_num=0;

tolstoi[0]="было";
tolstoi[1]="сказал";
tolstoi[2]="несмотря";
tolstoi[3]="разговор";
tolstoi[4]="сказала";
tolstoi[5]="была";
tolstoi[6]="был";
tolstoi[7]="видел";
tolstoi[8]="другой";
tolstoi[9]="быть";
tolstoi[10]="очень";
tolstoi[11]="есть";
tolstoi[12]="приехал";
tolstoi[13]="ничего";
tolstoi[14]="были";
tolstoi[15]="говорил";
tolstoi[16]="опять";
tolstoi[17]="время";
tolstoi[18]="может";
tolstoi[19]="всегда";
tolstoi[20]="княгиня";
tolstoi[21]="можно";
tolstoi[22]="лицо";
tolstoi[23]="именно";
tolstoi[24]="раз";
tolstoi[25]="брат";
tolstoi[26]="мог";
tolstoi[27]="надо";
tolstoi[28]="много";
tolstoi[29]="хорошо";
tolstoi[30]="знаю";
tolstoi[31]="здесь";
tolstoi[32]="говорить";
tolstoi[33]="будет";
tolstoi[34]="пред";
tolstoi[35]="сказать";
tolstoi[36]="никогда";
tolstoi[37]="глаза";
tolstoi[38]="тотчас";
tolstoi[39]="один";
tolstoi[40]="человек";
tolstoi[41]="больше";
tolstoi[42]="жизнь";
tolstoi[43]="отвечал";
tolstoi[44]="хотел";
tolstoi[45]="дело";
tolstoi[46]="эту";
tolstoi[47]="улыбкой";
tolstoi[48]="нынче";
tolstoi[49]="голову";
tolstoi[50]="между";
tolstoi[51]="чувствовал";
tolstoi[52]="глядя";
tolstoi[53]="особенно";
tolstoi[54]="сделать";
tolstoi[55]="чувство";
tolstoi[56]="хотя";
tolstoi[57]="каждый";
tolstoi[58]="день";
tolstoi[59]="одно";

//Антон Павлович Чехов
var chehov=[];
var chehov_num=0;

chehov[0]="было";
chehov[1]="был";
chehov[2]="сказал";
chehov[3]="говорит";
chehov[4]="человек";
chehov[5]="быть";
chehov[6]="ничего";
chehov[7]="есть";
chehov[8]="раз";
chehov[9]="ведь";
chehov[10]="лицо";
chehov[11]="ваше";
chehov[12]="будет";
chehov[13]="дело";
chehov[14]="ежели";
chehov[15]="черт";
chehov[16]="была";
chehov[17]="время";
chehov[18]="один";
chehov[19]="хоть";
chehov[20]="очень";
chehov[21]="можно";
chehov[22]="может";
chehov[23]="день";
chehov[24]="два";
chehov[25]="нужно";
chehov[26]="здесь";
chehov[27]="глазами";
chehov[28]="больше";
chehov[29]="знает";
chehov[30]="лет";
chehov[31]="оба";
chehov[32]="руку";
chehov[33]="лучше";
chehov[34]="сейчас";
chehov[35]="стоит";
chehov[36]="бог";
chehov[37]="отец";
chehov[38]="брат";
chehov[39]="хорошо";
chehov[40]="три";
chehov[41]="стал";
chehov[42]="сказать";
chehov[43]="сидит";
chehov[44]="господа";
chehov[45]="надо";
chehov[46]="одно";
chehov[47]="человека";
chehov[48]="одной";
chehov[49]="руками";
chehov[50]="ночь";
chehov[51]="одного";
chehov[52]="знаете";
chehov[53]="друг";
chehov[54]="нельзя";
chehov[55]="знаешь";
chehov[56]="разве";
chehov[57]="женщина";
chehov[58]="делать";
chehov[59]="жизнь";

//Николай Васильевич Гоголь
var gogol=[];
var gogol_num=0;

gogol[0]="есть";
gogol[1]="ведь";
gogol[2]="яичница";
gogol[3]="быть";
gogol[4]="было";
gogol[5]="уходит";
gogol[6]="городничий";
gogol[7]="нужно";
gogol[8]="может";
gogol[9]="человек";
gogol[10]="ничего";
gogol[11]="подколесин";
gogol[12]="дело";
gogol[13]="будет";
gogol[14]="был";
gogol[15]="один";
gogol[16]="несколько";
gogol[17]="также";
gogol[18]="хотя";
gogol[19]="люди";
gogol[20]="всегда";
gogol[21]="явление";
gogol[22]="совершенно";
gogol[23]="время";
gogol[24]="говорит";
gogol[25]="очень";
gogol[26]="просто";
gogol[27]="человека";
gogol[28]="черт";
gogol[29]="больше";
gogol[30]="души";
gogol[31]="слово";
gogol[32]="много";
gogol[33]="сих";
gogol[34]="здесь";
gogol[35]="право";
gogol[36]="сказать";
gogol[37]="бог";
gogol[38]="перед";
gogol[39]="прежде";
gogol[40]="руки";
gogol[41]="сделать";
gogol[42]="совсем";
gogol[43]="нельзя";
gogol[44]="тоже";
gogol[45]="людей";
gogol[46]="сторону";
gogol[47]="господа";
gogol[48]="весь";
gogol[49]="самого";
gogol[50]="раз";
gogol[51]="слуга";
gogol[52]="других";
gogol[53]="брат";
gogol[54]="должен";
gogol[55]="прошу";
gogol[56]="думаю";
gogol[57]="хоть";
gogol[58]="слова";
gogol[59]="почтмейстер";

 for(i=0;i<40;i++)
{
 for(j=0;j<40;j++)
 {
   if(kop[i]==dostoevski[j])
   {
     dostoevski_num++;
   }

   if(kop[i]==bulgakov[j])
   {
     bulgakov_num++;
   }

   if(kop[i]==tolstoi[j])
   {
     tolstoi_num++;
   }

   if(kop[i]==chehov[j])
   {
     chehov_num++;
   }

   if(kop[i]==gogol[j])
   {
     gogol_num++;
   }
 }
}

window.max_1=dostoevski_num;
window.max_2=bulgakov_num;
window.max_3=tolstoi_num;
window.max_4=chehov_num;
window.max_5=gogol_num;

window.max_1_name="Фёдор Михайлович Достоевский";
window.max_2_name="Михаил Афанасьевич Булгаков";
window.max_3_name="Лев Николаевич Толстой";
window.max_4_name="Антон Павлович Чехов";
window.max_5_name="Николай Васильевич Гоголь";

if(max_1<max_2)
{
      max_1=max_2;
      max_1_name=max_2_name;   
}

if(max_3<max_4)
{
 max_3=max_4;
 max_3_name=max_4_name;
}

if(max_1<max_3)
{
 max_1=max_3;
 max_1_name=max_3_name;
}

if(max_1<max_5)
{
 max_1=max_5;
 max_1_name=max_5_name;
}

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}
}

if(level==3)
{
 if(genre=="Фантастика")
{

 var remisov=[];
var remisov_num=0;

remisov[0]="было";
remisov[1]="окно"; 
remisov[2]="коля";
remisov[3]="сердце";
remisov[4]="просто";
remisov[5]="николай";
remisov[6]="хотелось";
remisov[7]="глаза";
remisov[8]="был"; 
remisov[9]="сердца";
remisov[10]="весь";
remisov[11]="перед";
remisov[12]="голос";
remisov[13]="жизнь";
remisov[14]="куда";
remisov[15]="руки";
remisov[16]="словно";
remisov[17]="варенька";
remisov[18]="финогеновы";
remisov[19]="один";
remisov[20]="саша";
remisov[21]="ночь";
remisov[22]="дом";
remisov[23]="больше";
remisov[24]="коля";
remisov[25]="опять";
remisov[26]="дома";
remisov[27]="петя";
remisov[28]="друга";
remisov[29]="знал";
remisov[30]="лицо";
remisov[31]="надо";
remisov[32]="тогда";
remisov[33]="гавриил";
remisov[34]="прасковья";
remisov[35]="колю";
remisov[36]="стало";
remisov[37]="казалось";
remisov[38]="быть";
remisov[39]="дети";
remisov[40]="финогеновых";
remisov[41]="сказал";
remisov[42]="много";
remisov[43]="долго";
remisov[44]="были";
remisov[45]="может";
remisov[46]="арсений";
remisov[47]="николая";
remisov[48]="ноги";
remisov[49]="какая";
remisov[50]="хотел";
remisov[51]="жизни";
remisov[52]="тихо";
remisov[53]="люди";
remisov[54]="мог";
remisov[55]="стоял";
remisov[56]="будет";
remisov[57]="красный";
remisov[58]="всегда";
remisov[59]="слова";

var lavkraft=[];
var lavkraft_num=0;

lavkraft[0]="было";
lavkraft[1]="хотя";
lavkraft[2]="был";
lavkraft[3]="были";
lavkraft[4]="также";
lavkraft[5]="однако";
lavkraft[6]="здесь";
lavkraft[7]="лишь";
lavkraft[8]="была";
lavkraft[9]="довольно";
lavkraft[10]="города";
lavkraft[11]="несколько";
lavkraft[12]="можно";
lavkraft[13]="тогда";
lavkraft[14]="почти";
lavkraft[15]="раз";
lavkraft[16]="могли";
lavkraft[17]="лейка";
lavkraft[18]="стрит";
lavkraft[19]="очень";
lavkraft[20]="мог";
lavkraft[21]="перед";
lavkraft[22]="времени";
lavkraft[23]="футов";
lavkraft[24]="вновь";
lavkraft[25]="стороны";
lavkraft[26]="ведь";
lavkraft[27]="никогда";
lavkraft[28]="некоторые";
lavkraft[29]="явно";
lavkraft[30]="столь";
lavkraft[31]="основательно";
lavkraft[32]="сразу";
lavkraft[33]="несмотря";
lavkraft[34]="конечно";
lavkraft[35]="место";
lavkraft[36]="других";
lavkraft[37]="моря";
lavkraft[38]="могло";
lavkraft[39]="самые";
lavkraft[40]="пэбоди";
lavkraft[41]="гор";
lavkraft[42]="горы";
lavkraft[43]="впрочем";
lavkraft[44]="несомненно";
lavkraft[45]="хотелось";
lavkraft[46]="собак";
lavkraft[47]="одной";
lavkraft[48]="виде";
lavkraft[49]="могут";
lavkraft[50]="другой";
lavkraft[51]="сохранились";
lavkraft[52]="мере";
lavkraft[53]="года";
lavkraft[54]="большой";
lavkraft[55]="работы";
lavkraft[56]="лед";
lavkraft[57]="души";
lavkraft[58]="сомнения";
lavkraft[59]="рассказ";

var king=[];
var king_num=0;
king[0]="было";
king[1]="был";
king[2]="сказал";
king[3]="была";
king[4]="раз";
king[5]="были";
king[6]="роки";
king[7]="просто";
king[8]="время";
king[9]="глаза";
king[10]="сифкиц";
king[11]="может";
king[12]="снова";
king[13]="больше";
king[14]="отто";
king[15]="ничего";
king[16]="спросил";
king[17]="увидел";
king[18]="почти";
king[19]="руки";
king[20]="перед";
king[21]="лет";
king[22]="очень";
king[23]="подумал";
king[24]="дверь";
king[25]="сейчас";
king[26]="два";
king[27]="гарольд";
king[28]="конечно";
king[29]="можно";
king[30]="надо";
king[31]="знал";
king[32]="день";
king[33]="начал";
king[34]="сделал";
king[35]="думал";
king[36]="возможно";
king[37]="слишком";
king[38]="никогда";
king[39]="чуть";
king[40]="дело";
king[41]="сказать";
king[42]="ноги";
king[43]="конце";
king[44]="двадцать";
king[45]="руке";
king[46]="совсем";
king[47]="жена";
king[48]="труди";
king[49]="пять";
king[50]="долго";
king[51]="вероятно";
king[52]="достаточно";
king[53]="никто";
king[54]="место";
king[55]="нью";
king[56]="делать";
king[57]="рот";
king[58]="нельзя";
king[59]="ральф";

var strugazkie=[];
var strugazkie_num=0;
strugazkie[0]="сказал";
strugazkie[1]="хлебовводов";
strugazkie[2]="федотович";
strugazkie[3]="лавр";
strugazkie[4]="было";
strugazkie[5]="фарфуркис";
strugazkie[6]="комендант";
strugazkie[7]="эдик";
strugazkie[8]="был";
strugazkie[9]="товарищ";
strugazkie[10]="есть";
strugazkie[11]="дело";
strugazkie[12]="быть";
strugazkie[13]="может";
strugazkie[14]="спросил";
strugazkie[15]="время";
strugazkie[16]="здесь";
strugazkie[17]="выбегалло";
strugazkie[18]="роман";
strugazkie[19]="произнес";
strugazkie[20]="зубо";
strugazkie[21]="были";
strugazkie[22]="тоже";
strugazkie[23]="федя";
strugazkie[24]="говорун";
strugazkie[25]="будет";
strugazkie[26]="очень";
strugazkie[27]="перед";
strugazkie[28]="говорил";
strugazkie[29]="сейчас";
strugazkie[30]="ничего";
strugazkie[31]="витька";
strugazkie[32]="надо";
strugazkie[33]="однако";
strugazkie[34]="принялся";
strugazkie[35]="тогда";
strugazkie[36]="можно";
strugazkie[37]="пока";
strugazkie[38]="между";
strugazkie[39]="раз";
strugazkie[40]="конечно";
strugazkie[41]="федотовича";
strugazkie[42]="лавра";
strugazkie[43]="была";
strugazkie[44]="наконец";
strugazkie[45]="глаза";
strugazkie[46]="хорошо";
strugazkie[47]="ведь";
strugazkie[48]="совсем";
strugazkie[49]="почему";
strugazkie[50]="дела";
strugazkie[51]="место";
strugazkie[52]="старичок";
strugazkie[53]="сказать";
strugazkie[54]="снова";
strugazkie[55]="руки";
strugazkie[56]="много";
strugazkie[57]="голову";
strugazkie[58]="коменданта";
strugazkie[59]="посмотрел";

var azimov=[];
var azimov_num=0;
azimov[0]="бейли";
azimov[1]="был";
azimov[2]="было";
azimov[3]="байрон";
azimov[4]="сказал";
azimov[5]="робот";
azimov[6]="дэниел";
azimov[7]="ответил";
azimov[8]="может";
azimov[9]="люди";
azimov[10]="была";
azimov[11]="ничего";
azimov[12]="сейчас";
azimov[13]="были";
azimov[14]="быть";
azimov[15]="здесь";
azimov[16]="дельмар";
azimov[17]="спросил";
azimov[18]="назад";
azimov[19]="гладия";
azimov[20]="конечно";
azimov[21]="солярии";
azimov[22]="ведь";
azimov[23]="будет";
azimov[24]="заметил";
azimov[25]="почему";
azimov[26]="джилберт";
azimov[27]="знаю";
azimov[28]="один";
azimov[29]="земли";
azimov[30]=" нет";
azimov[31]="человек";
azimov[32]="должен";
azimov[33]="именно";
azimov[34]="лет";
azimov[35]="быстро";
azimov[36]="глаза";
azimov[37]="думаю";
azimov[38]="земле";
azimov[39]="могу";
azimov[40]="возможно";
azimov[41]="несколько";
azimov[42]="пока";
azimov[43]="можно";
azimov[44]="человека";
azimov[45]="голос";
azimov[46]="слишком";
azimov[47]="раз";
azimov[48]="никогда";
azimov[49]="доктор";
azimov[50]="артемида";
azimov[51]="знал";
azimov[52]="сделать";
azimov[53]="снова";
azimov[54]="поэтому";
azimov[55]="совершенно";
azimov[56]="дело";
azimov[57]="жизнь";
azimov[58]="людей";
azimov[59]="слова";

for(i=0;i<20;i++)
         {
             for(j=0;j<20;j++)
             {
                 if(kop[i]==remisov[j])
                 {
                     remisov_num++;
                 }

                 if(kop[i]==lavkraft[j])
                 {
                     lavkraft_num++;
                 }

                 if(kop[i]==king[j])
                 {
                     king_num++;
                 }

                 if(kop[i]==strugazkie[j])
                 {
                     strugazkie_num++;
                 }

                 if(kop[i]==azimov[j])
                 {
                     azimov_num++;
                 }
                 
             }
         }

         window.max_1=remisov_num;
         window.max_2=lavkraft_num;
         window.max_3=king_num;
         window.max_4=strugazkie_num;
         window.max_5=azimov_num;

         window.max_1_name="Алексей Михайлович Ремизов";
         window.max_2_name="Говард Филлипс Лавкрафт";
         window.max_3_name="Стивен Кинг";
         window.max_4_name="Братья Стругацкие";
         window.max_5_name="Айзек Азимов";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

         document.getElementById('block_4').style.display="block";
         document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Детективы")
{

  //Сэр Артур Игнейгус Конан Дойл
var doil=[];
var doil_num=0;
doil[0]="холмс";
doil[1]="было";
doil[2]="был";
doil[3]="сказал";
doil[4]="видел";
doil[5]="мистер";
doil[6]="очень";
doil[7]="дело";
doil[8]="человек";
doil[9]="здесь";
doil[10]="может";
doil[11]="ничего";
doil[12]="были";
doil[13]="говорил";
doil[14]="время";
doil[15]="быть";
doil[16]="раз";
doil[17]="уотсон";
doil[18]="была";
doil[19]="один";
doil[20]="ддействительно";
doil[21]="слишком";
doil[22]="минуту";
doil[23]="несколько";
doil[24]="будет";
doil[25]="мог";
doil[26]="можно";
doil[27]="конечно";
doil[28]="мисс";
doil[29]="лицо";
doil[30]="никогда";
doil[31]="спросил";
doil[32]="пока";
doil[33]="нем";
doil[34]="дверь";
doil[35]="почему";
doil[36]="могу";
doil[37]="больше";
doil[38]="человека";
doil[39]="хотя";
doil[40]="однако";
doil[41]="день";
doil[42]="два";
doil[43]="стал";
doil[44]="сказать";
doil[45]="шерлок";
doil[46]="знаю";
doil[47]="стороны";
doil[48]="доме";
doil[49]="значит";
doil[50]="думаю";
doil[51]="затем";
doil[52]="сразу";
doil[53]="письмо";
doil[54]="против";
doil[55]="никто";
doil[56]="должны";
doil[57]="образом";
doil[58]="увидел";
doil[59]="людей";

//Эдгар Аллан По
var po=[];
var po_num=0;
po[0]="было";
po[1]="был";
po[2]="были";
po[3]="была";
po[4]="очень";
po[5]="лишь";
po[6]="несколько";
po[7]="однако";
po[8]="время";
po[9]="люди";
po[10]="раз";
po[11]="здесь";
po[12]="мог";
po[13]="весьма";
po[14]="разве";
po[15]="мистер";
po[16]="говорил";
po[17]="хотя";
po[18]="сказал";
po[19]="быть";
po[20]="может";
po[21]="два";
po[22]="наконец";
po[23]="пока";
po[24]="можно";
po[25]="также";
po[26]="снова";
po[27]="ничего";
po[28]="три";
po[29]="совершенно";
po[30]="затем";
po[31]="большой";
po[32]="слова";
po[33]="перед";
po[34]="больше";
po[35]="много";
po[36]="человек";
po[37]="совсем";
po[38]="между";
po[39]="слишком";
po[40]="сразу";
po[41]="менее";
po[42]="конечно";
po[43]="вместе";
po[44]="часто";
po[45]="жизни";
po[46]="одного";
po[47]="нем";
po[48]="глаза";
po[49]="времени";
po[50]="видел";
po[51]="мере";
po[52]="человека";
po[53]="вскоре";
po[54]="пути";
po[55]="души";
po[56]="скорее";
po[57]="поэтому";
po[58]="долго";
po[59]="смерти";

//Уилки Коллинз
var uilki=[];
var uilki_num=0;
uilki[0]="мисс";
uilki[1]="было";
uilki[2]="женщины";
uilki[3]="сказала";
uilki[4]="была";
uilki[5]="был";
uilki[6]="человека";
uilki[7]="персиваль";
uilki[8]="мистер";
uilki[9]="сказал";
uilki[10]="миссис";
uilki[11]="дальше";
uilki[12]="время";
uilki[13]="очень";
uilki[14]="больше";
uilki[15]="граф";
uilki[16]="будет";
uilki[17]="достаточно";
uilki[18]="персиваля";
uilki[19]="ничего";
uilki[20]="снова";
uilki[21]="образом";
uilki[22]="быть";
uilki[23]="может";
uilki[24]="слова";
uilki[25]="начала";
uilki[26]="голову";
uilki[27]="раз";
uilki[28]="сказать";
uilki[29]="могу";
uilki[30]="глаза";
uilki[31]="сейчас";
uilki[32]="мистера";
uilki[33]="мог";
uilki[34]="слово";
uilki[35]="здесь";
uilki[36]="друг";
uilki[37]="конечно";
uilki[38]="леди";
uilki[39]="руку";
uilki[40]="день";
uilki[41]="эту";
uilki[42]="знаю";
uilki[43]="спросила";
uilki[44]="человек";
uilki[45]="женщина";
uilki[46]="руки";
uilki[47]="прежде";
uilki[48]="есть";
uilki[49]="один";
uilki[50]="сердце";
uilki[51]="сделать";
uilki[52]="именно";
uilki[53]="всегда";
uilki[54]="лучше";
uilki[55]="ответ";
uilki[56]="хочу";
uilki[57]="дверь";
uilki[58]="два";
uilki[59]="вместе";

//Гильберт Кийт Честертон
var kit=[];
var kit_num=0;
kit[0]="был";
kit[1]="сказал";
kit[2]="было";
kit[3]="браун";
kit[4]="фламбо";
kit[5]="отец";
kit[6]="священник";
kit[7]="словно";
kit[8]="серебряной";
kit[9]="были";
kit[10]="была";
kit[11]="спросил";
kit[12]="быть";
kit[13]="ответил";
kit[14]="доктор";
kit[15]="может";
kit[16]="раз";
kit[17]="здесь";
kit[18]="человека";
kit[19]="очень";
kit[20]="голову";
kit[21]="ничего";
kit[22]="продолжал";
kit[23]="лицо";
kit[24]="мистер";
kit[25]="один";
kit[26]="есть";
kit[27]="быстро";
kit[28]="дело";
kit[29]="наконец";
kit[30]="совсем";
kit[31]="дверь";
kit[32]="никто";
kit[33]="много";
kit[34]="глаза";
kit[35]="нем";
kit[36]="просто";
kit[37]="слова";
kit[38]="куда";
kit[39]="большой";
kit[40]="людей";
kit[41]="конечно";
kit[42]="именно";
kit[43]="чуть";
kit[44]="знал";
kit[45]="голова";
kit[46]="должен";
kit[47]="сюда";
kit[48]="хотел";
kit[49]="между";
kit[50]="туда";
kit[51]="лет";
kit[52]="смерти";
kit[53]="хуже";
kit[54]="англии";
kit[55]="крест";
kit[56]="сигару";
kit[57]="внимания";
kit[58]="берегу";
kit[59]="ничто";

//Агата Кристи
var kristi=[];
var kristi_num=0;
kristi[0]="пуаро";
kristi[1]="было";
kristi[2]="был";
kristi[3]="сказал";
kristi[4]="очень";
kristi[5]="миссис";
kristi[6]="была";
kristi[7]="мистер";
kristi[8]="сказала";
kristi[9]="быть";
kristi[10]="сэр";
kristi[11]="время";
kristi[12]="взгляд";
kristi[13]="конечно";
kristi[14]="были";
kristi[15]="ничего";
kristi[16]="может";
kristi[17]="леди";
kristi[18]="мисс";
kristi[19]="раз";
kristi[20]="будет";
kristi[21]="месье";
kristi[22]="минут";
kristi[23]="ведь";
kristi[24]="всегда";
kristi[25]="просто";
kristi[26]="здесь";
kristi[27]="есть";
kristi[28]="мог";
kristi[29]="совершенно";
kristi[30]="хорошо";
kristi[31]="именно";
kristi[32]="думаю";
kristi[33]="один";
kristi[34]="сейчас";
kristi[35]="сказать";
kristi[36]="больше";
kristi[37]="посмотрел";
kristi[38]="инспектор";
kristi[39]="дело";
kristi[40]="почему";
kristi[41]="снова";
kristi[42]="могу";
kristi[43]="тоже";
kristi[44]="бриджит";
kristi[45]="должен";
kristi[46]="произнес";
kristi[47]="глаза";
kristi[48]="деле";
kristi[49]="перед";
kristi[50]="слишком";
kristi[51]="сегодня";
kristi[52]="сразу";
kristi[53]="самом";
kristi[54]="комнату";
kristi[55]="тогда";
kristi[56]="голос";
kristi[57]="спросила";
kristi[58]="два";
kristi[59]="головой";


for(i=0;i<60;i++)
         {
             for(j=0;j<60;j++)
             {
                 if(kop[i]==doil[j])
                 {
                 doil_num++;
                 }

                 if(kop[i]==po[j])
                 {
                 po_num++;
                 }

                 if(kop[i]==uilki[j])
                 {
                 uilki_num++;
                 }

                 if(kop[i]==kit[j])
                 {
                 kit_num++;
                 }

                 if(kop[i]==kristi[j])
                 {
                 kristi_num++;
                 }
             }
         
         }

         window.max_1=doil_num;
         window.max_2=po_num;
         window.max_3=uilki_num;
         window.max_4=kit_num;
         window.max_5=kristi_num;

         window.max_1_name="Сэр Артур Игнейгус Конан Дойл";
         window.max_2_name="Эдгар Аллан По";
         window.max_3_name="Уилки Коллинз";
         window.max_4_name="Гильберт Кийт Честертон";
         window.max_5_name="Агата Кристи";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Приключения")
{

 //Александр Дюма
var duma=[];
var duma_num=0;

duma[0]="сказал";
duma[1]="вышел";
duma[2]="граф";
duma[3]="разве";
duma[4]="был";
duma[5]="было";
duma[6]="взял";
duma[7]="буду";
duma[8]="спросил";
duma[9]="отвечал";
duma[10]="быть";
duma[11]="человек";
duma[12]="раз";
duma[13]="были";
duma[14]="может";
duma[15]="очень";
duma[16]="четыре";
duma[17]="между";
duma[18]="была";
duma[19]="остров";
duma[20]="будет";
duma[21]="один";
duma[22]="времени";
duma[23]="видите";
duma[24]="графа";
duma[25]="два";
duma[26]="ваша";
duma[27]="время";
duma[28]="слышал";
duma[29]="милость";
duma[30]="дорогой";
duma[31]="три";
duma[32]="воскликнул";
duma[33]="хозяин";
duma[34]="франца";
duma[35]="есть";
duma[36]="шесть";
duma[37]="несколько";
duma[38]="друг";
duma[39]="ничего";
duma[40]="случае";
duma[41]="человека";
duma[42]="тогда";
duma[43]="перед";
duma[44]="надо";
duma[45]="какого";
duma[46]="эту";
duma[47]="продолжал";
duma[48]="люди";
duma[49]="дело";
duma[50]="риме";
duma[51]="первый";
duma[52]="весь";
duma[53]="просто";
duma[54]="наконец";
duma[55]="почему";
duma[56]="руки";
duma[57]="снова";
duma[58]="пока";
duma[59]="впрочем";

//Александр Степанович Грин
var grin=[];
var grin_num=0;

grin[0]="сказал";
grin[1]="почему";
grin[2]="был";
grin[3]="было";
grin[4]="куда";
grin[5]="очень";
grin[6]="быть";
grin[7]="человек";
grin[8]="ничего";
grin[9]="всегда";
grin[10]="против";
grin[11]="были";
grin[12]="сказала";
grin[13]="знал";
grin[14]="будет";
grin[15]="была";
grin[16]="дело";
grin[17]="мог";
grin[18]="есть";
grin[19]="скоро";
grin[20]="ответил";
grin[21]="глаза";
grin[22]="может";
grin[23]="руку";
grin[24]="стал";
grin[25]="кроме";
grin[26]="лицо";
grin[27]="затем";
grin[28]="дверь";
grin[29]="раз";
grin[30]="едва";
grin[31]="знаю";
grin[32]="случае";
grin[33]="руки";
grin[34]="лет";
grin[35]="человека";
grin[36]="голос";
grin[37]="увидел";
grin[38]="лишь";
grin[39]="один";
grin[40]="тогда";
grin[41]="день";
grin[42]="пока";
grin[43]="между";
grin[44]="два";
grin[45]="можно";
grin[46]="перед";
grin[47]="лицом";
grin[48]="вокруг";
grin[49]="говорить";
grin[50]="больше";
grin[51]="никогда";
grin[52]="место";
grin[53]="рой";
grin[54]="много";
grin[55]="снова";
grin[56]="также";
grin[57]="хотел";
grin[58]="иногда";
grin[59]="слова";

//Жюль Верн
var vern=[];
var vern_num=0;

vern[0]="сына";
vern[1]="знал";
vern[2]="день";
vern[3]="улыбнулся";
vern[4]="взглянул";
vern[5]="произошло";
vern[6]="тогда";
vern[7]="было";
vern[8]="значит";
vern[9]="была";
vern[10]="был";
vern[11]="глаза";
vern[12]="сказал";
vern[13]="руки";
vern[14]="сказала";
vern[15]="пока";
vern[16]="ответил";
vern[17]="может";
vern[18]="барри";
vern[19]="просто";
vern[20]="руку";
vern[21]="были";
vern[22]="раз";
vern[23]="ничего";
vern[24]="больше";
vern[25]="мог";
vern[26]="будет";
vern[27]="знаю";
vern[28]="ответила";
vern[29]="голос";
vern[30]="быть";
vern[31]="время";
vern[32]="дело";
vern[33]="здесь";
vern[34]="сейчас";
vern[35]="один";
vern[36]="стала";
vern[37]="словно";
vern[38]="перед";
vern[39]="хотел";
vern[40]="доктор";
vern[41]="могу";
vern[42]="можно";
vern[43]="спросил";
vern[44]="дверь";
vern[45]="взгляд";
vern[46]="сказать";
vern[47]="лет";
vern[48]="слова";
vern[49]="всегда";
vern[50]="улыбнулась";
vern[51]="поэтому";
vern[52]="хочу";
vern[53]="очень";
vern[54]="дочь";
vern[55]="деле";
vern[56]="крисом";
vern[57]="могла";
vern[58]="нужно";
vern[59]="самом";

//Скот Вальтер
var valter=[];
var valter_num=0;

valter[0]="сказал";
valter[1]="было";
valter[2]="рыцарь";
valter[3]="был";
valter[4]="были";
valter[5]="пор";
valter[6]="отвечал";
valter[7]="скорее";
valter[8]="будет";
valter[9]="может";
valter[10]="ради";
valter[11]="время";
valter[12]="имя";
valter[13]="быть";
valter[14]="была";
valter[15]="времени";
valter[16]="принц";
valter[17]="один";
valter[18]="однако";
valter[19]="другой";
valter[20]="перед";
valter[21]="могу";
valter[22]="одного";
valter[23]="сэр";
valter[24]="хотя";
valter[25]="рыцаря";
valter[26]="храмовник";
valter[27]="есть";
valter[28]="мог";
valter[29]="кроме";
valter[30]="сказала";
valter[31]="больше";
valter[32]="пока";
valter[33]="леди";
valter[34]="дело";
valter[35]="тогда";
valter[36]="можно";
valter[37]="лицо";
valter[38]="святого";
valter[39]="минуту";
valter[40]="монах";
valter[41]="между";
valter[42]="здесь";
valter[43]="гораздо";
valter[44]="эту";
valter[45]="друг";
valter[46]="людей";
valter[47]="довольно";
valter[48]="спросил";
valter[49]="ордена";
valter[50]="против";
valter[51]="лишь";
valter[52]="хоть";
valter[53]="ведь";
valter[54]="гроссмейстер";
valter[55]="отшельник";
valter[56]="ничего";
valter[57]="продолжал";
valter[58]="несколько";
valter[59]="стороны";

//Марк Твен
var tven=[];
var tven_num=0;

tven[0]="было";
tven[1]="говорит";
tven[2]="сказал";
tven[3]="думал";
tven[4]="ничего";
tven[5]="был";
tven[6]="говорю";
tven[7]="однако";
tven[8]="тоже";
tven[9]="раз";
tven[10]="пока";
tven[11]="больше";
tven[12]="время";
tven[13]="тогда";
tven[14]="есть";
tven[15]="просто";
tven[16]="король";
tven[17]="дело";
tven[18]="может";
tven[19]="ведь";
tven[20]="лучше";
tven[21]="очень";
tven[22]="один";
tven[23]="стал";
tven[24]="была";
tven[25]="снова";
tven[26]="были";
tven[27]="конечно";
tven[28]="мог";
tven[29]="день";
tven[30]="понял";
tven[31]="времени";
tven[32]="сразу";
tven[33]="три";
tven[34]="здесь";
tven[35]="хорошо";
tven[36]="опять";
tven[37]="деньги";
tven[38]="видел";
tven[39]="сюда";
tven[40]="надо";
tven[41]="сказать";
tven[42]="скоро";
tven[43]="сказала";
tven[44]="решил";
tven[45]="человек";
tven[46]="почти";
tven[47]="голову";
tven[48]="общем";
tven[49]="немного";
tven[50]="быть";
tven[51]="придется";
tven[52]="говорил";
tven[53]="джиму";
tven[54]="всегда";
tven[55]="правда";
tven[56]="другой";
tven[57]="долларов";
tven[58]="негра";
tven[59]="каждый";

 for(i=0;i<20;i++)
         {
             for(j=0;j<20;j++)
             {
                 if(kop[i]==duma[j])
                 {
                     duma_num++;
                 }

                 if(kop[i]==grin[j])
                 {
                     grin_num++;
                 }

                 if(kop[i]==vern[j])
                 {
                     vern_num++;
                 }

                 if(kop[i]==valter[j])
                 {
                     valter_num++;
                 }

                 if(kop[i]==tven[j])
                 {
                     tven_num++;
                 }
             
             }
         }

         window.max_1=duma_num;
         window.max_2=grin_num;
         window.max_3=vern_num;
         window.max_4=valter_num;
         window.max_5=tven_num;

         window.max_1_name="Александр Дюма";
         window.max_2_name="Александр Степанович Грин";
         window.max_3_name="Жюль Верн";
         window.max_4_name="Скотт Вальтер";
         window.max_5_name="Марк Твен";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Стихи")
{
 var pushkin=[];
 var pushkin_num=0;

pushkin[0]="все";
pushkin[1]="уже";
pushkin[2]="счастья";
pushkin[3]="радости";
pushkin[4]="нежный";
pushkin[5]="люблю";
pushkin[6]="монах";
pushkin[7]="увы";
pushkin[8]="стихотворения";
pushkin[9]="гром";
pushkin[10]="вино";
pushkin[11]="любезный";
pushkin[12]="мрак";
pushkin[13]="друг";
pushkin[14]="святой";
pushkin[15]="надежды";
pushkin[16]="был";
pushkin[17]="твой";
pushkin[18]="всё";
pushkin[19]="любовью";
pushkin[20]="милый";
pushkin[21]="милая";
pushkin[22]="день";
pushkin[23]="пред";
pushkin[24]="любви";
pushkin[25]="жизни";
pushkin[26]="вновь";
pushkin[27]="может";
pushkin[28]="любовь";
pushkin[29]="час";
pushkin[30]="свет";
pushkin[31]="увы";
pushkin[32]="сердце";
pushkin[33]="лишь";
pushkin[34]="иль";
pushkin[35]="здесь";
pushkin[36]="бедный";
pushkin[37]="ночи";
pushkin[38]="сердца";
pushkin[39]="поэт";
pushkin[40]="тень";
pushkin[41]="твоей";
pushkin[42]="быть";
pushkin[43]="пускай";
pushkin[44]="сказать";
pushkin[45]="глас";
pushkin[46]="иль";
pushkin[47]="вижу";
pushkin[48]="сей";
pushkin[49]="рукой";
pushkin[50]="раз";
pushkin[51]="здесь";
pushkin[52]="время";
pushkin[53]="тебя";
pushkin[54]="грудь";
pushkin[55]="один";
pushkin[56]="очи";
pushkin[57]="руку";
pushkin[58]="груди";
pushkin[59]="лишь";

//Михаил Юрьевич Лермонтов
var lermontov=[];
var lermontov_num=0;

lermontov[0]="был";
lermontov[1]="лишь";
lermontov[2]="сердце";
lermontov[3]="хоть";
lermontov[4]="один";
lermontov[5]="любви";
lermontov[6]="твой";
lermontov[7]="быть";
lermontov[8]="нем";
lermontov[9]="меж";
lermontov[10]="людей";
lermontov[11]="может";
lermontov[12]="тогда";
lermontov[13]="жизнь";
lermontov[14]="лет";
lermontov[15]="любовь";
lermontov[16]="вновь";
lermontov[17]="пред";
lermontov[18]="дней";
lermontov[19]="звук";
lermontov[20]="друг";
lermontov[21]="свет";
lermontov[22]="душе";
lermontov[23]="любил";
lermontov[24]="долго";
lermontov[25]="день";
lermontov[26]="души";
lermontov[27]="мечты";
lermontov[28]="опять";
lermontov[29]="сей";
lermontov[30]="средь";
lermontov[31]="сон";
lermontov[32]="время";
lermontov[33]="бог";
lermontov[34]="всегда";
lermontov[35]="прах";
lermontov[36]="сердца";
lermontov[37]="другой";
lermontov[38]="одна";
lermontov[39]="пор";
lermontov[40]="кругом";
lermontov[41]="гор";
lermontov[42]="путь";
lermontov[43]="огонь";
lermontov[44]="уста";
lermontov[45]="девы";
lermontov[46]="счастья";
lermontov[47]="скоро";
lermontov[48]="туман";
lermontov[49]="любит";
lermontov[50]="сквозь";
lermontov[51]="бедный";
lermontov[52]="дитя";
lermontov[53]="говорит";
lermontov[54]="поле";
lermontov[55]="ваш";
lermontov[56]="безумный";
lermontov[57]="месяц";
lermontov[58]="лучей";
lermontov[59]="летят";

//Александр Сергеевич Есенин
var esenin=[];
var esenin_num=0;

esenin[0]="сердце";
esenin[1]="лишь";
esenin[2]="есть";
esenin[3]="жизнь";
esenin[4]="твой";
esenin[5]="был";
esenin[6]="словно";
esenin[7]="русь";
esenin[8]="свет";
esenin[9]="глаза";
esenin[10]="много";
esenin[11]="тихо";
esenin[12]="поле";
esenin[13]="вижу";
esenin[14]="ведь";
esenin[15]="поэт";
esenin[16]="иль";
esenin[17]="душу";
esenin[18]="твоих";
esenin[19]="лет";
esenin[20]="звезды";
esenin[21]="будет";
esenin[22]="любовь";
esenin[23]="поет";
esenin[24]="солнце";
esenin[25]="ночь";
esenin[26]="снег";
esenin[27]="жизни";
esenin[28]="песню";
esenin[29]="час";
esenin[30]="душе";
esenin[31]="думы";
esenin[32]="грудь";
esenin[33]="лес";
esenin[34]="время";
esenin[35]="нем";
esenin[36]="путь";
esenin[37]="души";
esenin[38]="стихотворения";
esenin[39]="кровь";
esenin[40]="дня";
esenin[41]="радости";
esenin[42]="звуки";
esenin[43]="веселый";
esenin[44]="горит";
esenin[45]="душ";
esenin[46]="день";
esenin[47]="дум";
esenin[48]="сила";
esenin[49]="страшный";
esenin[50]="время";
esenin[51]="времени";
esenin[52]="самого";
esenin[53]="школьной";
esenin[54]="полное";
esenin[55]="список";
esenin[56]="немного";
esenin[57]="были";
esenin[58]="школьного";
esenin[59]="самой";

//Владимир Владимирович Маяковский
var mayakovski=[];
var mayakovski_num=0;

mayakovski[0]="надо";
mayakovski[1]="будет";
mayakovski[2]="день";
mayakovski[3]="товарищ";
mayakovski[4]="сегодня";
mayakovski[5]="жизнь";
mayakovski[6]="глаза";
mayakovski[7]="быть";
mayakovski[8]="есть";
mayakovski[9]="может";
mayakovski[10]="ленин";
mayakovski[11]="каждый";
mayakovski[12]="здесь";
mayakovski[13]="был";
mayakovski[14]="люди";
mayakovski[15]="весь";
mayakovski[16]="сердце";
mayakovski[17]="пусть";
mayakovski[18]="солнце";
mayakovski[19]="глаз";
mayakovski[20]="время";
mayakovski[21]="перед";
mayakovski[22]="много";
mayakovski[23]="хоть";
mayakovski[24]="город";
mayakovski[25]="опять";
mayakovski[26]="было";
mayakovski[27]="земля";
mayakovski[28]="дома";
mayakovski[29]="жизни";
mayakovski[30]="души";
mayakovski[31]="рядом";
mayakovski[32]="земли";
mayakovski[33]="стал";
mayakovski[34]="довольно";
mayakovski[35]="солнца";
mayakovski[36]="дни";
mayakovski[37]="была";
mayakovski[38]="любовь";
mayakovski[39]="хорошо";
mayakovski[40]="смотрите";
mayakovski[41]="голову";
mayakovski[42]="ветер";
mayakovski[43]="улица";
mayakovski[44]="дон";
mayakovski[45]="цветы";
mayakovski[46]="моем";
mayakovski[47]="этажа";
mayakovski[48]="неправда";
mayakovski[49]="любимая";
mayakovski[50]="три";
mayakovski[51]="тоже";
mayakovski[52]="голос";
mayakovski[53]="место";
mayakovski[54]="мама";
mayakovski[55]="театр";
mayakovski[56]="слова";
mayakovski[57]="другие";
mayakovski[58]="новое";
mayakovski[59]="дать";

//Марина Ивановна Цветаева
var cvetaeva=[];
var cvetaeva_num=0;
cvetaeva[0]="час";
cvetaeva[1]="руки";
cvetaeva[2]="бог";
cvetaeva[3]="ночь";
cvetaeva[4]="быть";
cvetaeva[5]="твой";
cvetaeva[6]="глаза";
cvetaeva[7]="был";
cvetaeva[8]="есть";
cvetaeva[9]="мая";
cvetaeva[10]="любовь";
cvetaeva[11]="здесь";
cvetaeva[12]="будет";
cvetaeva[13]="июля";
cvetaeva[14]="дом";
cvetaeva[15]="души";
cvetaeva[16]="сон";
cvetaeva[17]="ночи";
cvetaeva[18]="жизнь";
cvetaeva[19]="надо";
cvetaeva[20]="кровь";
cvetaeva[21]="лишь";
cvetaeva[22]="грудь";
cvetaeva[23]="июня";
cvetaeva[24]="один";
cvetaeva[25]="меж";
cvetaeva[26]="глаз";
cvetaeva[27]="рук";
cvetaeva[28]="мир";
cvetaeva[29]="голос";
cvetaeva[30]="октября";
cvetaeva[31]="каждый";
cvetaeva[32]="пусть";
cvetaeva[33]="смерть";
cvetaeva[34]="небо";
cvetaeva[35]="была";
cvetaeva[36]="одно";
cvetaeva[37]="лет";
cvetaeva[38]="ветер";
cvetaeva[39]="руку";
cvetaeva[40]="сквозь";
cvetaeva[41]="ведь";
cvetaeva[42]="одна";
cvetaeva[43]="буду";
cvetaeva[44]="солнце";
cvetaeva[45]="мама";
cvetaeva[46]="дети";
cvetaeva[47]="опять";
cvetaeva[48]="сегодня";
cvetaeva[49]="уст";
cvetaeva[50]="много";
cvetaeva[51]="тени";
cvetaeva[52]="слова";
cvetaeva[53]="сколько";
cvetaeva[54]="вечер";
cvetaeva[55]="спи";
cvetaeva[56]="чуть";
cvetaeva[57]="сердца";
cvetaeva[58]="жизни";
cvetaeva[59]="завтра";

 for(i=0;i<20;i++)
         {
             for(j=0;j<20;j++)
             {
                 if(kop[i]==pushkin[j])
                 {
                     pushkin_num++;
                 }

                 if(kop[i]==lermontov[j])
                 {   
                     lermontov_num++;
                 }

                 if(kop[i]==esenin[j])
                 {
                     esenin_num++;
                 }

                 if(kop[i]==mayakovski[j])
                 {
                     mayakovski_num++;
                 }

                 if(kop[i]==cvetaeva[j])
                 {
                     cvetaeva_num++;
                 }
             }
         }

         window.max_1=pushkin_num;
         window.max_2=lermontov_num;
         window.max_3=esenin_num;
         window.max_4=mayakovski_num;
         window.max_5=cvetaeva_num;

         window.max_1_name="Александр Сергеевич Пушкин";
         window.max_2_name="Михаил Юрьевич Лермонтов";
         window.max_3_name="Сергей Александрович Есенин";
         window.max_4_name="Владимир Владимирович Маяковский";
         window.max_5_name="Марина Ивановна Цветаева";

         if(max_1<max_2)
         {
                  max_1=max_2;
                  max_1_name=max_2_name;   
         }

         if(max_3<max_4)
         {
             max_3=max_4;
             max_3_name=max_4_name;
         }

         if(max_1<max_3)
         {
             max_1=max_3;
             max_1_name=max_3_name;
         }

         if(max_1<max_5)
         {
             max_1=max_5;
             max_1_name=max_5_name;
         }

 

 document.getElementById('block_4').style.display="block";
 document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}

if(genre=="Русская классика")
{

 //Фёдор Михайлович Достоевский
var dostoevski=[];
var dostoevski_num=0;

dostoevski[0]="было";
dostoevski[1]="хорошо";
dostoevski[2]="ведь";
dostoevski[3]="быть";
dostoevski[4]="был";
dostoevski[5]="очень";
dostoevski[6]="опять";
dostoevski[7]="мысль";
dostoevski[8]="может";
dostoevski[9]="есть";
dostoevski[10]="была";
dostoevski[11]="раз";
dostoevski[12]="тоже";
dostoevski[13]="совсем";
dostoevski[14]="человек";
dostoevski[15]="ничего";
dostoevski[16]="надо";
dostoevski[17]="дело";
dostoevski[18]="впрочем";
dostoevski[19]="один";
dostoevski[20]="тогда";
dostoevski[21]="минуту";
dostoevski[22]="хоть";
dostoevski[23]="молодой";
dostoevski[24]="улицу";
dostoevski[25]="стал";
dostoevski[26]="почти";
dostoevski[27]="время";
dostoevski[28]="кажется";
dostoevski[29]="сейчас";
dostoevski[30]="стало";
dostoevski[31]="эту";
dostoevski[32]="ясно";
dostoevski[33]="два";
dostoevski[34]="точно";
dostoevski[35]="наконец";
dostoevski[36]="всегда";
dostoevski[37]="несколько";
dostoevski[38]="можно";
dostoevski[39]="дверь";
dostoevski[40]="прямо";
dostoevski[41]="совершенно";
dostoevski[42]="действительно";
dostoevski[43]="больше";
dostoevski[44]="руки";
dostoevski[45]="несмотря";
dostoevski[46]="хотя";
dostoevski[47]="лучше";
dostoevski[48]="сказать";
dostoevski[49]="пошел";
dostoevski[50]="проговорил";
dostoevski[51]="день";
dostoevski[52]="продолжал";
dostoevski[53]="много";
dostoevski[54]="подумал";
dostoevski[55]="хотел";
dostoevski[56]="слова";
dostoevski[57]="слишком";
dostoevski[58]="куда";
dostoevski[59]="непременно";

//Михаил Афанасьевич Булгаков
var bulgakov=[];
var bulgakov_num=0;

bulgakov[0]="было";
bulgakov[1]="сказал";
bulgakov[2]="иван";
bulgakov[3]="был";
bulgakov[4]="глаза";
bulgakov[5]="очень";
bulgakov[6]="ответил";
bulgakov[7]="сейчас";
bulgakov[8]="ничего";
bulgakov[9]="спросил";
bulgakov[10]="человек";
bulgakov[11]="подумал";
bulgakov[12]="смерти";
bulgakov[13]="может";
bulgakov[14]="лицо";
bulgakov[15]="глава";
bulgakov[16]="раз";
bulgakov[17]="профессор";
bulgakov[18]="время";
bulgakov[19]="нужно";
bulgakov[20]="была";
bulgakov[21]="почему";
bulgakov[22]="совершенно";
bulgakov[23]="женщина";
bulgakov[24]="руки";
bulgakov[25]="есть";
bulgakov[26]="первую";
bulgakov[27]="доктор";
bulgakov[28]="дело";
bulgakov[29]="голосом";
bulgakov[30]="голову";
bulgakov[31]="надо";
bulgakov[32]="отозвался";
bulgakov[33]="куда";
bulgakov[34]="больше";
bulgakov[35]="кроме";
bulgakov[36]="николаевич";
bulgakov[37]="какая";
bulgakov[38]="перед";
bulgakov[39]="поэт";
bulgakov[40]="черт";
bulgakov[41]="именно";
bulgakov[42]="эту";
bulgakov[43]="глаз";
bulgakov[44]="тотчас";
bulgakov[45]="никогда";
bulgakov[46]="пилата";
bulgakov[47]="второй";
bulgakov[48]="гражданин";
bulgakov[49]="никто";
bulgakov[50]="первый";
bulgakov[51]="сказала";
bulgakov[52]="чуть";
bulgakov[53]="зубы";
bulgakov[54]="мастер";
bulgakov[55]="блистательный";
bulgakov[56]="рот";
bulgakov[57]="час";
bulgakov[58]="черной";
bulgakov[59]="следует";

//Лев Николаевич Толстой
var tolstoi=[];
var tolstoi_num=0;

tolstoi[0]="было";
tolstoi[1]="сказал";
tolstoi[2]="несмотря";
tolstoi[3]="разговор";
tolstoi[4]="сказала";
tolstoi[5]="была";
tolstoi[6]="был";
tolstoi[7]="видел";
tolstoi[8]="другой";
tolstoi[9]="быть";
tolstoi[10]="очень";
tolstoi[11]="есть";
tolstoi[12]="приехал";
tolstoi[13]="ничего";
tolstoi[14]="были";
tolstoi[15]="говорил";
tolstoi[16]="опять";
tolstoi[17]="время";
tolstoi[18]="может";
tolstoi[19]="всегда";
tolstoi[20]="княгиня";
tolstoi[21]="можно";
tolstoi[22]="лицо";
tolstoi[23]="именно";
tolstoi[24]="раз";
tolstoi[25]="брат";
tolstoi[26]="мог";
tolstoi[27]="надо";
tolstoi[28]="много";
tolstoi[29]="хорошо";
tolstoi[30]="знаю";
tolstoi[31]="здесь";
tolstoi[32]="говорить";
tolstoi[33]="будет";
tolstoi[34]="пред";
tolstoi[35]="сказать";
tolstoi[36]="никогда";
tolstoi[37]="глаза";
tolstoi[38]="тотчас";
tolstoi[39]="один";
tolstoi[40]="человек";
tolstoi[41]="больше";
tolstoi[42]="жизнь";
tolstoi[43]="отвечал";
tolstoi[44]="хотел";
tolstoi[45]="дело";
tolstoi[46]="эту";
tolstoi[47]="улыбкой";
tolstoi[48]="нынче";
tolstoi[49]="голову";
tolstoi[50]="между";
tolstoi[51]="чувствовал";
tolstoi[52]="глядя";
tolstoi[53]="особенно";
tolstoi[54]="сделать";
tolstoi[55]="чувство";
tolstoi[56]="хотя";
tolstoi[57]="каждый";
tolstoi[58]="день";
tolstoi[59]="одно";

//Антон Павлович Чехов
var chehov=[];
var chehov_num=0;

chehov[0]="было";
chehov[1]="был";
chehov[2]="сказал";
chehov[3]="говорит";
chehov[4]="человек";
chehov[5]="быть";
chehov[6]="ничего";
chehov[7]="есть";
chehov[8]="раз";
chehov[9]="ведь";
chehov[10]="лицо";
chehov[11]="ваше";
chehov[12]="будет";
chehov[13]="дело";
chehov[14]="ежели";
chehov[15]="черт";
chehov[16]="была";
chehov[17]="время";
chehov[18]="один";
chehov[19]="хоть";
chehov[20]="очень";
chehov[21]="можно";
chehov[22]="может";
chehov[23]="день";
chehov[24]="два";
chehov[25]="нужно";
chehov[26]="здесь";
chehov[27]="глазами";
chehov[28]="больше";
chehov[29]="знает";
chehov[30]="лет";
chehov[31]="оба";
chehov[32]="руку";
chehov[33]="лучше";
chehov[34]="сейчас";
chehov[35]="стоит";
chehov[36]="бог";
chehov[37]="отец";
chehov[38]="брат";
chehov[39]="хорошо";
chehov[40]="три";
chehov[41]="стал";
chehov[42]="сказать";
chehov[43]="сидит";
chehov[44]="господа";
chehov[45]="надо";
chehov[46]="одно";
chehov[47]="человека";
chehov[48]="одной";
chehov[49]="руками";
chehov[50]="ночь";
chehov[51]="одного";
chehov[52]="знаете";
chehov[53]="друг";
chehov[54]="нельзя";
chehov[55]="знаешь";
chehov[56]="разве";
chehov[57]="женщина";
chehov[58]="делать";
chehov[59]="жизнь";

//Николай Васильевич Гоголь
var gogol=[];
var gogol_num=0;

gogol[0]="есть";
gogol[1]="ведь";
gogol[2]="яичница";
gogol[3]="быть";
gogol[4]="было";
gogol[5]="уходит";
gogol[6]="городничий";
gogol[7]="нужно";
gogol[8]="может";
gogol[9]="человек";
gogol[10]="ничего";
gogol[11]="подколесин";
gogol[12]="дело";
gogol[13]="будет";
gogol[14]="был";
gogol[15]="один";
gogol[16]="несколько";
gogol[17]="также";
gogol[18]="хотя";
gogol[19]="люди";
gogol[20]="всегда";
gogol[21]="явление";
gogol[22]="совершенно";
gogol[23]="время";
gogol[24]="говорит";
gogol[25]="очень";
gogol[26]="просто";
gogol[27]="человека";
gogol[28]="черт";
gogol[29]="больше";
gogol[30]="души";
gogol[31]="слово";
gogol[32]="много";
gogol[33]="сих";
gogol[34]="здесь";
gogol[35]="право";
gogol[36]="сказать";
gogol[37]="бог";
gogol[38]="перед";
gogol[39]="прежде";
gogol[40]="руки";
gogol[41]="сделать";
gogol[42]="совсем";
gogol[43]="нельзя";
gogol[44]="тоже";
gogol[45]="людей";
gogol[46]="сторону";
gogol[47]="господа";
gogol[48]="весь";
gogol[49]="самого";
gogol[50]="раз";
gogol[51]="слуга";
gogol[52]="других";
gogol[53]="брат";
gogol[54]="должен";
gogol[55]="прошу";
gogol[56]="думаю";
gogol[57]="хоть";
gogol[58]="слова";
gogol[59]="почтмейстер";

 for(i=0;i<20;i++)
{
 for(j=0;j<20;j++)
 {
   if(kop[i]==dostoevski[j])
   {
     dostoevski_num++;
   }

   if(kop[i]==bulgakov[j])
   {
     bulgakov_num++;
   }

   if(kop[i]==tolstoi[j])
   {
     tolstoi_num++;
   }

   if(kop[i]==chehov[j])
   {
     chehov_num++;
   }

   if(kop[i]==gogol[j])
   {
     gogol_num++;
   }
 }
}

window.max_1=dostoevski_num;
window.max_2=bulgakov_num;
window.max_3=tolstoi_num;
window.max_4=chehov_num;
window.max_5=gogol_num;

window.max_1_name="Фёдор Михайлович Достоевский";
window.max_2_name="Михаил Афанасьевич Булгаков";
window.max_3_name="Лев Николаевич Толстой";
window.max_4_name="Антон Павлович Чехов";
window.max_5_name="Николай Васильевич Гоголь";

if(max_1<max_2)
{
      max_1=max_2;
      max_1_name=max_2_name;   
}

if(max_3<max_4)
{
 max_3=max_4;
 max_3_name=max_4_name;
}

if(max_1<max_3)
{
 max_1=max_3;
 max_1_name=max_3_name;
}

if(max_1<max_5)
{
 max_1=max_5;
 max_1_name=max_5_name;
}
document.getElementById('save').style.display="block";
document.getElementById('block_4').style.display="block";
document.getElementById('result').innerHTML="Система советует Вам почитать следующего писателя:<br>"+max_1_name;
}
}
}

document.getElementById('save').onclick=function()
{
  
  var month=new Array();
	var month=[];
	month[0]="января";
	month[1]="февраля";
	month[2]="марта";
	month[3]="апреля";
	month[4]="мая";
	month[5]="июня";
	month[6]="июля";
	month[7]="августа";
	month[8]="сентября";
	month[9]="октября";
	month[10]="ноября";
	month[11]="декабря";

	var date_month = new Date();
	var date_month_nomer=date_month.getMonth();
	var date_year_nomer=date_month.getFullYear();
  var date_nomer=date_month.getDate();

	for (i=0; i<=month.length;i++)
	{
	if (i==date_month_nomer)
	  {
	   date_month_nomer=month[i];
	  }
  }
  
  window.kop_1=[];
  if(max_1_name=="Алексей Михайлович Ремизов")
  {
    kop_1[0]="было";
    kop_1[1]="окно"; 
    kop_1[2]="коля";
    kop_1[3]="сердце";
    kop_1[4]="просто";
    kop_1[5]="николай";
    kop_1[6]="хотелось";
    kop_1[7]="глаза";
    kop_1[8]="был"; 
    kop_1[9]="сердца";
    kop_1[10]="весь";
    kop_1[11]="перед";
    kop_1[12]="голос";
    kop_1[13]="жизнь";
    kop_1[14]="куда";
    kop_1[15]="руки";
    kop_1[16]="словно";
    kop_1[17]="варенька";
    kop_1[18]="финогеновы";
    kop_1[19]="один";
  }

  if(max_1_name=="Говард Филлипс Лавкрафт")
  {
    kop_1[0]="было";
    kop_1[1]="хотя";
    kop_1[2]="был";
    kop_1[3]="были";
    kop_1[4]="также";
    kop_1[5]="однако";
    kop_1[6]="здесь";
    kop_1[7]="лишь";
    kop_1[8]="была";
    kop_1[9]="довольно";
    kop_1[10]="города";
    kop_1[11]="несколько";
    kop_1[12]="можно";
    kop_1[13]="тогда";
    kop_1[14]="почти";
    kop_1[15]="раз";
    kop_1[16]="могли";
    kop_1[17]="лейка";
    kop_1[18]="стрит";
    kop_1[19]="очень";    
  }

  if(max_1_name=="Стивен Кинг")
  {
    kop_1[0]="было";
    kop_1[1]="был";
    kop_1[2]="сказал";
    kop_1[3]="была";
    kop_1[4]="раз";
    kop_1[5]="были";
    kop_1[6]="роки";
    kop_1[7]="просто";
    kop_1[8]="время";
    kop_1[9]="глаза";
    kop_1[10]="сифкиц";
    kop_1[11]="может";
    kop_1[12]="снова";
    kop_1[13]="больше";
    kop_1[14]="отто";
    kop_1[15]="ничего";
    kop_1[16]="спросил";
    kop_1[17]="увидел";
    kop_1[18]="почти";
    kop_1[19]="руки";    
  }

  if(max_1_name=="Братья Стругацкие")
  {
    kop_1[0]="сказал";
    kop_1[1]="хлебовводов";
    kop_1[2]="федотович";
    kop_1[3]="лавр";
    kop_1[4]="было";
    kop_1[5]="фарфуркис";
    kop_1[6]="комендант";
    kop_1[7]="эдик";
    kop_1[8]="был";
    kop_1[9]="товарищ";
    kop_1[10]="есть";
    kop_1[11]="дело";
    kop_1[12]="быть";
    kop_1[13]="может";
    kop_1[14]="спросил";
    kop_1[15]="время";
    kop_1[16]="здесь";
    kop_1[17]="выбегалло";
    kop_1[18]="роман";
    kop_1[19]="произнес";    
  }

  if(max_1_name=="Айзек Азимов")
  {
    kop_1[0]="бейли";
    kop_1[1]="был";
    kop_1[2]="было";
    kop_1[3]="байрон";
    kop_1[4]="сказал";
    kop_1[5]="робот";
    kop_1[6]="дэниел";
    kop_1[7]="ответил";
    kop_1[8]="может";
    kop_1[9]="люди";
    kop_1[10]="была";
    kop_1[11]="ничего";
    kop_1[12]="сейчас";
    kop_1[13]="были";
    kop_1[14]="быть";
    kop_1[15]="здесь";
    kop_1[16]="дельмар";
    kop_1[17]="спросил";
    kop_1[18]="назад";
    kop_1[19]="гладия";    
  }

  if(max_1_name=="Сэр Артур Игнейгус Конан Дойл")
  {
    kop_1[0]="холмс";
    kop_1[1]="было";
    kop_1[2]="был";
    kop_1[3]="сказал";
    kop_1[4]="видел";
    kop_1[5]="мистер";
    kop_1[6]="очень";
    kop_1[7]="дело";
    kop_1[8]="человек";
    kop_1[9]="здесь";
    kop_1[10]="может";
    kop_1[11]="ничего";
    kop_1[12]="были";
    kop_1[13]="говорил";
    kop_1[14]="время";
    kop_1[15]="быть";
    kop_1[16]="раз";
    kop_1[17]="уотсон";
    kop_1[18]="была";
    kop_1[19]="один";    
  }

  if(max_1_name=="Эдгар Аллан По")
  {
    kop_1[0]="было";
    kop_1[1]="был";
    kop_1[2]="были";
    kop_1[3]="была";
    kop_1[4]="очень";
    kop_1[5]="лишь";
    kop_1[6]="несколько";
    kop_1[7]="однако";
    kop_1[8]="время";
    kop_1[9]="люди";
    kop_1[10]="раз";
    kop_1[11]="здесь";
    kop_1[12]="мог";
    kop_1[13]="весьма";
    kop_1[14]="разве";
    kop_1[15]="мистер";
    kop_1[16]="говорил";
    kop_1[17]="хотя";
    kop_1[18]="сказал";
    kop_1[19]="быть";    
  }

  if(max_1_name=="Уилки Коллинз")
  {
    kop_1[0]="мисс";
    kop_1[1]="было";
    kop_1[2]="женщины";
    kop_1[3]="сказала";
    kop_1[4]="была";
    kop_1[5]="был";
    kop_1[6]="человека";
    kop_1[7]="персиваль";
    kop_1[8]="мистер";
    kop_1[9]="сказал";
    kop_1[10]="миссис";
    kop_1[11]="дальше";
    kop_1[12]="время";
    kop_1[13]="очень";
    kop_1[14]="больше";
    kop_1[15]="граф";
    kop_1[16]="будет";
    kop_1[17]="достаточно";
    kop_1[18]="персиваля";
    kop_1[19]="ничего";    
  }

  if(max_1_name=="Гильберт Кийт Честертон")
  {
    kop_1[0]="был";
    kop_1[1]="сказал";
    kop_1[2]="было";
    kop_1[3]="браун";
    kop_1[4]="фламбо";
    kop_1[5]="отец";
    kop_1[6]="священник";
    kop_1[7]="словно";
    kop_1[8]="серебряной";
    kop_1[9]="были";
    kop_1[10]="была";
    kop_1[11]="спросил";
    kop_1[12]="быть";
    kop_1[13]="ответил";
    kop_1[14]="доктор";
    kop_1[15]="может";
    kop_1[16]="раз";
    kop_1[17]="здесь";
    kop_1[18]="человека";
    kop_1[19]="очень";    
  }

  if(max_1_name=="Агата Кристи")
  {
    kop_1[0]="пуаро";
    kop_1[1]="было";
    kop_1[2]="был";
    kop_1[3]="сказал";
    kop_1[4]="очень";
    kop_1[5]="миссис";
    kop_1[6]="была";
    kop_1[7]="мистер";
    kop_1[8]="сказала";
    kop_1[9]="быть";
    kop_1[10]="сэр";
    kop_1[11]="время";
    kop_1[12]="взгляд";
    kop_1[13]="конечно";
    kop_1[14]="были";
    kop_1[15]="ничего";
    kop_1[16]="может";
    kop_1[17]="леди";
    kop_1[18]="мисс";
    kop_1[19]="раз";    
  }


  if(max_1_name=="Александр Дюма")
  {
    kop_1[0]="сказал";
    kop_1[1]="вышел";
    kop_1[2]="граф";
    kop_1[3]="разве";
    kop_1[4]="был";
    kop_1[5]="было";
    kop_1[6]="взял";
    kop_1[7]="буду";
    kop_1[8]="спросил";
    kop_1[9]="отвечал";
    kop_1[10]="быть";
    kop_1[11]="человек";
    kop_1[12]="раз";
    kop_1[13]="были";
    kop_1[14]="может";
    kop_1[15]="очень";
    kop_1[16]="четыре";
    kop_1[17]="между";
    kop_1[18]="была";
    kop_1[19]="остров";    
  }

  if(max_1_name=="Александр Степанович Грин")
  {
    kop_1[0]="сказал";
    kop_1[1]="почему";
    kop_1[2]="был";
    kop_1[3]="было";
    kop_1[4]="куда";
    kop_1[5]="очень";
    kop_1[6]="быть";
    kop_1[7]="человек";
    kop_1[8]="ничего";
    kop_1[9]="всегда";
    kop_1[10]="против";
    kop_1[11]="были";
    kop_1[12]="сказала";
    kop_1[13]="знал";
    kop_1[14]="будет";
    kop_1[15]="была";
    kop_1[16]="дело";
    kop_1[17]="мог";
    kop_1[18]="есть";
    kop_1[19]="скоро";    
  }

  if(max_1_name=="Жюль Верн")
  {
    kop_1[0]="сына";
    kop_1[1]="знал";
    kop_1[2]="день";
    kop_1[3]="улыбнулся";
    kop_1[4]="взглянул";
    kop_1[5]="произошло";
    kop_1[6]="тогда";
    kop_1[7]="было";
    kop_1[8]="значит";
    kop_1[9]="была";
    kop_1[10]="был";
    kop_1[11]="глаза";
    kop_1[12]="сказал";
    kop_1[13]="руки";
    kop_1[14]="сказала";
    kop_1[15]="пока";
    kop_1[16]="ответил";
    kop_1[17]="может";
    kop_1[18]="барри";
    kop_1[19]="просто";    
  }

  if(max_1_name=="Скотт Вальтер")
  {
    kop_1[0]="сказал";
    kop_1[1]="было";
    kop_1[2]="рыцарь";
    kop_1[3]="был";
    kop_1[4]="были";
    kop_1[5]="пор";
    kop_1[6]="отвечал";
    kop_1[7]="скорее";
    kop_1[8]="будет";
    kop_1[9]="может";
    kop_1[10]="ради";
    kop_1[11]="время";
    kop_1[12]="имя";
    kop_1[13]="быть";
    kop_1[14]="была";
    kop_1[15]="времени";
    kop_1[16]="принц";
    kop_1[17]="один";
    kop_1[18]="однако";
    kop_1[19]="другой";    
  }

  if(max_1_name=="Марк Твен")
  {
    kop_1[0]="было";
    kop_1[1]="говорит";
    kop_1[2]="сказал";
    kop_1[3]="думал";
    kop_1[4]="ничего";
    kop_1[5]="был";
    kop_1[6]="говорю";
    kop_1[7]="однако";
    kop_1[8]="тоже";
    kop_1[9]="раз";
    kop_1[10]="пока";
    kop_1[11]="больше";
    kop_1[12]="время";
    kop_1[13]="тогда";
    kop_1[14]="есть";
    kop_1[15]="просто";
    kop_1[16]="король";
    kop_1[17]="дело";
    kop_1[18]="может";
    kop_1[19]="ведь";    
  }

  if(max_1_name=="Александр Сергеевич Пушкин")
  {
    kop_1[0]="все";
    kop_1[1]="уже";
    kop_1[2]="счастья";
    kop_1[3]="радости";
    kop_1[4]="нежный";
    kop_1[5]="люблю";
    kop_1[6]="монах";
    kop_1[7]="увы";
    kop_1[8]="стихотворения";
    kop_1[9]="гром";
    kop_1[10]="вино";
    kop_1[11]="любезный";
    kop_1[12]="мрак";
    kop_1[13]="друг";
    kop_1[14]="святой";
    kop_1[15]="надежды";
    kop_1[16]="был";
    kop_1[17]="твой";
    kop_1[18]="всё";
    kop_1[19]="любовью";    
  }

  if(max_1_name=="Михаил Юрьевич Лермонтов")
  {
    kop_1[0]="был";
    kop_1[1]="лишь";
    kop_1[2]="сердце";
    kop_1[3]="хоть";
    kop_1[4]="один";
    kop_1[5]="любви";
    kop_1[6]="твой";
    kop_1[7]="быть";
    kop_1[8]="нем";
    kop_1[9]="меж";
    kop_1[10]="людей";
    kop_1[11]="может";
    kop_1[12]="тогда";
    kop_1[13]="жизнь";
    kop_1[14]="лет";
    kop_1[15]="любовь";
    kop_1[16]="вновь";
    kop_1[17]="пред";
    kop_1[18]="дней";
    kop_1[19]="звук";    
  }

  if(max_1_name=="Сергей Александрович Есенин")
  {
    kop_1[0]="сердце";
    kop_1[1]="лишь";
    kop_1[2]="есть";
    kop_1[3]="жизнь";
    kop_1[4]="твой";
    kop_1[5]="был";
    kop_1[6]="словно";
    kop_1[7]="русь";
    kop_1[8]="свет";
    kop_1[9]="глаза";
    kop_1[10]="много";
    kop_1[11]="тихо";
    kop_1[12]="поле";
    kop_1[13]="вижу";
    kop_1[14]="ведь";
    kop_1[15]="поэт";
    kop_1[16]="иль";
    kop_1[17]="душу";
    kop_1[18]="твоих";
    kop_1[19]="лет";    
  }

  if(max_1_name=="Владимир Владимирович Маяковский")
  {
    kop_1[0]="надо";
    kop_1[1]="будет";
    kop_1[2]="день";
    kop_1[3]="товарищ";
    kop_1[4]="сегодня";
    kop_1[5]="жизнь";
    kop_1[6]="глаза";
    kop_1[7]="быть";
    kop_1[8]="есть";
    kop_1[9]="может";
    kop_1[10]="ленин";
    kop_1[11]="каждый";
    kop_1[12]="здесь";
    kop_1[13]="был";
    kop_1[14]="люди";
    kop_1[15]="весь";
    kop_1[16]="сердце";
    kop_1[17]="пусть";
    kop_1[18]="солнце";
    kop_1[19]="глаз";    
  }

  if(max_1_name=="Марина Ивановна Цветаева")
  {
    kop_1[0]="час";
    kop_1[1]="руки";
    kop_1[2]="бог";
    kop_1[3]="ночь";
    kop_1[4]="быть";
    kop_1[5]="твой";
    kop_1[6]="глаза";
    kop_1[7]="был";
    kop_1[8]="есть";
    kop_1[9]="мая";
    kop_1[10]="любовь";
    kop_1[11]="здесь";
    kop_1[12]="будет";
    kop_1[13]="июля";
    kop_1[14]="дом";
    kop_1[15]="души";
    kop_1[16]="сон";
    kop_1[17]="ночи";
    kop_1[18]="жизнь";
    kop_1[19]="надо";    
  }

  if(max_1_name=="Фёдор Михайлович Достоевский")
  {
    kop_1[0]="было";
    kop_1[1]="хорошо";
    kop_1[2]="ведь";
    kop_1[3]="быть";
    kop_1[4]="был";
    kop_1[5]="очень";
    kop_1[6]="опять";
    kop_1[7]="мысль";
    kop_1[8]="может";
    kop_1[9]="есть";
    kop_1[10]="была";
    kop_1[11]="раз";
    kop_1[12]="тоже";
    kop_1[13]="совсем";
    kop_1[14]="человек";
    kop_1[15]="ничего";
    kop_1[16]="надо";
    kop_1[17]="дело";
    kop_1[18]="впрочем";
    kop_1[19]="один";    
  }

  if(max_1_name=="Михаил Афанасьевич Булгаков")
  {
    kop_1[0]="было";
    kop_1[1]="сказал";
    kop_1[2]="иван";
    kop_1[3]="был";
    kop_1[4]="глаза";
    kop_1[5]="очень";
    kop_1[6]="ответил";
    kop_1[7]="сейчас";
    kop_1[8]="ничего";
    kop_1[9]="спросил";
    kop_1[10]="человек";
    kop_1[11]="подумал";
    kop_1[12]="смерти";
    kop_1[13]="может";
    kop_1[14]="лицо";
    kop_1[15]="глава";
    kop_1[16]="раз";
    kop_1[17]="профессор";
    kop_1[18]="время";
    kop_1[19]="нужно";    
  }

  if(max_1_name=="Лев Николаевич Толстой")
  {
    kop_1[0]="было";
    kop_1[1]="сказал";
    kop_1[2]="несмотря";
    kop_1[3]="разговор";
    kop_1[4]="сказала";
    kop_1[5]="была";
    kop_1[6]="был";
    kop_1[7]="видел";
    kop_1[8]="другой";
    kop_1[9]="быть";
    kop_1[10]="очень";
    kop_1[11]="есть";
    kop_1[12]="приехал";
    kop_1[13]="ничего";
    kop_1[14]="были";
    kop_1[15]="говорил";
    kop_1[16]="опять";
    kop_1[17]="время";
    kop_1[18]="может";
    kop_1[19]="всегда";    
  }

  if(max_1_name=="Антон Павлович Чехов")
  {
    kop_1[0]="было";
    kop_1[1]="был";
    kop_1[2]="сказал";
    kop_1[3]="говорит";
    kop_1[4]="человек";
    kop_1[5]="быть";
    kop_1[6]="ничего";
    kop_1[7]="есть";
    kop_1[8]="раз";
    kop_1[9]="ведь";
    kop_1[10]="лицо";
    kop_1[11]="ваше";
    kop_1[12]="будет";
    kop_1[13]="дело";
    kop_1[14]="ежели";
    kop_1[15]="черт";
    kop_1[16]="была";
    kop_1[17]="время";
    kop_1[18]="один";
    kop_1[19]="хоть";    
  }

  if(max_1_name=="Николай Васильевич Гоголь")
  {
    kop_1[0]="есть";
    kop_1[1]="ведь";
    kop_1[2]="яичница";
    kop_1[3]="быть";
    kop_1[4]="было";
    kop_1[5]="уходит";
    kop_1[6]="городничий";
    kop_1[7]="нужно";
    kop_1[8]="может";
    kop_1[9]="человек";
    kop_1[10]="ничего";
    kop_1[11]="подколесин";
    kop_1[12]="дело";
    kop_1[13]="будет";
    kop_1[14]="был";
    kop_1[15]="один";
    kop_1[16]="несколько";
    kop_1[17]="также";
    kop_1[18]="хотя";
    kop_1[19]="люди";    
  }


          
            const doc = new Document();

            const space = new Paragraph("");
            const result = new Paragraph("Результат").center();
            const result_program= new Paragraph("Программа считает, что Вам больше всего подходит: "+max_1_name);
            const result_why_tittle = new Paragraph("Почему у меня такой результат?").center();
            const result_why = new Paragraph("Программа считает, что Вам стоит почитать следующего писателя: "+max_1_name+", так как Вашем тексте больше встретилось следующих слов:");

            const word_user_0 = new Paragraph("1."+kop[0]);
            const word_user_1 = new Paragraph("2."+kop[1]);
            const word_user_2 = new Paragraph("3."+kop[2]);
            const word_user_3 = new Paragraph("4."+kop[3]);
            const word_user_4 = new Paragraph("5."+kop[4]);
            const word_user_5 = new Paragraph("6."+kop[5]);
            const word_user_6 = new Paragraph("7."+kop[6]);
            const word_user_7 = new Paragraph("8."+kop[7]);
            const word_user_8 = new Paragraph("9."+kop[8]);
            const word_user_9 = new Paragraph("10."+kop[9]);
            const word_user_10 = new Paragraph("11."+kop[10]);
            const word_user_11 = new Paragraph("12."+kop[11]);
            const word_user_12 = new Paragraph("13."+kop[12]);
            const word_user_13 = new Paragraph("14."+kop[13]);
            const word_user_14 = new Paragraph("15."+kop[14]);
            const word_user_15 = new Paragraph("16."+kop[15]);
            const word_user_16 = new Paragraph("17."+kop[16]);
            const word_user_17 = new Paragraph("18."+kop[17]);
            const word_user_18 = new Paragraph("19."+kop[18]);
            const word_user_19 = new Paragraph("20."+kop[19]);

            const word_author = new Paragraph("Слова, которые чаще всего встретились у следующего писателя: "+max_1_name); //Слова писателя
            
            const word_author_0 = new Paragraph("1."+kop_1[0]);
            const word_author_1 = new Paragraph("2."+kop_1[1]);
            const word_author_2 = new Paragraph("3."+kop_1[2]);
            const word_author_3 = new Paragraph("4."+kop_1[3]);
            const word_author_4 = new Paragraph("5."+kop_1[4]);
            const word_author_5 = new Paragraph("6."+kop_1[5]);
            const word_author_6 = new Paragraph("7."+kop_1[6]);
            const word_author_7 = new Paragraph("8."+kop_1[7]);
            const word_author_8 = new Paragraph("9."+kop_1[8]);
            const word_author_9 = new Paragraph("10."+kop_1[9]);
            const word_author_10 = new Paragraph("11."+kop_1[10]);
            const word_author_11 = new Paragraph("12."+kop_1[11]);
            const word_author_12 = new Paragraph("13."+kop_1[12]);
            const word_author_13 = new Paragraph("14."+kop_1[13]);
            const word_author_14 = new Paragraph("15."+kop_1[14]);
            const word_author_15 = new Paragraph("16."+kop_1[15]);
            const word_author_16 = new Paragraph("17."+kop_1[16]);
            const word_author_17 = new Paragraph("18."+kop_1[17]);
            const word_author_18 = new Paragraph("19."+kop_1[18]);
            const word_author_19 = new Paragraph("20."+kop_1[19]);


            
            const date_nomer_a = new Paragraph("Дата: "+date_nomer+" "+date_month_nomer+" "+date_year_nomer+" год.");

            doc.addParagraph(result);
            doc.addParagraph(space);
            doc.addParagraph(result_program);
            doc.addParagraph(space);
            doc.addParagraph(result_why_tittle);
            doc.addParagraph(space);
            doc.addParagraph(result_why);
            doc.addParagraph(space);

            doc.addParagraph(word_user_0);
            doc.addParagraph(word_user_1);
            doc.addParagraph(word_user_2);
            doc.addParagraph(word_user_3);
            doc.addParagraph(word_user_4);
            doc.addParagraph(word_user_5);
            doc.addParagraph(word_user_6);
            doc.addParagraph(word_user_7);
            doc.addParagraph(word_user_8);
            doc.addParagraph(word_user_9);
            doc.addParagraph(word_user_10);
            doc.addParagraph(word_user_11);
            doc.addParagraph(word_user_12);
            doc.addParagraph(word_user_13);
            doc.addParagraph(word_user_14);
            doc.addParagraph(word_user_15);
            doc.addParagraph(word_user_16);
            doc.addParagraph(word_user_17);
            doc.addParagraph(word_user_18);
            doc.addParagraph(word_user_19);


            doc.addParagraph(space);
            doc.addParagraph(word_author);
            doc.addParagraph(space);

            doc.addParagraph(word_author_0);
            doc.addParagraph(word_author_1);
            doc.addParagraph(word_author_2);
            doc.addParagraph(word_author_3);
            doc.addParagraph(word_author_4);
            doc.addParagraph(word_author_5);
            doc.addParagraph(word_author_6);
            doc.addParagraph(word_author_7);
            doc.addParagraph(word_author_8);
            doc.addParagraph(word_author_9);
            doc.addParagraph(word_author_10);
            doc.addParagraph(word_author_11);
            doc.addParagraph(word_author_12);
            doc.addParagraph(word_author_13);
            doc.addParagraph(word_author_14);
            doc.addParagraph(word_author_15);
            doc.addParagraph(word_author_16);
            doc.addParagraph(word_author_17);
            doc.addParagraph(word_author_18);
            doc.addParagraph(word_author_19);

            doc.addParagraph(space);
            doc.addParagraph(date_nomer_a);

            const packer = new Packer();

            packer.toBlob(doc).then(blob => {
                console.log(blob);
                saveAs(blob,"document.docx");
            });
}



      
